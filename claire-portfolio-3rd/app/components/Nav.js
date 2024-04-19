import NavItem from "./NavItem";

export function Nav() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <ul>
                <NavItem href="/" text="Home"/>
                <NavItem href="/projects" text="Projects"/>
                <NavItem href="/resume" text="Resume"/>
                <NavItem href="/contact" text="Contact"/>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
