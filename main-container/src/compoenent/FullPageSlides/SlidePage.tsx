import React from "react";

interface SlideProps {
    className: string;
    title: string;
    imageSrc: string;
}

export default function SlidePage({ className, title, imageSrc }: SlideProps) {
    return (
        <div className={`slides ${className}`}>
            <img src={imageSrc} alt={imageSrc} />
            <h2>{title}</h2>
        </div>
    );
}