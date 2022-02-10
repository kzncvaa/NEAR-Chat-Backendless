define([], () => ({
  /* content */

  /* handler:onEnter */
  async onEnter(___arguments) {
      if (((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()) === null) {
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('login', null);
  }

  },
  /* handler:onEnter */
  /* content */
}));
