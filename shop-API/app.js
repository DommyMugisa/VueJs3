const express = require('express'),
mongoose = require('mongoose'),
config = require('./config/database')

staffRoutes = require('./routes/staffRoutes');
programRoutes = require('./routes/programRoutes');
alumniRoutes = require('./routes/alumniRoutes');
courseRoutes = require('./routes/courseRoutes');

const app = express();

mongoose.connect(config.database,{useNewUrlParser:true});
const db = mongoose.connection;
db.once('open',()=>{
    console.log('Connected to MongoDB');
});
db.on('error',(err)=>{
    console.error(err);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',staffRoutes)
app.use('/api',programRoutes)
app.use('/api',alumniRoutes)
app.use('/api',courseRoutes)






app.listen(3000,()=>console.log('Listening on Port 3000'));
