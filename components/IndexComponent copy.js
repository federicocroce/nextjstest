import dynamic from 'next/dynamic'

const mainPath = './'

// const Layout = dynamic(() => import('./MyLayout.js'))
// const Fede = dynamic(() => import('./Fede.js'))
// const Fede1 = dynamic(() => import('./Fede1.js'))
// const Fede2 = dynamic(() => import('./Fede2.js'))

export {default as Fede} from './Fede.js';
export {default as Layout} from './MyLayout.js';

// export {
//   Layout,
//   Fede1
// }