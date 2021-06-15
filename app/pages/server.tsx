import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Tensor, InferenceSession } from "onnxruntime-node";

export async function getServerSideProps(context) {
  const session = await InferenceSession.create('http://localhost:3000/dt_james.onnx');

  // prepare inputs. a tensor need its corresponding TypedArray as data
  const dataA = Float32Array.from([6,15]);
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
      {data}
    </p>
  </Layout>);
}

export default Page
