
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together?
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-sky-400 focus:ring-sky-400/10"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-sky-400 focus:ring-sky-400/10"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-sky-400 focus:ring-sky-400/10 min-h-[150px]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white transition-colors"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
