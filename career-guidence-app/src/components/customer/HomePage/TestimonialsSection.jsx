import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Developer at Microsoft",
      quote: "This app helped me discover my passion and land my dream job!",
      image: "https://media.gettyimages.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=gi&k=20&c=cLEPuslT_nl6tHIeV6mCf_NehuJM-ffBqaNr7-emSUA=",
    },
    {
      name: "Jane Smith",
      role: "Data Scientist at Google",
      quote: "The career quizzes were eye-opening and helped me make the right choice.",
      image: "https://media.gettyimages.com/id/1334476661/photo/latin-american-businesswoman-in-blazer-against-gray-background.jpg?s=2048x2048&w=gi&k=20&c=6ZDTOQgWkaZQKxnKxB8NU0YQIGE1p2Jj59H-z3AkDQo=",
    },
    {
      name: "Alice Johnson",
      role: "Product Manager at Amazon",
      quote: "The expert guidance I received was invaluable for my career growth.",
      image: "https://media.gettyimages.com/id/1334476315/photo/confident-mature-hispanic-man-against-white-background.jpg?s=2048x2048&w=gi&k=20&c=Q-fx1re_p1JKNongDJnus5DSxa8-1RmKWsBLVB7Adjc=",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 bg-center bg-contain rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.role}</p>
            <p className="text-gray-600 mt-2">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;