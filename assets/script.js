$(document).ready(function(){

    $('form').on('submit', function(){
        console.log('this will eventually submit this poll to datbase');
    });

    $('#mainPoll').on('click', function(){
        $('#poll').append("<div><input class = 'textbox' type = 'text' name = 'otherOption' placeholder = 'Option...' /></input></div>")
    });
});