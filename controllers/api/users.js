const { User } = require('../../models');

const userController = {
    getAllUser(req, res) {
        User.find({})
            .populate({
                path: 'users',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User associated with this ID was found.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        if (!dbUserData) {
            res.status(404).json({ message: 'No User associated with this ID was found.' });
            return;
        }
        res.json(dbUserData);
    },
    createFriend({ body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { friends: params.friendId } }, 
            { runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User associated with this ID was found.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id }, 
            { $pull: { friends: params.friendId } }, 
            { runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User associated with this ID was found.' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
};

module.exports = userController;
