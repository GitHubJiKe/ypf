import React from "react";
import Card from "../../components/Card";
import avatar from "./avatar.png";

export default function Profile() {
    const infos = [
        {
            label: "AGE",
            value: 29,
        },
        {
            label: "PROFESSION",
            value: "Full Stack",
        },
        {
            label: "STATUS",
            value: "Married",
        },
        {
            label: "LOCATION",
            value: "Beijing",
        },
    ];
    return (
        <Card className="profile">
            <h3>Peter Yuan</h3>
            <div
                className="avatar"
                style={{ backgroundImage: `url(${avatar})` }}
            />
            <div className="infos">
                {infos.map((v) => {
                    return (
                        <div className="info-item" key={v.value}>
                            <div className="label">{v.label}</div>
                            <div className="value">{v.value}</div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
