import React from 'react';
import { Youtube, Users, Eye, Play, ExternalLink } from 'lucide-react';

const YouTubeSection = () => {
  const stats = [
    { icon: Users, label: "Subscribers", value: "1.66K" },
    { icon: Eye, label: "Total Views", value: "24.2K" },
    { icon: Play, label: "Videos", value: "92" }
  ];

  const videos = [
    {
      title: "Contributing to Open Source Projects",
      description: "Complete guide to contributing to open source projects, including finding projects, making pull requests, and collaborating with other developers.",
      duration: "01:52:13",
      views: "5.0K views",
      date: "July 26, 2023",
      tags: ["Git", "GitHub", "Open Source"],
      thumbnail: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png",
      link: "https://youtube.com/playlist?list=PLNknCqb-phEjNHT607vp-4e4o3wgK9SoN&si=sd6GpwX2bJ_2RdV9"
    },
    {
      title: "Frontend Features to include in your Next Website",
      description: "Explore various frontend features and techniques to enhance user experience and performance in your web applications.",
      duration: "01:06:15",
      views: "1.7K views",
      date: "November 17, 2023",
      tags: ["HTML & CSS", "JavaScript", "Front-End"],
      thumbnail: "/lovable-uploads/7a9f2f7c-f53b-49b7-8744-9e45af28a764.png",
      link: "https://youtube.com/playlist?list=PLNknCqb-phEid1ReB-C51t4f_XP0uANES&si=gYuTISAlRXSvsclV"
    },
    {
      title: "Podcast for Software Developers",
      description: "Join us for insightful discussions on software development, industry trends, and career advice for developers.",
      duration: "03:54:01",
      views: "2.2K views",
      date: "November 15, 2023",
      tags: ["Tutorial Hell", "Responsive Design", "Tech Stack", "Project Ideas", "Software Development", "Career Advice"],
      thumbnail: "/lovable-uploads/2d52a687-cec4-467f-a539-c61f87910077.png",
      link: "https://youtube.com/playlist?list=PLNknCqb-phEjGKheIyrNwECpeE1C65nff&si=kdhxkoPypJ-ZNz01"
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">YouTube Content</h2>
        <p className="section-subtitle">Educational programming content helping developers learn and grow</p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <a
            href="https://youtube.com/@ahmed0saber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe to Channel
          </a>
        </div>
        
        {/* Featured Videos */}
        <div className="space-y-8">
          {videos.map((video, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{video.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{video.views}</span>
                    <span>{video.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {video.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        +{video.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Watch Now
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="experience-card inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-2">Join the Community</h3>
            <p className="text-muted-foreground mb-4">Subscribe for various programming tutorials, tech talks, and development tips</p>
            <a
              href="https://youtube.com/@ahmed0saber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;