import { Certificates } from "@/components/main/certificates";
import { Credentials } from "@/components/main/credentials";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Footer } from "@/components/main/footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />
      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Certificates />
      </div>
      <Footer />
    </main>
  );
}