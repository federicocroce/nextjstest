import React, { useState } from 'react'

import {Show, Layout, Sarasa, Fede} from '../components/IndexComponentLodable';

export default function About() {
  const [isShow, setIsShow] = useState(false)
  return (
    <Layout>
      <Sarasa/>
      <Fede/>
      <p>This is the about page Lodeable</p>
      <button onClick={() => setIsShow(true)}>SHOW</button>
      {isShow && <div>
        <Show />
        </div>}
    </Layout>
  )
}
