import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import Flyer from "../assests/flyer.svg";
import dsa from '../assests/dsa.png'
import {LightBulbIcon,AcademicCapIcon} from '@heroicons/react/24/outline'
function WhyLearnCard(data) {
    return (
        <Card className="min-h-72 max-w-80 mx-auto">
            <CardFooter>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-3xl font-bold text-blue-gray-700">{data.index + 1}</span>
                        <span className="text-xl font-bold text-blue-gray-700 ml-2">.</span>
                    </div>
                    <data.icon className="h-8 w-8" />
                </div>
            </CardFooter>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {data.title}
                </Typography>
                <Typography variant="paragraph" color="blue-gray">
                    {data.description}
                </Typography>
            </CardBody>
        </Card>
    )
}

function Services(data){
    return (
        <div className="mt-10 max-w-xl ">
            <Typography variant="h5" color="blue-gray" className="leading-none mb-3">
              {data.title}
            </Typography>
            <Typography variant="paragraph" color="gary" className="font-normal text-justify text-gray-600">
              {data.description}
            </Typography>
        </div>
    )

}

const whyLearnData = [
    {
        title: "Problem-Solving Skills",
        description: "DSA teaches you how to break down complex problems into smaller, more manageable components. This enhances your problem-solving skills, a crucial asset in any tech-related role.",
        icon: LightBulbIcon
    },
    {
        title: "Career Advancement",
        description: "Proficiency in DSA is highly valued by top tech companies during the hiring process. Mastering DSA opens up a plethora of job opportunities and significantly boosts your earning potential.",
        icon: AcademicCapIcon
    },
    {
        title: "Algorithmic Thinking",
        description: "DSA cultivates a mindset focused on algorithmic thinking, which is invaluable in devising efficient solutions to real-world problems, whether it's building robust software applications or optimizing business processes.",
        icon: function (){
            return  <img src={dsa} alt="DSA" className="h-8 w-8 invert-[48%] sepia-[14%] saturate-[711%] hue-rotate-[155deg] brightness-[94%] contrast-[88%]"  />
        }
    },
    {
        title: "Foundation for Advanced Topics",
        description: "DSA serves as a foundation for understanding more advanced topics in computer science, such as machine learning, artificial intelligence, and cryptography. Without a solid grasp of DSA, delving into these areas can be challenging.",
        icon: LightBulbIcon
    },
    {
        title: "Competitive Programming",
        description: "DSA is essential for excelling in competitive programming contests, hackathons, and coding interviews. It equips you with the skills needed to solve problems efficiently under time constraints and stand out among your peers.",
        icon: AcademicCapIcon
    },
    {
        title: "Optimized Code",
        description: "DSA enables you to write optimized code that runs faster, consumes fewer resources, and is more scalable. This is crucial for developing high-performance software applications and ensuring a seamless user experience.",
        icon: function (){
            return  <img src={dsa} alt="DSA" className="h-8 w-8 invert-[48%] sepia-[14%] saturate-[711%] hue-rotate-[155deg] brightness-[94%] contrast-[88%]"  />
        }
    }
];

const services = [
    {
        title: "Hands-on Learning",
        description: "Our curriculum is designed to emphasize hands-on learning through practical exercises, coding challenges, and real-world projects. This approach fosters a deeper understanding of DSA concepts and reinforces problem-solving skills."
    },
    {
        title: "Expert Instructors",
        description: "Our instructors are seasoned professionals with extensive experience in software engineering and computer science. They provide personalized guidance and mentorship to help students navigate through challenging concepts and maximize their learning potential."
    },
    {
        title: "Small Class Sizes",
        description: "We maintain small class sizes to facilitate interactive learning and encourage active participation. This ensures that each student receives individualized attention and support from our instructors."
    },
    {
        title: "Basic Programming Techniques for Coding Rounds",
        description: "In addition to DSA, we also cover basic programming techniques essential for coding rounds in interviews. Our comprehensive curriculum prepares students not just for understanding algorithms but also for excelling in technical interviews."
    },
    {
        title: "Overview of Competitive Programming",
        description: "We provide students with an overview of competitive programming, equipping them with strategies and skills needed to excel in coding competitions and hackathons."
    },
    {
        title: "Essential DSA Concepts",
        description: "Our program covers all essential DSA concepts, ensuring that students have a solid foundation in key areas such as arrays, linked lists, trees, sorting algorithms, and more."
    },
    {
        title: "Course Completion Certificate",
        description: "Upon successfully completing our DSA classroom program, students receive a course completion certificate, validating their knowledge and skills in data structures and algorithms."
    }
];

export default function DSA(){
    return (
        <div className="container mx-auto px-8 py-10 lg:pb-28 lg:pt-20">
            <Typography
                variant="h2"
                color="blue-gray"
                className="!text-3xl !leading-snug lg:!text-4xl"
                as='h1'
            >
                DSA Traning
            </Typography>

            {/* About DSA + Flyer section */}
            <div className="mt-6 flex flex-col-reverse lg:flex-row lg:gap-10 items-center">
                <div className="max-w-2xl mt-10 lg:mt-0">
                    <Typography
                        variant="paragraph"
                        className="mt-2 !text-lg !font-normal  !text-gray-700"
                    >
                        Data Structures and Algorithms (DSA) form the backbone of computer science and programming. They are fundamental concepts that empower software engineers to build efficient and scalable solutions to complex problems. DSA deals with organizing and manipulating data effectively to solve computational problems efficiently.
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="mt-8 !text-lg !font-normal !text-gray-700"
                    >
                        In the realm of computer science, DSA acts as a bridge between raw data and the algorithms used to process that data. Understanding DSA enables programmers to write code that not only runs faster but also consumes fewer resources. From optimizing search algorithms to designing data storage systems, DSA plays a crucial role in every facet of software development.
                    </Typography>
                </div>
                <img
                    className="h-96 lg:ml-10 w-fit rounded-lg object-contain object-center"
                    src={Flyer}
                    alt="DSA Flyer"
                />
            </div>

            <div class="divide-y border-b-2 divide-solid mt-10">
                {/*  */}
            </div>

            {/* Why Learn DSA section*/}
            <div className="mt-10">
                <Typography
                    variant="h3"
                    color="blue-gray"
                    className="!text-xl !leading-snug lg:!text-2xl"
                    as='h2'
                >
                    Why Learn DSA?
                </Typography>
                <Typography
                    variant="paragraph"
                    className="mt-2 mb-6 !text-lg !font-normal !text-gray-700 lg:max-w-2xl"
                >
                    Learning DSA is essential for anyone aspiring to excel in the field of computer science and software engineering. Here's why:
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14 ">
                    {whyLearnData.map((data, index) => (
                        <WhyLearnCard key={index} index={index} {...data} />
                    ))}
                </div>
            </div>
            <div class="divide-y border-b-2 divide-solid ">
                {/*  */}
            </div>
            {/* What We Provide Differently to Our Students section */}
            <div className="mt-10 ">
                <Typography
                    variant="h3"
                    color="blue-gray"
                    className="!text-xl !leading-snug lg:!text-2xl"
                    as='h2'
                >
                    What We Provide Differently to Our Students
                </Typography>
                <Typography
                    variant="paragraph"
                    className="mt-2 !text-lg !font-normal !text-gray-700 lg:max-w-2xl"
                >
                    At our offline classroom program, we go beyond traditional teaching methods to ensure that our students not only grasp DSA concepts but also develop the skills necessary to apply them effectively. Here's what sets us apart:
                </Typography>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10 mb-12">
                    {services.map((data, index) => (
                        <Services key={index} {...data} />
                    ))}
                </div>     
            </div>


            <div className="mt-10">
               <Typography
                    variant="paragraph"
                    className="mt-8 !text-lg !font-normal !text-gray-700 lg:max-w-4xl "
                >
                    Join us and embark on a transformative learning journey that will elevate your programming skills and open up a world of opportunities in the tech industry. Get started today and take the first step towards mastering DSA!
                </Typography>
            </div>

            <div class="divide-y border-b-2 divide-solid mt-10 -mb-20">
                {/*  */}
            </div>
        </div>
    )
}