import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// const Layout = dynamic(() =>
//   import('../components/MyLayout').then(mod => mod.Layout)
// )

// const loadDynamicL = (path) => {
//   return dynamic(() => import(`${path}` /* webpackChunkName: "[request]"*/))
// }

// const Sarasa = loadDynamicL('../components/Sarasa');
// const Sarasa = dynamic(() =>
//   import('../components/Sarasa').then(mod => mod.Sarasa)
// )
// const Sarasa = dynamic(() =>
//   import('../components/Sarasa').then(mod => mod.Sarasa)
// )

const Layout = dynamic(() => import('../components/MyLayout'));
const Show = dynamic(() => import('../components/Show'))
const Sarasa = dynamic(() => import('../components/Sarasa'))

export default function About() {
  const [isShow, setIsShow] = useState(false)
  return (
    <Layout>
      <Sarasa/>
      <p>This is the about page CON Lazy Sin Framework</p>
      <button onClick={() => setIsShow(true)}>SHOW</button>
      {isShow && <div>
        <Show />
        </div>}
    </Layout>
  )
}
