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
    var btnId = 2;

    var arr = [];
    arr.push(1, 2);

    $("#option1").on('click', ()=>{
        if(btnNum > 2){
            $('[name=option1]').remove();
            $("#option1").remove();
            remove(arr, 1);
            $("#div1").remove();
            btnNum--;
        }
    });

    $("#option2").on('click', ()=>{
        if(btnNum > 2){
            $('[name=option2]').remove();
            $("#option2").remove();
            remove(arr, 2);
            $("#div2").remove();
            btnNum--;
        }
    });

    $('#mainPoll').on('click', function(){
        btnNum++;
        btnId++;
        $('#poll').append(split1 + btnId + split1b + btnId + split2 + split3 + btnId + split4);
        arr.push(btnId);
        for(var i = 0; i < arr.length; i ++){
            var events = $._data(document.getElementById("option" + arr[i]), "events");
            var hasEvents = (events != null);
            var ref, ref2, ref3;
            if(!hasEvents){
                ref = "option" + arr[i];
                ref2 = "div" + arr[i];
                ref3 = arr[i];
                $("#" + ref).on('click', ()=>{
                    if(btnNum > 2){
                        $('[name=' + ref + ']').remove();
                        $("#" + ref).remove();
                        remove(arr, ref3);
                        $("#" + ref2).remove();
                        btnNum--;
                    }
                });
            }
        }
    });
});