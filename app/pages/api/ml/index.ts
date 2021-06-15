import { NextApiRequest, NextApiResponse } from 'next'
import { InferenceSession, Tensor } from 'onnxruntime-node';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await InferenceSession.create('./public/dt_james.onnx', { executionProviders: [{ name: 'cpu'}]});

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
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
