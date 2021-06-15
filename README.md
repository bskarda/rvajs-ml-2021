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
- Classification
  - Get a % match (probability)
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



## Data from

https://waterdata.usgs.gov/usa/nwis/uv?02037500

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
