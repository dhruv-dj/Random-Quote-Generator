$(document).ready(function() {
    var author;
    var quote;
    function getQuote() {
    $.ajax({
       url: 'https://api.forismatic.com/api/1.0/',
        jsonp : 'jsonp',
        dataType : 'jsonp',
        data : {
            method : 'getQuote',
            format : 'jsonp',
            lang : 'en'            
        },
        success : function(parameter) {
            author = parameter.quoteAuthor;
            quote = parameter.quoteText;
            $('#quote').text('"'+quote+'"');
            if(author){
            $('#author').text("-" + author);
            } else {
                $('#author').text("-Anonymous");
            }
        }
    });
    }
    getQuote();
    $('#newQuote').on('click',function(event) {
        event.preventDefault();
        getQuote();
    });
    $('#tweet').on('click',function(event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(quote + '-- ' + author));
    });
});