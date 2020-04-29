import React, { useState } from 'react'

import {Show, Layout, Sarasa} from '../components/IndexComponentF'

export default function About() {
  const [isShow, setIsShow] = useState(false)
  return (
    <Layout>
      <Sarasa/>
      <p>This is the about page CON Lazy CON Framework</p>
      <button onClick={() => setIsShow(true)}>SHOW</button>
      {isShow && <div>
        <Show />
        </div>}
    </Layout>
  )
}
