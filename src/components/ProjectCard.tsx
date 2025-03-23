import Image from "next/image";

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
      <div className="p-4">
        <h2 className="text-xs font-semibold">{title}</h2>
        <p className="text-xs">{desc}</p>

        <div className="mt-2">
          <strong>Tech Stack:</strong>
          <p className="text-xs">{textStack.join(", ")}</p>
        </div>

        <div className="mt-2">
          <strong>Links:</strong>
          <p>{url.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
