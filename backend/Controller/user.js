const signup = async(req, res) => {
    const data = 'bimbo';
	res.status(200).json({
		'status':true,
		'data':`${data}`,
		'message':"Signup Successfully"
	})
}

const login = async(req, res) => {
    const data = 'bimbo';
	res.status(200).json({
		'status':true,
		'data':`${data}`,
		'message':"Signup Successfully"
	})
}

module.exports = {signup, login}