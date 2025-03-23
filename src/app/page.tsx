
import { Education } from "@/components/Education";
import { Exprience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Project";
import { Skills } from "@/components/Skills";
import {Contact} from "@/components/Contact"


export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-20">
      <Navbar/>
      <Exprience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
