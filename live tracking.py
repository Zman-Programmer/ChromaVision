import cv2

cap = cv2.VideoCapture(0)
#help(cv2)
while cap.isOpened():
    #BGR image feed from camera
    ret, img = cap.read()
    cv2.imshow('output', img)
    #BGR to grayscale
    img2 = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    cv2.imshow('grayscale', img2)
    #BGR to binary(RED) thershholded
    imgthreshhold = cv2.inRange(img, (3,3,125), (40,40,255))
    cv2.imshow('threshholded', imgthreshhold)

    k = cv2.waitKey(10)
    if k==27:
        break

cap.release()
cv2.destroyAllWindows()