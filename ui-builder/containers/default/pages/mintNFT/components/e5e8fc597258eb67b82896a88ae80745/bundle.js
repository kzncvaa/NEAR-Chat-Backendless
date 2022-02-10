define([], () => ({
  /* content */
  /* handler:onSubmit */
  async onSubmit(___arguments) {
    var error, metadata, tokenId;

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


  metadata = (getObjectProperty(___arguments.context.dataModel, 'metadata'));
  tokenId = (getObjectProperty(___arguments.context.dataModel, 'token_id'));
  if (metadata && tokenId) {
    try {
      await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/mint_nft`).set('Content-Type', 'application/json').set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send({ 'token_id': tokenId,'metadata': metadata,'account_id': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'private_key': ((function(){ try { return JSON.parse(localStorage.getItem('private_key')) } catch(e){ return null }})()) });
      await Backendless.Data.of('NFTs').save( ({ 'token_id': tokenId,'owner_id': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'contract': ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})()),'metadata': metadata }) );
      ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('67fe6e96b05c9bde0a5d63a9ac7825c1', (await Backendless.Data.of('NFTs').find(Backendless.DataQueryBuilder.create().setPageSize(10))));
      ;await ( async function (message){ alert(message) })('NFT was added');

    } catch (error) {
      ;await ( async function (message){ alert(message) })('some error');
      console.log(error);

    } finally {
      ___arguments.context.dataModel['token_id'] = '';
      ___arguments.context.dataModel['metadata'] = '';

    }
  } else {
    ;await ( async function (message){ alert(message) })('Fields are empty');
  }

  },
  /* handler:onSubmit */
  /* content */
}))
