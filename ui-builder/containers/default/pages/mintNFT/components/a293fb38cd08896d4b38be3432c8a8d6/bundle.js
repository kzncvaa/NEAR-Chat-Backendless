define([], () => ({
  /* content */
  /* handler:onSubmit */
  async onSubmit(___arguments) {
    var error, receiver, token, transferResult, message;

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


  message = (getObjectProperty(___arguments.context.dataModel, 'memo'));
  receiver = (getObjectProperty(___arguments.context.dataModel, 'receiver_id'));
  token = (getObjectProperty(___arguments.context.dataModel, 'token_id'));
  if (receiver && token) {
    try {
      transferResult = (await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/transfer`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'token_id': token,'receiver_id': receiver,'enforce_owner_id': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'memo': message,'enforce_private_key': ((function(){ try { return JSON.parse(localStorage.getItem('private_key')) } catch(e){ return null }})()),'contract': (getObjectProperty(((await Backendless.Data.of('NFTs').find(Backendless.DataQueryBuilder.create().setWhereClause((['token_id = \'',token,'\''].join(''))).setPageSize(10)))[0]), 'contract')) }));
      if (!(typeof (getObjectProperty(transferResult, 'error')) === 'undefined')) {
        console.log(transferResult);
        throw (new Error('Some error'))
      } else {
        ___arguments.context.pageData['nft'] = ((await Backendless.Data.of('NFTs').find(Backendless.DataQueryBuilder.create().setWhereClause((['token_id = \'',token,'\''].join(''))).setPageSize(10)))[0]);
        (getObjectProperty(___arguments.context.pageData, 'nft'))['owner_id'] = receiver;
        await Backendless.Data.of('NFTs').save( (getObjectProperty(___arguments.context.pageData, 'nft')) );
        ;await ( async function (message){ alert(message) })('Transfer successful');
        ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('67fe6e96b05c9bde0a5d63a9ac7825c1', (await Backendless.Data.of('NFTs').find(Backendless.DataQueryBuilder.create().setPageSize(10))));
      }

    } catch (error) {
      ;await ( async function (message){ alert(message) })(error);
      console.log(error);

    } finally {
      ___arguments.context.dataModel['token_id'] = '';
      ___arguments.context.dataModel['receiver_id'] = '';
      ___arguments.context.dataModel['memo'] = '';

    }
  } else {
    ;await ( async function (message){ alert(message) })('Fields are empty');
  }

  },
  /* handler:onSubmit */
  /* content */
}))
