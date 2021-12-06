const bcrypt = require('bcrypt');
const User = require('../model/schema');
const jwt = require('jsonwebtoken');
const Employee = require('../model/emp_schema')
console.log("in controller")
// controller for register
exports.registerUser = async (req, res) => {
    try {

        // validate request
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the registration form" });
            return
        }

        let { email, password, passwordCheck, username } = req.body

        if (!email || !password || !passwordCheck)
            return res.status(406).json({ err: "Not all fields have been entered" })
        if (password.length < 8)
            return res.status(406).json({ err: "The Password need to be at least 8 characters long" })
        if (password !== passwordCheck)
            res.status(406).json({ err: "Password must be same for verification" });

        // hashing password
        const hash = await bcrypt.hashSync(password, 10)

        // using document structure
        const newUser = new User({
            email,
            password: hash,
            username
        })

        newUser
            .save(newUser)
            .then(register => {
                res.json(register)
            })
            .catch(error => {
                res.status(406).json({ err: error.message || "Something went wrong while registration" })
            })
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while registration" })
    }
}

// controller for login
exports.login = async (req, res) => {
    try {

        // validate request
        if (!req.body) {
            res.status(406).json({ err: "You have to fill the email and password" })
            return;
        }

        // get user data
        const { email, password } = req.body
        console.log(req.body)
        // validation
        if (!email || !password)
            return res.status(406).json({ err: "Not all fields have been entered" })

        const user = await User.findOne({ email });
        // console.log(user);
        if (!user)
            return res.status(406).json({ err: "No account with this email." })

        // compare the password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(406).json({ err: "Invalid Credentials" });

        // create jwt token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        // console.log(token);
        res.json({ token, username: user.username, email: user.email })

    } catch (error) {
        res.status(500).json({ err: error.message || "Error while Login" })
    }
};

exports.list = async (req, res) => {

    Employee.find()
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found user id " })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving user with id " })
        })

}



// delete user controller
exports.delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user_id)
        res.json({ msg: "User Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while deleting user" })
    }
}

// creating employee
exports.create = (req, res) => {
    console.log("controller create");
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }
    // new user
    console.log("line 122");
    let employee = new Employee(
        req.body


    );
    console.log("line 133");
    //save user in statbase
    employee.save(employee)
        .then(data => {
            res.status(200).json({ 'employee': 'Employee Added Successfully' });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });

    
}

exports.find = (req, res) => {
    console.log('hello user find')
    
    if (req.query.id) {
        const id = req.query.id;
        Employee.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user id " + id })
                    console.log('user===', data)
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id })
            })
    } else {
        Employee.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "error occured" })
            })
    }
}

//Update a new identified user by user id
exports.update = (req, res) => {
    console.log("in /users/:id put req");
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "update data cannot be empty" })
    }

    const id = req.params.id;
    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update user with id ${id}` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user info" })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot Delete" })
            } else {
                res.send({
                    message: "del succesfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "can't delete user with id= " + id
            });
        });

}