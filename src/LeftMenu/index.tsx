import React from "react";
import Card from "src/components/Card";
import Profile from "./Profile/index";

export default function LeftMenu() {
    const skills = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "REACT",
        "VUE",
        "WEBPACK",
        "NODEJS",
    ];
    const hobbys = [
        "READING",
        "SWIMMING",
        "EXERCISE",
        "COOK",
        "MOVIE",
        "MUSIC",
    ];
    return (
        <div className="left-menu">
            <Profile />
            <Card className="quote-box">
                <div className="quote">
                    If you really want it, then to get it.
                </div>
                <div className="quote-hide">
                    If not, don't waste your time into it.
                </div>
            </Card>
            <Card className="skills-box" title="Skills">
                <div className="skill-inner">
                    {skills.map((v) => {
                        return (
                            <i key={v} className="skill">
                                {v}
                            </i>
                        );
                    })}
                </div>
            </Card>
            <Card className="skills-box" title="Hobbys">
                <div className="skill-inner">
                    {hobbys.map((v) => {
                        return (
                            <i key={v} className="skill">
                                {v}
                            </i>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}
