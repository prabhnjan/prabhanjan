import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-neutral-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Prabhanjan Kulkarni
            </motion.h1>
            <motion.h2 
              className="text-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Product Manager
            </motion.h2>
            <motion.p 
              className="text-neutral-500 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              📍 Hyderabad, India
            </motion.p>
            <motion.p 
              className="text-neutral-600 max-w-2xl pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Specialized in enterprise solutions for healthcare supply chain and 
              performance management systems. Currently building innovative HR tech 
              solutions and mobile applications.
            </motion.p>
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="https://github.com/prabhnjan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prabhanjn-kulkarni/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:prabhanjan.kulkarni@yahoo.com"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Creative Photo Display */}
          <motion.div 
            className="relative h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Animated geometric frame */}
            <div className="relative">
              {/* Rotating border rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  width: "280px",
                  height: "280px",
                  border: "2px solid #3b82f6",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  width: "300px",
                  height: "300px",
                  border: "2px dashed #8b5cf6",
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating dots around photo */}
              <motion.div
                className="absolute w-3 h-3 bg-blue-500 rounded-full"
                style={{ top: "-10px", left: "50%", x: "-50%" }}
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-purple-500 rounded-full"
                style={{ bottom: "-10px", right: "20%" }}
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-cyan-500 rounded-full"
                style={{ top: "30%", left: "-10px" }}
                animate={{
                  x: [-5, 5, -5],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-3 h-3 bg-pink-500 rounded-full"
                style={{ top: "60%", right: "-10px" }}
                animate={{
                  x: [5, -5, 5],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile photo with animated border */}
              <motion.div
                className="relative rounded-full overflow-hidden w-64 h-64 border-4 border-white shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="/prabhanjan/profile.png" 
                  alt="Prabhanjan Kulkarni" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}