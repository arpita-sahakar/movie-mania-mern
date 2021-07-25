import User from "../models/userModel";

// shows list of all users
export const allUsers = async (req, res) => {
    const allUsers = await User.find({});
    res.status(200).json(allUsers)
}

// user login
export const login = async (req, res) => {
    // console.log(req.body);
    try {
        // const loginUser = await User.find({ email: req.body.email, passWord: req.body.passWord });
        const loginUser = await User.find(req.body);
        console.log(loginUser);
        if (loginUser.length === 0) {
            res.status(401).json({ message: "userId or password not found" })
        } else {
            res.status(200).json(loginUser)
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
}

// user signup
export const signUp = async (req, res) => {
    try {
        const createUser = await User.create(req.body);
        res.status(201).json(createUser)
    } catch (error) {
        console.log(error.message);
        const errMsg = error.message.split(","); // will return an array after doing comma seperated
        console.log(errMsg);
        res.status(500).json(errMsg)
    }
}
