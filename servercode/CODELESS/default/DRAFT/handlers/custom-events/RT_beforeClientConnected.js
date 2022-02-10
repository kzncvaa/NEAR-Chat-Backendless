Backendless.ServerCode.customEvent('RT_beforeClientConnected', async function(req) {

/*BLOCKLY*/req.context.userId;

  await Backendless.Data.of('Connections').save( ({ 'connectionId': req.args.connectionId,'userId': req.context.userId }) );
  await require('codeless-function-59f6471fca679ce5bd52fa38f4114eb2')(req.context.userId)
/*BLOCKLY*/
});