class Registration {
    static calculateFee(status) {
        let fee;
        if (status === "student") {
            fee = 10;
        } else if (status === "staff") {
            fee = 50;
        } else {
            fee = 0;
        }
        return fee;
    }
}

module.exports = Registration;
