# -*- coding: utf-8 -*-
import pdfplumber
import json

pdf_path = r'C:/Users/Administrator/Desktop/选岗一本通-公务员岗位简介.pdf'

positions = []

try:
    with pdfplumber.open(pdf_path) as pdf:
        # 提取国考岗位 (前12页左右)
        for i in range(1, 13):
            page = pdf.pages[i]
            text = page.extract_text()
            if text and len(text) > 100:
                positions.append({
                    'page': i + 1,
                    'category': '国考',
                    'text': text
                })
        
        # 提取省考岗位 (从第13页开始，选取主要部门)
        for i in [13, 14, 15, 58, 59, 60, 61, 62]:  # 党委部门和政府部门开头
            if i < len(pdf.pages):
                page = pdf.pages[i]
                text = page.extract_text()
                if text and len(text) > 100:
                    positions.append({
                        'page': i + 1,
                        'category': '省考',
                        'text': text
                    })

        # 打印提取的内容
        for p in positions[:5]:
            print(f"\n=== {p['category']} 第{p['page']}页 ===")
            print(p['text'][:2000])
            print("...")

except Exception as e:
    print(f'Error: {e}')
    import traceback
    traceback.print_exc()
