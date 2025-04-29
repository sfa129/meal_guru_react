import React from 'react'
import BlueBack from '../Sections/BlueBack/BlueBack';
import ImagePortionRight from '../Sections/ImagePortionRight/ImagePortionRight';
import { imgportionright, visionimg } from '../../assets/images/index';
import ImagePortionLeft from '../Sections/ImagePortionLeft/ImagePortionLeft';


function About() {
  return (
    <>
    <BlueBack page="About Us" prevPage="Home < About"/>
    <ImagePortionRight bgcolor = "#fff7e3" 
                      img={imgportionright}
                      heading = "About Us"
                      text = "Welcome to My Meal Guru, your trusted partner in simplifying meal planning. With our personalized recipes and meal plans, we’re here to make home-cooked meals easier and more rewarding than ever. In a world overwhelmed by convenience foods, we’re dedicated to redefining how you nourish your body. Explore how our tailored plans can revolutionize your approach to mealtime—one personalized recipe at a time."
    />
    <ImagePortionRight img={visionimg}
                        heading = "Our Vision"
                        text = "At My Meal Guru, we envision a future where wholesome, nourishing meals are within reach for everyone. Our mission is to empower you with the tools and knowledge to make confident choices about your meals. Through our personalized meal planning solutions, we’re making healthy eating accessible, enjoyable, and sustainable. Join us in creating a world where whole foods aren’t just a trend—they’re a way of life."
    
    />
    <ImagePortionLeft 
                      img={imgportionright}
                      heading = "The Joy of Mealtime"
                      text = "We believe that mealtime is about more than just eating—it’s about connection, joy, and togetherness. At My Meal Guru, we’re here to enhance your dining experience with recipes and meal plans that are tailored to your tastes and dietary needs. Whether you’re prepping for family dinners or hosting friends, let us help you rediscover the joy of cooking and sharing meals with the people you cherish. Click 'Start Your Demo' above to begin your journey with My Meal Guru today and experience the difference."
    />
    </>
  )
}

export default About