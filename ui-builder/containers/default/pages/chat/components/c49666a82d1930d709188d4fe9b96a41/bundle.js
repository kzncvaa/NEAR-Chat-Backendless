define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  async onContentAssignment(___arguments) {
    var amount;


  amount = (await Backendless.Request.get(`${Backendless.appPath}/services/NEAR/balance`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).query({ 'account_id': JSON.stringify(((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})())) }).send()) / 1e+24;

  return ((JSON.stringify(amount)).slice(0, (JSON.stringify(amount)).indexOf('.') + 1 + 2))

  },
  /* handler:onContentAssignment */
  /* content */
}))
