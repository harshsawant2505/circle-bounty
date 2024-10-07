/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'


export function autoPick() {
  return Math.floor(Math.random() * 3)
}
export function start() {
  
}

function Console({setIsAutoPicking, setStart}: any) {

  
  return (
    <div className='w-[300px] relative h-[700px] bg-black rounded-sm'>

        <div className='flex gap-3 py-7 px-4'>
        
         <Button className='w-32 focus:bg-[#1D293B]  bg-[#04091A] '>Manual</Button>
         <Button className='w-32 focus:bg-[#1D293B]  bg-[#04091A] ' onClick={()=>{setIsAutoPicking(true)}}>AutoPick</Button>

        </div>
        <div className='px-4 flex flex-col gap-4'>
            <h2 className='font-medium text-white'>
                Bet amount
            </h2>
            <Input type="text" placeholder="Enter amount" className='bg-[#4B5563] border-[#4B5563] text-white rounded py-5' />
            <Button className='w-full bg-[#23C55E] hover:bg-[#31ed76]' onClick={()=>{setStart(true)}}>Play</Button>
        </div>
        <div className='absolute bottom-5  w-full flex gap-x-8 items-center justify-center px-4'>
            <img src="/assets/character.png" alt=""  className='w-12 animation-pulse'/>
            <h2 className='text-white'>
            Click one of the<br /> blue tiles to start
            </h2>
        </div>

    </div>
  )
}

export default Console