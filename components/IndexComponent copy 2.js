import dynamic from 'next/dynamic'

const components = {};
const mainPath = './'

const asyncComponentLoadable = (path, name) => {
  Object.assign(components, {[name]: dynamic(() => import(`${mainPath}${path}`))} )
};


(() => {
  asyncComponentLoadable('Show', 'Show');
  asyncComponentLoadable('Fede', 'Fede');
  asyncComponentLoadable('Fede1', 'Fede1');
  asyncComponentLoadable('Fede2', 'Fede2');
  asyncComponentLoadable('MyLayout', 'Layout');
})();

export default components;