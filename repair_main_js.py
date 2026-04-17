import json
import re
import codecs
import os

file_path = r'c:\Users\88697\Desktop\818_EX\JavaScript\main.js'

if not os.path.exists(file_path):
    print(f"Error: {file_path} not found")
    exit(1)

with codecs.open(file_path, 'r', 'utf-8') as f:
    content = f.read()

# Extract vendorsData
match = re.search(r'let vendorsData = (\[[\s\S]*?\]);', content)
if match:
    vendors_data_json = match.group(1)
else:
    print("Failed to find vendorsData in existing file. File might be too corrupted.")
    exit(1)

# Template (Minified some parts to keep it concise, but mostly full logic)
template = """document.addEventListener('DOMContentLoaded', () => {

        const container = document.getElementById('inventory-container');
        const addVendorBtn = document.getElementById('add-vendor-btn');
        const saveBtn = document.getElementById('save-btn');
        const exportExcelBtn = document.getElementById('export-excel-btn');
        const collapseAllBtn = document.getElementById('collapse-all-btn');

        const calculateIdeal = (d) => {
                if (!d || d <= 0) return 0;
                return Math.ceil(d * 2) / 2;
        };

        const parseProductSpec = (name) => {
            const match = name.match(/(\\d+(?:\\.\\d+)?)\\s*(?:支|片|顆|杯|入|份|罐|g|入)?\\s*\\/\\s*(包|盒|瓶|罐|盤|箱|條|個)/);
            if (match) {
                return {
                    qty: parseFloat(match[1]),
                    unit: match[2]
                };
            }
            return { qty: 1, unit: '包' };
        };

        const formatUnitValue = (val) => {
            if (val === null || val === undefined || val === '') return '';
            const num = Number(val);
            return Number.isInteger(num) ? num.toString() : num.toFixed(1);
        };

        const syncMasterToggle = () => {
                const anyOpen = vendorsData.some(v => v.isExpanded);
                collapseAllBtn.classList.toggle('expanded', anyOpen);
                const btnText = collapseAllBtn.querySelector('.btn-text');
                if (btnText) {
                    btnText.textContent = anyOpen ? '收起全部' : '展開全部';
                }
        };

        const refreshVendorHeaderStatus = (groupDiv) => {
            if (!groupDiv) return;
            const header = groupDiv.querySelector('.vendor-header');
            if (!header) return;
            const needsAttention = groupDiv.querySelectorAll('.missing-input, .warning-large, .warning-state').length > 0;
            if (needsAttention) {
                header.classList.add('vendor-error');
            } else {
                header.classList.remove('vendor-error');
            }
        };

        let vendorsData = VENDORS_DATA_PLACEHOLDER;

        const STORAGE_KEY = 'inventory_system_data';
        const cachedData = localStorage.getItem(STORAGE_KEY);
        if (cachedData) {
                try {
                        vendorsData = JSON.parse(cachedData);
                        console.log('✅ 已從本地儲存載入盤點資料');
                } catch (e) {
                        console.error('❌ 載入本地儲存失敗:', e);
                }
        }

        function renderAll() {
                container.innerHTML = '';
                vendorsData.forEach(vendor => {
                        container.appendChild(createVendorElement(vendor));
                });
                syncMasterToggle();
        }

        function createVendorElement(vendor) {
                const groupDiv = document.createElement('div');
                groupDiv.className = 'vendor-group';
                groupDiv.dataset.id = vendor.id;

                const headerDiv = document.createElement('div');
                headerDiv.className = `vendor-header ${vendor.isExpanded ? 'expanded' : ''}`;
                headerDiv.innerHTML = `
                    <div class="vendor-title-wrapper">
                        <span class="toggle-icon">▶</span>
                        <input type="text" class="input-vendor-name" value="${vendor.name}" placeholder="輸入廠商名稱">
                    </div>
                    <div class="vendor-actions">
                        <button class="add-product-btn">+ 加入品名</button>
                        <button class="delete-vendor-btn" title="刪除整個廠商">✖</button>
                    </div>
                `;

                const vendorNameInput = headerDiv.querySelector('.input-vendor-name');
                let originalName = vendor.name;
                vendorNameInput.addEventListener('focus', (e) => { originalName = e.target.value; });
                vendorNameInput.addEventListener('change', (e) => {
                        const newName = e.target.value;
                        if (newName !== originalName) {
                                if (confirm(`確定要將廠商名稱「${originalName}」改為「${newName}」嗎？`)) {
                                        originalName = newName;
                                        vendor.name = newName;
                                } else {
                                        e.target.value = originalName;
                                }
                        }
                });

                const productsDiv = document.createElement('div');
                productsDiv.className = `vendor-products ${vendor.isExpanded ? 'expanded' : ''}`;

                const table = document.createElement('table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>品名</th><th>庫存</th><th>銷量</th><th>建議進貨量</th><th>刪除</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;
                const tbody = table.querySelector('tbody');
                vendor.products.forEach(prod => {
                        tbody.appendChild(createProductRow(prod, vendor.products));
                });

                productsDiv.appendChild(table);
                groupDiv.appendChild(headerDiv);
                groupDiv.appendChild(productsDiv);
                refreshVendorHeaderStatus(groupDiv);

                const titleWrapper = headerDiv.querySelector('.vendor-title-wrapper');
                vendorNameInput.addEventListener('click', (e) => e.stopPropagation());
                titleWrapper.addEventListener('click', () => {
                        vendor.isExpanded = !vendor.isExpanded;
                        headerDiv.classList.toggle('expanded', vendor.isExpanded);
                        productsDiv.classList.toggle('expanded', vendor.isExpanded);
                        syncMasterToggle();
                });

                headerDiv.querySelector('.add-product-btn').addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (confirm(`確定要在「${vendor.name || '此廠商'}」底下新增一項全新的食材品項嗎？`)) {
                                if (!vendor.isExpanded) {
                                        vendor.isExpanded = true;
                                        headerDiv.classList.add('expanded');
                                        productsDiv.classList.add('expanded');
                                }
                                const newProduct = { id: 'p_' + Date.now(), name: '', stock: 0, sales: 0, suggested: 0, limit: 20 };
                                vendor.products.push(newProduct);
                                tbody.appendChild(createProductRow(newProduct, vendor.products));
                        }
                });

                headerDiv.querySelector('.delete-vendor-btn').addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (confirm(`確定要將「${vendor.name || '此廠商'}」以及它底下所有的食材清單徹底刪除嗎？`)) {
                                const index = vendorsData.indexOf(vendor);
                                if (index > -1) { vendorsData.splice(index, 1); }
                                groupDiv.remove();
                        }
                });

                return groupDiv;
        }

        function createProductRow(data, productsArray) {
                const tr = document.createElement('tr');
                const spec = parseProductSpec(data.name || '');
                const initialDiff = ((Number(data.sales) || 0) / spec.qty) - (Number(data.stock) || 0);
                const suggestedPlaceholder = calculateIdeal(initialDiff);

                tr.innerHTML = `
                    <td><input type="text" class="input-product ${data.isTopSales ? 'top-sales-name' : ''}" value="${data.name}" placeholder="輸入唯一品名" ${data.name ? 'readonly' : ''}></td>
                    <td class="col-num"><div class="input-with-unit"><input type="number" class="input-stock" min="0" step="0.5" value="${data.stock}" placeholder="0"><span class="unit-text">${spec.unit}</span></div></td>
                    <td class="col-num"><div class="input-with-unit"><input type="number" class="input-sales" min="0" value="${data.sales}" placeholder="0"><span class="unit-text">份</span></div></td>
                    <td class="col-num relative-cell"><div class="input-with-unit"><input type="number" class="input-suggested" value="${data.suggested}" placeholder="" title="防呆上限: ${data.limit || 20}"><span class="unit-text">${spec.unit}</span><span class="suggested-hint">(${formatUnitValue(suggestedPlaceholder)} ${spec.unit})</span></div></td>
                    <td><button class="action-btn delete-btn" title="刪除品名">✖</button></td>
                `;

                const nameInput = tr.querySelector('.input-product');
                nameInput.addEventListener('change', () => { data.name = nameInput.value; });

                const stockInput = tr.querySelector('.input-stock');
                const salesInput = tr.querySelector('.input-sales');
                const suggestedInput = tr.querySelector('.input-suggested');
                const hintLabel = tr.querySelector('.suggested-hint');

                const updateState = () => {
                        const currentStock = stockInput.value === '' ? null : Number(stockInput.value);
                        const currentSales = salesInput.value === '' ? null : Number(salesInput.value);
                        const suggestedValue = suggestedInput.value === '' ? null : Number(suggestedInput.value);
                        data.stock = currentStock; data.sales = currentSales; data.suggested = suggestedValue;

                        const stockMissing = (stockInput.value === '');
                        if (stockMissing) stockInput.classList.add('missing-input');
                        else stockInput.classList.remove('missing-input');

                        const productSpec = parseProductSpec(data.name || '');
                        const idealRestock = calculateIdeal((currentSales || 0) / productSpec.qty - (currentStock || 0));
                        const limit = data.limit || 20;

                        if (suggestedValue !== null && (suggestedValue !== idealRestock || suggestedValue > limit)) suggestedInput.classList.add('warning-large');
                        else suggestedInput.classList.remove('warning-large');

                        hintLabel.textContent = `(${formatUnitValue(idealRestock)} ${productSpec.unit})`;
                        const needsRestockAction = idealRestock > 0 && (suggestedValue === null || suggestedValue < idealRestock);
                        if (stockMissing || needsRestockAction) tr.classList.add('warning-state');
                        else tr.classList.remove('warning-state');

                        const groupDiv = tr.closest('.vendor-group');
                        if (groupDiv) refreshVendorHeaderStatus(groupDiv);
                };

                stockInput.addEventListener('input', updateState);
                salesInput.addEventListener('input', updateState);
                suggestedInput.addEventListener('input', updateState);

                tr.querySelector('.delete-btn').addEventListener('click', () => {
                        if (confirm(`確定要刪除「${nameInput.value || '此品項'}」嗎？`)) {
                                if (productsArray) {
                                        const index = productsArray.indexOf(data);
                                        if (index > -1) productsArray.splice(index, 1);
                                }
                                tr.remove();
                                const groupDiv = tr.closest('.vendor-group');
                                if (groupDiv) refreshVendorHeaderStatus(groupDiv);
                        }
                });

                nameInput.addEventListener('blur', () => { if (nameInput.value !== '') nameInput.readOnly = true; });
                updateState();
                return tr;
        }

        addVendorBtn.addEventListener('click', () => {
                const newVendor = { id: 'v_' + Date.now(), name: '', isExpanded: true, products: [] };
                vendorsData.push(newVendor);
                const vendorEl = createVendorElement(newVendor);
                container.appendChild(vendorEl);
                setTimeout(() => { vendorEl.querySelector('.input-vendor-name').focus(); }, 50);
        });

        saveBtn.addEventListener('click', () => {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(vendorsData));
                alert('🎉 資料已成功儲存至瀏覽器！');
        });

        exportExcelBtn.addEventListener('click', () => {
                try {
                        const date = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\\//g, '-');
                        const fileName = `818_進貨清單_${date}.xlsx`;
                        const exportData = [['廠商名稱', '品名規格', '目前庫存', '最近一週銷售(耗用)', '建議進貨數量']];
                        vendorsData.forEach(v => v.products.forEach(p => {
                            const sp = parseProductSpec(p.name || '');
                            exportData.push([v.name, p.name, (p.stock || 0) + ' ' + sp.unit, calculateIdeal(p.sales || 0) + ' 份', (p.suggested || 0) + ' ' + sp.unit]);
                        }));
                        const ws = XLSX.utils.aoa_to_sheet(exportData);
                        const wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, ws, "進貨清單");
                        XLSX.writeFile(wb, fileName);
                } catch (err) { alert('❌ 匯出失敗'); }
        });

        collapseAllBtn.addEventListener('click', () => {
                const anyOpen = vendorsData.some(v => v.isExpanded);
                vendorsData.forEach(v => { v.isExpanded = !anyOpen; });
                renderAll();
        });

        renderAll();
});
"""

final_content = template.replace('VENDORS_DATA_PLACEHOLDER', vendors_data_json)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Successfully restored main.js using Python reconstruction.")
