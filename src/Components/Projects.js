import React from 'react'
import { Styles } from '../Utils/Style'
import { projects } from '../Constants'
import Tilt from 'react-parallax-tilt'
import {SiGithub ,SiNetlify } from 'react-icons/si'

function Projects() {
  return (
    <div>
        <div className='p-3 mt-4 'id='Projects'>
            <span className={Styles.sectionHeadText}>
                projects 
            </span>
            <hr className='w-[35%]'></hr>
            <div className={Styles.sectionText}>
            I've successfully completed several projects, leveraging my expertise in various domains. These endeavors showcase my proficiency in problem-solving, innovative thinking, and effective project management. Whether it's developing software applications, designing creative solutions, or implementing strategic initiatives, my projects reflect a commitment to excellence and a keen understanding of the intricacies involved. Each endeavor has not only contributed to my technical skills but also demonstrated my ability to adapt and thrive in dynamic and challenging environments.
           </div>

        </div>

        <div className='flex flex-wrap p-8 justify-evenly items-center'>
            {projects.map((Project) =>
            (
                <Tilt key={Project.name} className='w-[300px] h-[500px]  flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900'>
                  <div>
                    <div className='flex justify-center items-center mb-3'>
                        <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>

                            <a href={Project.source_deploy_link} target='blank'>
                                <SiNetlify className="text-3xl font-bold text-violet-600"></SiNetlify>

                            </a>

                        </div>
         
                        <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>

<a href={Project.source_code_link} target='blank'>
    <SiGithub className="text-3xl font-bold text-violet-600"></SiGithub>

</a>

</div>






                    </div>

                    <img src={Project.image} alt={Project.name} className='h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl'/>
                    <div className='text-2xl text-violet-600 font-extrabold'>
    {Project.name}
</div>
<div className='text-center'>
    <span className='text-orange-500'>
        {Project.description}
    </span>
</div>
                  </div>


                </Tilt>
            ))}
        </div>


    </div>
  )
}

export default Projects