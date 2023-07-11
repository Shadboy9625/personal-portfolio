'use client'
import React, {useState} from 'react'
import {BsArrowUpRight} from "react-icons/bs"

type Props = {}

const Projects = (props: Props) => {
    const [selectedId, setSelectedId] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto' id='projects'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Projects</h1>
        <p className='pt-6 text-neutral-300'>Over the months, I have gained experience in designing and developing a variety of websites, ranging from simple one-page landing pages to complex multi-page applications.Here are some projects that I would like to present to all of you, showcasing my work and achievements in the field of web design and development.</p>
        {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>MI Store Clone</h1>
                <div className='text-neutral-300'>Landing page of MI Store, made entirely using React.</div>
                <div className='mt-6 inline-block'><a href="https://mistoreclone.netlify.app/" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project3.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>A News Application for Android</h1>
                <div className='text-neutral-300'>A news application for android made using React Native, which continuously provides the latest updates and discussions from around the world on various topics. <h1 className='mt-4'>This dynamic platform utilizes real-time data fetching from NewsAPI, ensuring that users are constantly informed with up-to-date news content.</h1></div>
                <div className='mt-6 inline-block'><a href="https://expo.dev/@shadboy9625/news?serviceType=classic&distribution=expo-go" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
        <div className='mt-20 md:w-9/12 mx-auto '>
            <img className='rounded-xl opacity-90' src="project1.png" alt="" />
            <div className='my-10 sm:w-10/12 mx-auto'>
                <h1 className='text-2xl font-bold mb-4'>YouTube Clone Application With Custom Categories</h1>
                <div className='text-neutral-300'>Successfully developed and deployed a dynamic website on Vercel, leveraging Material-UI for visually appealing components, custom
categories for enhanced user experience, and seamless integration of data directly from the YouTubeAPI.</div>
                <div className='mt-6 inline-block'><a href="https://youtubebyshad.vercel.app/" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Projects