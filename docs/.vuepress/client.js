import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {

    // router.afterEach((to, from) => {
    //   const activeNavLink = document.querySelector('.navbar .nav-link.active')
    //   if (activeNavLink) {
    //     activeNavLink.classList.remove('active')
    //   }
  
    //   const currentNavLink = document.querySelector(`.navbar .nav-link[href="${to.path}"]`)
    //   if (currentNavLink) {
    //     currentNavLink.classList.add('active')
    //   }
    // })
  },
  setup() {
    console.log('client setup');
  },
  rootComponents: [],
});