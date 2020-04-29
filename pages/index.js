// import React from 'react';
import dynamic from 'next/dynamic'
// import setComponents from "../components/IndexComponent";

// import Layout from '../components/MyLayout.js'
// import {Layout, Fede, Fede1, Fede2} from '../components/IndexComponent'


const Layout = dynamic(() => import('../components/MyLayout.js'))

export default function Index() {
  // setComponents();
// Object.assign(React, {
//   components: {
//     'Show': dynamic(() => import('../components/Show.js'))
//   }
// });

console.log(React);

  return (
    <Layout>
      <p>This is the about page CON Lazy Sin Loadable</p>
    </Layout>
  )
}
