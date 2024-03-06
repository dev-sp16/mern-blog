import express from 'express'; // add "type": "module" in package.json

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});