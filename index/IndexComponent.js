
import dynamic from 'next/dynamic'

const components = {};
const mainPath = '../components/';

// import Show from '../components/MyLayout'


const asyncComponentLoadable = (path, name) => {
  console.log(`${mainPath}${path}`);
  // Object.assign(components, {[name]: dynamic(() => import(`${path}`))} )
  Object.assign(components, {[name]: dynamic(() => import(`../components/Show`))} )
  // Object.assign(components, {[name]: dynamic(() => import(`${mainPath}${path}`))} )
};


(() => {
  asyncComponentLoadable('../components/Show', 'Show');
  // asyncComponentLoadable('MyLayout', 'Layout');
})();

export default components;




















// // import React from 'react';
// import dynamic from 'next/dynamic'
// // import Show from './Show'
// // import Loadable from 'react-loadable';

// // React.components = {};

// const components = {};


// const asyncComponentLoadable = (path, name) => {
//   // React.components[name] = Loadable({
//   //     loader: () => import(`${path}` /* webpackChunkName: "[request]"*/),
//   //     loading: () => null,
//   // });
//   // return{
//   //   [name]: dynamic(() => import(path))
//   // } 
//   // React.components.Show = dynamic(() => import('./Show'))
//   // React.components[name] = dynamic(() => import(`${path}`))
//   // return dynamic(() => import(`${path}`))

//   Object.assign(components, {[name]: dynamic(() => import(`${path}`))} )
// };


// (() => {
//   asyncComponentLoadable('./Show', 'Show');
//   // asyncComponentLoadable('./Show1', 'Show1');
//   // asyncComponentLoadable('./Show2', 'Show2');
// })();

// export default components;
