import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Tensor, InferenceSession } from "onnxruntime-node";

function today() {
  return new Date();
}

function todayDay() {
  return today().getDate();
}

function todayMonth() {
  return today().getMonth() + 1;
}

export async function getServerSideProps(context) {
  const env = process.env.NODE_ENV
  var path;
  if(env == "development"){
    path = 'http://localhost:3000/dt_james.onnx'
  }
  else if (env == "production"){
    path = 'https://rvajs-ml-2021.vercel.app/dt_james.onnx'
  }

  const res = await fetch(path)
  const model = await res.arrayBuffer()

  // execution provider is only needed because we are running web and node
  const session = await InferenceSession.create(model, { executionProviders: [{ name: 'cpu'}]});

  // prepare inputs. a tensor need its corresponding TypedArray as data
  const dataA = Float32Array.from([todayMonth(), todayDay()]);
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
  return {
    props: {data: result},
  }
}

function Page({ data }) {
  return (<Layout title="Client Side">
    <h1>Hello RVA.js 👋</h1>
    <p>
      Prediction for today, the {todayDay()} day of the {todayMonth()} month.
    </p>
    <p>
      {data}
    </p>
  </Layout>);
}

export default Page
