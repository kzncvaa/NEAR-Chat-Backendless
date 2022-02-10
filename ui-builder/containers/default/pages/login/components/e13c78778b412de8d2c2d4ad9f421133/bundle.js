define([], () => ({
  /* content */

  
/* handler:onSubmit */
  async onSubmit(___arguments) {
      await Backendless.Cache.put('username', (___arguments.context.dataModel['username']), 30000);
  await Backendless.Cache.put('seedPhrase', (___arguments.context.dataModel['seedPhrase']), 30000);
  ;await ( async function (url, isExternal, params){ const queryString = BackendlessUI.QueryString.stringify(params); const targetUrl = `${url}${queryString ? '?' + queryString : ''}`; isExternal ? window.open(targetUrl, '_blank') : window.location = targetUrl; })((await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/login`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'account_id': (___arguments.context.dataModel['username']),'callback_url': (await ( async function (){ return window.location.href })()),'network': ((___arguments.context.dataModel['testnet']) ? 'testnet' : 'mainnet') })), false, null);

  },
  /* handler:onSubmit */
  /* content */
}));
