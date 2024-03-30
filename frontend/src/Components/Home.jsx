import {
    Button,
    Typography,
    Input,
  } from "@material-tailwind/react";
import {useNavigate} from 'react-router-dom'

export default function () {
    const navigate = useNavigate()
    return (
        <header className="bg-white p-8">
        <div className="grid my-16 w-full lg:h-[34rem] md:h-[14rem] place-items-stretch bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Discover Our Latest Breakthrough!
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Elevate your coding journey and embrace a new era of{" "}
              <span className="text-green-500 leading-snug ">
                innovation
              </span>{" "}
              and{" "}
              <span className="leading-snug text-green-500">
                creativity
              </span>
              .
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-5/6 !text-gray-500 lg:text-lg text-base"
            >
              It's time to break boundaries, stand out, and embrace greatness. Join us on this exciting adventure as we redefine what's possible in the world of coding.
            </Typography>
            <div className="mt-12 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                {/* <Input color="gray" label="Enter your email" size="lg" /> */}
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                  onClick={() => navigate('/about-us')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}