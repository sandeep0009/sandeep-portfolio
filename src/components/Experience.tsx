import { ExperienceItem } from "./ExperienceItem";


export function Experience() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <ExperienceItem
        company="Helium"
        role="Software Engineer"
        duration="May 2025 - Present"
        description="Building Helium, an e-commerce analytics and AI-powered recommendation platform, with Bun, Elysia.js, TypeScript, Prisma and PostgreSQL. Developed autonomous AI agents (Vercel AI SDK) with tool capabilities, memory and task delegation, integrated Shopify and other commerce platforms, and built BullMQ background jobs, cron pipelines and a WhatsApp agent integration."
        initial="H"
      />
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
