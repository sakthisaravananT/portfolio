import React from 'react';
import profile from '../Assests/profile.jpg (2).avif';
import { Styles } from '../Utils/Style';
import Resume from '../Assests/resume.pdf';
import {TiArrowDownOutline} from "react-icons/ti";
import '../App.css'



function About() {
    return (
        <div className='flex flex-wrap justify-center items-center mt-10 p-4 ' id='Home'>
            <div className='flex-1 py-4'>
                <span className={Styles.heroHeadText}>
                    Hi, I'm <span className='text-orange-600'> Sakthisaravanan</span>
                    <br></br>
                    <span className={Styles.heroSubText}>
                        I'm a Full Stack Developer &
                        <br></br>
                        Web Developer
                    </span>
                </span>

                <br></br>

                <div className='w-[14rem]'>
                    <a  href={Resume}
                        download="Resume"
                        target='blank'
                        rel="noreferrer">

                            <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 shadow-lg hover:border-violet-500 hover:shadow-pink-500'> < TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange'>
                            </TiArrowDownOutline> Resume


                            </div>
                       
                    </a>

                </div>
            </div>
            <div className='flex flex-wrap'>
                <img src={profile} alt='profile' className='element object-contain p-10'/>

            </div>
        </div>
    );
}

export default About;
