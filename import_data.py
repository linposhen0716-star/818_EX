import pandas as pd
import json
import re

try:
    df = pd.read_excel(r'818_餐點銷售\餐點銷售_2026-1_2026-3\廠商-材料NEW.xlsx')
except Exception as e:
    print(f"Error reading excel: {e}")
    exit(1)

vendorsData = []
sub_vendor_counter = 0

for i in range(0, len(df.columns), 3):
    base_vendor_name = str(df.columns[i]).strip()
    if 'Unnamed' in base_vendor_name or base_vendor_name == 'nan':
        continue
        
    prod_col = df.columns[i]
    price_col = df.columns[i+2] if i+2 < len(df.columns) else None
    
    if not price_col:
        continue
        
    # Start with a default group
    current_sub_name = base_vendor_name
    current_vendor = {
        'id': f'v_ext_{sub_vendor_counter}',
        'name': current_sub_name,
        'isExpanded': False,
        'products': []
    }
    sub_vendor_counter += 1
    pid_counter = 1
    
    for idx, row in df.iterrows():
        prod_name = row[prod_col]
        price_val = row[price_col]
        
        if pd.notna(prod_name):
            val_str = str(prod_name).strip()
            
            # Skip header indicator rows
            if val_str == "品名" or val_str == "":
                continue
                
            # Check if this row is a category header
            is_header = False
            if pd.isna(price_val):
                is_header = True
            else:
                try:
                    float(price_val)
                except ValueError:
                    is_header = True
            
            if is_header:
                # Discard current group if it is completely empty
                if len(current_vendor['products']) > 0:
                    vendorsData.append(current_vendor)
                    
                current_sub_name = f"{base_vendor_name}-{val_str}"
                current_vendor = {
                    'id': f'v_ext_{sub_vendor_counter}',
                    'name': current_sub_name,
                    'isExpanded': False,
                    'products': []
                }
                sub_vendor_counter += 1
                pid_counter = 1
            else:
                # It's a valid product
                current_vendor['products'].append({
                    'id': f'p_ext_{sub_vendor_counter}_{pid_counter}',
                    'name': val_str,
                    'stock': '',
                    'sales': '',
                    'suggested': ''
                })
                pid_counter += 1
                
    if len(current_vendor['products']) > 0:
        vendorsData.append(current_vendor)

js_str = json.dumps(vendorsData, ensure_ascii=False, indent=8)

try:
    with open('JavaScript/main.js', 'r', encoding='utf-8') as f:
        content = f.read()

    replacement_str = f'let vendorsData = {js_str};'
    new_content = re.sub(r'let vendorsData = \[[\s\S]*?\];', replacement_str, content)

    with open('JavaScript/main.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully imported {len(vendorsData)} vendor categories into main.js!")
except Exception as e:
    print(f"Error writing to main.js: {e}")
