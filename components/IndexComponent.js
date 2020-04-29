import dynamic from 'next/dynamic'


export const Layout = dynamic(() => import('./MyLayout'));
export const Show = dynamic(() => import('./Show'))
// export const Sarasa = dynamic(() => import('./Sarasa'))

// export const Layout = dynamic(() => import('./MyLayout').then(mod => mod.Layout))
// export const Show = dynamic(() => import('./Show').then(mod => mod.Show))
// export const Sarasa = dynamic(() => import('./Sarasa').then(mod => mod.Sarasa))
// export const Fede = dynamic(() => import('./Fede'))



