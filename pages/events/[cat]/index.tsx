import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function CatIndexPage() {
  const router = useRouter();
  const { cat } = router.query;

  return (
    <div>
      <h1>Events in {cat}</h1>
      <Link href={`${router.asPath}/event 1`}>Event 1</Link>
      <Link href={`${router.asPath}/event 2`}>Event 2</Link>
      <Link href={`${router.asPath}/event 3`}>Event 3</Link>
      <Link href={`${router.asPath}/event 4`}>Event 4</Link>
      <Link href={`${router.asPath}/event 5`}>Event 5</Link>
    </div>
  );
}

export default CatIndexPage;
