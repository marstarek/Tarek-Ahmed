import React from 'react';
import { ExternalLink, Clock, Calendar } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Multi-Threading With The Single-Threaded JavaScript",
      description: "Exploring how JavaScript handles multi-threading using Web Workers, with practical examples and performance considerations.",
      source: "EqraaTech",
      date: "28 Mar, 2024",
      readTime: "2 min read",
      tags: ["JavaScript", "Multi-Threading", "Web Workers"],
      link: "https://eqraatech.com/multi-threading-with-the-single-threaded-javascript/"
    },
    {
      title: "Cross-Tab Communication with Broadcast Channel API",
      description: "Exploring the Broadcast Channel API for seamless communication between browser tabs, with practical examples and use cases.",
      source: "EqraaTech",
      date: "27 Feb, 2025",
      readTime: "5 min read",
      tags: ["JavaScript", "Web APIs", "Broadcast Channel"],
      link: "https://eqraatech.com/cross-tab-communication-with-broadcast-channel-api/"
    },
    {
      title: "CSS Sprites",
      description: "Comprehensive guide to CSS sprites, covering techniques, benefits, and implementation strategies.",
      source: "EqraaTech",
      date: "5 Mar, 2024",
      readTime: "3 min read",
      tags: ["CSS", "Web Design", "Performance"],
      link: "https://eqraatech.com/css-sprites/"
    },
    {
      title: "Flexbox vs. Grid in CSS",
      description: "Comparative analysis of Flexbox and Grid layout systems in CSS, with practical examples and use cases.",
      source: "EqraaTech",
      date: "9 Dec, 2024",
      readTime: "5 min read",
      tags: ["CSS", "Web Design"],
      link: "https://eqraatech.com/flexbox-vs-grid-in-css/"
    },
    {
      title: "How to write better Git commit messages",
      description: "Comprehensive guide to writing effective Git commit messages, covering best practices and common pitfalls.",
      source: "Dev.to",
      date: "Mar 26, 2023",
      readTime: "2 min read",
      tags: ["Git", "Version Control"],
      link: "https://dev.to/ahmed0saber/how-to-write-better-git-commit-messages--40al"
    },
    {
      title: "How to gain experience without work",
      description: "Practical strategies for gaining experience and building skills without traditional employment.",
      source: "Medium",
      date: "Mar 23, 2023",
      readTime: "2 min read",
      tags: ["Career Development", "Experience"],
      link: "https://ahmed0saber.medium.com/how-to-gain-experience-without-work-4dc954627a45"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Articles & Writings</h2>
        <p className="section-subtitle">Sharing knowledge and insights through technical writing</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="project-card group">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="font-medium">{article.source}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {article.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors text-sm"
                >
                  Read Article
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;