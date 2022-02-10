define([], () => ({
  /* content */

  /* handler:onEnter */
  async onEnter(___arguments) {
      await BackendlessUI.Functions.Custom['fn_71c90b7681f2c8b9eb72624de9567aa7'](___arguments.context.appData)
  ;await ( async function (pageName){ BackendlessUI.goToPage(pageName) })(((await BackendlessUI.Functions.Custom['fn_c4e97af1f13356084877663da10b7363'](___arguments.context.appData)) ? 'chat' : 'login'));

  },  
/* handler:onEnter *//* content */
}));
