document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('inventory-container');
    const addVendorBtn = document.getElementById('add-vendor-btn');
    const saveBtn = document.getElementById('save-btn');

    // Initial structured data
    let vendorsData = [
        {
            id: 'v_' + Date.now(),
            name: '豆老爺',
            isExpanded: true,
            products: [
                { id: 'p_1', name: '無糖豆漿 2500ml', stock: 140, sales: 80, suggested: '' },
                { id: 'p_2', name: '有糖豆漿 2500ml', stock: 0, sales: 30, suggested: '' }, // This will trigger warning (0-30 < 0)
                { id: 'p_3', name: '南瓜豆漿', stock: 35, sales: 15, suggested: '' },
                { id: 'p_4', name: '黑芝麻堅果', stock: 68, sales: 30, suggested: '' }
            ]
        }
    ];

    function renderAll() {
        container.innerHTML = '';
        vendorsData.forEach(vendor => {
            const vendorEl = createVendorElement(vendor);
            container.appendChild(vendorEl);
        });
    }

    function createVendorElement(vendor) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'vendor-group';
        groupDiv.dataset.id = vendor.id;

        // --- Vendor Header ---
        const headerDiv = document.createElement('div');
        headerDiv.className = `vendor-header ${vendor.isExpanded ? 'expanded' : ''}`;

        headerDiv.innerHTML = `
            <div class="vendor-title-wrapper">
                <span class="toggle-icon">▶</span>
                <input type="text" class="input-vendor-name" value="${vendor.name}" placeholder="輸入廠商名稱（如：豆老爺）">
            </div>
            <div class="vendor-actions">
                <button class="add-product-btn">+ 加入品名</button>
                <button class="delete-vendor-btn" title="刪除整個廠商">✖</button>
            </div>
        `;

        // --- Vendor Products Container ---
        const productsDiv = document.createElement('div');
        productsDiv.className = `vendor-products ${vendor.isExpanded ? 'expanded' : ''}`;

        // Build table for products
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>品名</th>
                    <th>庫存</th>
                    <th>銷量</th>
                    <th>建議銷售量</th>
                    <th>刪除</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector('tbody');

        // Render existing products
        vendor.products.forEach(prod => {
            tbody.appendChild(createProductRow(prod));
        });

        productsDiv.appendChild(table);
        groupDiv.appendChild(headerDiv);
        groupDiv.appendChild(productsDiv);

        // --- Event Listeners ---

        // Toggle Expand/Collapse (Clicking the title wrapper area)
        const titleWrapper = headerDiv.querySelector('.vendor-title-wrapper');
        const toggleIcon = headerDiv.querySelector('.toggle-icon');

        // Prevent toggle when clicking the input itself
        headerDiv.querySelector('.input-vendor-name').addEventListener('click', (e) => e.stopPropagation());

        titleWrapper.addEventListener('click', () => {
            vendor.isExpanded = !vendor.isExpanded;
            headerDiv.classList.toggle('expanded');
            productsDiv.classList.toggle('expanded');
        });

        // Add Product
        headerDiv.querySelector('.add-product-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // prevent collapsing

            // Expand automatically if closed
            if (!vendor.isExpanded) {
                vendor.isExpanded = true;
                headerDiv.classList.add('expanded');
                productsDiv.classList.add('expanded');
            }

            const newProduct = {
                id: 'p_' + Date.now(),
                name: '',
                stock: '',
                sales: '',
                suggested: ''
            };
            vendor.products.push(newProduct);
            tbody.appendChild(createProductRow(newProduct));
        });

        // Delete Vendor
        headerDiv.querySelector('.delete-vendor-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('確定要刪除整個廠商以及所有品名嗎？')) {
                groupDiv.remove();
            }
        });

        return groupDiv;
    }

    function createProductRow(data) {
        const tr = document.createElement('tr');
        tr.dataset.id = data.id;

        const stockVal = Number(data.stock) || 0;
        const salesVal = Number(data.sales) || 0;
        const suggestedPlaceholder = Math.max(0, stockVal - salesVal);

        if (stockVal - salesVal < 0) {
            tr.classList.add('warning-state');
        }

        tr.innerHTML = `
            <td><input type="text" class="input-product" value="${data.name}" placeholder="輸入唯一品名"></td>
            <td class="col-num"><input type="number" class="input-stock" value="${data.stock !== '' ? data.stock : ''}" placeholder="0"></td>
            <td class="col-num"><input type="number" class="input-sales" value="${data.sales !== '' ? data.sales : ''}" placeholder="0"></td>
            <td class="col-num"><input type="number" class="input-suggested" value="${data.suggested}" placeholder="${suggestedPlaceholder}"></td>
            <td>
                <button class="action-btn delete-btn" title="刪除品名">✖</button>
            </td>
        `;

        // Update logic
        const stockInput = tr.querySelector('.input-stock');
        const salesInput = tr.querySelector('.input-sales');
        const suggestedInput = tr.querySelector('.input-suggested');

        const updateState = () => {
            const currentStock = Number(stockInput.value) || 0;
            const currentSales = Number(salesInput.value) || 0;
            const diff = currentStock - currentSales;

            suggestedInput.placeholder = Math.max(0, diff);

            if (diff < 0) {
                tr.classList.add('warning-state');
            } else {
                tr.classList.remove('warning-state');
            }
        };

        stockInput.addEventListener('input', updateState);
        salesInput.addEventListener('input', updateState);

        // Delete Row
        tr.querySelector('.delete-btn').addEventListener('click', () => {
            tr.remove();
        });

        return tr;
    }

    // --- Global Actions ---

    addVendorBtn.addEventListener('click', () => {
        const newVendor = {
            id: 'v_' + Date.now(),
            name: '',
            isExpanded: true,
            products: []
        };
        const vendorEl = createVendorElement(newVendor);
        container.appendChild(vendorEl);

        // Auto focus on the new vendor's input name
        setTimeout(() => {
            vendorEl.querySelector('.input-vendor-name').focus();
        }, 50);
    });

    saveBtn.addEventListener('click', () => {
        // Collect UI Data (just for simulation)
        console.log('Saving architecture...');
        const originalText = saveBtn.innerText;
        saveBtn.innerText = 'DATA SAVED ✓';

        setTimeout(() => {
            saveBtn.innerText = originalText;
        }, 2000);
    });

    // Start rendering
    renderAll();
});
