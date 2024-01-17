import '@radix-ui/themes/styles.css';
import { Button } from '@radix-ui/themes';

export default function Effect() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className="text-4xl font-TrajanBold text-green-600/70 mt-24 md:mt-8">Effect</h1>
            <div className='mt-12 md:mt-20 flex flex-col w-full'>
                <div className='w-full h-fit rounded-xl bg-white/50 border border-white flex flex-col gap-4 py-12 px-4 md:px-28'>
                    <div className='group flex flex-col gap-4 relative'>
                        <h1 className='text-2xl font-semibold mt-4'>Immediate Outcomes of the Siege</h1>
                        <p className='text-lg'>
                            The 1644 siege ended with York&lsquo;s surrender following the Battle of Marston Moor. This marked a significant turning point in the English Civil War, with Parliamentary forces gaining control over the city.
                        </p>
                        <p className='text-lg'>
                            The fall of York to the Parliamentarians was a major blow to the Royalists, significantly altering the strategic landscape of the war.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Long-Term Effects on York</h1>
                        <p className='text-lg'>
                            Post-surrender, York faced the challenge of recovery from the physical and economic damages incurred during the siege.
                        </p>
                        <p className='text-lg'>
                            The change in control brought about shifts in local governance and societal structures, reflecting the wider political transformations occurring across England.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>Impact on English Civil War</h1>
                        <p className='text-lg'>
                            The siege&lsquo;s outcome contributed to a shift in momentum in favor of the Parliamentarians, influencing subsequent battles and campaigns.
                        </p>
                        <p className='text-lg'>
                            The capture of York, a key Royalist stronghold, had a significant psychological impact on both sides, bolstering Parliamentary morale while demoralizing the Royalists.
                        </p>
                    </div>
                    <div className='group flex flex-col gap-4'>
                        <h1 className='text-2xl font-semibold mt-4'>York&lsquo;s Role in Post-War England</h1>
                        <p className='text-lg'>
                            The siege and its aftermath cemented York&lsquo;s place in English Civil War history, highlighting its strategic and symbolic importance.
                        </p>
                        <p className='text-lg'>
                            The siege became a part of York&lsquo;s rich historical narrative, influencing its cultural identity and heritage preservation efforts in subsequent centuries.
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