import Link from "next/link";
import Image from "next/image";

function Index_Events() {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        <Link href="/events/london">
          <Image src="" alt="" />
          <h2>Events in London</h2>
        </Link>
        <Link href="/events/san-francisco">
          <Image src="" alt="" />
          <h2>Events in San Francisco</h2>
        </Link>
        <Link href="/events/san-barcelona">
          <Image src="" alt="" />
          <h2>Events in San Barcelona</h2>
        </Link>
      </div>
    </div>
  );
}

export default Index_Events;
