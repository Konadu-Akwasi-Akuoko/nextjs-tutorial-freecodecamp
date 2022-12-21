import Link from "next/link";
import Image from "next/image";
import React from "react";

type EventsPageProps = {
  events: { id: string; title: string; description: string; image: string }[];
};

function EventsPage({ events }: EventsPageProps) {
  const eventItems = events.map((event, index) => (
    <Link href={`/events/${event.id}`} key={index}>
      <Image src={event.image} alt="" width="250" height="250" />
      <h2>{event.title}</h2>
      {/* <p>{event.description}</p> */}
    </Link>
  ));

  return (
    <div>
      <h1>Events Page</h1>
      <div>{eventItems}</div>
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const data = await import("../../data/data.json");

  return { props: { events: data.events_categories } };
}
