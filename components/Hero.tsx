import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div>
            <div className='flex justify-center relative my-7 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center -text-blue-100 max-w-80'>Diseño web moderno, intuitivo y dinámico</h2>

                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Impulsando la creatividad en cada interfaz.' />

                    <p className='text-center md:tracking-wider mb-4 text-small md:text-large lg:text-2xl'>Hola! Soy Elias Giannantonio. Técnico Superior en Desarrollo Web y Aplicaciones Digitales. Desarrollador frontend.</p>
                    <div className='flex gap-7'>
                        <a href='#about'><MagicButton title="Mis proyectos" icon={<FaLaptopCode className='scale-125'/>}
                        position='right'
                        otherClasses='gap-5' /></a>
                        <a href='#about'><MagicButton title="Mi curriculum" icon={<MdOutlineDocumentScanner className='scale-125'/>}
                        position='right'
                        otherClasses='gap-5' /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero