import { Button } from "./ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <SectionIcon type="contact" />
            <h2 className="text-neutral-900">Let's Connect</h2>
          </div>
          <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborating on products, 
            or just having a conversation about product management and technology.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="default" 
            className="bg-neutral-900 hover:bg-neutral-800"
            onClick={() => window.location.href = 'mailto:prabhanjan.kulkarni@yahoo.com'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('https://www.linkedin.com/in/prabhanjn-kulkarni/', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('https://github.com/prabhnjan', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('/know-me/resume.pdf', '_blank')}
          >
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}