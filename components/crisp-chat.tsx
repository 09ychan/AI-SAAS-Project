"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4e7bee51-2310-4851-b668-f153cd42f88a",{
            autoload: true,
        });
    }, []);

    return null;
}