import pytesseract as tess


def main():
    tess.pytesseract.tesseract_cmd = r'D:\Users\User\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'
    from PIL import Image

    img = Image.open('1.png')
    text = tess.image_to_string(img)

    print(text)
