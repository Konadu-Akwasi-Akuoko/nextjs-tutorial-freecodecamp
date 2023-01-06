import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HomePage from "../src/components/home/home-page";
import { Footer } from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import useSWR from "swr";

type HomePageProps = {
  events: { id: string; title: string; description: string; image: string }[];
};

const fetcher = async (url: string) => {
  const data = await fetch(url);
  return data.json();
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
