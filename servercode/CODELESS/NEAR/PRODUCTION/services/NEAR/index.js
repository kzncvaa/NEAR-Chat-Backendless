'use strict';

class /*SERVICE_NAME*/NEAR/*SERVICE_NAME*/ {
/*TYPES*/
/*TYPES*/
/*METHODS*/
/*METHOD Login*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /login
* @param {String} account_id 
* @param {String} callback_url 
* @param {String} network 
* @returns {String}
*/
async Login(account_id, callback_url, network) {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/sign_url')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'account_id': account_id,'receiver_id': 'inotel.pool.f863973.m0','method': 'ping','params': ({  }),'deposit': 0,'gas': 30000000000000,'meta': '','callback_url': callback_url,'network': network })))

/*METHOD_BODY*/
}
/*METHOD getInfoByTransaction*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/*METHOD_UNTYPED_OBJECT_TYPES*/
/**
 * @typedef {Object} getInfoByTransaction_ResultObject
 * 
 * @property {Object} transaction
 */
/*METHOD_UNTYPED_OBJECT_TYPES*/
/**
* @route POST /getInfo
* @param {String} transactionHashes 
* @param {String} username 
* @returns {getInfoByTransaction_ResultObject}
*/
async getInfoByTransaction(transactionHashes, username) {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rpc.testnet.near.org')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'jsonrpc': '2.0','id': 'dontcare','method': 'tx','params': [transactionHashes, username] })))

/*METHOD_BODY*/
}
/*METHOD getPrivateKey*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /parse_seed_phrase
* @param {String} seed_phrase 
* @returns {String}
*/
async getPrivateKey(seed_phrase) {
/*METHOD_BODY*/
var response;

function subsequenceFromStartLast(sequence, at1) {
  var start = at1;
  var end = sequence.length - 1 + 1;
  return sequence.slice(start, end);
}


  response = (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/parse_seed_phrase')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'seed_phrase': seed_phrase })));

  return (subsequenceFromStartLast((response['secretKey']), (((response['secretKey']).indexOf(':') + 1 + 1) - 1)))

/*METHOD_BODY*/
}
/*METHOD Balance*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route GET /balance
* @param {String} account_id 
* @returns {String}
*/
async Balance(account_id) {
/*METHOD_BODY*/


  return (await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String('http://rest.nearapi.org/balance/') + String(account_id)))).setEncoding('utf8').send())



/*METHOD_BODY*/
}
/*METHOD view*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /view
* @returns {String}
*/
async view() {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/view')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'contract': 'guest-book.testnet','method': 'getMessages','params': ({  }) })))

/*METHOD_BODY*/
}
/*METHOD sendMessage*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /call
* @param {String} account_id 
* @param {String} private_key 
* @param {String} text 
*/
async sendMessage(account_id, private_key, text) {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/call')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'account_id': account_id,'private_key': private_key,'contract': 'guest-book.testnet','method': 'addMessage','params': ({ 'text': text }),'attached_gas': '100000000000000','attached_tokens': '0' })))

/*METHOD_BODY*/
}
/*METHOD transaction*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /send
* @param {String} sender_id 
* @param {String} receiver_id 
* @param {String} deposit 
* @param {String} callback_url 
* @param {String} network 
* @param {String} [message] 
* @returns {String}
*/
async transaction(sender_id, receiver_id, deposit, callback_url, network, message) {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/sign_url')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'account_id': sender_id,'receiver_id': receiver_id,'method': '!transfer','params': ({  }),'deposit': deposit,'gas': 30000000000000,'meta': message,'callback_url': callback_url,'network': network })))

/*METHOD_BODY*/
}
/*METHOD deployContract*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /deploy
* @param {String} account_id 
* @param {String} private_key 
* @returns {String}
*/
async deployContract(account_id, private_key) {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/deploy')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'account_id': account_id,'private_key': private_key,'contract': 'nit-simple.wasm' })))

/*METHOD_BODY*/
}
/*METHOD mintNFT*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /mint_nft
* @param {String} token_id 
* @param {String} metadata 
* @param {String} account_id 
* @param {String} private_key 
*/
async mintNFT(token_id, metadata, account_id, private_key) {
/*METHOD_BODY*/


  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/mint_nft')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'token_id': token_id,'metadata': metadata,'account_id': account_id,'private_key': private_key,'contract': account_id })))



/*METHOD_BODY*/
}
/*METHOD transferNFT*//*METHOD_COMPLEX_TYPES*//**//*METHOD_COMPLEX_TYPES*/

/**
* @route POST /transfer
* @param {String} token_id 
* @param {String} receiver_id 
* @param {String} enforce_owner_id 
* @param {String} memo 
* @param {String} enforce_private_key 
* @param {String} contract 
* @returns {String}
*/
async transferNFT(token_id, receiver_id, enforce_owner_id, memo, enforce_private_key, contract) {
/*METHOD_BODY*/
  return (await Backendless.Request['post']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})('https://rest.nearapi.org/transfer_nft')).set(({ 'Content-type': 'application/json' })).setEncoding('utf8').send(({ 'token_id': token_id,'receiver_id': receiver_id,'enforce_owner_id': enforce_owner_id,'memo': memo,'owner_private_key': enforce_private_key,'contract': contract })))

/*METHOD_BODY*/
}
/*METHODS*/
}

Backendless.ServerCode.addService(/*SERVICE_NAME*/NEAR/*SERVICE_NAME*/);