"use client";
import { PropsWithChildren } from "react";

export const Title = ({ children }) => {
    return (
        <h2 className="text-6xl font-bold text-zinc-800 mb-4">{children}</h2>
    );
};