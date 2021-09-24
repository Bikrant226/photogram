
const mongoose=require('mongoose');
// const uri="mongodb+srv://bikrant:1234@cluster0.oovtx.mongodb.net/Videogram?authSource=admin&replicaSet=atlas-200o1u-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const uri="mongodb://localhost:27017/videoplayer?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true})
        .then(()=>{console.log('Successfully connected')})
        .catch(err=>console.log(err))