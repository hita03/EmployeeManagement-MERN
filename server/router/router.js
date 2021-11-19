const router = require('express').Router()
const controller = require('../controller/controller');
const auth = require('../middleware/auth')
const services = require('../services/services');
const db = require("../database/connection");
console.log("in router");
router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.delete('/delete', auth, controller.delete);
//import Employee from '../model/emp_schema';
//router.post('/api/create',controller.create);
/**
 *  @description add users
 *  @method GET /add-user
 */

router.get('/add-user',services.add_user);

/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-user',services.update_user);
router.route('/').get(services.list);



router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.delete);
module.exports = router;


// router.route('/').get(function (req, res) {
//     Employee.find(function (err, employee) {
//     if (err) {
//     console.log(err);
//     return err;
//     }
//     else {
//      return res.json(employee);
//     }
//     });
//     });
    