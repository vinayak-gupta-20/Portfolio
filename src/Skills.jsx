import meter1 from "./assets/meter1.svg";
import meter2 from "./assets/meter2.svg";
import meter3 from "./assets/meter3.svg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "./assets/arrow1.svg";
import arrow2 from "./assets/arrow2.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill py-16 bg-gray-950 mx-16 rounded-3xl" id="skills">
      <div className="container mx-auto px-6">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx text-center">
              <h2 className="text-5xl font-semibold mb-6">Skills</h2>
              
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Web Development" className="mx-auto mb-4" />
                  <h5 className="text-xl font-semibold">Data Structures & Algorithms</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Brand Identity" className="mx-auto mb-4" />
                  <h5 className="text-xl font-semibold">Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Logo Design" className="mx-auto mb-4" />
                  <h5 className="text-xl font-semibold">OOPS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
