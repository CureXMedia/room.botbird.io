import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import webDev from '../assests/web-dev.png'
import dsa from '../assests/dsa.png'
const courses = [
    {
        title: "MERN Stack",
        description: "Learn MERN Stack Development with MongoDB, Express, React, and NodeJS.",
        link: "/courses/mern-stack",
        icon: (
            <div className="p-3 inline-block border-2 rounded-full mb-2 border-gray-400">
                <img src={webDev} alt="Web Development" className="h-6 w-6" />
            </div>
        ),
    },
    {
        title: "DSA",
        description: "Learn Data Structures and Algorithms with C++ and Java. LeetCode, Codeforces, and more.",
        link: "/courses/dsa",
        icon: (
            <div className="p-3 inline-block border-2 rounded-full mb-2 border-gray-400">
                <img src={dsa} alt="DSA" className="h-6 w-6" />
            </div>
        ),
    }
]

export function CardWithLink({icon,title,description,link}) {
    return (
    <Link to={link} className="w-[20rem]">
        <Card className="mt-6 w-[20rem] ">
            <CardBody>
                {icon}
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button size="sm" variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </Button>
            </CardFooter>
        </Card>
    </Link>
);
}

export default function Courses(){
    return (
        <div className="min-h-[calc(100vh-8rem)] p-8 ">
            <Typography variant="h2" as='h1' color="blue-gray" className="mb-4">
                All Courses
            </Typography>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <CardWithLink
                        key={course.title}
                        icon={course.icon}
                        title={course.title}
                        description={course.description}
                        link={course.link}
                    />
                ))}
            </div>
        </div>
    );
}