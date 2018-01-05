$(document).ready(function(){
    var split1 = "div><input class = 'textbox' type = 'text' name = 'option";
    var split2 = "' placeholder = 'Option...' /></input>";

    $('form').on('submit', function(){
        console.log('this will eventually submit this poll to datbase');
    });

    $('#mainPoll').on('click', function(){
        btnNum++;
        $('#poll').append(split1 + btnNum + split2);
        arr.push("option" + btnNum);
        for(var i = 0; i < arr.length; i ++){
            var events = $._data(document.getElementById("option" + (i+1)), "events");
            var hasEvents = (events != null);
            var ref, ref2;
            if(!hasEvents){
                ref = "option" + (i+1);
                ref2 = "div" + (i+1);
                $("#" + arr[i]).on('click', ()=>{
                    $('[name=' + ref + ']').remove();
                    $("#" + ref).remove();
                    remove(arr, ref);
                    $("#" + ref2).remove();
                    btnNum--;
                    console.log(arr);
                });
            }
        }
    });
});