import Image from "next/image";

export function Navbar() {
  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-5xl font-bold">Hi, I'm Sandeep</h2>
          <p className="mt-2 text-amber-50">
            A passionate Full Stack Developer dedicated to building scalable and efficient web applications. 
            I thrive on solving complex problems and actively contribute 
            to open-source projects.
          </p>
        </div>

        <div className="mt-6 sm:mt-0">
          <Image
            alt="Sandeep Kumar Shah"
            src="/images/sandeep.jpg" 
            height={50} 
            width={150}
            className="rounded-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
