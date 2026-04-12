import pandas as pd
import json
import re
import codecs

# Read the single 3-month file that contains the BOM recipes
file_path = r'818_餐點銷售\餐點銷售_2026-1_2026-3\餐點銷售狀況_sales_detail_20260101-20260329.xlsx'

def parse_ingredient(cell_val):
    if pd.isna(cell_val):
        return None, 1.0
    val = str(cell_val).strip()
    if not val:
        return None, 1.0
    
    match = re.search(r'(.*?)(?:x?(\d+/\d+|\d+\.?\d*))?$', val)
    if not match:
        return val, 1.0
        
    name = match.group(1).strip()
    if name.endswith('x') or name.endswith('X'):
        name = name[:-1].strip()
        
    mult_str = match.group(2)
    mult = 1.0
    if mult_str:
        if '/' in mult_str:
            num, den = mult_str.split('/')
            mult = float(num) / float(den)
        else:
            mult = float(mult_str)
            
    return name, mult

total_ingredient_sales = {}
df = pd.read_excel(file_path, sheet_name=0, header=None)

qty_col_idx = 0
for col in df.columns:
    if str(df[col].iloc[5]).isdigit() or str(df[col].iloc[6]).isdigit():
        qty_col_idx = col
        break

for index, row in df.iterrows():
    if index < 6: continue
    
    qty_val = row[qty_col_idx]
    if pd.isna(qty_val): continue
    try:
        qty = float(qty_val)
    except:
        continue
        
    for c in range(2, 9): # Recipe columns where ingredients exist
        if c >= len(row): continue
        ing, mult = parse_ingredient(row[c])
        if ing:
            # STRICT EXACT string representation as found in Sales
            if ing not in total_ingredient_sales:
                total_ingredient_sales[ing] = 0
            total_ingredient_sales[ing] += qty * mult

# Parse dates from filename
import datetime
match_dates = re.search(r'(\d{8})-(\d{8})', file_path)
if match_dates:
    start_date = datetime.datetime.strptime(match_dates.group(1), '%Y%m%d')
    end_date = datetime.datetime.strptime(match_dates.group(2), '%Y%m%d')
    days = (end_date - start_date).days + 1
    weeks = days / 7.0
else:
    weeks = 1.0 # fallback

average_ingredient_sales = {}
for ing, total in total_ingredient_sales.items():
    average_ingredient_sales[ing] = round(total / weeks, 1)

print(f"Parsed {len(average_ingredient_sales)} unique ingredients from the sales record spanning {weeks:.2f} weeks.")

print(f"Parsed {len(average_ingredient_sales)} unique ingredients from the 3-month sales record.")

# Load Translation Dictionary
import os
mapping_dict = {}
if os.path.exists('mapping_dict.json'):
    with codecs.open('mapping_dict.json', 'r', 'utf-8') as f:
        mapping_dict = json.load(f)

# Reverse the translation dictionary (we want to lookup Official -> POS)
# Because average_ingredient_sales keys are POS names. Wait, multiple POS names might map to ONE official?
# Let's sum by Official Name!
official_sales = {}
for ing, avg_qty in average_ingredient_sales.items():
    translated = mapping_dict.get(ing, ing)  # translate POS to Official
    if translated:
        # 支援一對多平分：mapping 值如果是陣列，銷量平均分配
        if isinstance(translated, list):
            split_qty = avg_qty / len(translated)
            for t in translated:
                if t not in official_sales:
                    official_sales[t] = 0
                official_sales[t] += split_qty
        else:
            if translated not in official_sales:
                official_sales[translated] = 0
            official_sales[translated] += avg_qty

# Load main.js
with codecs.open('JavaScript/main.js', 'r', 'utf-8') as f:
    content = f.read()

match = re.search(r'let vendorsData = (\[[\s\S]*?\]);', content)
if match:
    vendorsData = json.loads(match.group(1))
else:
    vendorsData = []

matched_count = 0

for v in vendorsData:
    vendor_name = v.get('title', '')
    for p in v['products']:
        official_name = p['name']
        
        if official_name in official_sales:
            p['sales'] = round(official_sales[official_name], 1)
            matched_count += 1
        else:
            p['sales'] = 0

js_str = json.dumps(vendorsData, ensure_ascii=False, indent=8)
new_content = content[:match.start(1)] + js_str + content[match.end(1):]

with open('JavaScript/main.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Finished. Exact strict matches found: {matched_count}.")
