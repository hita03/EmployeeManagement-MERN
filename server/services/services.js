const axios = require('axios');
console.log('in services')
exports.add_user = (req, res) => {

    res.send('routing to create');
}

exports.update_user = (req, res) => {

    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err)
        })
    //res.render('update_user');
}

exports.list = (req, res) => {

    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            console.log(response)
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

