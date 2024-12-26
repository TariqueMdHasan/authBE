const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const {name, email, password } = req.body;
    try{
        const userExist = await User.findOne({ email });

        // checking if user already exist
        if(userExist){
            return res.status(400).json({ message: 'User already Exist' });
        }

        // hashed password
        const userPassword = await bcrypt.hash(password, 10);

        //  create new user if user does not exist
        const user = new User({ name, email, password });
        await user.save();

        // generating token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(201).json({ message: "user registered successfully", token });

        
    }catch(error){
        console.log('register getting some error', error);
    }
}

module.exports = { register } ; 