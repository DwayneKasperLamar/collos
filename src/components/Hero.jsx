import Section from "./section"
import {curve, } from '../assets'
import { BackgroundCircles, } from "./design/Hero"
import { heroIcons } from "../constants"
import { ScrollParallax } from "react-just-parallax"
import { useRef } from "react"
import Notification from "./Notification"
import CompanyLogo from "./CompanyLogos"
import Globe from "react-globe.gl"






const Hero = () => {
    const parallaxRef = useRef(null);


  return (
            <Section className='pt-[20rem] -mt-[5.25rem]' crosses crossesOffset='lg:translate-y-[5.25rem]' customPaddings
            id='hero'>



         <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">





              <Globe/>



            {/*<h1 className="h1 mb-6">*/}
            {/*  Heres To the Krazy Once , the Round Peg in square Holes*/}
            {/*  <span className="inline-block relative">*/}
            {/*    OnCollos*/}
            {/*    <img src={curve}*/}
            {/*    className="absolute top-full left-0*/}
            {/*    w-full xl:mt-2" width={624}*/}
            {/*    height={28} alt="curve"/>*/}
            {/*  </span>*/}
            {/*</h1>*/}
            {/*<p className="body-1 max-w-3xl mx-auto mb- text-n-2 lg:mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam praesentium, nesciunt officia sequi repellat enim, maxime qui soluta ut necessitatibus unde architecto accusantium, reiciendis modi dolore magni exercitationem excepturi doloremque?*/}
            {/*</p>*/}
          </div>
          
        
                    <ScrollParallax isAbsolutelyPositioned>

                          <ul className="hidden absolute left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                            {heroIcons.map((icon, index) => (
                              <li className="p-5"  key={index}>
                                <img src={icon}
                                width={24}
                                height={25} 
                                alt="icon" />
                              </li>
                            ) )}
                          </ul>
                        </ScrollParallax>
                        
                        <ScrollParallax isAbsolutelyPositioned>
                           
                         <BackgroundCircles/>

                          <Notification
                          className="hideen absolute right-[0.95rem] bottom-[11rem] w-[18rem] xl:flex"
                          title=" New Artist"

                          />

                        </ScrollParallax>
         </div>
           <CompanyLogo className='hidden relative z-10 mt-4 lg:block'/>
     
    </Section>
  )
}

export default Hero