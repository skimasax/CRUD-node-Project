const bcrypt = require('bcryptjs');
const User = require('../Model/UserModel');
const userService = require('../Service/UserService');
const walletService = require('../Service/WalletService');
const cryptoToken = require("../Config/token");

const signup = async (req, res) => {
    const { firstname, lastname, email, password, confirm_password, gender, country } = req.body;

    // Check if password and confirm_password match
    if (password !== confirm_password) {
        return res.status(422).json({
            status: false,
            message: "Password do not match"
        });
    }

    //check if email already exist
    const user = await userService.findUserByEmail(email);

    if(user)
    {
        return res.status(422).json({
            status: false,
            message: "Email already exist"
        });
    }

    try {
        // Generate a salt and hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document and save it to the database
        const newUser = await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender,
            country: country,
            password: hashedPassword // Store the hashed password
        });

       
        // await newUser.save();
        //create a wallet for the user
        const wallet = await walletService.createWalletOnRegistration(newUser._id);
        const userWallet = await walletService.getUserWallet(newUser._id);

        return res.status(200).json({
            status: true,
            data: newUser,
            wallet: userWallet,// You can include the saved user data
            message: "Signup Successfully"
        });
    } catch (error) {
        console.error('Error:', error);
       return res.status(400).json({
            status: false,
            message: error
        });
    }
}



const login = async(req, res) => {
    // Implement your login logic here
    const { email, password } = req.body;
    
const user = await  User.findOne({email: email }).select("+password");

if(!user){
    throw error
}

const UserPassword = user.password;

const check = await bcrypt.compare(password,UserPassword);
if(!check)
{
   return res.status(422).json({
        'status':true,
        'message':'Password do not match'
    });
}
const token = cryptoToken.generateAccessToken(user._id);

user.password = undefined;

return res.status(200).json({
    'status':true,
    'data':user,token,
    'message':'Login Successfully'
});


}


module.exports = { signup, login };
