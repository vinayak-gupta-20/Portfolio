import Html from './assets/html.jpg';
import Js from './assets/js-logo.png';
import Css from './assets/CSS-Logo.png';
import ReactLogo from './assets/react-logo.png';

function Skills() {
  return (
    <div className='text-black mt-10 bg-white font-medium w-[95vw] mx-auto rounded-2xl'>
      <div className='mt-4'>
        <p className='text-4xl text-center py-4 font-bold text-[#0e1527]'>Proficiencies</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 py-4'>
        <div className='flex flex-col items-center justify-center bg-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
          <img className='h-[120px] w-[120px] object-cover rounded-full mb-2' src={Html} alt="HTML" />
          <h2 className='text-2xl font-medium'>HTML</h2>
          <p>A markup language used for creating the structure and content of web pages.</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
          <img className='h-[120px] w-[120px] object-cover rounded-full mb-2' src={Css} alt="CSS" />
          <h2 className='text-2xl font-medium'>CSS</h2>
          <p>A styling language used for styling the presentation of web pages written in HTML.</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
          <img className='h-[120px] w-[120px] object-cover rounded-full mb-2' src={Js} alt="JavaScript" />
          <h2 className='text-2xl font-medium'>JavaScript</h2>
          <p>A programming language used to add interactivity and dynamic behavior to web pages.</p>
        </div>
        <div className='flex flex-col items-center justify-center bg-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300'>
          <img className='h-[120px] w-[120px] object-cover rounded-full mb-2' src={ReactLogo} alt="React" />
          <h2 className='text-2xl font-medium'>React</h2>
          <p>A JavaScript library for building user interfaces, particularly for single-page applications.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
