import Linkedin from './assets/linkedin2.png';
import Github from './assets/github2.png';

function Social(){

    return(
        <>
            <div className="flex mx-6 justify-around h-96 items-center mt-10 px-5 py-10">
                <div className="w-full h-full">
                    <div className="h-full w-full">
                        <h2 className="text-3xl font-semibold mb-3">Let's Connect</h2>
                        <p className="text-md text-gray-200 w-96">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <div className='flex p-4 gap-4 justify-start'>
                            <img className='h-8 rounded-[50%] object-cover' src={Github} alt="" />
                            <img className='h-8 rounded-[50%] object-cover' src={Linkedin} alt="" />
                        </div>
                    </div>

                </div>
                <div className="w-full h-full flex justify-center">
                    <div className="h-full">
                        <p className=" py-2">Your e-mail</p>
                        <input className="w-[600px] py-2" type="email" />
                        <p className=" py-2">Subject</p>
                        <input className="w-[600px] py-2" type="text" />
                        <p className=" py-2">Message</p>
                        <textarea className="w-[600px]" name="" id="" cols="60" rows="2"></textarea>
                        <br />
                        <button className="py-2 px-6 rounded-lg hover:bg-purple-700 hover:text-white h-10 bg-white text-black mt-4">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social