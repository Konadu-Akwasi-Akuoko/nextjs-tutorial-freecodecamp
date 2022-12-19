import { useRouter } from "next/router";
import { useEffect } from "react";

function DynamicEvent() {
  const router = useRouter();
  const { cat } = router.query;
  const { event } = router.query;

  return (
    <h1>
      Events in {cat}, and the event is {event}
    </h1>
  );
}

export default DynamicEvent;
