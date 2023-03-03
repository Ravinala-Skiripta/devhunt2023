import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Space from '@/components/space/space'
import Input from '@/components/inputs/input'
import { useState } from 'react' 

export default function Home() {


  const [value, setValue] = useState('')
  return (
    <>
      <h1>BIII</h1>
      <Input id='name' type='text' label='Name' value={value} setValue={setValue}/>
      <h2>BOOO</h2>
    </>
  )
}
