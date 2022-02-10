define([], () => ({
  /* content */
  /* handler:onMounted */
  async onMounted(___arguments) {
    function defineGlobalScope() { const root = (typeof window !== 'undefined' ? window : global);root.codelessScope = root.codelessScope || {};return root.codelessScope;}

function getGlobalEntitiesMap(mapName) { const globalScope = defineGlobalScope();return globalScope[mapName] = globalScope[mapName] || {};}

function stopSetTimeout(timerId) {  const timers = getGlobalEntitiesMap('setIntervals'); if (timerId && timers[timerId]) {    clearInterval(timers[timerId]);    delete timers[timerId]; }}

function runSetTimeout(timerId, callback, delay) {  const timers = getGlobalEntitiesMap('setIntervals'); const timer = setInterval(callback, delay); if (timerId) {  stopSetTimeout(timerId);  timers[timerId] = timer }}



  ;(function() {
    const callback = async () => {
        ;(function (componentUid, listItems){ return ___arguments.context.getComponentByUid(componentUid).dynamicListItems = listItems })('7da7fed30d348222c5d9765bd2314e5d', (await Backendless.Request.post(`${Backendless.appPath}/services/NEAR/view`).set((function(h){if(!h['user-token']){delete h['user-token']} return h})({...{}, ...{ 'user-token': Backendless.getCurrentUserToken() }})).send()));

    };

    const timerId = 'setMessages';
    const timerDelay = 2000;

    runSetTimeout(timerId, callback, timerDelay)
  })()

  },
  /* handler:onMounted */
  /* content */
}))
