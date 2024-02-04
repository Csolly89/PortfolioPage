'use client'
import React, { useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton'

// replace li with images from pulib/image
const TAB_DATA = [
    {
        Title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Sql</li>
            </ul>
        )
    },
    {
        Title: 'Frameworks',
        id: 'frameworks',
        content: (
            <ul className='list-disc pl-2'>
                <li>Express</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
            </ul>
        )
    },
    {
        Title: 'Databases',
        id: 'databases',
        content: (
            <ul className='list-disc pl-2'>
                <li>MongoDb</li>
                <li>PgAdmin</li>
                <li>Postman</li>
            </ul>
        )
    }

]

const AboutSection = () => {
    const [tab,setTab] = useState('skills')
    const [isPending,startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return ( 
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 p-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
                src='/images/Desktop.jpg'
                alt="Desktop setup image"
                height={500}
                width={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-[#568203] mb-4'>About me</h2> 
                <p className='text-base md:text-lg '>
                    I am currently transitioning from a career as a Butcher in the Retail industry working with customers to fill their needs and their bellies. Looking to make the change
                    into Front-end web development for better career advancement opportunies and for a better work-life balance to be able to spend time with the wife and child. Very much a child at
                    heart with a love of Monster/Sci-fi genres like Godzilla, King-kong, The Hulk, Avengers in general and anime (yu-yu hakusho, trigun, gundam wing, Dbz, full-metal alchemist) and also
                    a unhealthy obsession with football (Go Bronco's!!)
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange('frameworks')} active={tab === 'frameworks'}>Frameworks/Tools</TabButton>
                    <TabButton selectTab={() => handleTabChange('databases')} active={tab === 'databases'}>Databases</TabButton>
                    {/* <span className='mr-3 font-semibold hover:text-[#808203] text-[#568203] border-b border-green-500'>Skills</span>
                    <span className='mr-3 font-semibold hover:text-[#808203] text-[#568203] border-b border-green-500'>Education</span> */}
                </div>
                <div className='mt-8 '>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>  );
}


export default AboutSection;