define([], () => ({
  /* content */

  /* handler:onSubmit */
  async onSubmit(___arguments) {
    var message;


  message = (___arguments.context.dataModel['message']);
  if (message) {
    await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/call`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'account_id': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'private_key': ((function(){ try { return JSON.parse(localStorage.getItem('private_key')) } catch(e){ return null }})()),'text': message });
    ___arguments.context.dataModel['message'] = '';
    ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('7da7fed30d348222c5d9765bd2314e5d', (await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/view`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send()));
  }

  },
  /* handler:onSubmit */
  /* content */
}));
