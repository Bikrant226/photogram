const mongoose=require('mongoose');
const postSchema=mongoose.Schema({

    file:{
        type:String
    }
},
    {
        timestamps:true,
        collection:'PostImage'  
      
})


module.exports=mongoose.model('PostImage',postSchema);
