$('button').click(function() {
    OAuth.initialize('oEcDIQahkO4TUAND-yTs-H6oY_M')
    OAuth.popup('twitter', function(err, res) {
        res.get('/1.1/statuses/home_timeline.json').done(function(data) {
            var template = Handlebars.compile($('#entry-template').html())
            $('#connect').slideUp('fast')
            $('#res').html(template({data:data})).slideDown('fast')
        })
    })
})

Handlebars.registerHelper('link', function(text) {
    var exp = /((https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return new Handlebars.SafeString(text.replace(exp,'<a href="$1">$1</a>'))
})