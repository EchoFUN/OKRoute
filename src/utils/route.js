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

const staticBasePath = '../layouts'

class RouteStruct {
  path = ''
  component = null

  constructor(path) {
    this.path = path
  }
}

const createKey = () => {
  return Math.random().toString(36).slice(2, 10)
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

const checkPath = path => {
  return true
}

const changeState = (method) => {
  // window.history[method]()
}

const resolveRoute = path => {
  let resolved = new RouteStruct(path)
  if (cache[path]) {
    resolved.loaded = true
  }
  return resolved
}

// export const doRender = (route, prefetched) => {
// window.history[method]({
//   url,
//   as,
//   options,
//   __N: true,
//   key: this._key = method !== 'pushState' ? this._key : createKey()
// }, '', as)


// }

const prefetch = async () => {

}

const register = () => {

}


export default class Route {
  constructor(configure) {
    this.render = configure.render
  }

  async push(path) {
    if (!checkPath(path)) {
      throw new Error('incorrent path .')
    }

    // start loading the script .

    let nextRoute = resolveRoute(path)


    if (!nextRoute.component) {
      let resource
      try {
        resource = await import(`${staticBasePath}${path}`)
        nextRoute.component = resource
      } catch (error) {
        throw error
      }
      cache[path] = nextRoute
    }
    changeState('pushState')

    let prefetched = {}
    try {
      prefetched = await prefetch(nextRoute)
    } catch (error) {
      throw error
    }
    // doRender(nextRoute, prefetched)
    this.render(nextRoute, prefetched)
    return nextRoute
  }

}