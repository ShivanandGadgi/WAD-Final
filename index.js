const express = require('express');
const app = express();


app.use(express.static('public')); // represents application is serving static webpage in public directory

app.get('/', (req, res) => {
 
 res.sendFile(`${__dirname}/index.html`,(err)=>{
     if(err){
         console.log(err);
         res.end(err.message);
     }
 });

});

app.listen(3000,"localhost", () => {
			console.log(`Server listening on port: 9000`);
 } );
