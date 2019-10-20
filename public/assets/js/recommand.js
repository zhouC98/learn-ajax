$.ajax({
    type:'get',
    url:'/posts/recommend',
    success(res){
        var tpl = `
        {{each data}}
            <li>
                <a href="detail.html?id={{$value._id}}">
                    <img src="{{$value.thumbnail}}" alt="">
                    <span>{{$value.title}}</span>
                </a>
            </li>
        {{/each}}
        `
        var html = template.render(tpl,{data:res})
        $('.hots ul').html(html)
    }
})
