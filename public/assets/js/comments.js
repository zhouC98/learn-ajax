$.ajax({
    type:'get',
    url:'/comments',
    success(res){
        console.log(res);
        var html = template('commentsTpl',res)
        $('#commentsBox').html(html)
        var page = template('pageTpl',res)
        $('.pagination').html(page)
    }
})
function dateFormat(date){
    date = new Date(date)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
}
function pageClick(page){
    $.ajax({
        type:'get',
        url:'/comments',
        data:{page:page},
        success(res){
            console.log(res);
            var html = template('commentsTpl',res)
            $('#commentsBox').html(html)
            var page = template('pageTpl',res)
            $('.pagination').html(page)
        }
    })
}
$('#commentsBox').on('click','.status',function(){
    var status = $(this).attr('data-status')
    var id = $(this).attr('data-id')
    $.ajax({
        type:'put',
        url:'/comments/'+id,
        data:{
            state:status == 0 ? 1 : 0
        },
        success(){
            location.reload()
        }
    })
})
$('#commentsBox').on('click','.delete',function(){
    if(confirm('确定删除不')){
        var id = $(this).attr('data-id')
        $.ajax({
            type:'delete',
            url:'/comments/'+id,
            success(){
                location.reload()
            }
        })
    }
})