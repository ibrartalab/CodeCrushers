"use client";
import { useEffect, useState } from "react";

export default function CursorCircle() {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    return (
        <div
            className="cursor-circle bg-white bg-opacity-30 backdrop-blur-sm w-3 h-3 rounded-full border border-blue-500 absolute pointer-events-none"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
        />
    );

}