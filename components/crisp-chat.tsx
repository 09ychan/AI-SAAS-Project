"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("5b0db96d-c642-4727-a7c3-eb0f1aa02561");
    }, []);

    return null;
}