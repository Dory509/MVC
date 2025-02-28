const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const uuid = require('uuid').v4;

// User signup
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email:req.body.email,
            id: uuid()    
           }; 
           console.log(await User.create(newUser));
        const userData = await User.create(newUser);
        console.log(userData);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        console.log(bcrypt.compareSync(req.body.password, userData.password));
        if (!userData || !bcrypt.compareSync(req.body.password, userData.password)) {
            res.status(400).json({ message: 'Incorrect username or password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// User logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;