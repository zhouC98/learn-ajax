$('#logo').on('change',function(){
    var file = this.files[0]
    var formData = new FormData()
    formData.append('image',file)
    $.ajax({
        type:'post',
        url:'/upload',
        data:formData,
        processData : false,
        contentType : false,
        success(res){
            console.log(res);
            $('#logoFile').val(res[0].image)
            $('#logoImg').prop('src',res[0].image)
        }
    })
})
$('#settingsForm').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/settings',
        data:formData,
        success(){
            location.reload()
        }
    })
    return false
})
$.ajax({
    type:'get',
    url:'/settings',
    success(res){
        if(res){
            $('#logoFile').val(res.logo)
            $('#logoImg').prop('src',res.logo)
            $('input[name="title"]').val(res.title)
            $('input[name="comment"]').prop('checked',res.comment)
            $('input[name="review"]').prop('checked',res.review)
        }
    }
})