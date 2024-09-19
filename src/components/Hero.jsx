import Section from "./section"
import {curve, heroBackground} from '../assets'
import Button from './Button'
import {collos} from '../assets'
// import { robot } from "../assets"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import { heroIcons } from "../constants"
import { ScrollParallax } from "react-just-parallax"
import { useRef } from "react"
import Notification from "./Notification"
import CompanyLogo from "./CompanyLogos"




const Hero = () => {
    const parallaxRef = useRef(null);


  return (
    <Section className='pt-[12rem] -mt-[5.25rem]' crosses crossesOffset='lg:translate-y-[5.25rem]' customPaddings
    id='hero'>

         <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
            <h1 className="h1 mb-6">
              Heres To the Krazy Once , the Round Peg in square Holes
              <span className="inline-block relative">
                OnCollos
                <img src={curve}
                className="absolute top-full left-0
                w-full xl:mt-2" width={624}
                height={28} alt="curve"/>
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb- text-n-2 lg:mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam praesentium, nesciunt officia sequi repellat enim, maxime qui soluta ut necessitatibus unde architecto accusantium, reiciendis modi dolore magni exercitationem excepturi doloremque?
            </p>
            <Button href="/pricing" white>
              Get started
            </Button>
          </div>
            <div className="relative max-w-[24rem] mx-auto md:max-w-5xl xl:mb-20">
              <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>

                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden  md:aspect-[688/490] lg:aspect-[480/300]">
                      <img src={collos} 
                      className="w-full scale-[1-7] translate-y-[8%] md:scale-[1] md:translate-y-[10%] lg:-translate-y-[23%]"
                       width={1500}
                      height={450}
                      alt="AI"
                       />
                        <ScrollParallax isAbsolutelyPositioned>

                          <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
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

                          <Notification
                          className="hideen absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                          title=" New Artist"

                          />

                        </ScrollParallax>
                    </div>
                </div>
                <Gradient/>
              </div>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                  {/* <img src={heroBackground}
                  className="w-full"
                   alt="hero"
                  width={1440}
                  height={1500}/> */}
                </div>


                <BackgroundCircles/>
            </div>
            <CompanyLogo className='hidden relative z-10 mt-20 lg:block'/>
         </div>
      <BottomLine/>
    </Section>
  )
}

export default Hero