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
            Over the past two years, I have been proficient in native Android development, successfully building Android applications. However, my journey has taken an exciting turn as I recently discovered a newfound passion for web development. Currently, I find great enjoyment in working with Python, Typescript, React, and .Net C# for back end development. 
          </p>
          <p className="mb-8 leading-relaxed">
             I have gained valuable experience building projects with these web technologies and creating multiple native Android applications that connect to REST APIs or local databases. While I used to rely on JetBrains IntelliJ IDEA or Android Studio, I have now made the switch to NeoVim for web application development. Additionally, I am currently working as a QA tester while pursuing a Computer Science degree online at SNHU in the evenings.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div> 
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="person coding image"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
