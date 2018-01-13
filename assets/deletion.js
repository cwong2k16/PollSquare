$(document).ready(function(){
    $('.delete').on('click', function(){
        var item = $(this).attr('name').replace(/ /g, "-");
        item = item.substring(5);
        $.ajax({
        type: 'DELETE',
        url: 'profile' + item,
        success: function(data){
            //do something with the data via front-end framework
            location.reload();
        }
        });
    });
});