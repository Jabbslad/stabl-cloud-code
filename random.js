Parse.Cloud.define('random', function(req, res) {

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    console.log(JSON.stringify(req));

    query = new Parse.Query("PodcastItem");
    
    if (req.params.genres) {
        query.containedIn("genres", req.params.genres);
    }

    if (req.params.duration) {
        query.lessThanOrEqualTo("duration", req.params.duration);
    }

    query.find({
        success: function(results) {
            var max = results.length > 10 ? 10 : results.length;
            shuffle(results);
            res.success(results.slice(0, max));
        },
        error: function(error) {
            res.error(error);
        }
    });
});
