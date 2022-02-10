define([], () => ({
  /* content */

  /* handler:onClick */
  async onClick(___arguments) {
      localStorage.removeItem('username');
  localStorage.removeItem('public_key');
  localStorage.removeItem('private_key');
  ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('login', null);

  },
  /* handler:onClick */
  /* content */
}));
