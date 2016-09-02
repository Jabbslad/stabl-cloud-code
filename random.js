Parse.Cloud.define('random', function(req, res) {

    Array.prototype.randomElement = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    query = new Parse.Query("PodcastItem");

    query.find({
        success: function(results) {
            var index = results.randomElement(0, results.length);
            console.log("random index [0-" + results.length + "] = " + index);
            res.success(results[index]);
        },
        error: function(error) {
            res.error(error);
        }
    });
});
