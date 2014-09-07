simple-express-req-resp
=======================

A simple express request response web template for generating fake data.


# Setup

* Make sure you have [Node](http://nodejs.org/) installed
* clone the repo and cd into it
* run `npm install`
* run `node app.js` , this will start the server and listen on port `3000`


Open a new terminal tab

# Sample get request

To get the sample data via get

```
 curl http://localhost:3000/users

```

# Sample get request with params

```
curl http://localhost:3000/users/1

```

# Sample post 

```
 curl -d "{"id":"3","name":"foo","email":"foo@bar.com"}" http://localhost:3000/users
```
