# RVA JS ML

Machine Learning on the Frontend

Every company has a mountain of data sitting around just waiting to be used to improve their products. Normally, taking that data and turning it into a new product or feature takes a team of PhD Data Scientists and a few months to ship. It doesn’t have to be that way! We are going to use some RVA data to work through the process of creating interactive predictions to demystify machine learning for developers.

There will be a smidge of python code in this presentation but no python experience is required!

- What is our goal?
- Run predictions all on the device
- James River level prediction
  - Very basic
- Demo
- Why would I want to do this?
  - Faster cycle time
  - Vertically integrated teams
  - Let your data work for you!
- What is ML?
  - Use a bunch of data to let machines define the implementation of f(x) → y
  - You get to define where x and y come from
- Supervised
- Unsupervised
- Regression
  - Get a value
  - Continuous data
- Classification
  - Get a % match (probability)
  - Discrete data
- Process
  - Get some data
  - Validate data
  - Train a model
  - Validate model
  - Compare with Today’s data
  - Transform to onnx
  - Run a prediction in JS
  - Do it with vanilla js (?)
  - React Component to do a prediction
- Other tools out there
  - Pytorch / tensorflow
  - Tensorflow.js
- When would you want to do this
  - Compute at the edge
  - Less compute cost
  - Less data transfer / storage
- When would you not want to do this
  - Model/data is sensitive or secret
- What does this not cover
  - testing
  - validation
  - measurement
  - A/B testing



## Data from

https://waterdata.usgs.gov/usa/nwis/uv?02037500
