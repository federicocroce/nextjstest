import loadable from '@loadable/component'

const loadDynamic = path => loadable(() => import(`${path}` /* webpackChunkName: "[request]"*/));

export const Layout = loadDynamic('./MyLayout.js');
export const Show = loadDynamic('./Show.js')
export const Sarasa = loadDynamic('./Sarasa.js')
export const Fede = loadDynamic('./Fede.js')
