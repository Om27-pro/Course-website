import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.avif';

const testimonials = [
  {
    name: 'Ananya Sharma',
    course: 'Target Batch 2024',
    quote: 'NLTI transformed my preparation! Their mentors were always available and the mocks were spot-on.',
    photo: image1
  },
  {
    name: 'Rohan Mehta',
    course: 'Crash Course 2025',
    quote: 'Highly effective crash course! I scored 94 in CLAT and couldn’t have done it without them.',
    photo: image2
  },
  {
    name: 'Sneha Verma',
    course: 'CLAT 2023 Batch',
    quote: 'Live sessions and daily current affairs made all the difference. Thank you NLTI!',
    photo: image3
  }
];

function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">🌟 Student Testimonials</h2>
        <Carousel>
          {testimonials.map((t, idx) => (
            <Carousel.Item key={idx}>
              <img
                src={t.photo}
                className="d-block w-100"
                style={{ height: '400px', objectFit: 'cover' }}
                alt={t.name}
              />
              <div className="text-center p-4 bg-white">
                <blockquote className="blockquote mb-2">
                  <p>"{t.quote}"</p>
                </blockquote>
                <footer className="blockquote-footer">
                  <strong>{t.name}</strong>, <cite>{t.course}</cite>
                </footer>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Testimonials;
