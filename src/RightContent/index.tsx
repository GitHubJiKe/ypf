import React from "react";
import Card from "src/components/Card";

const Link = ({ href, text }: { href: string; text: string }) => (
    <a href={href} target={"_blank"}>
        {text}
    </a>
);

export default function RightContent() {
    return (
        <div className="right-content">
            <Card title="Introduction">
                <article>
                    I'm a Frontend Developer who have been worked for 6 years in
                    China. I graduated from university at 2016, then I started
                    to have a intern job as a Android Developer at{" "}
                    <Link href="https://www.inke.cn/" text="INKE" />. After 4
                    months, I left INKE and went to a company named{" "}
                    <Link href="https://www.boldseas.com/" text="Boldseas" />,
                    and started to learn how to develop web pages with HTML /
                    CSS / JAVASCRIPT.
                </article>
                <article>
                    That was my first step into Frontend Develop, I worked there
                    for 4 years, due to the Econemy War between China and USA,
                    Boldseas’s business was affected. So I left{" "}
                    <Link href="https://www.boldseas.com/" text="Boldseas" />{" "}
                    and found a new opportunity in{" "}
                    <Link
                        href="https://www.itigerup.com/?lang=en_US"
                        text={"TIGER BROKER"}
                    />
                    .
                </article>
                <article>
                    When I was in{" "}
                    <Link
                        href="https://www.itigerup.com/?lang=en_US"
                        text={"TIGER BROKER"}
                    />
                    , our team still use React, during that I made a rapid
                    progress in my all kinds skills, I hope that I can get some
                    big challenge, but there's no response. So I choosed
                    leaving.
                </article>
                <article>
                    Then i joined company{" "}
                    <Link href="https://about.meituan.com/en" text="MeiTuan" />,
                    this is a big company in China, and after I joined I started
                    to learn Vue 'cause my team use it. Now I have been here
                    over a year and still used Vue to build web pages.
                    <br /> That's all about me. If you have some good job
                    opportunities or ideas, welcome to{" "}
                    <Link text="contact me" href="mailto:ypf9319@gmail.com" />.
                </article>
            </Card>
        </div>
    );
}
