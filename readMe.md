# Node.js Manually Created Backend Server
---
Kind of nice quick starting point:
---
Here is how it was created:
```bash
# Create a package.json file:
npm init -y

# Install dependencies
npm install express
npm install cors
npm install nodemon --save-dev
```

Update package.json with some nice scripts:
```javascript
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
    }
```
Create a simple server.js file
```javascript
const express = require('express');
const cors = require('cors');
const api = express();
const port = 8000;

api.use(cors());
api.use(express.json());

api.get(`/`,
    function temp(req, res) {
        console.log('Got a request ', port)
        res.json({ message: "Hello from the server! via JSON" });
        //res.send("Hello from the server!");
    }
)

api.listen(port, function temp() {
    console.log('My Server is running on port ', port)
}

)
```
Run the server
```bash
# Run the dev server. Nodemon will auto restart the server if you make code changes. Kind of nice.
npm run dev 
#Or just run a server
npm run start
```
