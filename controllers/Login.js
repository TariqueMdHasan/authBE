const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const login = async(req, res) =>{
    const { email, password } = req.body;

    try{
        // checking if user exist
        const user = await User.findOne({ email });

        // return if user does not exist
        if(!user){
            return res.status(400).json({ message: 'User does not exist' });
        }

        //  checking if password is correct
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid Password' });
        }

        // if(password !== user.password){
        //     return res.status(400).json({ message: 'Invalid Password' });
        // }

        // generating tocken
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,  { expiresIn: '1d' });

        res.status(200).json({ message: 'login successfull', token });



    }catch(error){
        console.log('login getting some error', error);
        res.status(500).json({ message: 'Server Erorr' });
    }
}


module.exports = { login } ;