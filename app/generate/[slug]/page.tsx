export default function Page({ params }: { params: {slug: string } }) {
  
    return (
      <>
        <h1>Hi there !</h1>
        <p>You will generate a video with the title {params.slug}</p>
      </>
    );
  }