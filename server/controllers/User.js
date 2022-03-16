const User = require('../models/user');

//get other user Info
const UserInfo = async (req ,res ) => {
    try {
        // get user by params of id (other users on platform)
        const getUser = await User.findById(req.params.userId).select('-password');
        if(!getUser ) return res.status(404).json({message:"user not found!!"});
        return res.status(200).json(getUser);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// get user profile (signed user)
const ProfileInfo = async (req , res) => {
    try {
        // get signed user 
        const SignedUser = await User.findById(req.user._id).select('-password').populate("followers","profile_pic username");
        if(!SignedUser ) return res.status(404).json({message:"user not found!!"});
        return res.status(200).json(SignedUser);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// get all users 
const allUsers = async (req , res) => {
    try {
        const findUsers = await User.find({}).select('profile_pic username followers');
        if(!findUsers) return res.status(500).json({message:"somthing went wrong !!"});
        //return users without signed user 
        return res.status(200).json(findUsers.filter(user => user._id.toString() !== req.user._id.toString()));
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//edit user data 
const editUser = async (req ,res) =>{
    try {
        //get user
        const getUser = await User.findByIdAndUpdate(req.user._id , {...req.body , profile_pic:`${req.protocol}://${req.get("host")}/public/uploads/${req.file.filename}`} , {new:true});
        //check if user exist 
        if(!getUser) return res.status(404).json({message:"user not found !!"});
        return res.status(200).json(getUser);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    UserInfo,
    ProfileInfo,
    allUsers,
    editUser
}