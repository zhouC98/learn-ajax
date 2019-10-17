

$.ajax({
    type:'get',
    url:'/posts',
    success(res){
        var html =  template('postsTpl',res)
        $('#postsBox').html(html)
    }
})
function dateFormat(date){
    date = new Date(date)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
}