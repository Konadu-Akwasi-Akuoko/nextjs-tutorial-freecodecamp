import { fetcher } from "../utils/fetcher";
import Head from "next/head";
import React from "react";
import HomePage from "../src/components/home/home-page";

type HomePageProps = {
  events: { id: string; title: string; description: string; image: string }[];
};

export default function Home({ events }: HomePageProps) {
  const OnButtonClick = async (e: any) => {
    const data = await fetcher("/api/hello");
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="An events web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage events={events} />
      <button onClick={OnButtonClick}>Click Me</button>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../data/data.json");

  return { props: { events: data.events_categories } };
}
