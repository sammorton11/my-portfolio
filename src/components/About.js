import React from "react";

export default function About() {

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grod md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Sam.
                        <br className="hidden lg:inline-block" /> I love to build things.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        In the last two years, I've built many mobile and web applications using various technologies. I'm very passionate about software development and I've learned a lot by taking on freelance projects for local businesses in Oklahoma City. 
                    </p>
                    <p className="mb-8 leading-relaxed"> 
                        I work with a range of technologies such as Go, JavaScript, TypeScript, React, HTML, CSS, Python, Kotlin and Java. During the day, I work as a QA tester, and in the evenings, I'm working on an online Computer Science degree at SNHU.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transform transition-transform duration-300 hover:scale-105">
                            Hire Me 
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transform transition-transform duration-300 hover:scale-105">
                            See My Past Work
                        </a>
                    </div>
                    <a
                        href="https://bmc.link/sammorton1e"
                        class="inline-flex text-white bg-purple-400 border-0 py-4 px-10 focus:outline-none rounded text-lg mt-5 text-center transform transition-transform duration-300 hover:scale-105 hover:border-10" style={{ width: '220px' }}>
                        Buy me a coffee
                    </a>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="person with laptop image"
                        src="./startup.svg"
                    />
                </div>
            </div>
        </section>
    );
}
