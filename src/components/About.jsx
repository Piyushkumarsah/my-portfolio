import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-stone-700 via-black to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                My journey in web development has been marked by continuous learning and growth. I've honed my skills in both frontend and backend technologies, mastering the art of creating stunning and responsive user interfaces while building robust and efficient systems that breathe life into websites and applications.
            </p>
            <br />
            <p className='text-xl'>
            What sets me apart is not just my technical expertise but also my unwavering enthusiasm to explore the latest trends and emerging technologies. Staying ahead of the curve is not just a goal; it's a way of life. Embracing change and innovation allows me to push the boundaries of what's possible, delivering cutting-edge solutions that resonate with modern audiences.
            </p>
        </div>
    </div>
  )
}

export default About