import Image from "next/image";

export function Navbar() {
  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-5xl font-bold">Hi, I&apos;m Sandeep</h2>
          <p className="mt-2 text-gray-500 py-6">
            A passionate Full Stack Developer dedicated to building scalable and efficient web applications. 
            I thrive on solving complex problems and actively contribute 
            to open-source projects.
          </p>
        </div>

        <div className="mt-6 sm:mt-0">
          <Image
            alt="Sandeep Kumar Shah"
            src="/images/sandeep.jpg" 
            width={400}
            height={400}
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  );
}