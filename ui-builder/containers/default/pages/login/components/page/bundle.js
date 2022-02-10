define([], () => ({
  /* content */

  /* handler:onEnter */
  async onEnter(___arguments) {
      if (___arguments.context.pageData['transactionHashes']) {
    ___arguments.context.pageData['APIresult'] = ((await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/getInfo`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'transactionHashes': (___arguments.context.pageData['transactionHashes']),'username': (await Backendless.Cache.get('username')) }))['result']);
    localStorage.setItem('username', JSON.stringify((((___arguments.context.pageData['APIresult'])['transaction'])['signer_id'])));
    localStorage.setItem('public_key', JSON.stringify((((___arguments.context.pageData['APIresult'])['transaction'])['public_key'])));
    localStorage.setItem('private_key', JSON.stringify((await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/parse_seed_phrase`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send(JSON.stringify((await Backendless.Cache.get('seedPhrase')))))));
    ;await ( async function (pageName, pageData){ BackendlessUI.goToPage(pageName, pageData) })('chat', null);
  }

  },
  /* handler:onEnter */
  /* content */
}));
