import dynamic from 'next/dynamic'

export const Layout = dynamic(() => import('../components/MyLayout.js'));
export const Show = dynamic(() => import('../components/Show.js'));
export const Sarasa = dynamic(() => import('../components/Sarasa.js'));
export const Fede = dynamic(() => import('../components/Fede.js'));
