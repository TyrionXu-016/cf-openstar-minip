# -*- coding: utf-8 -*-
import pdfplumber
import sys

pdf_path = r'C:/Users/Administrator/Desktop/选岗一本通-公务员岗位简介.pdf'

try:
    with pdfplumber.open(pdf_path) as pdf:
        total = len(pdf.pages)
        print(f'Total pages: {total}')
        
        # 提取前10页看看结构
        for i in range(min(10, total)):
            page = pdf.pages[i]
            text = page.extract_text()
            if text:
                print(f'\n=== Page {i+1} ===')
                print(text[:3000])
except Exception as e:
    print(f'Error: {e}')
    import traceback
    traceback.print_exc()
