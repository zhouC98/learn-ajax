$.ajax({
    type:'get',
    url:'/slides',
    success(res){
        var html = template('slidesTpl',{data:res})
        $('#slidesBox').html(html)
    }
})
$('#file').on('change',function(){
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
            $('#image').val(res[0].avatar)
        }
    })
})
$('#slidesForm').on('submit',function(){
    $.ajax({
        type:'post',
        url:'/slides',
        data:$(this).serialize(),
        success(res){
           location.reload()
        }
    })
    return false
})
$('#slidesBox').on('click','.delete',function(){
    $.ajax({
        type:'delete',
        url:`/slides/${$(this).attr('data-id')}`,
        success(res){
           location.reload()
        }
    })
})