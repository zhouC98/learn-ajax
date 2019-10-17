$('#modifyForm').on('submit',function(){
    $.ajax({
        type:'put',
        url:'/users/password',
        data:$(this).serialize(),
        success(){
            location.href = 'login.html'
        }
    })
    return false
})