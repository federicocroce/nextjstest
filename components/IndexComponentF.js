import dynamic from 'next/dynamic'


const loadDynamic = path => dynamic(() => import(`${path}` /* webpackChunkName: "[request]"*/));


// export const Layout = loadDynamicL('./MyLayout.js', 'Layout');
// export const Layout = dynamic(() =>
// import('./MyLayout.js').then(mod => mod.Layout)
// )
export const Layout = loadDynamic('./MyLayout', 'Layout')
export const Show = loadDynamic('./Show', 'Show')
export const Sarasa = loadDynamic('./Sarasa', 'Sarasa');
export const Fede = loadDynamic('./Fede', 'Fede')
