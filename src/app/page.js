import React from 'react';
import HeroSection from './components/HeroSection';
import LogoSlider from './components/LogoSlider';
import Card from './components/Card';
import AboutSection from './components/AboutSection';
import SuccessSection from './components/SuccessSection';
import { CarouselSize } from './components/testimonial';
import Footer from './components/Footer';
import SocialGrid from './components/SocialGrid';
import TrustedOrg from './components/TrustedOrg';
import GetStart from './components/GetStart';
import CardSection from './components/Courses';
import 'aos/dist/aos.css';




function Page() {
  return (



       <div className='min-h-screen w-full bg-gradient-to-l from-pink-50 to-white overflow-x-hidden'>
     
     {/* Hero Section */}

     <div>
       <HeroSection />
     </div>

     {/* Logo Slider */}
     <div className='w-[100%] mx-auto'>
       <LogoSlider />
     </div>

     {/* Main Content */}
     <div className='w-[80%] mx-auto py-16 space-y-24'>
       <h1 className='font-extrabold font-serif text-[50px] text-black  text-center'>
         Shaping and Empowering Future IT Talent Through a Seamless Process
       </h1>

       {/* Card Section */}
       <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
         <Card
           stepNumber="1"
           stepNumberRight="1"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto aut odit aspernatur autem eum deleniti necessitatibus fugit unde earum!"
           title="Discover Tech"
         />
         <Card
           stepNumber="2"
           stepNumberRight="2"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto aut odit aspernatur autem eum deleniti necessitatibus fugit unde earum!"
           title="Evaluating Skills"
         />
         <Card
           stepNumber="3"
           stepNumberRight="3"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto aut odit aspernatur autem eum deleniti necessitatibus fugit unde earum!"
           title="Track Record"
         />
       </div>
     </div>

     {/* About Section */}
     <div className='w-[85%] mx-auto'>
       <AboutSection />
     </div>

     {/* Success Section */}
     <div className='w-[90%] mx-auto'>
       <SuccessSection />
     </div>

     {/* Courses Offer Section */}
     <div className='w-[80%] mx-auto'>
       <CardSection />
     </div>

     {/* Testimonials Section */}
     <div className='w-[80%] mx-auto h-screen flex flex-col justify-center items-center'>
       <h1 className='text-6xl font-bold mx-auto'>Alumni 😍</h1>
       <p className='mx-auto text-center py-11 text-2xl text-gray-500'>
         Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us.
       </p>
       <CarouselSize />
       <p className='mt-20'>
         Still have a question?{' '}
         <a href="#" className='text-blue-600 underline'>
           Browse documentation
         </a>{' '}
         or{' '}
         <a href="#" className='text-blue-600 underline'>
           submit a ticket.
         </a>
       </p>
     </div>

     {/* Social Grid Section */}
     <div className='w-[80%] mx-auto'>
       <SocialGrid />
     </div>

     {/* Trusted Organizations Section */}
     <div className='w-[80%] mx-auto'>
       <TrustedOrg />
     </div>

     {/* Get Started Section */}
     <div className='w-[80%] mx-auto flex justify-center items-center'>
       <GetStart />
     </div>

     {/* Footer */}
     <Footer />
   </div>
    
  
  );
}

export default Page;
