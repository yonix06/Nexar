token = await jwt.getToken({
    req,
  })
  const { username, password } = token