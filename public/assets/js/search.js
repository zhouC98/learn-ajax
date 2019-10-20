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
var key = getUrl('key')
$.ajax({
    type:'get',
    url:"/posts/search/"+key,
    success(res){
        var html = template('listsTpl',{data:res})
        $('#listBox').html(html)
    }
})
