function getUrl(key){
    var str = location.search.substr(1)
    var arr = str.split('&')
    for(var i = 0;i<arr.length;i++){
        var arr1 = arr[i].split('=')
        if(arr1[0] == key){
            return arr1[1]
        }
    }
}
var id = getUrl('id')
$.ajax({
    type:'get',
    url:'/posts/'+id,
    success(res){
        console.log(res);
        var html = template('detailTpl',res)
        $('.article').html(html)
    }
})
$('.article').on('click','#like',function(){
    $.ajax({
        type:'post',
        url:"/posts/fabulous/"+id,
        success(res){
            alert('点赞成功')
        }
    })
})
let state = 0
$.ajax({
    type:'get',
    url:'settings',
    success(res){
        if(!res.review){
            state = 0
        }else{
            state = 1
        }
        if(res.comment){
            $('.comment').show()
        }
    }
})
$('.comment form').on('submit',function(){
    var content = $(this).find('textarea').val()
    $.ajax({
        type:'get',
        url:'/comments',
        data:{
            content:content,
            post:id,
            state:state
        },
        success(res){
            $(this).find('textarea').val('')
            alert('评论成功')
        }
    })
    return false
})