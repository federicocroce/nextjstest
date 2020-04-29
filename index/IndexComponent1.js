import dynamic from 'next/dynamic'

const components = {};

const asyncComponentLoadable = (path, name) => {
  console.log(path);
  const newPath = path;
  Object.assign(components, {[name]: dynamic(() => import(`${path}`))} )
};


(() => {
  asyncComponentLoadable('../components/Show', 'Show');
  // asyncComponentLoadable('../components/Show1', 'Show1');
  // asyncComponentLoadable('../components/MyLayout', 'MyLayout');
})();

export default components;