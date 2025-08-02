import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const CertificatesSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  const certificates = [
    {
      image: './images/certificates/cert(1).png',
    },
    {
      image: './images/certificates/cert(2).png',
    },
    {
      image: './images/certificates/cert(3).png',
    },
    {
      image: './images/certificates/cert(4).png',
    },
    {
      image: './images/certificates/cert(5).png',
    },
    {
      image: './images/certificates/cert(6).png',
    },
    {
      image: './images/certificates/cert(7).png',
    },
    {
      image: './images/certificates/cert(8).png',
    },
    {
      image: './images/certificates/cert(9).png',
    },
    {
      image: './images/certificates/cert(10).png',
    },
    {
      image: './images/certificates/cert(11).png',
    },
    {
      image: './images/certificates/cert(12).png',
    },
    {
      image: './images/certificates/cert(13).png',
    },
    {
      image: './images/certificates/cert(14).png',
    },
    {
      image: './images/certificates/cert(15).png',
    },
    {
      image: './images/certificates/cert(16).png',
    },
    {
      image: './images/certificates/cert(17).png',
    },
    {
      image: './images/certificates/cert(18).png',
    },
    {
      image: './images/certificates/cert(19).png',
    },
    {
      image: './images/certificates/cert(20).png',
    },
    {
      image: './images/certificates/certp1.jpg',
    },
    {
      image: './images/certificates/certp2.jpg',
    },
    {
      image: './images/certificates/certp3.jpg',
    },
    {
      image: './images/certificates/certp4.png',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-subtitle">Courses and certifications I’ve completed</p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 p-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-muted rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-auto w-full h-full ">
                  <img
                    src={cert.image}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
