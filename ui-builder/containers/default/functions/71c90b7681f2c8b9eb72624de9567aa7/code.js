var currentUser, error, errorCode;



BackendlessUI.Functions.Custom['fn_71c90b7681f2c8b9eb72624de9567aa7'] = async function fn_71c90b7681f2c8b9eb72624de9567aa7(appData) {
    if (!(await BackendlessUI.Functions.Custom['fn_c4e97af1f13356084877663da10b7363'](appData))) {
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