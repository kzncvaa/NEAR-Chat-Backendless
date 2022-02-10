define([], () => ({
  /* content */

  
/* handler:onSubmit */
  async onSubmit(___arguments) {
    var receiver, donation, message, error;

function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string') {
    throw new Error('"property name" in "Get object property" block must be "string"')
  }

  if (object.hasOwnProperty(propPath)) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object[propsNamesList[0]]

  for (let i = 1; i < propsNamesList.length; i++) {
    result = result[propsNamesList[i]]
  }

  return result
}


  receiver = (getObjectProperty(___arguments.context.dataModel, 'receiver'));
  donation = (getObjectProperty(___arguments.context.dataModel, 'donation'));
  message = (getObjectProperty(___arguments.context.dataModel, 'message'));
  if (donation && receiver) {
    try {
      ;await ( async function (url, isExternal, params){ const queryString = BackendlessUI.QueryString.stringify(params); const targetUrl = `${url}${queryString ? '?' + queryString : ''}`; isExternal ? window.open(targetUrl, '_blank') : window.location = targetUrl; })((await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/send`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'sender_id': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'receiver_id': receiver,'deposit': donation,'callback_url': (await ( async function (){ return window.location.href })()),'network': ((getObjectProperty(___arguments.context.dataModel, 'testnet')) ? 'testnet' : 'mainnet'),'message': message })), false, null);

    } catch (error) {
      ;await ( async function (message){ alert(message) })(error);

    } finally {
      ___arguments.context.dataModel['receiver'] = '';
      ___arguments.context.dataModel['message'] = '';
      ___arguments.context.dataModel['donation'] = 0;

    }
  } else {
    ;await ( async function (message){ alert(message) })('Fields are empty');
  }

  },
  /* handler:onSubmit */
  /* content */
}));
