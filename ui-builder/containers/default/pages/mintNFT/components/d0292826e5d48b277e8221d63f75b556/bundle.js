define([], () => ({
  /* content */

  /* handler:onContentAssignment */
  onContentAssignment(___arguments) {
      return ((function(){ try { return JSON.parse(localStorage.getItem('username')) } catch(e){ return null }})())

  },
  /* handler:onContentAssignment */
  /* content */
}));
