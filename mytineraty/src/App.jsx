import React, { useState, useEffect } from 'react';

function App() {
  const cities = [
    { name: "New York", img: "https://source.unsplash.com/random/300x200?newyork" },
    { name: "Paris", img: "https://source.unsplash.com/random/300x200?paris" },
    { name: "Tokyo", img: "https://source.unsplash.com/random/300x200?tokyo" },
    { name: "Sydney", img: "https://source.unsplash.com/random/300x200?sydney" },
    { name: "London", img: "https://source.unsplash.com/random/300x200?london" },
    { name: "Dubai", img: "https://source.unsplash.com/random/300x200?dubai" },
    { name: "Rome", img: "https://source.unsplash.com/random/300x200?rome" },
    { name: "Istanbul", img: "https://source.unsplash.com/random/300x200?istanbul" },
    { name: "Moscow", img: "https://source.unsplash.com/random/300x200?moscow" },
    { name: "Berlin", img: "https://source.unsplash.com/random/300x200?berlin" },
    { name: "Toronto", img: "https://source.unsplash.com/random/300x200?toronto" },
    { name: "Amsterdam", img: "https://source.unsplash.com/random/300x200?amsterdam" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(cities.length / 4);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const slides = [];
  for (let i = 0; i < cities.length; i += 4) {
    slides.push(cities.slice(i, i + 4));
  }

  console.log(slides);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className=" text-red-600">Popular Mytineraries</h2>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            
            <div key={index} className="w-full flex-shrink-0 flex justify-around">
              {slide.map((cities, idx) => (
                <div key={idx} className="w-1/4 p-2">
                  <img src={cities.img} alt={cities.name} className="rounded-lg object-cover w-full h-40" />
                  <p className="text-center mt-2 font-semibold">{cities.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button onClick={goToPreviousSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#10094;
        </button>
        <button onClick={goToNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#10095;
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
