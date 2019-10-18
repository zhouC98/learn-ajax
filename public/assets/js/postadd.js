
$.ajax({
    type:'get',
    url:'/categories',
    success(res){
        var html = template('categoriesTpl',{data:res})
        $('#category').html(html)
    }
})
$('#feature').on('change',function(){
    var file = this.files[0]
    var formData = new FormData()
    formData.append('cover',file)
    $.ajax({
        type:'post',
        url:'/upload',
        processData : false,
        contentType : false,
        data:formData,
        success(res){
            $('#thumbnail').val(res[0].cover)
        }
    })
})
$('#addForm').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/posts',
        data:formData,
        success(res){
            alert('提交成功')
            location.reload()
        }
    })
    return false
})