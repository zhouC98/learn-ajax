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
var id = getUrl('categoryId')
$.ajax({
    type:'get',
    url:'/posts/category/'+id,
    success(res){
        console.log(res);
        var html = template('listsTpl',{data:res})
        $('.new h3').text(res[0].category.title)
        $('#listBox').html(html)
    }
})
