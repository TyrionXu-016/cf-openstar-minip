from PIL import Image, ImageDraw, ImageFont
import os

img_dir = r'c:\Users\Administrator\WorkBuddy\20260407211806\juxing-engine\miniprogram\images'
os.makedirs(img_dir, exist_ok=True)

# 图标尺寸
size = 81

# 图标配置
icons_config = {
    'tab_home': {'symbol': '🏠'},
    'tab_quiz': {'symbol': '✏️'},
    'tab_ai': {'symbol': '🤖'},
    'tab_profile': {'symbol': '👤'},
}

for name, config in icons_config.items():
    # 未选中状态 - 灰色
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    # 画圆形背景
    draw.ellipse([10, 10, 71, 71], fill=(150, 150, 150, 255))
    img.save(os.path.join(img_dir, f'{name}.png'))

    # 选中状态 - 深蓝色
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    draw.ellipse([10, 10, 71, 71], fill=(26, 31, 94, 255))
    img.save(os.path.join(img_dir, f'{name}_active.png'))

print('Icons created successfully!')
