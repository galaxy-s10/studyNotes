前端发http请求，默认会带上当前网址的cookie

后端可以接受到前端传来的cookie

登录，前端将账号密码发给后端，后端接受到请求后判断账号密码是否正确，正确就生产一个session，将session设置在响应头 **Set-Cookie** 然后响应给前端，前端接受到请求后，会将接受到的响应头的 **Set-Cookie**  的值设置在cookie里，然后下次请求就会继续带上cookie的值