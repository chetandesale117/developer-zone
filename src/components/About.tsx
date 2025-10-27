import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code2, Cpu, Database, Globe, Layers } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: Code2, name: "React", color: "text-blue-500" },
    { icon: Cpu, name: "Node.js", color: "text-green-500" },
    { icon: Database, name: "MongoDB", color: "text-emerald-600" },
    { icon: Code2, name: "Redux", color: "text-purple-500" },
    { icon: Layers, name: "Express", color: "text-gray-500" },
    { icon: Database, name: "MySQL", color: "text-blue-600" },
    { icon: Globe, name: "AWS", color: "text-orange-500" },
    { icon: Code2, name: "JavaScript", color: "text-yellow-500" },
    { icon: Cpu, name: "Python", color: "text-blue-400" },
    { icon: Layers, name: "Docker", color: "text-blue-600" },
    { icon: Code2, name: "Java", color: "text-red-500" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learn more about my journey and expertise
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="gradient-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="text-primary" />
                  My Story
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm Chetan Desale, a passionate Full Stack Developer based in Dhule, Maharashtra.
                  Currently pursuing my Master of Computer Applications at SVKM's Institute Of Technology,
                  I specialize in building scalable web applications using the MERN stack.
                </p>    
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans across frontend technologies like React and Redux, backend development
                  with Node.js and Express, databases including MongoDB and MySQL, and cloud platforms like AWS.
                  I'm passionate about creating efficient, user-friendly applications that solve real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="gradient-card rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer group"
                  >
                    <skill.icon
                      className={`w-12 h-12 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform`}
                    />
                    <p className="font-semibold">{skill.name}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 gradient-primary rounded-xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6" />
                  <h4 className="text-xl font-bold">Latest Achievement</h4>
                </div>
                <p className="text-white/90">
                  🏆 2nd Rank at Avishkar 2025 - Engineering Innovation Competition
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
