function Navbar(){

    return(
        <>
            <div className="flex w-full h-20 text-white justify-between px-6 items-center bg-transparent">
                <div>
                    <h1 className="text-4xl font-bold">Portfolio</h1>
                </div>
                <div className="flex justify-between space-x-8 text-gray-300 text-lg">
                    <div className="m-0 border-b-2 hover:border-blue-400 border-[#121212] hover:cursor-pointer">
                        <p className="hover:text-blue-400">Home</p>
                    </div>
                    <div className="m-0 hover:border-b-2 hover:border-blue-400 border-[#121212] hover:cursor-pointer">
                        <p className="hover:text-blue-400">About</p>
                    </div>
                    <div className="m-0 hover:border-b-2 hover:border-blue-400 border-[#121212] hover:cursor-pointer">
                        <p className="hover:text-blue-400">Projects</p>
                    </div>
                    <div className="m-0 hover:border-b-2 hover:border-blue-400 border-[#121212] hover:cursor-pointer">
                        <p className="hover:text-blue-400">Contact Us</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar