
const Registration = require('../models/registration');

exports.processRegistration = (req, res) => {
    const { id, fullName, address, status, fee } = req.body;

    // Log received data
    console.log("Received data:");
    console.log("ID:", id);
    console.log("Full Name:", fullName);
    console.log("Address:", address);
    console.log("Status:", status);
    console.log("Fee:", fee);

    // Set response with registration information and fee
    res.status(200).json({
        message: "Registration successful!",
        registration: req.body
        /*registration: {
            id,
            fullName,
            address,
            status,
            fee
        }*/
    });
};
