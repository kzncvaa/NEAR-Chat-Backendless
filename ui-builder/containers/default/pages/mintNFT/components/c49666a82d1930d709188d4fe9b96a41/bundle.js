define([], () => ({
  /* content */
  /* handler:onContentAssignment */
  async onContentAssignment(___arguments) {
    var amount;


  amount = (await Backendless.Request['get']((function(url){ if( !url ) { throw new Error('Url must be specified.')} if( !url.startsWith('http://') && !url.startsWith('https://')) { return 'https://' + url } return url})((String('https://rest.nearapi.org/balance/') + String((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})())))).setEncoding('utf8').send()) / 1e+24;

  return ((JSON.stringify(amount)).slice(0, (JSON.stringify(amount)).indexOf('.') + 1 + 2))

  },
  /* handler:onContentAssignment */
  /* content */
}))
