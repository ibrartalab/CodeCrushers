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
            className="cursor-circle bg-gradient-to-br from-blue-500 to-purple-500 w-6 h-6 rounded-full absolute pointer-events-none mix-blend-screen animate-pulse"
            style={{ left: cursorPosition.x - 12, top: cursorPosition.y - 12 }}
        />
    );
}
