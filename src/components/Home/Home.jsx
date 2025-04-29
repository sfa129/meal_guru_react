import React from 'react';
import Hero from '../Sections/Hero/Hero';
import VideoPortion from '../Sections/VideoPortion/VideoPortion';
import WhyChooseUs from '../Sections/WhyChooseUs/WhyChooseUs';
import DescPortion from '../Sections/DescPortion/DescPortion';
import Feedback from '../Sections/Feedback/Feedback';
import { accimg, boximage, chooseimg, visionimg } from '../../assets/images';


function Home() {
  return (
    <>
    <Hero />
    <VideoPortion />
    <WhyChooseUs />
    <DescPortion  img={chooseimg}
                  heading="What We Do"
                  subheading="We Personalize Recipes and Meal Planning"
                  description="Click here to discover how My Meal Guru helps you transform your mealtimewith recipes and meal
                        plans tailored to your preferences. Unlock the ease of meal planning with just a click."
                  button="Explore What We Do"/>
    <Feedback/>
    </>
  )
}

export default Home