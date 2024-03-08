import React from 'react'
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import './globals.css';
import BoxSlider from "@/components/ui/box-slider";

const boxes = [
  {
    title: "Box 1",
    description: "This is the first box"
  },
  {
    title: "Box 2",
    description: "This is the second box"
  },
  {
    title: "Box 3",
    description: "This is the third box"
  }
];

export default function page() {
  return (
    <main>
      <MacbookScroll />
      <div className='cover'></div>
      <title>Native American History</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </main>
  )
}