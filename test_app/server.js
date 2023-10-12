const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build', 'web')));
app.listen(PORT, () => {
    console.log('Flutter web app is running on port ' + PORT);
});