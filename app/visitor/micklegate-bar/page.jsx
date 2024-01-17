import '@radix-ui/themes/styles.css';
import { Button } from '@radix-ui/themes';

import MicklegateBarPhoto from '@/public/images/micklegate-bar.png'

import Image from 'next/image'

export default function MicklegateBar() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className="text-4xl font-TrajanBold text-green-600/70 mt-24 md:mt-8">Strategies</h1>
            <div className='mt-12 md:mt-20 flex flex-col w-full'>
                <div className='w-full h-fit rounded-xl bg-white/50 border border-white flex flex-col gap-4 py-12 px-4 md:px-28'>
                    <div className='group flex flex-col gap-4 relative'>
                        <div className='flex justify-center items-center relative my-12'> 
                            <Image src={MicklegateBarPhoto} width={1200} height={1200} className="w-full md:w-[80%] h-fit rounded-xl" alt='Charles Avatar' />
                        </div>
                        <h1 className='text-2xl font-semibold mt-4'>Role and Significance of Micklegate Bar</h1>
                        <p className='text-lg'>
                            Micklegate Bar, a key gateway into York from the south, played a pivotal role in the city&lsquo;s defenses during the siege. Its position and fortifications were crucial for controlling access to the city.
                        </p>
                        <p className='text-lg'>
                            Historically, Micklegate Bar was more than just a defensive structure; it served as the &ldquo;royal gateway&rdquo; and was a symbol of the city&lsquo;s importance and prestige.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Impact of the Siege on Micklegate Bar and the Walls</h1>
                        <p className='text-lg'>
                            While the siege led to significant damage to parts of York&lsquo;s walls, particularly near Walmgate Bar and St Mary&lsquo;s Abbey, Micklegate Bar itself was notably spared from direct attack, thanks to the Royalist-held fort, the Sconce, which protected its approach.
                        </p>
                        <p className='text-lg'>
                            The city&lsquo;s defenders utilized Micklegate Bar and other fortifications effectively, contributing to the resistance against Parliamentary forces.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Restoration and Changes Post-Siege</h1>
                        <p className='text-lg'>
                            Following the siege, Micklegate Bar underwent necessary restorative work to maintain its structural integrity and continued significance as a city gateway.
                        </p>
                        <p className='text-lg'>
                            In the 18th century, as the Bar lost some of its defensive importance, two pedestrian archways were added, reflecting a shift in its use and significance.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>The Walls&lsquo; Evolution and Significance</h1>
                        <p className='text-lg'>
                            Before the siege, York&lsquo;s walls were a mix of medieval and earlier constructions, with various parts being strengthened over time, especially in response to threats.
                        </p>
                        <p className='text-lg'>
                            After the siege, the walls, including Micklegate Bar, saw periods of neglect and restoration, reflecting changing needs and perceptions of city defenses in peace and wartime.
                        </p>
                    </div>
                    <a href='/visitor'>
                        <Button className='flex gap-1 group text-white'>
                            <p className='text-base'>Back</p>
                            <ArrowRightIcon />
                        </Button>
                    </a>
                </div>
            </div>
        </main>
    )
} 

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="#fff" viewBox="0 0 256 256" className='group-hover:translate-x-1 duration-300'>
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
    </svg>
)