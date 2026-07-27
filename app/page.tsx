import { Certificates } from "@/components/main/certificates";
import { Credentials } from "@/components/main/credentials";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Certificates />
      </div>
    </main>
  );
}