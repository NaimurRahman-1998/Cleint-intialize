## create post method in backend

```
  app.post('/jwt', (req, res) => {
      const user = req.body
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      })

      res.send({ token })
    })
```
## Hit the post api when user is created in onAuthstatechange and save it to localstorage
```
if(current){
  fetch('localhost:5000/jwt' ,{
  method: "POST",
  headers : {
  'Content-Type' : 'application/json'
  },
  body: JSON.stringify({email: currentUser.email})
  }
}).then(res=>res.json()).then(data=>{console.log(data) localstorage.setItem(data.token)})
```
### OR

```
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('current user', currentUser)
      // get and set token
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: currentUser.email,
          })
          .then(data => {
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false)
          })
      } else {
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])
```

and also set loading false in logOut function

```
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
```

## then Verify the token in the backend ceating verifyJWT function

```
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'unauthorized access' })
  }
  // bearer token
  const token = authorization.split(' ')[1]

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: 'unauthorized access' })
    }
    req.decoded = decoded
    next()
  })
}

```

## all is done now, when we want to that , only that specific user ccan see his/her data then we will verify theat app.get method with verify jwt
backend
```

 app.get('/rooms/:email', verifyJWT, async (req, res) => {
      const email = req.params.email
      
      if(req.decoded.email !== email){
      return res.status(403).send({err : true , message :'Forbidden ACCESS'})
      
      const query = { 'host.email': email }
      const result = await roomsCollection.find(query).toArray()
      res.send(result)
    })
```

frontend

```
  const { user, loading } = useContext(AuthContext)
  const { refetch, data: rooms = [] } = useQuery({
    queryKey: ['rooms', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `/rooms/${user?.email}`
      )
      console.log('res from axios', res.data)
      return res.data
    },
  })
```
