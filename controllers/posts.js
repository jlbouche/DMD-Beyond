const Post = require('../models/post');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); 

module.exports = {
    create,
    index
}

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: 'jbcatcollector', Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
            const post = await Post.create({postTitle: req.body.postTitle, caption: req.body.caption, user: req.user, photoUrl: data.Location});
            const populatedUserPost = await post.populate('user').execPopulate();
            res.status(201).json({post: populatedUserPost})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}


async function index(req, res){
    try {
        const posts = await Post.find({}).populate('user').exec() 
        res.status(200).json({posts})
    } catch(err){

    }
}