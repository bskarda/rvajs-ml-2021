import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Tensor, InferenceSession } from "onnxruntime-web";

async function predictForecast() {
  const session = await InferenceSession.create('./dt_james.onnx');
  // const url = "./dt_james.onnx";
  // await session.loadModel(url);

  // prepare inputs. a tensor need its corresponding TypedArray as data
  const dataA = Float32Array.from([6,15]);
  const tensorA = new Tensor('float32', dataA, [1, 2]);

  // prepare feeds. use model input names as keys.
  const feeds = { a: tensorA };

  // feed inputs and run
  const results = await session.run(feeds);

  // read from results
  const dataC = results.data;

  // const inputs = [
  //   new Tensor(new Float32Array([6, 15]), "float32", [1, 2]),
  // ];

  // run this in an async method:
  // const outputMap = await session.run(inputs);
  // const outputTensor = outputMap.values().next().value;
  return dataC;
}

const IndexPage = () => {
  const [predict, setPredict] = useState(0);

  useEffect(() => {
    (async () => {
      const predictions = await predictForecast();
      setPredict(predictions);
    })()
  }, [])

  return (<Layout title="Client Side">
    <h1>Hello RVA.js 👋</h1>
    <p>
      {predict}
    </p>
  </Layout>);
};

export default IndexPage
