import '@radix-ui/themes/styles.css';

import yorkMap from '@/public/images/york-map.png';

import Image from 'next/image';

export default function Volunteer() {
    return (
        <main className="flex flex-col items-center justify-center container py-2">
            <h1 className='text-5xl font-TrajanBold'>Volunteer</h1>
            <div className='mt-24 flex flex-col gap-y-28'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative gap-y-20 lg:max-w-none'>
                    <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit rounded-xl pt-20">
                        <div className='bg-white'>
                            <Image src={yorkMap} width={1200} height={1200} className='w-full h-auto' alt="York map" />
                        </div>
                    </aside>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full h-60 bg-white rounded-xl mt-20'>Card</div>
                        <div className='w-full h-60 bg-white rounded-xl'>Card</div>
                        <div className='w-full h-60 bg-white rounded-xl'>Card</div>
                        <div className='w-full h-60 bg-white rounded-xl'>Card</div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative gap-y-20 lg:max-w-none'>
                    <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit rounded-xl pt-20">
                        <div className='bg-white'>
                            <Image src={yorkMap} width={1200} height={1200} className='w-full h-auto' alt="York map" />
                        </div>
                    </aside>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full h-60 bg-white rounded-xl mt-20'>Card</div>
                        <div className='w-full h-60 bg-white rounded-xl'>Card</div>
                        <div className='w-full h-60 bg-white rounded-xl'>Card</div>
                        <div className='w-full h-60 bg-white rounded-xl'>Card</div>
                    </div>
                </div>
            </div>
        </main>
    )
} 