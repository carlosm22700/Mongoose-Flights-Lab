function home(req, res) {
    res.render('index', {title: 'Mongoose Movies'});
}

module.exports = {
    home
};