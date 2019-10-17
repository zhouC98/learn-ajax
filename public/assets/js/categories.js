$.ajax({
    type:'get',
    url:'/categories',
    success(res){
        var html = template('categoriesTpl',{data:res})
        $('#categoriesBox').html(html)
    }
})
$('#addCategory').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        type:'post',
        url:'/categories',
        data:formData,
        success(){
            location.reload()
        }
    })
    return false
})
$('#categoriesBox').on('click','.edit',function(){
    var id = $(this).attr('data-id')
    $.ajax({
        type:'get',
        url:'/categories/'+id,
        success(res){
            var html = template('categoriesFormTpl',res)
            $('#categoriesFormBox').html(html)
        }
    })
})
$('#categoriesFormBox').on('submit','#updateCategory',function(){
    $.ajax({
        type:'put',
        url:'/categories/'+$(this).attr('data-id'),
        data: $(this).serialize(),
        success(){
            location.reload()
        }
    })
    return false
})
$('#categoriesBox').on('click','.delete',function(){
    if(confirm('你确认要删除吗？')){
        var id = $(this).attr('data-id')
        $.ajax({
            type:'delete',
            url:'/categories/'+id,
            success(res){
                location.reload()
            }
        })
    }
    
})
$('#checkAll').on('change',function(){
    var bool = $(this).prop('checked')
    $('#categoriesBox input[type="checkbox"]').prop('checked',bool)
    if(bool){
        $('#deleteAll').show()
    }else{
        $('#deleteAll').hide()
    }
})
$('#categoriesBox').on('change','input[type="checkbox"]',function(){
    if($('#categoriesBox input[type="checkbox"]').length == $('#categoriesBox input[type="checkbox"]:checked').length){
        $('#checkAll').prop('checked',true)
    }else{
        $('#checkAll').prop('checked',false)
    }
    if($('#categoriesBox input[type="checkbox"]:checked').length>0){
        $('#deleteAll').show()
    }else{
        $('#deleteAll').hide()
    }
})
$('#deleteAll').on('click',function(){
    if(confirm('你确认要删除吗？')){
        var checkList = $('#categoriesBox input[type="checkbox"]:checked')
        var ids = []
        checkList.each(function(index,item){
            ids.push($(item).attr('data-id'))
        })
        ids = ids.join('-')
        $.ajax({
            type:'delete',
            url:'/categories/'+ids,
            success(){
                location.reload()
            }
        })
    }
})