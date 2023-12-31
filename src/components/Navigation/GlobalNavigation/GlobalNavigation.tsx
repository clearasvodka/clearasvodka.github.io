import "./GlobalNavigation.css";
import Link from "next/link";

export default function GlobalNavigation() {
  return (
    <header>
      <nav>
        <ul className="nav-container">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/bookshelf">
              Bookshelf
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}