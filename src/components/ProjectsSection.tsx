import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const allProjects = [
    {
      title: "Andalus programming education center",
      description: "A full website for programming education with modern design.",
      duration: "2 Months",
      date: "May 2023",
      tags: ["React", "Tailwind", "Netlify"],
      thumbnail: "/images/projects/img1.png",
      link: "https://alandalous.netlify.app/"
    },
    {
      title: "Hotel Booking Website",
      description: "A booking system with search and filtering functionality.",
      duration: "1.5 Months",
      date: " 2023",
      tags: ["React", "Vercel", "Tailwind"],
      thumbnail: "/images/projects/img40.png",
      link: "https://hotel-booking-website-khaki.vercel.app/"
    },
    {
      title: "Portfolio",
      description: "Professional portfolio website showcasing my work.",
      duration: "2 Weeks",
      date: "2023",
      tags: ["React", "Tailwind"],
      thumbnail: "/images/projects/img43.png",
      link: "https://jealous-beef.surge.sh/"
    },
    {
      title: "Mars Company Website",
      description: "Responsive company website with Bootstrap.",
      duration: "3 Weeks",
      date: "2022",
      tags: ["HTML", "CSS", "Bootstrap"],
      thumbnail: "/images/projects/img2.png",
      link: "https://625141e3e620cf7790a6053a--peaceful-dragon-bce0fd.netlify.app/"
    },
    {
      title: "Netflix Clone",
      description: "A Netflix landing page clone using SASS and Gulp.",
      duration: "1 Month",
      date: "March 2023",
      tags: ["SASS", "Gulp", "Bootstrap"],
      thumbnail: "/images/projects/img4.png",
      link: "https://marstarek.github.io/Netflix-using-sass-Gulp-bootstrap/"
    },
    {
      title: "React Movies Platform",
      description: "Movie app built using TMDB API and React.",
      duration: "2 Weeks",
      date: "Feb 2023",
      tags: ["React", "API", "Surge"],
      thumbnail: "/images/projects/img10.png",
      link: "https://industrious-digestion.surge.sh/"
    },
    {
      title: "Developers Community",
      description: "A multilingual community landing page.",
      duration: "3 Weeks",
      date: "Jan 2023",
      tags: ["SASS", "jQuery", "Multilang"],
      thumbnail: "/images/projects/img7.png",
      link: "https://6251429ee43dfb790053593d--amazing-syrniki-9006f7.netlify.app/"
    },
    {
      title: "HCMS System",
      description: "Healthcare management system project.",
      duration: "3 Months",
      date: "Dec 2022",
      tags: ["PHP", "MySQL", "Bootstrap"],
      thumbnail: "/images/projects/img12.png",
      link: "https://github.com/marstarek/new-hcms"
    },
    {
      title: "ITI Alumni Network",
      description: "Platform for ITI alumni connections.",
      duration: "2 Months",
      date: "Nov 2022",
      tags: ["PHP", "MySQL", "JavaScript"],
      thumbnail: "/images/projects/img13.png",
      link: "https://github.com/marstarek/ITIian"
    },
    {
      title: "React Weather App",
      description: "Weather application with React and OpenWeather API.",
      duration: "1 Week",
      date: "Oct 2022",
      tags: ["React", "API", "Heroku"],
      thumbnail: "/images/projects/img17.png",
      link: "https://weather-app1997.herokuapp.com/"
    },
    {
      title: "Bootstrap Website",
      description: "Responsive website built with Bootstrap.",
      duration: "1 Week",
      date: "Sept 2022",
      tags: ["Bootstrap", "HTML", "CSS"],
      thumbnail: "/images/projects/img20.png",
      link: "https://github.com/marstarek/bootstrap-website"
    },
    {
      title: "Company Portfolio",
      description: "A corporate-style HTML CSS portfolio website.",
      duration: "3 Weeks",
      date: "Aug 2022",
      tags: ["HTML", "CSS", "GitHub Pages"],
      thumbnail: "/images/projects/img23.png",
      link: "https://marstarek.github.io/html-css-website/"
    },
    {
      title: "Eastern Food Website",
      description: "Restaurant website showcasing Egyptian cuisine.",
      duration: "2 Weeks",
      date: "July 2022",
      tags: ["HTML", "CSS", "JavaScript"],
      thumbnail: "/images/projects/img24.png",
      link: "https://marstarek.github.io/koshary/index"
    },
    {
      title: "Mobile Phone Company",
      description: "Website for a mobile phone retailer.",
      duration: "2 Weeks",
      date: "June 2022",
      tags: ["HTML5", "CSS3"],
      thumbnail: "/images/projects/img27.png",
      link: "https://marstarek.github.io/css3-html5/"
    },
    {
      title: "Android Dev Company",
      description: "Website for an Android development company.",
      duration: "2 Weeks",
      date: "May 2022",
      tags: ["SASS", "HTML", "CSS"],
      thumbnail: "/images/projects/img29.png",
      link: "https://marstarek.github.io/website-using-sass/"
    },
    {
      title: "Registration Form with JWT",
      description: "Secure registration form with JWT authentication.",
      duration: "1 Week",
      date: " 2022",
      tags: ["JavaScript", "JWT", "Form"],
      thumbnail: "/images/projects/img36.png",
      link: "https://github.com/tarekrashidy/registration-form"
    },
    {
      title: "Personal Portfolio",
      description: "Early version of my personal portfolio.",
      duration: "1 Week",
      date: "March 2022",
      tags: ["HTML", "CSS", "JavaScript"],
      thumbnail: "/images/projects/img37.png",
      link: "https://marstarek.github.io/profile/"
    },
    {
      title: "Real Estate Company",
      description: "A real estate landing page with property listings.",
      duration: "1 Month",
      date: "Feb 2022",
      tags: ["HTML", "CSS", "GitHub Pages"],
      thumbnail: "/images/projects/img38.png",
      link: "https://marstarek.github.io/real-estate-company/"
    },
    {
      title: "React Book Store",
      description: "A React-based book cataloging interface.",
      duration: "2 Weeks",
      date: "Jan 2022",
      tags: ["React", "Bookstore"],
      thumbnail: "/images/projects/img39.png",
      link: "https://github.com/marstarek/React-Book-store"
    },
    {
      title: "React Ecommerce Website",
      description: "A scalable eCommerce frontend with cart and product filtering.",
      duration: "2 Months",
      date: "Dec 2021",
      tags: ["React", "Redux", "Ecommerce"],
      thumbnail: "/images/projects/img42.png",
      link: "https://github.com/marstarek/REACT-Ecommerce-website"
    },
    {
      title: "Portfolio Website",
      description: "Another iteration of my portfolio design.",
      duration: "2 Weeks",
      date: "Nov 2021",
      tags: ["HTML", "CSS", "JavaScript"],
      thumbnail: "/images/projects/img46.png",
      link: "https://tarekelrashidy.netlify.app/"
    },
    {
      title: "Content Writing Website",
      description: "Portfolio website for content writing services.",
      duration: "1 Week",
      date: "Oct 2021",
      tags: ["HTML", "CSS"],
      thumbnail: "/images/projects/img47.png",
      link: "https://github.com/marstarek/content-writing-websites"
    },
    {
      title: "React Icons Downloader",
      description: "A React tool to download and manage icon sets from react-icons.",
      duration: "1 Week",
      date: "Sept 2021",
      tags: ["React", "react-icons", "Shadcn"],
      thumbnail: "/images/projects/img55.png",
      link: "https://github.com/marstarek/react-icons-downloader"
    },
   
   
    
  ];

  const [visibleCount, setVisibleCount] = useState(5);
  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Practical work demonstrating skills and tools used</p>

        <div className="space-y-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {project.duration}
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{project.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allProjects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 5)}
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-colors"
            >
              See More Projects
            </button>
          </div>
        )}

       
      </div>
    </section>
  );
};

export default ProjectsSection;