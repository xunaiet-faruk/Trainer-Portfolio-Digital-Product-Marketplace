import CategorySection from "./components/home/CategorySection";
import CoursesSection from "./components/home/CourseSection";
import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import Testimonial from "./components/home/Testimonial";



export default function Home() {
  return (
    <div>
      <Hero/>
      <CategorySection/>
      <CoursesSection/>
      <Testimonial/>
      <Products/>
    </div>
  );
}
