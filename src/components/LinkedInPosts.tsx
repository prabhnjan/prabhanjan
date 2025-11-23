import { motion } from "motion/react";
import { Linkedin, ExternalLink } from "lucide-react";

export function LinkedInPosts() {
  const posts = [
    {
      id: 1,
      content: "Honestly, fear of AI is turning into a full self-fulfilling prophecy. The more you avoid it, the faster it replaces you. 👀\n\nIt's no longer just simple denial; it's active self-sabotage.\n\nLet me explain: My observation is that people are so afraid of AI making them irrelevant, they're not even trying to learn the skills that would keep them relevant.\n\nThat fear-driven inaction? It's the very thing making the fear come true.",
      link: "https://www.linkedin.com/feed/", // Replace with actual post URL
    },
    {
      id: 2,
      content: "Jurassic Park had everything: technology, spectacle & praise; but one broken fence turned it into chaos.\n\nYour product is the same. Don't just guard the gates. Guard the damn cracks!",
      link: "https://www.linkedin.com/feed/", // Replace with actual post URL
    },
  ];

  return (
    <section id="linkedin" className="py-12 px-6 bg-white relative overflow-hidden">
      {/* Background decoration - THIS IS THE TINT */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Linkedin className="w-6 h-6 text-blue-600" />
            <h2 className="text-neutral-900">Thought Leadership</h2>
          </div>
          <p className="text-neutral-600 text-sm">
            Sharing insights on AI, user experience & everything in between
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Post Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <p className="text-neutral-500 text-sm">Prabhanjan Kulkarni</p>
                  <ExternalLink className="w-3 h-3 ml-auto text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-neutral-700 text-sm line-clamp-4 whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA to view all posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://www.linkedin.com/in/yourprofile/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group text-sm"
          >
            <span>View All My Posts on LinkedIn</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}