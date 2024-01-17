import SelectCards from '@/components/SelectCards';

import BlurBG from '@/public/images/BlurBG.png';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center container w-full relative">
      <div className='flex flex-col items-center gap-4'>
        <p className='text-2xl md:text-5xl mt-32 font-TrajanBold'>The 1644 siege of York</p>
        <p className='text-lg mt-4 font-bold text-brand-green'>Select your role to start journey</p>
      </div>
      <SelectCards />
      <div className='w-full h-64 bg-white mt-20 md:mt-16 rounded-xl border border-brand-gray flex pl-8 mr-6 md:mr-0 md:pl-16 justify-between'>
        <div className='flex flex-col gap-4 min-w-64 max-w-[1000px] md:max-w-[500px] my-8 md:my-12'>
          <h1 className='text-xl font-bold'>Keep in touch with us!</h1>
          <p>Get a summary of what we have shipped and stay up to date on our future plan!</p>
          <div className='flex mr-8 md:mr-0'>
            <input type="text" className='w-full h-12 rounded-lg border border-brand-gray px-4' placeholder='Enter your email' />
            <div className='-ml-10 rounded-full border-blue-500 bg-blue-500 w-8 h-8 my-2 flex justify-center items-center'>
              <ArrowUp />
            </div>
          </div>
        </div>
        <Image src={BlurBG} className='max-w-[650px] hidden md:block' alt="York map" />
      </div>
    </main>
  )
}

const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256">
    <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path>
  </svg>
);
