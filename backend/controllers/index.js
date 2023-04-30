const displayMessage = (req, res, next) => {
    res.json('this is working');
};

module.exports = {displayMessage};