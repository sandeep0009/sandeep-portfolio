import { ExperienceItem } from "./ExperienceItem";


export function Experience() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <ExperienceItem
        company="Vebholic Pvt Ltd"
        role="Full Stack Developer"
        duration="July 2024 - Present"
        description="Developed and maintained scalable front-end and back-end features using React, Node.js, and Express. Implemented bug fixes and enhancements based on Jira tickets. Integrated GrapeJS for dynamic content editing within the product."        initial="V"
      />
      <ExperienceItem
        company="Shivam Pvt. Ltd"
        role="Full Stack Intern"
        duration="Jan 2024 - July 2024"
        description="Refactored and migrated the entire codebase from React and Node.js to Next.js for improved performance and SEO. Collaborated with cross-functional teams to ensure seamless integration and deployment."        initial="S"
      />
    </div>
  );
}
