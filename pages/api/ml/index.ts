import { NextApiRequest, NextApiResponse } from 'next'
import { InferenceSession, Tensor } from 'onnxruntime-node';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const env = process.env.NODE_ENV
    var path;
    if(env == "development"){
      path = 'http://localhost:3000/dt_james.onnx'
    }
    else if (env == "production"){
      path = 'https://rvajs-ml-2021.vercel.app/dt_james.onnx'
    }

    const fetchRes = await fetch(path)
    const model = await fetchRes.arrayBuffer()

    const session = await InferenceSession.create(model, { executionProviders: [{ name: 'cpu'}]});

    // default to today
    const date = new Date();
    const monthDefault = date.getMonth() + 1;
    const dayDefault = date.getDate();

    const { day, month } = req.query

    if (Array.isArray(day)) {
      return res.status(400).json({ statusCode: 400, message: 'day must be a number' })
    }

    if (Array.isArray(month)) {
      return res.status(400).json({ statusCode: 400, message: 'month must be a number' })
    }

    const dayArg: number = parseInt(day) || dayDefault
    const monthArg: number = parseInt(month) || monthDefault

    // prepare inputs. a tensor need its corresponding TypedArray as data
    const dataA = Float32Array.from([monthArg, dayArg]);
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
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
