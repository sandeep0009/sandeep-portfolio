import { projects } from "@/lib/project";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            desc={item.desc}
            textStack={item.textStack}
            url={item.url}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
