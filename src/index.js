import NavScroll from './navscroll'
import defaults, { setDefaults } from './default-props'

const install = function(Vue, options) {
  if (options) setDefaults(options)
  Vue.directive('navscroll', NavScroll)
  Vue.component('navscroll', NavScroll)
  Vue.config.globalProperties.$scrollTo = NavScroll.scrollTo
}

NavScroll.install = install

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install)
}

export default NavScroll
