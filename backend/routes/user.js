const express = require("express");

const router = express.Router();


router.get('/',(req, res) => {
	const data = 'bimbo';
	res.status(200).json({
		'status':true,
		'data':`${data}`,
		'message':"Signup Successfully"
	})
})

module.exports = router;