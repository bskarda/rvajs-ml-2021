import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Tensor, InferenceSession } from "onnxruntime-web";

function today() {
  return new Date();
}

function todayDay() {
  return today().getDate();
}

function todayMonth() {
  return today().getMonth() + 1;
}

async function predictForecast(month, day) {
  // execution provider is only needed because we are running web and node
  const session = await InferenceSession.create('./dt_james.onnx', { executionProviders: [{name: 'wasm'}]});

  // prepare inputs. a tensor need its corresponding TypedArray as data
  const dataA = Float32Array.from([month, day]);
  const tensor = new Tensor('float32', dataA, [1, 2]);

  // prepare feeds. use model input names as keys.
  const feeds = { input: tensor };

  // feed inputs and run
  const results = await session.run(feeds);

  // read from results
  const data = results;
  console.log(JSON.stringify(results))

  const result = JSON.stringify(results.variable.data);
  console.log(result);
  return result;
}

const IndexPage = () => {
  const [predict, setPredict] = useState("-unset-");
  const [day, setDay] = useState(todayDay());
  const [month, setMonth] = useState(todayMonth());

  useEffect(() => {
    (async () => {
      const predictions = await predictForecast(month, day);
      setPredict(predictions);
    })()
  })

  return (<Layout title="Client Side">
    <h1>Hello RVA.js 👋</h1>
    <p>
      Month:
      <input value={month} onChange={e => setMonth(parseInt(e.target.value) || 1)}/>
    </p>

    <p>
      Day:
      <input value={day} onChange={e => setDay(parseInt(e.target.value) || 1)}/>
    </p>

    <p>
      Predicted River Level for month {month}, day {day}:
      {predict}
    </p>
  </Layout>);
};

export default IndexPage
