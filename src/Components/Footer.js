import React from 'react';
import { GrGithub, GrLinkedinOption, GrMail } from 'react-icons/gr';

function Footer() {
  return (
    <div>
      <div className='w-[screen] bg-black flex-row'>
        <div className='flex flex-row p-2 justify-around'>
          <a
            href='https://www.linkedin.com/in/sakthi-saravanan-t-04190b283/'
            target='blank'
            className='text-lg flex flex-row text-violet-300'
          >
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
              <GrLinkedinOption className='text-white'></GrLinkedinOption>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>Sakthisaravanan</span>
          </a>
          <a
            href='sakthisaravana101@gmail.com'
            target='blank'
            className='text-lg flex flex-row text-violet-300'
          >
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
              <GrMail className='text-white'></GrMail>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>
              Sakthisaravana101@gamil.com
            </span>
          </a>
          <a
            href='https://github.com/sakthisaravananT'
            target='blank'
            className='text-lg flex flex-row text-violet-300'
          >
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
              <GrGithub className='text-white'></GrGithub>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>Sakthisaravanan</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
