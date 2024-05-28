import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/pictures">Pictures</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
