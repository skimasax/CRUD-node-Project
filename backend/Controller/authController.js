const bcrypt = require('bcryptjs');
const User = require('../Model/UserModel');

const signup = async (req, res) => {
    const { firstname, lastname, email, password, confirm_password, gender, country } = req.body;

    // Check if password and confirm_password match
    if (password !== confirm_password) {
        return res.status(422).json({
            status: false,
            message: "Password do not match"
        });
    }

    try {
        // Generate a salt and hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user document and save it to the database
        const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender,
            country: country,
            password: hashedPassword // Store the hashed password
        });

        await newUser.save();

        res.status(200).json({
            status: true,
            data: newUser, // You can include the saved user data
            message: "Signup Successfully"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({
            status: false,
            message: 'An error occurred during registration'
        });
    }
}

const login = async(req, res) => {
    // Implement your login logic here
    const { email, password } = req.body;
    
User.findOne({ email: email }, (err, user) => {
    if (err) {
        // Handle the error
    } else {
        if (user) {
            const userPassword = user.password;
            //compare the password
            bcrypt.compare(plaintextPassword, user.password, (err, isMatch) => {
                if (err) {
                    // Handle the error
                } else {
                    if (isMatch) {
                        // Passwords match
                    } else {
                        // Passwords don't match
                    }
                }
            });
            
            
            
            
            
            
            
        } else {
            // User not found
        }
    }
});

    //compare if the password match

}

module.exports = { signup, login };
