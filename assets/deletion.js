$(document).ready(function(){
    $('.delete').on('click', function(){
        var item = $(this).attr('name').replace(/ /g, "-");
        item = item.substring(5);
        if(item.charAt(0) === '#'){
            item = item.substring(1);
        }
        $.ajax({
            type: 'DELETE',
            url: 'profile' + item,
            success: function(data){
            location.reload();
            }
        });
    });
});