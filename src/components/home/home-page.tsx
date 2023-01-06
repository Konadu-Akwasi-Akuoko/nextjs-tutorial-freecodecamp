import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type HomePageProps = {
  events: { id: string; title: string; description: string; image: string }[];
};

function HomePage({ events }: HomePageProps) {
  const eventItems = events.map((event, index) => (
    <Link href={`/events/${event.id}`} key={index}>
      <Image src={event.image} alt="" width="250" height="250" />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </Link>
  ));
  return (
    <main>
      <Image src="" alt="" />
      {eventItems}
    </main>
  );
}

export default HomePage;
