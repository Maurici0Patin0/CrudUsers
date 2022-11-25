const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers();
    res.status(200).json(data);
}

const getUserById = (req, res) => {
    const id = req.params.id;
    const data = userControllers.findUserById(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "Invalid ID" });
    }
};

const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    if (first_name) {
        const data = userControllers.createNewUser({ first_name, last_name, email, password, birthday });
        res.status(201).json(data);
    } else {
        res.status(400).json({
            message: "Invalid Data",
            fields: {
                first_name: "elon",
                last_name: "Musk",
                email: "elon@gmail.com",
                password: "ñlkj",
                birthday: "YYYY/MM/DD"
            },
        });
    }
};
const getRandomUser = (req, res) => {
    const data = userControllers.findRandomUser()
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({
            message: 'DB is empty'
        })
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    getRandomUser,
    postNewUser
}
