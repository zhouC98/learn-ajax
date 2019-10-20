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
        type:'GET',
        url:'/posts/'+id,
        async: false,
        success(res){
            console.log(res);
            var html = template('editTpl',res)
            $('#addForm').html(html)
            
        }
        
    })
    $.ajax({
        type:'get',
        url:'/categories',
        success(res){
            var html = template('categoriesTpl',{data:res})
            $('#category').html(html)
        }
    })
    


$('#addForm').on('change','#feature',function(){
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
            console.log(res[0].cover);
            $('#thumbnail').val(res[0].cover)
            $('#img').prop('src',res[0].cover)
        }
    })
})

$('#addForm').on('submit',function(){
    var formData = $(this).serialize()
    $.ajax({
        type:'put',
        url:'/posts/'+id,
        data:formData,
        success(res){
            alert('提交成功')
            location.href = 'posts.html'
        }
    })
    return false
})
