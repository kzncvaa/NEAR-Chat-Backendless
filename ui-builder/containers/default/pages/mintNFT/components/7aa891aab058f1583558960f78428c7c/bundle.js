define([], () => ({
  /* content */
  /* handler:onClick */
  onClick(___arguments) {
    function getObjectProperty(object, propPath) {
  if (typeof propPath !== 'string') {
    throw new Error('"property name" in "Get object property" block must be "string"')
  }

  if (object.hasOwnProperty(propPath)) {
    return object[propPath]
  }

  const propsNamesList = propPath.split('.')

  let result = object[propsNamesList[0]]

  for (let i = 1; i < propsNamesList.length; i++) {
    result = result[propsNamesList[i]]
  }

  return result
}


  ___arguments.context.getComponentDataStoreByUid('cb8a6da6ad05d1735f21d545ec2bbd19')['owner'] = (getObjectProperty(___arguments.context.dataModel, 'owner_id'));
  ___arguments.context.getComponentDataStoreByUid('cb8a6da6ad05d1735f21d545ec2bbd19')['token'] = (getObjectProperty(___arguments.context.dataModel, 'token_id'));
  ___arguments.context.getComponentDataStoreByUid('cb8a6da6ad05d1735f21d545ec2bbd19')['metadata'] = (getObjectProperty(___arguments.context.dataModel, 'metadata'));

  },
  /* handler:onClick */
  /* content */
}))
