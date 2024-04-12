import NavItem from "../atoms/navitem";
import { Nav } from "../molecules";

export default function Header() {
    return (
        <header>
            <h1>My cool portfolio</h1>
            <Nav />
        </header>
    );
}