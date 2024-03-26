import { Typography } from "@material-tailwind/react";

export default function () {
    return (
        <div className="text-center p-8 min-h-[calc(100vh-19rem)] flex flex-col items-center justify-center">
            <Typography variant='h1' color="blue-gray" >Error 404</Typography>
            <Typography variant='h4' color="blue-gray">Sorry, We Misplaced That Page</Typography>
        </div>
    );
}