import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <Image src="" alt="" />
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about-us">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
