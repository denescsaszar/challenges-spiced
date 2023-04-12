import "./styles.css";

import { Avatar } from "./components/Avatar";
import { Header } from "./components/Header";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link navigationLink="#home">Home</Link>
          <Link navigationLink="#about">About</Link>
          <Link navigationLink="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
