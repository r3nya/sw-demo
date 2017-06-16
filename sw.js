importScripts('node_modules/sw-toolbox/sw-toolbox.js'); 

console.info('Hello from SW!');

toolbox.options.debug = true;
toolbox.precache(['/']);
toolbox.router.get('/', toolbox.fastest);
