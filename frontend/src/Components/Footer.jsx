import {Link} from 'react-router-dom'
import { Typography } from "@material-tailwind/react";
import {SocialIcon} from 'react-social-icons'

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    network : "instagram",
    link: "https://instagram.com/thecoding.room",
  },
  {
    network : "github",
    link: "https://www.github.com/botbird-io",
  }
];

const COMPANY = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Courses",
    link: "/all-courses",
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link: "https://www.creative-tim.com/knowledge-center?ref=material-tailwind",
  },
  {
    name: "Contact Us",
    link: "https://www.creative-tim.com/contact-us?ref=material-tailwind",
  },
  {
    name: "Premium Support",
    link: "https://www.creative-tim.com/support-terms?ref=material-tailwind",
  },
  {
    name: "Pricing",
    link: "/blocks#pricing",
  },
];

// const RESOURCES = [
//   {
//     name: "Documentation",
//     link: "#",
//   },
//   {
//     name: "Custom Development",
//     link: "#",
//   },
//   {
//     name: "Discord",
//     link: "https://discord.com/invite/gxtg2rJa?ref=material-tailwind",
//   },
//   {
//     name: "Tailwind Components",
//     link: "https://tailwindcomponents.com/?ref=material-tailwind",
//   },
// ];

const TECHS = [
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              Coding Room
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
            Your gateway to comprehensive coding education, tailored to prepare you for success in the fast-paced world of technology.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ network, link }, key) => (
                <Link key={key} to={link} target="_blank" rel="noreferrer">
                  <SocialIcon network={network} 
                  as='i'
                  className='align-center mr-2 !h-9 !w-9 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none '
                   />
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        to={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Technologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
                Coding Room {" "}
              <p
                className="text-inherit transition-all inline-block"
              >
                Made with ❤️ for a better web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;