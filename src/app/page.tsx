import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Tattoo Design Website",
    description: "A website for exploring and sharing tattoo designs, built with Next.js and modern web technologies.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Supabase"],
    imageUrl: "/images/tattoowebsite.jpeg",
    projectUrl: "https://tattoo-website-eta.vercel.app",
    githubUrl: "https://github.com/Bboyy99/TattooWebsite",
  },
  {
    title: "BlogUniversel",
    description: "A blog website where users can create, read, update, and delete posts.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/bloguniversel.jpeg",
    projectUrl: "https://bloguniversel.onrender.com/",
    githubUrl: "https://github.com/Bboyy99/BlogUniversel",
  },
  // Add more projects...
];

// Add your education details
const education = {
  school: "La Cité",
  program: "Computer Programming",
  duration: "2021-2023",
  location: "Ottawa, ON",
  highlights: [
    "2-year diploma program",
    "Focused on practical programming skills",
  ]
};

// Add your technical skills
const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
  ],
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
  ],
  "Tools & Technologies": [
    "Git",
    "VS Code",
    "MongoDB",
    "MySQL",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Brandon
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Software Developer passionate about building impactful applications
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m a recent graduate from La Cité&apos;s Computer Programming program, 
              where I developed a strong foundation in software development. 
              Since graduating in 2023, I&apos;ve been actively working on side projects 
              to expand my skills and create meaningful solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div 
                  key={category} 
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold">{education.school}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-2">{education.program}</p>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                <span>{education.duration}</span>
                <span>{education.location}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {education.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Updated Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Updated Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// function SkillCard({ title }: { title: string }) {
//   return (
//     <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//       <h3 className="font-semibold text-center">{title}</h3>
//     </div>
//   );
// }
