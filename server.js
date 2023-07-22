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