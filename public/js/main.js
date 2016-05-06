(function () {

    // Responds to input
    $('#search').keyup(function() {

        // Keeps the author name
        var searchField = $('#search').val();
        var myExp = new RegExp(searchField, "i");

        // Reads and parses data in the JSON format
        $.getJSON('data/data.json', function(data) {

            var output = '<ul class="searchresults">';
            $.each(data, function(key, val) {

                //Checks if author exists
                if (val.name.search(myExp) != -1) {

                    // Generates the response records
                    output += '<li>';
                    output += '<h2>'+ val.name +'</h2>';
                    output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
                    output += '<p>'+ val.bio +'</p>';
                    output += '</li>';
                }
            });

            output += '</ul>';

            // Fills the #update container
            $('#update').html(output);

        }); // get JSON
    });

    //  It calls immediately
    $('#search').keyup();

})();


