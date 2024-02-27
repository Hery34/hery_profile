"use client";
import { PropsWithChildren } from "react";

export const Text = ({ children }) => {
    return (
        <p className="text-lg text-zinc-400">{children}</p>
    );
};