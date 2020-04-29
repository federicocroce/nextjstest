import dynamic from 'next/dynamic'

const loadDynamic = path => dynamic(() => import(`${path}`));

export const Layout = loadDynamic('../components/MyLayout.js');
export const Show = loadDynamic('../components/Show.js')
export const Sarasa = loadDynamic('../components/Sarasa.js')

