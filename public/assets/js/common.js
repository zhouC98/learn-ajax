$('#logout').on('click',function(){
    var isCon = confirm('是要退出不?')
    if(isCon){
        $.ajax({
            type:'post',
            url:'/logout',
            success(){
                location.href = 'login.html'
            },
            error(){
                alert('退出失败')
            }
        })
    }
})
$.ajax({
    type:'get',
    url:`/users/${userId}`,
    success(res){
        $('.profile .avatar').prop('src',res.avatar)
        $('.profile .name').text(res.nickName)
    }
})