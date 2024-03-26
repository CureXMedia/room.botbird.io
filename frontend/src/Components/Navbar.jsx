import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
    RectangleStackIcon,
    CommandLineIcon,
    Squares2X2Icon,
    BookOpenIcon,
    InformationCircleIcon
  } from "@heroicons/react/24/solid";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link , useLocation} from "react-router-dom";
import logo from '../assests/Asset 1.png'

function NavItem({ children, to}) {
  return (
    <li>
      <Link to={to}>
          <Typography
          variant="paragraph"
          color="blue-gray"
          className="text-blue-gray-700 flex items-center gap-2 font-medium"
          >
          {children}
          </Typography>
      </Link>
    </li>
  );
}

const links= [
  {
    title: 'Courses',
    icon: BookOpenIcon,
    to: '/courses'
  },
  {
    title: 'About us',
    icon: InformationCircleIcon,
    to: '/about'
  },
  {
    title: 'Docs',
    icon: CommandLineIcon,
    to: '/coming-soon'
  }
]
export default function Nav() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [scrollPosition, setScrollPosition] = useState(false);
    const location = useLocation();
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position>30);
    };
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false),
        );
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    React.useEffect(() => {
        setOpen(false);
    },[location])
    return (
        <Navbar shadow={scrollPosition} fullWidth className="border-0 fixed z-10">
        <div className="container mx-auto flex items-center justify-between" >
            <Link to='/'>
                {/* <Typography color="blue-gray" className="text-lg font-bold">
                    Coding Room
                </Typography> */}
                <div className="bg-[#02182b] px-2 py-1 rounded-lg">
                    <img src={logo} alt="Coding Room" className="h-6" />
                </div>
            </Link>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            {links.map((link, index) => {
              return (
                <NavItem key={index} to={link.to}>
                  <link.icon className="h-5 w-5" />
                  {link.title}
                </NavItem>
              );
            })}
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button>Log in</Button>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
            {links.map((link, index) => {
              return (
                <NavItem key={index} to={link.to}>
                  <link.icon className="h-5 w-5" />
                  {link.title}
                </NavItem>
              );
            })}
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <Button color="gray">buy now</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    )
  }