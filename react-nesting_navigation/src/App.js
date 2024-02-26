import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Link from "./components/Link";
import Image from "./components/Image";

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation>
          <Link link="#home">Home</Link>

          <Link link="#About">About</Link>

          <Link link="Impressum">Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
