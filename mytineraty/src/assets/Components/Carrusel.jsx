import { useEffect, useState } from "react";
const cities = [
        { name: "New York", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg" },
        { name: "Paris", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg" },
        { name: "Tokyo", img: "https://a.storyblok.com/f/239725/1440x832/c8045fb88b/01_jp_tokyo_hero.png/m/3840x2219" },
        { name: "Sydney", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEJDADOCBmZjLuO6WmN3uVAIYhgxgl3tjvw&s" },
        { name: "London", img: "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg" },
        { name: "Dubai", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygH8i-Id7sZ3EXPtyNEnZhiMkZa5tjIVKQA&s" },
        { name: "Rome", img: "https://img.static-kl.com/images/media/5A8A006F-0618-4245-BBC88553D651B6E2" },
        { name: "Istanbul", img: "https://cdn.britannica.com/58/93158-050-7719EB2B/view-Blue-Mosque-Istanbul-Hagia-Sophia.jpg" },
        { name: "Moscow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHPKakQFR4D61WlDbclfdiW3uw7zH0_-tmA&s" },
        { name: "Berlin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BwCl1hbHtf1yr0kYZyabV25nI19EJRDVMg&s" },
        { name: "Toronto", img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/517000/517220-canada.jpg" },
        { name: "Amsterdam", img: "https://www.eurail.com/es/plan-your-trip/trip-ideas/city-guides/amsterdam/_jcr_content/root/responsivegrid/masthead-image.coreimg.jpeg/1699351713352/amsterdam-masthead.jpeg" },
      ];
    


function Carrusel(){


       
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
              



        return(
                <>
                <div className="w-full max-w-4xl mx-auto">
                <h2 className="text">Popular Mytineraries</h2>
                <div className="relative overflow-hidden">
                  <div className="flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                      
                      <div key={index} className="w-full flex-shrink-0 flex justify-around">
                        {slide.map((cities, idx) => (
                          <div key={idx} className="w-1/4 p-2">
                            <img src={cities.img} alt={cities.name} className="rounded-lg object-cover w-full h-40" />
                            <p className="text-center mt-2 font-semibold text-letras">{cities.name}</p>
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
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>

              </>       
        )
}
export default Carrusel;