import { Card } from "./ui/card";
import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";
import { Lightbulb, Wrench, Briefcase } from "lucide-react";

const skillCategories = [
  {
    category: "Product Management",
    icon: Lightbulb,
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    cardBg: "bg-gradient-to-br from-blue-50 to-cyan-50",
    fullWidth: true,
    skills: [
      "Product Strategy & Roadmapping",
      "User Research & Testing",
      "Feature Prioritisation",
      "Product Experimentation",
      "Stakeholder Management",
      "Product Analytics",
      "Product Revenue & Retention",
      "Cross-Functional Leadership"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    iconBg: "bg-white",
    iconColor: "text-neutral-700",
    cardBg: "bg-white",
    fullWidth: false,
    skills: [
      "Figma Make",
      "Atlassian: Jira & Confluence",
      "Claude & Claude Code",
      "Amplitude",
      "ChatGPT & Codex",
      "Lucid & BPMN",
      "Cursor"
    ]
  },
  {
    category: "Domain Expertise",
    icon: Briefcase,
    iconBg: "bg-white",
    iconColor: "text-neutral-700",
    cardBg: "bg-white",
    fullWidth: false,
    skills: [
      "Healthcare Supply Chain",
      "Performance Management Systems",
      "Core HR Solutions",
      "Enterprise SaaS",
      "B2B Solutions"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <SectionIcon type="skills" />
          <motion.h2 
            className="text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
        </div>

        <div className="space-y-6">
          {/* Product Management - Full Width with BLUE icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`p-8 border-neutral-200 ${skillCategories[0].cardBg}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`${skillCategories[0].iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <Lightbulb className={`w-6 h-6 ${skillCategories[0].iconColor}`} />
                </div>
                <h3 className="text-neutral-900 text-xl font-semibold">{skillCategories[0].category}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                {skillCategories[0].skills.map((skill, i) => (
                  <div key={i} className="flex items-start text-neutral-700">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tools & Domain Expertise - Side by Side with WHITE icons */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.slice(1).map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <Card className={`p-8 border-neutral-200 ${category.cardBg} h-full`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${category.iconBg} w-10 h-10 rounded-lg flex items-center justify-center shadow-sm border border-neutral-100`}>
                      <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-neutral-900 text-lg font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-start text-neutral-700">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}