import Link from "next/link";

export default function NavItem({href, text}) {
    return (<li><Link href={href} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2">{text}</Link></li>);
}