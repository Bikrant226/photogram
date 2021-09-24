const express=require('express');
const router=express.Router();
const Post=require('../model/Post');

const {signin,signup}=require('../controllers/auth');
const multer=require('multer');
const path=require('path');


const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../public/files')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({
    storage:fileStorage,
    fileFilter:(req,file,cb)=>{
        const ext=path.extname(file.originalname);
        if(ext==='.png' || ext==='.jpg'){
             cb(null,true);    
        }else{
            return cb(new Error('Only images of type png and jpg are allowed'));
        }
        
        
    }
})
router.post('/signin',signin);
router.post('/signup',signup);




router.route('/upload')
      .post(upload.single('file'),(req,res)=>{
            console.log(req.file)
        
            const newImage=new Post({
                file:req.file.originalname
            })
        
            newImage.save()
                    .then((result)=>{
                        console.log(result);
                    })
                    .catch((err)=>console.log(err))
        
               })
        .get((req,res)=>{
            Post.find({},(err,file)=>{
                if(err) throw err;
                else{
                    res.send(file)
                }
            })
        })

module.exports=router;
