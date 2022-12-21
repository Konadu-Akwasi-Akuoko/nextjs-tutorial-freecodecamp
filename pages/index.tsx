import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type HomePageProps = {
  events: { id: string; title: string; description: string; image: string }[];
};

export default function HomePage({ events }: HomePageProps) {
  const eventItems = events.map((event, index) => (
    <Link href={`/events/${event.id}`} key={index}>
      <Image src={event.image} alt="" width="250" height="250" />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </Link>
  ));

  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="An events web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Image src="" alt="" />
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Image src="" alt="" />
        {eventItems}
      </main>

      <footer>Footer</footer>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("../data/data.json");

  return { props: { events: data.events_categories } };
}
