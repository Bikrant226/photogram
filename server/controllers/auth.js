const User=require('../model/User');
const bcrypt=require('bcryptjs');




exports.signin=(req,res)=>{
    const {email,password}=req.body;
    User.findOne({email})
        .then(user=>{
            if(!user){
                res.status(403).send('Email doesn\'t exists')
            }else{
                bcrypt.compare(password,user.password,(err,pwd)=>{
                    if(err){
                        res.status(403).send('Incorrect password')
                    }else{
                        res.send('Successfully logged in')
                    }
                })

            }
        })
}


exports.signup=(req,res)=>{
    const {name,email,password}=req.body;

    User.findOne({email})
        .then(user=>{
            if(user){
                return res.status(422).send("email already exists");
            }else{
                const user=new User({
                    name:name,
                    email:email,
                    password:password
                });

                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(password,salt,(err,hash)=>{
                        if(err) throw err;
                        user.password=hash;
                        user.save()
                            .then(response=>{
                                res.status(200).json({
                                    success:true,
                                    result:response
                                })
                            })
                            .catch(err=>{
                                res.status(500).json({
                                    errors:[{error:err}]
                                })
                            })
                    })
                })
            }

        }).catch(err=>{
            res.status(500).json({
                errors:[{error:'Something went wrong!!'}]
            })
        })
}



