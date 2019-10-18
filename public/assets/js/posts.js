

$.ajax({
    type:'get',
    url:'/posts',
    success(res){
        var html =  template('postsTpl',res)
        $('#postsBox').html(html)
        var page = template('pageTpl',res)
        $('.pagination').html(page)
    }
})
function pageClick(page){
    $.ajax({
        type:'get',
        url:'/posts',
        data:{
            page:page
        },
        success(res){
            var html =  template('postsTpl',res)
            $('#postsBox').html(html)
            var page = template('pageTpl',res)
            $('.pagination').html(page)
        }
    })
}

function dateFormat(date){
    date = new Date(date)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
}

$.ajax({
    type:'get',
    url:'/categories',
    success(res){
        var html =  template('categoriesTpl',{data:res})
        $('#categoryBox').html(html)
    }
})
$('#filterForm').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        type:'get',
        url:'/posts',
        data:formData,
        success(res){
            var html =  template('postsTpl',res)
            $('#postsBox').html(html)
            var page = template('pageTpl',res)
            $('.pagination').html(page)
        }
    })
    return false
})