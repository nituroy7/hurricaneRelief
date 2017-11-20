var db = require("../models");

module.exports = function (app) {

    app.get("/package", function (req, res) {
        db.Packages.findAll({
            include: ['venue'],
        }).then(function (results) {
            var price = 0;
            for (var i=0; i < results.length; i++) {
                if (results[i].venue)
                    price += results[i].venue.price;                
            }
            var hbsObject = {
                package: results,
                price: price
            };
            res.render("packagehbs", hbsObject);
        });
    });

    app.post("/package/create", function (req, res) {
         console.log("************************************");
        db.Packages.create({
            venueId: req.body.venue
        }).then(function (result) {
            res.redirect("/package");
        });
    });

};