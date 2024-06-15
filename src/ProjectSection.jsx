import React from 'react';
import { cards } from "./ProjectCards";
import Doraemon from './assets/doraemon.webp';
import Pikachu from './assets/pikachu.jpeg';
import Hospital from './assets/hospital.jpg';
import Shopify from './assets/shopify.jpeg';

function ProjectCard({ image, title, desc }) {
    return (
        <div className="text-white w-[500px] flex flex-col items-center relative">
            <div className="flex justify-center items-center h-72 w-full overflow-hidden rounded-xl hover:opacity-60 transition-all ease-in-out duration-300" style={{ backgroundImage: `url(${image})`, backgroundSize:"cover" }}>
                <div className="absolute inset-0 opacity-0 flex  items-center justify-center hover:opacity-100 transition-opacity duration-300 w-full h-full gap-4">
                    <button className="bg-slate-900 p-2 rounded-md">Code</button>
                    <button className="bg-slate-900 p-2 rounded-md">Live Preview</button>
                </div>
            </div>
            <div>
                <h3 className="text-center font-bold text-2xl mt-4">{title}</h3>
                <p className="text-center">{desc}</p>
            </div>
        </div>
    );
}


function Projects() {
    return (
        <>
            <h2 className="text-center text-4xl my-12">My Projects</h2>
            <div className="grid grid-cols-3 gap-32 mx-14 mx-auto gap-4">
                {cards.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <ProjectCard image={item.image} title={item.title} desc={item.desc} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;
