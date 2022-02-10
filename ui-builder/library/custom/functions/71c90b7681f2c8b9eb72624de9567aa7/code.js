var currentUser, error, errorCode;



BackendlessUI.Functions.Custom['loadCurrentUser'] = async function loadCurrentUser(appData) {
    if (!(await BackendlessUI.Functions.Custom['getCurrentUser'](appData))) {
    try {
      currentUser = (await Backendless.UserService.getCurrentUser());

    } catch (error) {
      errorCode = (error['code']);
      if (errorCode == 3064) {
        await Backendless.UserService.logout()
      }
      console.log(error);

    }
    appData['currentUser'] = currentUser;
  }



}