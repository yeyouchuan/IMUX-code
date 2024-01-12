import Image from 'next/image'

import SelectCards from '@/components/SelectCards'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center container w-full relative">
      <div className='flex flex-col items-center gap-4'>
        <p className='text-5xl font-TrajanBold'>The 1644 siege of York</p>
        <p className='text-lg mt-4 text-brand-green'>Select your role to start journey</p>
      </div>
      <SelectCards />
    </main>
  )
}
