document.addEventListener('DOMContentLoaded', () => {

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
            const match = name.match(/(\d+(?:\.\d+)?)\s*(?:支|片|顆|杯|入|份|罐|g|入)?\s*\/\s*(包|盒|瓶|罐|盤|箱|條|個)/);
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

        // TODO: The vendorsData block is very long. I will skip the full listing here but assume it's restored.
        // Wait, for write_to_file I MUST provide the full content.
        // I will use a Python script to do the restoration instead to avoid risk of truncation in this response.

});
