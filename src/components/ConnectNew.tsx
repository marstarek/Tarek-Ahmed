import React from 'react';
import { Github, Linkedin, Youtube, Send, Facebook, ExternalLink, Mail, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ConnectNew = () => {
  const socialPlatforms = [
    {
      name: "GitHub",
      handle: "@marstarek",
      followers: "331",
      description: "Follow my open source work and code repositories",
      icon: Github,
      link: "https://github.com/marstarek",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      handle: "/in/tarek-ahmed-iti",
      followers: "33.3K",
      description: "Connect professionally and see my career journey",
      icon: Linkedin,
      link: "https://linkedin.com/in/tarek-ahmed-iti",
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      handle: "@tarekahmed",
      followers: "1.66K",
      description: "Subscribe for programming tutorials and tech content",
      icon: Youtube,
      link: "https://youtube.com/@tarekahmed",
      color: "hover:text-red-400"
    },
    {
      name: "Facebook",
      handle: "@Tarek Ahmed",
      followers: "8.75K",
      description: "Connect with me on Facebook for updates and discussions",
      icon: Facebook,
      link: "https://facebook.com/tarek.ahmed.iti",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="connect" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          I'm always excited to connect with fellow developers, creators, and tech enthusiasts. Reach out on any platform you prefer!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="experience-card group">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-card border border-border group-hover:border-muted-foreground transition-colors`}>
                  <platform.icon className={`w-6 h-6 text-foreground ${platform.color} transition-colors`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{platform.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Users className="w-4 h-4" />
                      <span>{platform.followers}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{platform.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">{platform.handle}</span>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Email Section */}
        <div className="experience-card text-center max-w-2xl mx-auto mb-12">
          <Mail className="w-12 h-12 text-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
          <p className="text-muted-foreground mb-4">Contact me for collaborations or inquiries</p>
          <div className="text-foreground font-medium mb-4">tarekahmed1568@gmail.com</div>
          <a
            href="mailto:tarekahmed1568@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Email
          </a>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="experience-card inline-block max-w-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're interested in discussing a project, have a question about my content, 
              or just want to chat about technology, I'd love to hear from you. Choose your preferred 
              platform above or send me a direct email.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="mailto:tarekahmed1568@gmail.com">
                  Send Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/tarek-ahmed-iti" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectNew;