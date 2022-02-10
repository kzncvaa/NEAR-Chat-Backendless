Backendless.ServerCode.customEvent('RT_clientDisconnected', async function(req) {

/*BLOCKLY*/  await Backendless.Data.of('Connections').bulkDelete( (['connectionId = \'',req.args.connectionId,'\''].join('')) );
  await require('codeless-function-59f6471fca679ce5bd52fa38f4114eb2')(req.context.userId)
/*BLOCKLY*/
});