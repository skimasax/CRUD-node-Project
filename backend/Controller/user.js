const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const { firstname, lastname,email, password, confirm_password } = req.body;

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

        // Store the user data with the hashed password in your database
        // Here, you would typically save the 'hashedPassword' along with other user data

        const data = {
            firstname: firstname,
            lastname: lastname,
			email: email,
			password: hashedPassword,
            // Do not store the plain text password; store the hashed password
        };


        res.status(200).json({
            status: true,
            data: data, // You should not include the password in the response
            message: "Signup Successfully"
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: false,
            message: 'An error occurred during registration'
        });
    }
}


module.exports = {signup}