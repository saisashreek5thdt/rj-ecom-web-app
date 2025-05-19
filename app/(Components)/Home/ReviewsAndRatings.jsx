import Image from "next/image";

export default function ReviewsAndRatings() {
    return (
        <>

        <div className="flex items-center justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-[35%_65%] lg:grid-cols-[35%_65%] xl:grid-cols-[35%_65%] my-16">
                <div className="flex flex-col justify-center items-start text-white pl-10 gap-3">
                    <h1 className="font-normal text-base uppercase leading-2 tracking-[3px]">Review & Ratings</h1>
                    <p className="font-medium text-5xl flex flex-col gap-2 "><span>Positive</span> <span>Customers</span><span>Feedback </span></p>
                    <p className="text-base mr-[140px]">Pretium lectus quam id leo in. In massa tempor nec feugiat nisl pretium fusce. Libero enim sed faucibus turpis in eu mi bibendum neque. Eget duis at tellus at urna.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 ">
                    <div className="bg-[#2b2624ca] flex flex-col justify-center items-start text-white gap-5 w-[330px] h-[330px] px-10 py-10">
                        <div className="flex gap-2">
                            <Image
                                src="/dummy.png"
                                alt="Global Brand"
                                width={400}
                                height={400}
                                className="w-[90px] h-[90px] object-cover rounded-full"
                            ></Image>
                            <div className="flex flex-col justify-center items-start ml-5">
                                <h1 className="font-normal text-base">John Doe</h1>
                                <div className="flex gap-1">
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                </div>   
                          </div>  
                              
                        </div>
                        <div className="w-full">
                            <p className="w-full">Lorem ipsum dolor sit amet cons adipisicing elit. Architecto dicta repudiandae impedit consequuntur Lorem ipsum dolor sit amet consectetur. </p>
                          </div>
                    </div>



                    <div className="bg-[#2b2624ca] flex flex-col justify-center items-start text-white gap-5 w-[330px] h-[330px] px-10 py-10">
                        <div className="flex gap-2">
                            <Image
                                src="/dummy.png"
                                alt="Global Brand"
                                width={400}
                                height={400}
                                className="w-[90px] h-[90px] object-cover rounded-full"
                            ></Image>
                            <div className="flex flex-col justify-center items-start ml-5">
                                <h1 className="font-normal text-base">John Doe</h1>
                                <div className="flex gap-1">
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                </div>   
                          </div>  
                              
                        </div>
                        <div className="w-full">
                            <p className="w-full">Lorem ipsum dolor sit amet cons adipisicing elit. Architecto dicta repudiandae impedit consequuntur Lorem ipsum dolor sit amet consectetur. </p>
                          </div>
                    </div>





                    <div className="bg-[#2b2624ca] flex flex-col justify-center items-start text-white gap-5 w-[330px] h-[330px] px-10 py-10">
                        <div className="flex gap-2">
                            <Image
                                src="/dummy.png"
                                alt="Global Brand"
                                width={400}
                                height={400}
                                className="w-[90px] h-[90px] object-cover rounded-full"
                            ></Image>
                            <div className="flex flex-col justify-center items-start ml-5">
                                <h1 className="font-normal text-base">John Doe</h1>
                                <div className="flex gap-1">
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                 <p className="">&#9733;</p>
                                </div>   
                          </div>  
                              
                        </div>
                        <div className="w-full">
                            <p className="w-full">Lorem ipsum dolor sit amet cons adipisicing elit. Architecto dicta repudiandae impedit consequuntur Lorem ipsum dolor sit amet consectetur. </p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
}