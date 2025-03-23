import { skills } from "@/lib/skills";
import { Button } from "./ui/button";

export function Skills() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((item, index) => (
          <Button key={index} variant="outline" className="px-4 py-2">
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
