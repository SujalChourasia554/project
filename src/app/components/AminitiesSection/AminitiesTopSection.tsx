interface FeedbackTopProps{
    top:string;
    bottom:string;
}

const FeedbackTopSection = (props:FeedbackTopProps) => {
  return (
    <div className="feed-section bg-light-white mb-10">
        <div className=" w-full pt-5 ">
            <div id="content" className='flex flex-col justify-center items-center'>
                <div id="text" className=' py-1 px-3 rounded-[50px] bg-pink mb-4 tracking-tighter'>
                    <h1 className='font-poppins text-color-orange text-[1rem] lg:text-[1.05rem] font-semibold '>{props.top}</h1>
                </div>
                <div id="text2" className='w-full text-center mb-5 '>
                    <h1 className='font-poppins font-bold text-[1.4rem] lg:text-[3rem]'>{props.bottom}</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FeedbackTopSection
