import React from 'react'
import BlueBack from '../Sections/BlueBack/BlueBack';
import DescPortion from '../Sections/DescPortion/DescPortion';
import { whatwedoFirst, whatwedoSecond, whatwedoThree } from '../../assets/images';
import ImagePortionRight from '../Sections/ImagePortionRight/ImagePortionRight'
import ImagePortionLeft from '../Sections/ImagePortionLeft/ImagePortionLeft'

function Whatwedo() {
  return (
    <>
    <BlueBack page="What We Do" prevPage="Home > What We Do"/>
    <DescPortion img={whatwedoFirst}
                heading="What We Do"
                 subheading="We Personalize Recipes and Meal Planning"
                 description="At My Meal Guru, we’re here to redefine healthy eating by offering customized recipes and meal plans, designed just for you. With our proprietary interface, it’s simple to enter your preferences and receive a plan that fits your lifestyle. Life can change in an instant, and so can your meals—just update your preferences, and we’ll generate a new plan for you. Experience the freedom of effortless, flexible meal planning."
                 bgColor="#fff7e3"
                

    />
    <ImagePortionRight img={whatwedoSecond} heading = "Crafting Personalized Menus" bgcolor = "#b3f1ff"
                      text = "Cooking at home should be rewarding—not overwhelming. But let’s face it: planning meals and finding recipes takes time. That’s why My Meal Guru is here to simplify the process, crafting meals and recipes that are personalized to your preferences and dietary needs. Say goodbye to guesswork and hello to stress-free cooking. Ready to take the first step toward effortless meal planning? Explore more possibilities on YouTube by visiting: https://youtu.be/a53bQ4JODDM"

    />
    <ImagePortionLeft img={whatwedoThree} heading="Empowering Sustainable Living Through Thoughtful Meal Planning"
                      text={"At My Meal Guru, sustainability is more than just a goal—it’s our commitment. Our innovative app ensures that every ingredient is used efficiently, helping you reduce waste while enjoying delicious, nutritious meals. With our meal plans, you can embrace eco-conscious living that’s as good for the planet as it is for you!. Ready to revolutionize your approach to meal planning? Click 'Start Your Demo' above to get your first meal plan and recipes for Free!. Ready to revolutionize your approach to meal planning? Click 'Start Your Demo' above to get your first meal plan and recipes for Free!"}
                      bgcolor="#fff7e3" width="490px" height="360px" pTop="0px"
    />
    </>
  )
}

export default Whatwedo;