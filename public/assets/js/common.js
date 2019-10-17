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