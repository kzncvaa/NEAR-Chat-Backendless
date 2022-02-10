Backendless.ServerCode.customEvent('RT_clientUserPresenceChanged', async function(req) {

/*BLOCKLY*/  await Backendless.Data.of('Connections').bulkUpdate( (['connectionId = \'',req.args.connectionId,'\''].join('')), ({ 'userId': req.context.userId }) );
  await require('codeless-function-59f6471fca679ce5bd52fa38f4114eb2')(req.args.prevUserId)
  await require('codeless-function-59f6471fca679ce5bd52fa38f4114eb2')(req.context.userId)
/*BLOCKLY*/
});