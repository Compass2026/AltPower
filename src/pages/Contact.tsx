import { motion } from "framer-motion";
import GHLForm from "../components/ui/GHLForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-black pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-lime-primary font-black uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Contact <span className="text-lime-primary">Us</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Ready to upgrade your infrastructure? Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-4 md:p-8 border border-white/10"
        >
          <GHLForm />
        </motion.div>
      </div>
    </div>
  );
}
