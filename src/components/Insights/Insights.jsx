import React from 'react';
import './Insights.css';
import BlueBack from '../Sections/BlueBack/BlueBack';
import InsightSection from '../Sections/InsightSection/InsightSection';
import { cardOne, cardTwo, cardThree, cardFour } from '../../assets/images';


function Insights() {
  return (
    <>
      <BlueBack page="Insights" prevPage="Home > Insights" />

      <div className='InsightSection'>
        <div className='Insight-Text'>
           <h1>Insights from the My Meal Guru Team</h1>
           <p>Explore Expert Opinions, Tips, And Trends In Nutrition And Meal Planning</p>
        </div>
        <div className='Insight-Div'>
          <InsightSection img={cardOne} text="7 Home Cooking Hacks for Effective Weight Management" desc="Achieve your health goals this New Year with My Meal Guru! Personalized meal plans tailored to your dietary preferences, cooking skills, and lifestyle. Try the free demo today!"/>
          <InsightSection img={cardTwo} text="Achieve Your Health Goals This New Year with My Meal Guru" desc="Learn 7 actionable home cooking hacks to enhance your weight management journey. Embrace healthier habits with My Meal Guru's expert tips."/>
          <InsightSection img={cardThree} text="Frozen Vegetables: Your Time-Saving, Nutritious Meal Prep Hack" desc="Discover how frozen vegetables like peas, spinach, and broccoli are just as nutritious as fresh, plus time-saving tips and delicious recipes to make cooking easier." />
          <InsightSection img={cardFour} text="Smart Grocery Shopping: What to Avoid for a Healthier Lifestyle" desc="In this BLOG, learn what items to avoid and find healthier alternatives with insights from shopping experts. Explore how My Meal Guru's meal planning app and Kitchen Store can help you make nutritious choices, empowering you to lead a healthier, more fulfilling life."/>
        </div>
      </div>
    </>
  )
}

export default Insights