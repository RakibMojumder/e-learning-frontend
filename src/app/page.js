import AdmissionCourse from "@/components/sections/AdmissionCourse";
import Hero from "@/components/sections/Hero";
import JobPerpCourse from "@/components/sections/JobPerpCourse";
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
      <AdmissionCourse />
      <JobPerpCourse />
    </div>
  );
}
