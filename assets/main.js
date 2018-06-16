
$(document).ready(function() {
    var startYear = 1900; //need these from front end
    var endYear = 1920;
    var searchTerm = $("#exampleFormControlInput1").val();
    console.log(searchTerm);      
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "762530d2f8954471933ab18746b3be13",
      'q': searchTerm,

    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(results) {
        for (var i = 0; i < 5; i++) { //variable for where we have the 5 value that comes from the input number for records to retreive 
            var headline = results.response.docs[i].headline.main;
            //this is how we get the title
            var year = results.response.docs[i].pub_date;
            var year1 = year.slice(0, 4);
                
            if (year1 > startYear && year1 < endYear) {
                //we want these results
                var articleDiv = $("<div>");
                var p = $("<p>");
                p.text(headline);
                var date = $("<p>");
                date.text(year);
                articleDiv.append(p);
                articleDiv.append(date);
                $("#articles").append(articleDiv);
            }
        }
    }).fail(function(err) {
      throw err;
    
    
    })
});
