# -*- coding: utf-8 -*-
import pandas as pd
import json
import os

print("=" * 60)
print("解析国考调剂职位表")
print("=" * 60)

# 读取Excel文件
df = pd.read_excel('c:/Users/Administrator/WorkBuddy/20260407211806/国考调剂职位表_2026.xlsx', header=None)

print(f"文件行数: {len(df)}")
print(f"文件列数: {len(df.columns)}")
print()

# 显示前10行
print("前10行数据:")
print(df.head(10).to_string())
print()

# 显示列名（如果有的话）
print("第一行（可能是列名）:")
print(df.iloc[0].to_string())
