import React from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Send,
  Facebook,
  ExternalLink,
  Mail,
  Users,
  PhoneCall,
  Code,
  Link,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConnectNew = () => {
  const socialPlatforms = [
    {
      name: 'GitHub',
      handle: '@marstarek',
      description: 'Follow my open source work and code repositories',
      icon: Github,
      link: 'https://github.com/marstarek',
      bgLight: 'bg-gray-800',
      bgDark: 'dark:bg-gray-900',
    },
    {
      name: 'LinkedIn',
      handle: '/in/tarek-ahmed-iti',
      description: 'Connect professionally and see my career journey',
      icon: Linkedin,
      link: 'https://linkedin.com/in/tarek-ahmed-iti',
      bgLight: 'bg-[#0077b5]',
      bgDark: 'dark:bg-[#004471]',
    },
    {
      name: 'CodePen',
      handle: '@marstarek',
      description: 'See interactive front-end experiments and snippets',
      icon: Code,
      link: 'https://codepen.io/marstarek',
      bgLight: 'bg-black',
      bgDark: 'dark:bg-gray-800',
    },
     {
    name: "Email",
    handle: "tarekahmed1568@gmail.com",
    description: "Contact me for collaborations or inquiries",
    icon: Mail,
    link: "mailto:tarekahmed1568@gmail.com",
   color: "hover:text-red-400",
    bgLight: "bg-red-100",
    bgDark: "bg-red-800"
  }
  ];

  const phoneNumbers = [
    { number: '(+20) 01129689368' },
    { number: '(+20) 01507033970' },
  ];

  return (
    <section id="connect" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Whether you have a project in mind, want to collaborate, or just want to chat about tech — I'm always open to connect. Feel free to reach out on any platform that suits you!
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="experience-card group">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg transition-colors border border-border group-hover:border-muted-foreground 
                    ${platform.bgLight} ${platform.bgDark}`}
                >
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
               <p className="text-lg font-semibold text-foreground mb-1">{platform.name}</p>
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

        {/* Phone Numbers */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'> 
        <div className="experience-card text-center max-w-2xl w-full mx-auto mb-12">
          <PhoneCall className="w-12 h-12 text-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
          <p className="text-muted-foreground mb-4">You can also reach me directly by phone:</p>
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="text-foreground font-medium mb-2">
              {phone.number}
            </div>
          ))}
        </div>
 <div className="text-center experience-card max-w-2xl w-full mx-auto mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">Download My CV</h3>
            <p className="text-muted-foreground mb-4">Get the latest version of my resume</p>
            <a
              href="./images/Tarek Ahmed Elrashidy cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors"
            >
              Download CV
            </a>
         
        </div>
        </div>

        <footer className="bg-background border-t border-border pt-12 text-foreground">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tarek Ahmed</h2>
          <p className="text-muted-foreground text-sm">
            Front-End Developer passionate about creating interactive web experiences.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <div className="flex flex-col space-y-2">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Skills</a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Experience</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Education</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Projects</a>
            <a href="#connect" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Connect</a>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              <a href="https://github.com/marstarek" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <a href="https://linkedin.com/in/tarek-ahmed-iti" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <a href="https://codepen.io/marstarek" target="_blank" rel="noopener noreferrer" className="hover:underline">CodePen</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:tarekahmed1568@gmail.com" className="hover:underline">Email Me</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tarek Ahmed. All rights reserved.
      </div>
    </footer>

     
      </div>
    </section>
  );
};

export default ConnectNew;
