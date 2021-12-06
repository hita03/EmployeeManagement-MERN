const router = require('express').Router();
const Employee = require('../model/emp_schema');
const User = require('../model/schema');
const controller = require('../controller/controller');
const auth = require('../middleware/auth')
const services = require('../services/services');
const db = require("../database/connection");
console.log("in router");
router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.delete('/delete', auth, controller.delete);

//router.post('/api/create',controller.create);
/**
 *  @description add users
 *  @method GET /add-user
 */

//router.get('/add-user',services.add_user);
router.route('/add-user').get(function (req, res) {
    res.json({ "message": "Redirecting to Create page" });
})
/**
 *  @description for update user
 *  @method GET /update-user
 */
//router.get('/update-user', services.update_user);
router.route('/list').get(function (req, res) {
    Employee.find((err, employee) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employee);
        }
    });

});


router.route('/users').post(function (req, res) {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }
    // new user
    let employee = new Employee(
        req.body
    );
    //save user in statbase
    console.log(employee)
    employee.save(function (err, news) {
        console.log("Tried to save...");
    })
        .then(data => {
            res.status(200).send({ 'employee': 'Employee Added Successfully' });

        });
})


router.post('/users', controller.create);
router.get('/users', controller.find);
router.put('/users/:id', controller.update);
router.delete('/users/:id', controller.delete);

router.get('/profile',function(req,res){
    console.log('inside profile router')
    
    if (req.query.id) {
        const id = req.query.id;
        User.findById(id)
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

})
module.exports = router;



router.route('/users/:id').get(function (req, res) {
    console.log("in /users/:id get req");
    let id = req.params.id;
    console.log(id);
    Employee.findById(id, function (err, employee) {
        res.json(employee);
    });
});



// To Update The Employee Details
router.route('/users/:id').post(function (req, res) {
    console.log("in /users/:id post req");

    Employee.findById(req.params.id, function (err, employee) {
        if (!employee)
            console.log("can't find user.");
        //return next(new Error('Unable To Find Employee With This Id'));
        else {
            employee.name = req.body.name;
            employee.gender = req.body.gender;
            employee.email = req.body.email;
            employee.phone = req.body.phone;
            employee.leave = req.body.leave;
            employee.ID = req.body.ID;
            employee.save().then(emp => {
                res.json('Employee Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Employee");
                });
        }
    });
});

router.route('/users/remove/:id').get(function (req, res) {
    Employee.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
    if (err) res.json(err);
    else res.json('Employee Deleted Successfully');
    });
    });