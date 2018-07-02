## Description

https://courses.edx.org/courses/course-v1:Microsoft+DEV234x+1T2018a/courseware/003b404adadf403aa5d362cbaa9bf386/d14ca34b42ad423d8ec89545388e1138/?child=first

Hello.

In this video, I'll be introducing the assignment for
this module, which is to build a web application that detects how old
a face is using the face API from Microsoft Cognitive Services.
Let's start by looking at
how the completed assignment should function.
The web application should have an input for a URL string and
a button labeled Analyze.
If I put a URL in the field and hit Analyze,
an image should appear and the attributes section
should fill with the age of the face and the gender of the face.
If I change the URL, different results should appear.
For example, if I put in my own face,
It appears that the API thinks I'm 27 years-old and
that's sort of close, but I'm actually 22.
It got the gender correct, though.
Lastly, if I put an image of something that doesn't resemble
a face, such as a pineapple, the application should,
Throw an error and show that no faces were detected.
Please read the assignment guidelines page for
the exact details on how the assignment will be graded.
Good luck and happy coding.
Fin de la transcripción. Saltar al inicio.

## Introduction

Curso   Module 3 - Fetch API   Module 3 Assignment: Face API   Assignment 3 Introduction

Assignment Guidelines

The assignment for this module is to use the Face API from Microsoft Cognitive Services to determine the age and gender of face images.

Before beginning this assignment, make sure you obtain a free Face API Key from Microsoft Cognitive Services. You will need to use the API key to complete the assignment.

Please follow the instructions on API Key FAQ page key: API Key FAQ

Reference Documentation: [Face API Reference Documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/face/quickstarts/javascript)

Note: If you do not wish to sign up for an API Key from Microsoft Cognitive Services you may use the following keys for the purposes of this course. The following API Keys are not guaranteed to work if too many students use up the free trial usage allowance.

Face API Keys:

023f1661f6244d3e9f81501646ef9a0f

17a26f2fbc9240aebfb272df98928812

Text Analytics API Keys:

8e9100485bab4a7a8b3b261626e7e3c6

7e3029df2246402ebd81c3b480eb813b



The user should see the following:

An application title
A section labeled "Enter Image URL" that includes an input field and a button labeled "Analyse".
A section labeled "Image" that displays the image of the provided URL
A section labeled "Attributes" that displays the age and gender of the image provided
The user should be able to do the following:

Populate the Image Section with the provided URL image by pressing the Analyse button and providing an image URL.
Populate the Attributes Section with the age and gender of the analyzed image by pressing the Analyse button and providing an image URL. If the image does not contain a face, the attributes section should show "No Faces Detected".
