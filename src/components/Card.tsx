import React from "react";
import classnames from "classnames";
interface ICardProps {
    children?: any;
    className?: string;
    title?: string;
}

export default function Card({ children, className, title }: ICardProps) {
    return (
        <div className={classnames("card", className)}>
            {title && <h3 className="title">{title}</h3>}
            {children}
        </div>
    );
}
