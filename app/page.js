import dynamic from "next/dynamic";


const About = dynamic(()=> import( "./components/about/page"))
const Contact = dynamic(()=>import("./components/contact/page"))
const Education = dynamic(()=>import("./components/education/page"))
const Hero = dynamic(()=>import("./components/hero/page"))
const Projects = dynamic(()=>import("./components/projects/page"))
const Skills = dynamic(()=>import("./components/skills/page"))

export default function Home() {
  return (
<>
<Hero/>
<About/>
<Education/>
<Skills/>
<Projects/>
<Contact/>
</>
  );
}
