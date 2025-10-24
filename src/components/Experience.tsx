import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Education Advisor Web Application",
      company: "Full-Stack Development Project (In Progress)",
      period: "Aug 2025 - Present",
      description:
        "Designing a full-stack career guidance platform using React, Node.js, Express, and MongoDB to help students explore courses and career paths.",
      achievements: [
        "Building responsive frontend with React + Tailwind CSS",
        "Developing RESTful backend with Node.js/Express and MongoDB",
        "Implementing AI-powered recommendation engine using scikit-learn and TensorFlow",
      ],
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Crop Recommenddation",
      company: "AI powered project",
      period: "Mar 2025 - Apr 2025",
      description:
        "Developed a responsive web application to help farmer for crop recommendatrtion, modern interface.",
      achievements: [
        "Built with React.js + typescript + vite, supabase(Postgres)",
        "Implemented RESTful API endpoints",
        "Styled with Tailwind CSS and DaisyUI",
      ],
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Real-Time Chat Application",
      company: "MERN Stack Project",
      period: "Jan 2025 - Feb 2025",
      description:
        "Built a real-time messaging platform using MERN stack with Socket.io for instant communication, featuring modern UI and comprehensive chat features.",
      achievements: [
        "Implemented JWT authentication and authorization",
        "Real-time messaging with Socket.io and online user status",
        "Designed responsive UI with Tailwind CSS and DaisyUI",
      ],
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Barber Appointment Booking System",
      company: "MERN Stack Project - Award Winner",
      period: "Sep 2024 - Nov 2024",
      description:
        "Developed a fully responsive barber appointment booking system to minimize booking conflicts and optimize scheduling. Recognized for innovation with 2nd Rank at Avishkar 2025 - Zonal Level.",
      achievements: [
        "Built with React, Node.js, Express, and MongoDB",
        "Won 2nd Rank at Avishkar 2025 - Zonal Level",
        "Designed intuitive UI with Tailwind CSS and DaisyUI",
      ],
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Book Store Web Application",
      company: "MERN Stack Project",
      period: "Mar 2024 - Apr 2024",
      description:
        "Developed a responsive web application to display book collections fetched from MongoDB database with clean, modern interface.",
      achievements: [
        "Built with React.js, Node.js, and MongoDB",
        "Implemented RESTful API endpoints",
        "Styled with Tailwind CSS and DaisyUI",
      ],
    },
    
    {
      type: "education",
      icon: GraduationCap,
      title: "Master of Computer Applications",
      company: "SVKM's Institute Of Technology, Dhule",
      period: "Aug 2024 - Jul 2026",
      description:
        "Pursuing advanced studies in computer applications, focusing on modern software development practices and emerging technologies.",
      achievements: [
        "Currently pursuing",
        "Focus on advanced software development",
        "Working on innovative projects",
      ],
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Science in Computer Science",
      company: "S.S.V.P.S. College of Shindkheda",
      period: "Jun 2021 - Apr 2024",
      description:
        "Completed bachelor's degree with exceptional academic performance, building strong foundation in computer science fundamentals.",
      achievements: [
        "CGPA: 9.47/10",
        "Department Topper (9.90 CGPA in principal subjects)",
        "Graduated with distinction",
      ],
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Higher Secondary Certificate (HSC)",
      company: "MHSS Highschool and Jr. College Shindkheda",
      period: "Jun 2020 - Mar 2021",
      description:
        "Completed higher secondary education with strong academic performance in science stream.",
      achievements: [
        "Percentage: 84.83%",
        "Science stream",
        "Strong academic performance",
      ],
    },
    {
      type: "achievement",
      icon: Award,
      title: "2nd Rank - Avishkar 2025 Zonal Level",
      company: "Engineering Innovation Competition",
      period: "2025",
      description:
        "Secured 2nd position at Avishkar 2025 Zonal Level with the Barber Appointment Booking System project, and advanced to participate at University Level.",
      achievements: [
        "Won 2nd Rank at Zonal Level",
        "Participated at University Level",
        "Recognized for innovative solution",
      ],
    },
    {
      type: "achievement",
      icon: Award,
      title: "Department Topper",
      company: "Bachelor of Computer Science",
      period: "2024",
      description:
        "Achieved top position in the department with exceptional academic performance in principal subjects.",
      achievements: [
        "CGPA: 9.90 in principal subjects",
        "Overall CGPA: 9.47",
        "Department Topper recognition",
      ],
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "work":
        return "text-blue-500";
      case "education":
        return "text-green-500";
      case "achievement":
        return "text-purple-500";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0
                      ? "md:pr-1/2 md:text-right"
                      : "md:pl-1/2 md:ml-auto md:text-left"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10`}
                  ></div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 gradient-card rounded-2xl p-6 shadow-lg hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}
                      >
                        <exp.icon className={`w-6 h-6 ${getIconColor(exp.type)}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-left">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 text-left">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
