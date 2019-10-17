
$.ajax({
    type:'get',
    url:'/users',
    success(res){
        var html = template('userTpl',{
            data:res
        })
        $('#usertb').html(html)
    }
})
$('#userForm').on('submit',function(){
    
    var dataForm = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/users',
        data:dataForm,
        success(res){
           location.reload()
        }
    })
    return false
})
// 上传用户头像
$('#modifyBox').on('change','#avatar',function(){
    var fd = new FormData()
    fd.append('avatar',this.files[0])
    $.ajax({
        type:'post',
        url:'/upload',
        data:fd,
        processData : false,
        contentType : false,
        success(res){
            
            $('#hiddenImg').val(res[0].avatar)
            $('#preview').attr('src',res[0].avatar)
        }
    })
})
$('#usertb').on('click','.edit',function(){
    var id = $(this).attr('data-id')
    $.ajax({
        type:'get',
        url:'/users/'+id,
        success(res){
            var html = template('modifyTpl',res)
            $('#modifyBox').html(html)
        }
    })
})
$('#modifyBox').on('submit','#modifyForm',function(){
    var formData = $(this).serialize()
    var id = $(this).attr('data-id')
    $.ajax({
        type:'put',
        url:'/users/'+id,
        data:formData,
        success(res){   
            location.reload()
        }
    })
    return false
})
$('#usertb').on('click','.delete',function(){
    var bool = confirm('你确认要删除吗？')
    if(bool){
        var id = $(this).attr('data-id')
        $.ajax({
            type:'delete',
            url:'/users/'+id,
            success(){
                location.reload()
            }
        })
    }
   
})
$('#checkAll').on('change',function(){
    var bool = $(this).prop('checked')
    $('#usertb input[type="checkbox"]').prop('checked',bool)
    if(bool){
        $('#deleteAll').show()
    }else{
        $('#deleteAll').hide()
    }
})
$('#usertb').on('change','input[type="checkbox"]',function(){
    if($('#usertb input[type="checkbox"]').length == $('#usertb input[type="checkbox"]:checked').length){
        $('#checkAll').prop('checked',true)
    }else{
        $('#checkAll').prop('checked',false)
    }
    if($('#usertb input[type="checkbox"]:checked').length>0){
        $('#deleteAll').show()
    }else{
        $('#deleteAll').hide()
    }
})
$('#deleteAll').on('click',function(){
    if(confirm('你确认要删除吗？')){
        var checkList = $('#usertb input[type="checkbox"]:checked')
        var ids = []
        checkList.each(function(index,item){
            ids.push($(item).attr('data-id'))
        })
        ids = ids.join('-')
        $.ajax({
            type:'delete',
            url:'/users/'+ids,
            success(){
                location.reload()
            }
        })
    }
})