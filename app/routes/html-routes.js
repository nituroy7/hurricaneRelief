var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
     app.get("/graph", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index1.html"));
    });

    app.get("/profile", function(req, res) {
        res.render("profile.handlebars");
    });

  	app.get("/donation", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/donation.html"));
    });
}

