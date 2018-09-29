module.exports = {
    send: (err, req, res, code = 40) => {
        console.log(`error: ${JSON.stringify(err)}`);
        res.status(400).json({
            error: err
        });
    }
};