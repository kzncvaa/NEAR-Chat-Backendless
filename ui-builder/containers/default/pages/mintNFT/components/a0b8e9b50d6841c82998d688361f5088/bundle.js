define([], () => ({
  /* content */
  /* handler:onClick */
  async onClick(___arguments) {
    var error;


  try {
    await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/deploy`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'account_id': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'private_key': ((function(){ try { return JSON.parse(localStorage.getItem('private_key')) } catch(e){ return null }})()) });
    ;await ( async function (message){ alert(message) })('Contract was deployed');

  } catch (error) {
    console.log(error);

  }

  },
  /* handler:onClick */
  /* content */
}))
