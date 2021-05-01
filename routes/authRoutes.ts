const authorizeUser = require('../middleware/authorizeUser');
const Trainer = require('../models/Trainer');
const bcrypt = require('bcryptjs');
const setJWT = require('../middleware/setJWT');

module.exports = (app: any, client: any) => {

    app.post('/api/authTrainer', authorizeUser, async (req: any, res: any) => {
        const { username, password } = req.body;
        console.log(username, password);
        const existingUser = await Trainer.findOne({ username });
        if (existingUser){
            bcrypt.compare(password, existingUser.password, (err: any, result: boolean) => {
                if (err) {
                    res.send(err);
                } else if (!result) {
                    const error = {
                        message: "Wrong Password"
                    }
                    res.send(error);
                } else {
                    const token = setJWT(existingUser._id, existingUser.userType);
                    res.cookie('authorization', token, { maxAge: 100000 });
                    res.send({
                        userData: existingUser
                    })
                }
            })
        } else {
            const error = {
                message: 'Username not found'
            }
            res.send(error);
        }
    });

    app.get('/api/current_user', authorizeUser, (req: any, res: any) => {
        if (req.error){
            res.send(req.error);
        } else {
            const currentUser = Trainer
            res.send({
                _id: req.userId,
                userType: req.userType
            });
        }
    })
}