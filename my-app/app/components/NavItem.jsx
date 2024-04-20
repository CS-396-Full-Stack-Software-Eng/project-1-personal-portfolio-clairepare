import Link from "next/link";

const NavItem = ({href, title}) => {
    return(
        <Link 
            href={"#about"} 
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-ls rounded md: p-0 hover:text-white'
        >
            {title}
        </Link>
    );
    
};

export default NavItem;