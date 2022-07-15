---
layout: post
tags_color: '#666e76'
title: 'Face Detection & Blurring'
date: 2021-03-28
description: An afternoon experiment with dynamic face detection utilizing Python & OpenCV.
tags: [digitalization, python, face, opencv, anonymization, webcam, blurring, detection, dynamic]
categories: digitalization
comments: true
image: '/images/posts/2021/face-blur.jpg'
---
I recently read an [article](https://www.theverge.com/2020/6/11/21280293/anonymize-blur-faces-photos-videos-camera-app-ios) regarding facial recognition algorithms and how they make it easy to identify individuals from a single photo. But with the help of advances in machine learning, it’s also easier than ever to anonymize photos and videos. Based on this, a London AI startup had built an app with a focus on investigative journalists who wanted an easy way to record anonymous footage.

I was well aware of OpenCV but never applied/used it myself so thought this could be an interesting little project to see if I could replicate the functionality of this app directly in Python. So after some poking around the documentation and some experimentation later come up with the following simple POC

![](/images/posts/2021/face-blur.jpg)


```python
# Importing openCV and creating the classifier (included three but face1.xml performed best on my personal trials)

import cv2
classifier = cv2.CascadeClassifier('classifiers/face1.xml')
```

```python
# Setting the webcam and resolutions

video = cv2.VideoCapture(0)
out = cv2.VideoWriter('face_blur.mp4', -1, 20.0, (640,480))
```

```python
# Loop to keep the live stream running / detecting regions of interest

while True:
    try:
        ret, frames = video.read()
        gray = cv2.cvtColor(frames, cv2.COLOR_BGR2GRAY)
        
        # Here we now initiate the face detection and bounding box
        faces = classifier.detectMultiScale(gray)
        for (x, y, w, h) in faces:
            cv2.rectangle(frames, (x, y), (x + w, y + h), (0, 0, 0), 2)
            
            # Here we set the gaussian blur within the box
            face_color = frames[y:y + h, x:x + w]
            blur = cv2.GaussianBlur(face_color, (75, 75), 0)
            frames[y:y + h, x:x + w] = blur
        
        # Setting the video and OpenCV window
        out.write(frames)
        cv2.imshow('Face Blurring', frames)
    
        if cv2.waitKey(1) & 0xFF == ord('q'): break
        
    except Exception as e:
        print(str(e))
        break
```

```python
# Turn off the camera and close the OpenCV windows

video.release()
out.release()
cv2.destroyAllWindows()
```

Below you can see a small snippet of the outcome - genuinely the performance impressed me massively for an out the box pre-trained model...
I think it goes to show again how far the democratization of technology has come - a few years ago it would have been unforeseeable to create something like this on a personal laptop while watching a football match & beer (#multitasking!) - was an interesting way to spend a rainy afternoon, if your interested you can grab my code and classifiers over [here](https://github.com/clintjb/Face-Detection-Blurring)

![](/images/posts/2021/face-blur.gif)