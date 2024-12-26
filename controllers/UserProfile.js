const User = require('../models/User.js');

const getUserProfile = async (req, res) => {
    res.send('User Profile Route');
    try{
        const user = await User.findById(req.user.id).select('-password');
        if(!user){
            return res.status(400).json({ message: 'User does not exist' });
        }

        res.status(200).json({ name: user.name, email: user.email});

    }catch(error){
        console.log('getUserProfile getting some error', error);
        return res.status(500).json({ message: 'Server Error', error })
    }
}

module.exports = { getUserProfile } ;