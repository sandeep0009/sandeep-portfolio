import { projects } from "@/lib/project";
import { ProjectCard } from "./ProjectCard";


export function Projects(){
    return(

        <div className="p-6">
            <h2 className="text-xl">Projects</h2>

            <div className="grid grid-cols-2 gap-20">

            {
                projects.map((item)=>(
                    <ProjectCard title={item.title} desc={item.desc} textStack={item.textStack} url={item.url} imageUrl={item.imageUrl}/>
                ))
            }
            </div>

           


        </div>
    )
}