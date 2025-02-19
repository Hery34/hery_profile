"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation = () => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="container flex items-center justify-between p-6 mx-auto">
                    <Link
                        href="/"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>

                    {/* Hamburger Menu for mobile mode */}
                    <button
                        className="lg:hidden text-zinc-400 hover:text-zinc-100"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex justify-between gap-8">
                        <Link
                            href="/projects"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/packages"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Packages
                        </Link>
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/aboutMe"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            About me
                        </Link>
                        <Link
                            href="/cv"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            CV
                        </Link>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden ${
                        isMenuOpen ? "block" : "hidden"
                    } bg-zinc-900/95 border-b border-zinc-800`}
                >
                    <nav className="flex flex-col space-y-4 p-6">
                        <Link
                            href="/projects"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/packages"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Packages
                        </Link>
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/aboutMe"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            About me
                        </Link>
                        <Link
                            href="/cv"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            CV
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
