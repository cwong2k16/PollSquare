function remove(arr, element){
    var index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

$(document).ready(function(){
    var split1 = "<div id = div";
    var split1b = "><input class = 'textbox' type = 'text' name = 'option";
    var split2 = "' placeholder = 'Option...' /></input>";
    var split3 = " <input type = 'button' id = 'option";
    var split4 = "' value = 'x'/></div>";
    var btnNum = 2;

    var arr = [];
    arr.push("option1", "option2");

    $("#option1").on('click', ()=>{
        $('[name=option1]').remove();
        $("#option1").remove();
        remove(arr, "option1");
        $("#div1").remove();
        btnNum--;
        console.log(arr);
    });

    $("#option2").on('click', ()=>{
        $('[name=option2]').remove();
        $("#option2").remove();
        remove(arr, "option2");
        $("#div2").remove();
        btnNum--;
        console.log(arr);
    });

    $('form').on('submit', function(){
        console.log('this will eventually submit this poll to datbase');
    });

    $('#mainPoll').on('click', function(){
        btnNum++;
        $('#poll').append(split1 + btnNum + split1b + btnNum + split2 + split3 + btnNum + split4);
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