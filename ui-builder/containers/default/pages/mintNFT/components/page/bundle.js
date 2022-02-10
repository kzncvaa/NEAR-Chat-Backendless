define([], () => ({
  /* content */

  
/* handler:onEnter */
  async onEnter(___arguments) {
      if (((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()) === null) {
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('login', null);
  }
  ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('67fe6e96b05c9bde0a5d63a9ac7825c1', (await Backendless.Data.of('NFTs').find(Backendless.DataQueryBuilder.create().setPageSize(10))));

  },
  /* handler:onEnter */
  /* content */
}));
