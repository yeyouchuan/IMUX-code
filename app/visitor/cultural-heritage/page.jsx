import '@radix-ui/themes/styles.css';
import { Button } from '@radix-ui/themes';

export default function CulturalHeritage() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className="text-4xl font-TrajanBold text-green-600/70 mt-24 md:mt-8">Cultural Heritage</h1>
            <div className='mt-12 md:mt-20 flex flex-col w-full'>
                <div className='w-full h-fit rounded-xl bg-white/50 border border-white flex flex-col gap-4 py-12 px-4 md:px-28'>
                    <div className='group flex flex-col gap-4 relative'>
                        <h1 className='text-2xl font-semibold mt-4'>Heritage Preservation</h1>
                        <p className='text-lg'>
                            Post-siege, York&lsquo;s walls and Micklegate Bar, among other historical sites, have been preserved and maintained. These structures serve as physical reminders of the city&lsquo;s rich history and the siege&lsquo;s impact.
                        </p>
                        <p className='text-lg'>
                            Efforts to conserve and restore these historical landmarks have been crucial in keeping the memory of the siege alive, allowing for educational and cultural exploration.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>York&lsquo;s Cultural Identity</h1>
                        <p className='text-lg'>
                            The siege of York has become an integral part of the city&lsquo;s cultural identity, symbolizing resilience and historical significance.
                        </p>
                        <p className='text-lg'>
                            Museums, guided tours, and educational programs have been developed to engage the public with York&lsquo;s history, especially focusing on the siege and its aftermath.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Commemoration and Reflection</h1>
                        <p className='text-lg'>
                            Various events and memorials in York commemorate the siege, offering opportunities for reflection on the city&lsquo;s past struggles and achievements.
                        </p>
                        <p className='text-lg'>
                            The siege has been a subject of interest in literature and art, inspiring works that capture its drama and historical importance.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>The Siege in Modern Context</h1>
                        <p className='text-lg'>
                            The siege of York offers valuable lessons on conflict, resilience, and the importance of preserving historical narratives for future generations.
                        </p>
                        <p className='text-lg'>
                            Understanding the siege and its context provides insights into contemporary issues related to war, societal change, and cultural heritage preservation.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Promoting Historical Understanding</h1>
                        <p className='text-lg'>
                            Ongoing research and scholarship on the siege contribute to a deeper understanding of York&lsquo;s history and the broader English Civil War.
                        </p>
                        <p className='text-lg'>
                            York&lsquo;s siege attracts global interest, drawing visitors and scholars from around the world, thus contributing to a shared understanding of historical events.
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