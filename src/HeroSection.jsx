import Dev from './assets/dev.png';

function HeroSection(){

    return (
        <>
            <div className='text-white flex w-full justify-around mt-5 h-[600px]'>
                <div className='pt-[200px]'>
                    <h1 className='text-7xl'>Hi, I'm Vinayak Gupta</h1>
                    <p className='text-3xl mt-6 text-gray-300'>I am a FrontEnd Developer.<br/>Currently using React.JS for developing wonderful websites.</p>
                </div>
                <div className="h-[80%] flex justify-between align-middle">
                    <img className='h-full' src={Dev} alt=""/>
                </div>
            </div>
        </>
    )
}

export default HeroSection