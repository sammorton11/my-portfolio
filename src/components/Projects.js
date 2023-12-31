import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
   return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
         <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
               <CodeIcon className="mx-auto inline-block w-12 mb-4" />
               <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
                  Apps I've Built
               </h1>
               <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
            </div>
            <div className="flex flex-wrap">
               {projects.map((project) => (
                  <a
                     href={project.link}
                     key={project.image}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="sm:w-1/2 w-100 p-4">
                     <div className="flex relative group">
                        <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 transition-colors duration-300 
                group-hover:bg-gray-600 group-hover:text-black">

                           <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                              {project.subtitle}
                           </h2>
                           <h1 className="title-font text-lg font-medium text-white mb-3 group-hover:text-purple-300">
                              {project.title}
                           </h1>
                           <p className="leading-relaxed group-hover:text-green-200">{project.description}</p>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
}
