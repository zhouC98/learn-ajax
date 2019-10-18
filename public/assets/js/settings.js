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
            $('#logoFile').val(res[0].image)
            $('#logoImg').prop('src',res[0].image)
        }
    })
})
$('#settingsForm').on('submit',function(){
    
    return false
})