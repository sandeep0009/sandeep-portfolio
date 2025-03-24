import Image from "next/image";
import { Button } from "./ui/button";

type ProjectProps = {
  imageUrl: string;
  title: string;
  desc: string;
  textStack: string[];
  url: string[];
};

export function ProjectCard({ imageUrl, title, desc, textStack, url }: ProjectProps) {
  return (
    <div className="w-72 h-auto rounded-md border border-white overflow-hidden">
      <div className="relative w-full h-40">
        <Image alt="Project Image" src={imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-xs font-semibold">{title}</h2>
        <p className="text-xs">{desc}</p>

        <div className="mt-2 flex flex-wrap gap-1">
          {textStack.map((tech, index) => (
            <Button key={index} className="bg-[#54473F] h-6 text-[10px] w-auto text-white">
              {tech}
            </Button>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {url.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black h-6 text-[10px] w-auto px-2 py-1 rounded"
            >
              {index === 0 ? "Website" : "Source Code"}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}