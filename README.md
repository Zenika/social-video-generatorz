# Social video generator

Today, videos are much more in the spotlight through social media. Because it's much more attractive and also because it keeps the user's in attention

But creating videos for all your communications can be technical and time consuming.

> This project is here to help you create videos the easy way. With a simple interface, the goal is to allow you to quickly create custom videos and reusable templates for all types of communications you need.

This github project use [Remotion library](https://www.remotion.dev/) to generate video, take a look at the [remotion doc](https://www.remotion.dev/docs/) in order to understand how to use it

## Getting Started

The webapp is developed with `Next.js 13` and the server with `express 4.18`

```bash
# Install all dependecies
pnpm i

# Run the development server
pnpm dev

# Run the remotion preview
pnpm start

# Build the app
pnpm build

# Start the builed app
pnpm start:app
```

✨ You can use [Gitpod](https://gitpod.io) to contribute on this project. Click on this button and your workspace will be ready to use: 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Zenika/social-video-generatorz)   

When you run the dev server or the builded app :
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
You can add or update the templates under `src/`. The compositions present on the preview are added on the file `src/Root.tsx

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
With this single command, it will generate the video with the default parameters set on the `Root.tsx` file.

To generate a video with curstom parameters, you must add `--props={"myProps":"props content"}` at the end of the command

```bash
pnpm remotion render src/index.ts <compositionName> myVideo.mp4 --props='{"title":"Example of a non default title"}'
```

## Server Configuration

The server and the app are deployed with Clever Cloud, if you encounter any problem linked to this, you can consult the documentation here : [https://www.clever-cloud.com/doc/](https://www.clever-cloud.com/doc/) or reffer an issue on the Github repository.

To generate the videos, a server is needed. You can find it at the root of the project under the name `server.mjs`
It contains a single api route **POST** that take as body the composition parameters.

> /!\ On your local environement the production server will not be accessible due to CORS restrictions.
> The button generate will not work. If you want to try generating a video, run the commands described before.

## Learn More

To learn more about Next.js, Remotion or Clever Cloud, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Remotion documentation](https://www.remotion.dev/) - learn more about what you can do with Remotion.
- [Clever Cloud Documentation](https://www.clever-cloud.com/doc/) - learn about clever cloud deployment and more.

> You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) or [the Remotion GitHub repository](https://github.com/remotion-dev/remotion)

**Your feedback and contributions are welcome!**
