import cv2
import easyocr
import matplotlib.pyplot as plt

imagepath = "/Users/eltonjames/Documents/images/sample_bp.jpeg"
img = cv2.imread(imagepath)

reader = easyocr.Reader(['en'], gpu=False)

results = reader.readtext(img)

for bbox, text, conf in results:
    # Convert numpy array points to tuples
    pts = [tuple(map(int, point)) for point in bbox]

    # Draw rectangle using top-left and bottom-right points
    top_left = pts[0]
    bottom_right = pts[2]
    cv2.rectangle(img, top_left, bottom_right, (0, 255, 0), 2)

    # Optionally put text
    cv2.putText(img, text, (top_left[0], top_left[1]-10),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2)

plt.imshow(img)
plt.show()