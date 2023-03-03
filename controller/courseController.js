const data = require('../details/data');


exports.getCourse = async(req, res) => {
    try {
        res.status(200).json(data)

    } catch (error) {
        console.error(error)
    }
};
