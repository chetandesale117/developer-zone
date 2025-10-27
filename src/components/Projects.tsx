import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
  title: "Crop Recommendation",
  description:
    "An intelligent crop recommendation system leveraging machine learning to suggest the best crops based on soil type, weather conditions, and region. Built with React, Node.js, Express, MongoDB, TensorFlow, and scikit-learn for smart agricultural decision-making.",
  image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80",
  technologies: ["React", "TypeScript", "SupaBase", "TensorFlow", "scikit-learn"],
  liveUrl: "https://crop-recommendation-inky.vercel.app/",
  githubUrl: "https://github.com/chetandesale117/crop-recommendation",
},
{
  title: "Education Advisor Web Application",
  description:
    "A full-stack career guidance platform helping students explore courses and career paths. Features AI-powered recommendations using scikit-learn and TensorFlow for personalized course suggestions.",
  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  technologies: ["React", "TypeScript", "SupaBase", "TensorFlow", "scikit-learn"],
  liveUrl: "https://ai-basedguidance.vercel.app/",
  githubUrl: "https://github.com/chetandesale117/career-guidance-117",
}

,
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time messaging platform using MERN stack with Socket.io for instant communication. Features JWT authentication, online user status, typing indicators, and group chat functionality.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Zustand", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/chetandesale117/chat-app",
    },
    {
      title: "Barber Appointment Booking System",
      description:
        "Fully responsive barber appointment booking system that minimizes booking conflicts and optimizes scheduling. Won 2nd Rank at Avishkar 2025 - Zonal Level for innovation.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Book Store Web Application",
      description:
        "Responsive web application displaying book collections fetched from MongoDB database. Features RESTful API endpoints and modern, clean interface designed with Tailwind CSS and DaisyUI.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
      liveUrl: "#",
      githubUrl: "https://github.com/chetandesale117/Book-Store",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-card rounded-2xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
