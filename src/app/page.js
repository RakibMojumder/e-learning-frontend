import Hero from "@/components/sections/Hero";
import OnlineBatch from "@/components/sections/OnlineBatch";
import SchoolBatch from "@/components/sections/SchoolBatch";
import SkillsCourse from "@/components/sections/SkillsCourse";

export default function Home() {
  return (
    <div>
      <Hero />
      <OnlineBatch />
      <SchoolBatch />
      <SkillsCourse />
    </div>
  );
}
