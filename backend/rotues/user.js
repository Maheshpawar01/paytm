const express = require('express');
const router = express.Router();
const zod = require('zod')
const {JWT_SECRET} = require('../config');
const {User} = require('../db')
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middleware');

//validating using zod
const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
})

router.post('/signup', async(req, res)=>{
    const {success} = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"        
        })
    }
    //checking the user is already existis or not
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg:"user already exists"
        })
    }
    //creating user in User table if there is new user
    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
    })
    //seting user._id to UserId (user = above user and when it create new user then it allowcate new id to it this, create user ._id = userId)
    const userId = user._id;

    /// ----- Create new account ------

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
		/// -----  ------

    //creating jwt token with userId and jwt_secret
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    //if all goes well the create user
    res.status(200).json({
        msg:"user created successfully",
        token:token
    })

})

//validating using zod for signin
const signinBody = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

router.post('/signin', async(req, res)=>{
    const {success} = signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"        
        })
    }

    //finding the user is present in database with creadentials
    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    //if user found then  create token for it and return the token and msg
    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        res.status(200).json({
            msg:"user signin successfully",
            toke:token
        })
        return
    }

   // if not found using then your not loging correcly
    res.status(411).json({
        message: "Error while logging in"
    })
    
    // if(!existingUser){
    //     return res.status(411).json({
    //         message: "Email already taken / Incorrect inputs"        
    //     })
    // }


})


//update user password, firstname, lastname

    // const updateBody=zod.object({
    //     password:zod.string(),
    //     firstname:zod.string(),
    //     lastname:zod.string()
    // })

    // router.put('/', authMiddleware,  async(req, res,)=>{
    //     const {success} = updateBody.safeParse(req.body)

    //     if(!success){
    //         res.status(411).json({
    //             msg:'error while updating '
    //         })
    //     }

    //     // const updateUser = await User.updateOne(req.body, {
    //     //     id: req.userId
    //     // })
        
    //          await User.updateOne(req.body, 
    //             {id: req.userId}
    //         )
        
    //     res.json({
    //         msg:"user updated successfully"
    //     })
    // })




    //Route to get users from the backend, filterable via firstName/lastName

    router.get('/bulk', async(req, res)=>{
        const find = req.query.filter || "";

        const users = await User.find({
            $or:[
                {firstname:{"$regex": filter}},
                {lastname:{"$regex": filter}}
            ]
        })

        res.json({
            user: users.map(user=>({
                username:user.username,
                firstname:user.firstname,
                lastname:user.lastname,
                _id:user._id
            }))
        })
    })

module.exports = router;
