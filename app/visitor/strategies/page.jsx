import '@radix-ui/themes/styles.css';
import { Button } from '@radix-ui/themes';

import yorkMap from '@/public/images/york-map.png';
import Leven from '@/public/images/Leven.png';
import Manchester from '@/public/images/Manchester.png';
import Fairfax from '@/public/images/Fairfax.png';
import Bomb from '@/public/images/bomb.png';
import Sapping from '@/public/images/Sapping.png';

import Image from 'next/image';

export default function Strategies() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className="text-4xl font-TrajanBold text-green-600/70 mt-24 md:mt-8">Strategies</h1>
            <div className='mt-12 md:mt-20 flex flex-col w-full'>
                <div className='w-full h-fit rounded-xl bg-white/50 border border-white flex flex-col gap-4 py-12 px-4 md:px-28'>
                    <div className='group flex flex-col gap-4 relative'>
                        <div className='flex justify-center items-center relative'>
                            <Image src={yorkMap} width={1200} height={1200} className="w-full md:w-[80%] h-fit" alt='Charles Avatar' />
                            <Image src={Leven} width={80} height={80} className="w-8 h-8 md:w-24 md:h-24 absolute top-1/4 left-4 md:left-12" alt='Charles Avatar' />
                            <Image src={Fairfax} width={80} height={80} className="w-8 h-8 md:w-24 md:h-24 absolute top-1/4 left-[82%] md:left-[80%]" alt='Fairfax Avatar' />
                            <Image src={Manchester} width={80} height={80} className="w-8 h-8 md:w-24 md:h-24 absolute top-[85%] left-1/2 md:left-[45%]" alt='Manchester Avatar' />
                        </div>
                        <h1 className='text-2xl font-semibold mt-4'>Military Strategies and Siege Techniques</h1>
                        <p className='text-lg'>
                            The Parliamentary forces, including Scottish armies and troops from the Eastern Association, strategically surrounded York on three sides. This tactic aimed to isolate the city and cut off supplies and reinforcements.
                        </p>
                        <p className='text-lg'>
                            The Scots&lsquo; inability to capture a key fortification known as &ldquo;the Sconce&rdquo; on the Mount played a crucial role. This fort effectively blocked the main southern approach to Micklegate Bar, hindering the siege efforts.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <div className='flex gap-12 justify-center items-center relative my-8'>
                            <Image src={Bomb} width={80} height={80} className="w-24 h-24 md:w-28 md:h-28 hover:animate-ping" alt='Charles Avatar' />
                            <Image src={Sapping} width={80} height={80} className="w-20 h-16 md:w-24 md:h-20 hover:animate-bounce" alt='Fairfax Avatar' />
                        </div>
                        <h1 className='text-2xl font-semibold mt-4'>Offensive and Defensive Tactics</h1>
                        <p className='text-lg'>
                            Parliamentary forces employed sapping (undermining the walls) and bombardment to breach the city&lsquo;s defenses. Despite these aggressive tactics, York&lsquo;s robust defenses held strong for an extended period.
                        </p>
                        <p className='text-lg'>
                            York&lsquo;s defenders utilized the city&lsquo;s strong walls and strategic positioning to their advantage, repelling multiple attempts to breach the city.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Technological and Logistical Aspects</h1>
                        <p className='text-lg'>
                            The use of artillery for bombardment was a significant aspect of the siege, reflecting the military technology of the time.
                        </p>
                        <p className='text-lg'>
                            Maintaining supply lines and managing logistics were critical for both the besiegers and the besieged. The effective blockade of York was instrumental in eventually forcing the city to surrender.
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