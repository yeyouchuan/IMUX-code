import '@radix-ui/themes/styles.css';
import { Button } from '@radix-ui/themes';

import Leven from '@/public/images/Leven.png';
import Manchester from '@/public/images/Manchester.png';
import Fairfax from '@/public/images/Fairfax.png';
import Charles from '@/public/images/Charles.png';
import Crown from '@/public/images/Crown.png';
import Money from '@/public/images/Money.png';
import Army from '@/public/images/Army.png';

import Image from 'next/image';

export default function Background() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className="text-4xl font-TrajanBold text-green-600/70 mt-24 md:mt-8">Background</h1>
            <div className='mt-12 md:mt-20 flex flex-col md:w-full mr-6 md:mr-0'>
                <div className='w-full h-fit rounded-xl bg-white/50 border border-white flex flex-col gap-4 py-12 px-4 md:px-28'>
                    <div className='group flex flex-col gap-4'>
                        <div className='flex flex-row gap-12 justify-center items-center'>
                            <Image src={Charles} width={80} height={80} className="w-20 h-20 md:w-32 md:h-32 group-hover:translate-x-8 duration-150" alt='Charles Avatar' />
                            <p className='text-3xl md:text-5xl font-bold md:group-hover:text-3xl duration-300'>VS</p>
                            <Image src={Fairfax} width={80} height={80} className="w-20 h-20 md:w-32 md:h-32 group-hover:-translate-x-8 duration-150" alt='Fairfax Avatar' />  
                        </div>
                        <p className='text-lg mt-4'>
                            The English Civil War, a series of armed conflicts and political machinations between Parliamentarians (&ldquo;Roundheads&rdquo;) and Royalists (&ldquo;Cavaliers&rdquo;), primarily stemmed from issues of royal authority, governance, and religious freedoms. This period was marked by a power struggle between King Charles I and the Parliament of England.
                        </p>
                        <p className='text-lg'>
                            Key figures included King Charles I, representing the absolute monarchy, and leaders like Oliver Cromwell, representing the parliamentary forces.
                        </p>
                        <p className='text-lg'>
                            The war was also significantly influenced by religious tensions, particularly between the Anglican Church, supported by the monarchy, and various Protestant factions aligning with Parliament.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <div className='flex flex-row gap-4 md:gap-14 justify-center items-center my-14 group-hover:translate-x-16'>
                            <Image src={Charles} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:scale-125 group-hover:-translate-x-10 md:group-hover:translate-x-0 md:group-hover:scale-150 duration-500" alt='Charles Avatar' />
                            <Image src={Leven} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:translate-x-0 md:group-hover:translate-x-28 group-hover:translate-y-8 duration-500" alt='Leven Avatar' />
                            <Image src={Fairfax} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:-translate-x-10 md:group-hover:translate-x-0 group-hover:-translate-y-8 duration-500" alt='Fairfax Avatar' />
                            <Image src={Manchester} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:-translate-x-20 md:group-hover:-translate-x-28 group-hover:translate-y-8 duration-500" alt='Manchester Avatar' />
                        </div>
                        <p className='text-lg'>
                            Leading up to 1644, tensions and conflicts across England escalated, making it clear that control of key cities like York would be crucial in determining the outcome of the war.
                        </p>
                        <p className='text-lg'>
                            Prior to the siege, there were significant political and military maneuvers on both sides, with both the Royalists and Parliamentarians seeking alliances, such as with Scottish forces, and bolstering their strategic positions.
                        </p>
                        <p className='text-lg'>
                            The Parliamentarians has support from  Scottish army under the Earl of Leven and Eastern Association troops under the Earl of Manchester.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <div className='flex flex-row gap-4 md:gap-14 justify-center items-center my-10 md:my-20'>
                            <div className='font-Allura text-4xl md:text-5xl w-16 md:w-24 group-hover:translate-x-[122px] md:group-hover:translate-x-[232px] duration-500'>York</div>
                            <Image src={Crown} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:translate-y-12 duration-500" alt='Charles Avatar' />
                            <Image src={Money} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:translate-y-12 duration-500" alt='Leven Avatar' />
                            <Image src={Army} width={80} height={80} className="w-16 h-16 md:w-24 md:h-24 group-hover:-translate-x-[122px] md:group-hover:-translate-x-[228px] group-hover:-translate-y-12 md:group-hover:-translate-y-20 duration-500" alt='Fairfax Avatar' />
                        </div>
                        <p className='text-lg'>
                            York, with its historical significance and strategic position in Northern England, became a pivotal location during the Civil War. As a walled city, it offered substantial defensive advantages and was a symbol of Royalist strength in the North.
                        </p>
                        <p className='text-lg'>
                            Initially, York was a stronghold for the Royalists. Its control was crucial for maintaining influence and coordination across Northern England, making it a target for Parliamentary forces.
                        </p>
                        <p className='text-lg'>
                            Besides its symbolic value, York was important for practical reasons, including control over trade routes and the ability to muster significant military forces.
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