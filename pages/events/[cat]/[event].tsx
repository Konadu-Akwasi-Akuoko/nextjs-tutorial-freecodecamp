import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

type DynamicEventType = {
  event: {
    id: string;
    title: string;
    city: string;
    description: string;
    image: string;
    emails_registered?: string[];
  }[];
  eventPath: string;
  catPath: string;
};

function DynamicEvent({ event, eventPath, catPath }: DynamicEventType) {
  return (
    <>
      <h1>
        Events in {catPath}, and the event is {eventPath}
      </h1>
      <Image src={event[0].image} alt="" width="500" height="500" />
      <h2>{event[0].title}</h2>
      <p>{event[0].description}</p>
      {event[0].emails_registered ? (
        <ul>
          {event[0].emails_registered.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}event
    </>
  );
}

export default DynamicEvent;

type getSeverSidePropsType = {
  params: { cat: string; event: string };
};

export async function getServerSideProps({ params }: getSeverSidePropsType) {
  const { allEvents } = await import("../../../data/data.json");
  return {
    props: {
      event: allEvents.filter((event) => event.id === params.event),
      eventPath: params.event,
      catPath: params.cat,
    },
  };
}
