import NavItem from "../atoms/navitem";

export default function Nav() {
    return (
        <nav>
            <ul>
                <NavItem href="/" text="Home"/>
                <NavItem href="/about" text="About"/>
                <NavItem href="/projects" text="Projects"/>
                <NavItem href="/resume" text="Resume"/>
                <NavItem href="/contact" text="Contact"/>
            </ul>
        </nav>
    );
}