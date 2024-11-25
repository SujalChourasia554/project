
import FeedbackCard from './FeedbackCard';
import FeedbackSlider from './FeedbackSlider';
import FeedbackTopSection from './FeedbackTopSection';

export default function ClientFeedback(){
    return(
        <>
            <div className='h-[49.813rem] pt-[7.188rem] pb-[4.375rem] bg-no-repeat bg-center bg-cover bg-[url("/images/feedback.jpg")]' >
            <FeedbackTopSection top="Our Testimonial" bottom="Clients Feedback"></FeedbackTopSection>
            <div className="w-full h-full mb-[4.375rem] ">
            <FeedbackSlider></FeedbackSlider>
            </div>
            
            </div>
        </>
    )
}