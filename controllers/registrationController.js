const Registration = require('../models/registration');

exports.processRegistration = (req, res) => {
    const { id, fullName, address, status } = req.body;
    const fee = Registration.calculateFee(status);
    
    // Set response with registration information and fee
    res.render('confirmation', { id, fullName, address, status, fee });
    /*res.json({
        id: id,
        fullName: fullName,
        address: address,
        status: status,
        fee: fee
    });*/
    
};
