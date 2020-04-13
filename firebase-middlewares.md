## Using firebase middlewares

In the Front-End, Where ever you are making a Http requests/fetch request like get,post and so on..., the headers need to be attached to these request and its done as below

```import {getTokenWithHeaders} from '../../firebase/getTokenWithHeaders'

const header = await getTokenWithHeaders()

await fetch('http://localhost:5000/api/example-end-point', {
method: "GET/POST",
headers: header
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));
```

If all these is in place, the token would go to backend

In the Backend, there are middlewares for firebase(authentication.middleware & authorization.middleware) which would be used while creating Endpoints and In your routes folder/ route file it should be done as below

```const exampleController = require('../controllers/example.controller');
const {
checkIfAuthorized,
} = require('../lib/middleware/authorization.middleware');

const ROLES = require('../../constants/roles');
```

And then,

```router.get('/',checkIfAuthorized(ROLES.SUPER_ADMIN),(req, res, next) => {
exampleController
.getExample()
.then((result) => res.json(result))
.catch(next);
});
```

Here there needs to be a check done,while adding middlewares to endpoints, using the below spreadsheet:

Spreadsheet file:
https://docs.google.com/spreadsheets/d/1FlBJNVvcPEJJpu-RyPz6J-m5Gto7LZ_O90LaXDkJuCs/edit#gid=0

So if there is a "Yes" for the role, it should be used as parameter for middleware,

example: for ADD Batch , we have SuperAdmin & Admin as "YES"

then the middleware should look like:

`checkIfAuthorized(ROLES.SUPER_ADMIN,ROLE.ADMIN)`

example: for Batch Details , we have SuperAdmin & Admin & User as "YES"

then the middleware should look like:

`checkIfAuthenticated`
