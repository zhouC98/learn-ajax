$.ajax({
    type:'get',
    url:'/posts/random',
    success(res){
        var tpl = `
        {{each data}}
            <li>
                <a href="detail.html?id={{$value._id}}">
                <p class="title">{{$value.title}}</p>
                <p class="reading">阅读({{$value.meta.views}})</p>
                <div class="pic">
                    <img src="{{$valuethumbnail}}" alt="">
                </div>
                </a>
            </li>
        {{/each}}
        `
        var html = template.render(tpl,{data:res})
        $('.random').html(html)
    }
})
$.ajax({
    type:'get',
    url:'/comments/lasted',
    success(res){
       
 
        var tpl = `
        {{each data}}
            <li>
                <a href="javascript:;">
                <div class="avatar">
                    <img src="{{$value.author.avatar}}" alt="">
                </div>
                <div class="txt">
                    <p>
                    <span>{{$value.author.nickName}}</span>{{$value.createAt.split('T')[0]}}说:
                    </p>
                    <p>{{$value.content}}</p>
                </div>
                </a>
            </li>   
        {{/each}}
        `
        var html = template.render(tpl,{data:res})
        $('.discuz').html(html)
    }
})


$.ajax({
    type:'get',
    url:'/categories',
    success(res){
        
        var tpl = `
        {{each data}}
            <li><a href="list.html?categoryId={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>
        {{/each}}
        `
        var html = template.render(tpl,{data:res})
        $('.header .nav').html(html)
    }
})
$('.search form').on('submit',function(){
    var val = $(this).find('.keys').val().trim()
    location.href = 'search.html?key='+val
    return false
})