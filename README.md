# Social video generator

Today, videos are much more in the spotlight through social media. Because it's much more attractive and also because it keeps the user's in attention 

But creating videos for all your communications can be technical and time consuming.
> This project is here to help you create videos the easy way. With a simple interface, the goal is to allow you to quickly create custom videos and reusable templates for all types of communications you need.

This github project use [Remotion library](https://www.remotion.dev/) to generate video, take a look at the [remotion doc](https://www.remotion.dev/docs/) in order to understand how to use it

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Create and Generate video
To see the **preview** of the composition, you can run :
```bash
pnpm remotion preview src/index.ts.
```
It will display a preview page of your video and you will be able to work with this interface.

To **generate** the video, you can run : 
```bash
pnpm remotion render src/index.ts <compositionName> myVideo.mp4
```
It will build the video under the name passed at the end.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
