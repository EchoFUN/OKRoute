/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

 let cache = {}

 // the basic route structure in the system case .
 class Route {
   path = ''
   component = null
 
   constructor(path) {
     this.path = path
   }
 }
 
 const appendScript = (src, script) => {
   return new Promise((resolve, reject) => {
     script = document.createElement('script');
     script.onload = resolve;
     script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
 
     // Todo any optimize .
     // script.crossOrigin = false
     script.src = src;
 
     document.body.appendChild(script);
   });
 }
 
 const resolvePath = path => {
   return path
 }
 
 const resolveRoute = path => {
   let resolved = new Route(path)
   if (cache[path]) {
     resolved.loaded = true
   }
   return resolved
 }
 
 export const doRender = route => {
 
 }
 
 export const push = async path => {
   // start loading the script .
 
   let nextRoute = resolveRoute(path)
   if (!nextRoute.loaded) {
     let resouce = await appendScript(`${path}.js`)
     nextRoute = new Route(path)
     cache[path] = nextRoute
   }
 
 
   doRender(nextRoute)
 
 }
 