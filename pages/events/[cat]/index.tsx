import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

type EventCategoryPageProps = {
  allEvents: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
};

function EventCategoryPage({ allEvents }: EventCategoryPageProps) {
  const router = useRouter();
  const { cat } = router.query;

  const allEventsList = allEvents.map((event, index) => (
    <Link href={`${router.asPath}/${event.id}`} key={index}>
      <h2>{event.title}</h2>
      <Image src={event.image} alt="" width="250" height="250" />
    </Link>
  ));

  return (
    <div>
      <h1>Events in {cat}</h1>
      {allEventsList}
    </div>
  );
}

export default EventCategoryPage;

export function getStaticPaths() {
  return {
    paths: [
      { params: { cat: "london" } },
      { params: { cat: "san-francisco" } },
      { params: { cat: "barcelona" } },
    ],
    fallback: true,
  };
}

type getStaticPropsType = {
  params: { cat: string };
};

export async function getStaticProps({ params }: getStaticPropsType) {
  const { allEvents } = await import("../../../data/data.json");
  return {
    props: {
      allEvents: allEvents.filter((event) => event.city === params.cat),
    },
  };
}
