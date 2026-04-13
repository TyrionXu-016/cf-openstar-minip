import pdfplumber
import json

pdf_path = r'C:/Users/Administrator/Desktop/选岗一本通-公务员岗位简介.pdf'

all_text = []

with pdfplumber.open(pdf_path) as pdf:
    print(f'总页数: {len(pdf.pages)}')
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        if text:
            all_text.append(f'=== 第{i+1}页 ===\n{text}')

# 保存到文件
output_path = r'c:/Users/Administrator/WorkBuddy/20260407211806/juxing-engine/miniprogram/data/positions_raw.txt'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(all_text))

print(f'\n已提取 {len(pdf.pages)} 页内容')
print(f'保存到: {output_path}')
