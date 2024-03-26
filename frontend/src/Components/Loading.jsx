import React from "react";
import { Spinner } from "@material-tailwind/react";
export default function Loading() {
    return (
        <div className="h-[calc(100vh-8rem)] w-screen flex items-center justify-center">
            <Spinner className="h-12 w-12" />
        </div>
    );
}
