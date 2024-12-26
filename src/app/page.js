import AdmissionCourse from "@/components/sections/AdmissionCourse";
import ClassNote from "@/components/sections/ClassNote";
import DownloadApp from "@/components/sections/DownloadApp";
import Hero from "@/components/sections/Hero";
import JobPerpCourse from "@/components/sections/JobPerpCourse";
import OnlineBatch from "@/components/sections/OnlineBatch";
import SchoolBatch from "@/components/sections/SchoolBatch";
import SkillsCourse from "@/components/sections/SkillsCourse";
import SuccessNumber from "@/components/sections/SuccessNumber";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <OnlineBatch />
      <SchoolBatch />
      <SkillsCourse />
      <AdmissionCourse />
      <JobPerpCourse />
      <Testimonials />
      <ClassNote />
      <SuccessNumber />
      <DownloadApp />
    </div>
  );
}
