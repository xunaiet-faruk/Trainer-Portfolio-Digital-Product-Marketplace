import CategorySection from "./components/home/CategorySection";
import CoursesSection from "./components/home/CourseSection";
import Hero from "./components/home/Hero";



export default function Home() {
  return (
    <div>
      <Hero/>
      <CategorySection/>
      <CoursesSection/>
    </div>
  );
}
