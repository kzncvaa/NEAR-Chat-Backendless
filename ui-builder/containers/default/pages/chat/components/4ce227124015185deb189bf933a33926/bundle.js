define([], () => ({
  /* content */

  /* handler:onContentAssignment */
  async onContentAssignment(___arguments) {
    var user, currentUserObjectId, currentUser;


  user = ___arguments.context.getComponentDataStoreByUid('95af91783da5053a184c19ada36ab7b2');
  currentUser = (await BackendlessUI.Functions.Custom['fn_c4e97af1f13356084877663da10b7363'](___arguments.context.appData));
  currentUserObjectId = currentUser && (currentUser['objectId']);

  return (currentUserObjectId == (user['objectId']) ? '(you)' : ((user['online']) ? 'online' : 'offline'))

  },  
/* handler:onContentAssignment *//* handler:onDisplayAssignment */
  onDisplayAssignment(___arguments) {
      return (!(___arguments.context.getComponentDataStoreByUid('95af91783da5053a184c19ada36ab7b2')['isTyping']))

  },  
/* handler:onDisplayAssignment *//* content */
}));
