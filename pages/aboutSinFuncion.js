import React, { useState } from 'react'

import {Show, Layout} from '../components/IndexComponent'

export default function About() {
  const [isShow, setIsShow] = useState(false)
  return (
    <Layout>
      <p>This is the about page CON Lazy CON Framework</p>
      <button onClick={() => setIsShow(true)}>SHOW</button>
      {isShow && <div>
        <Show />
        </div>}
    </Layout>
  )
}
