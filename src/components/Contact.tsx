
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
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-2xl">
        <h2 className="section-title text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              required
              className="w-full min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
