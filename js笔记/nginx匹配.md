## 当location后面有/时

```nginx
server
{
    listen 90;
    server_name localhost;


    location /test/ {
        default_type application/json ;
        return 200  '{"name":"测试","result":"success"}';
    }
}
```

浏览器输入http://127.0.0.1:90/test/时，测试成功

浏览器输入http://127.0.0.1:90/test时，404

浏览器输入http://127.0.0.1:90/test/aaa时，测试成功

浏览器输入http://127.0.0.1:90/testaaa时，404

## 当location后面没有/时

```nginx
server
{
    listen 90;
    server_name localhost;


    location /test {
        default_type application/json ;
        return 200  '{"name":"测试","result":"success"}';
    }
}
```

浏览器输入http://127.0.0.1:90/test时，测试成功

浏览器输入http://127.0.0.1:90/test/时，测试成功

浏览器输入http://127.0.0.1:90/test/aaa时，测试成功

浏览器输入http://127.0.0.1:90/testaaa时，测试成功

```nginx
location /chat {
    proxy_pass http://localhost:5001;
}
```

http://localhost/chat  ===> http://localhost:5001/chat

http://localhost/chat/  ===> http://localhost:5001/chat

http://localhost/chat/chat  ===> http://localhost:5001/chat/chat

```nginx
location /chat {
    proxy_pass http://localhost:5001/;
}
# ===> proxy_pass + 原url匹配的location路径之后的内容
```

http://localhost/chat  ===> http://localhost:5001/

http://localhost/chat/  ===> http://localhost:5001//

http://localhost/chat/chat  ===> http://localhost:5001//chat

## 结论1： 

> 当location后面有/时，只能访问test/ 以及test/xxx等路径。
>
> 当location后面没有/时，可以访问test开头的任意路径。

## proxy_pass：末尾不加斜杠，不加路径

案例1

```nginx
location /chat/ {
    proxy_pass http://localhost:5001;
}
# proxy_pass 替换请求url的ip和端口
```

http://localhost/chat  ===> http://localhost:5001/chat

http://localhost/chat/  ===> http://localhost:5001/chat

http://localhost/chat/chat  ===> http://localhost:5001/chat/chat

## proxy_pass：末尾加斜杠，不加路径

案例2

```nginx
location /chat/ {
    proxy_pass http://localhost:5001/;
}
# ===> proxy_pass + 原url匹配的location路径之后的内容
```

http://localhost/chat/  ===> http://localhost:5001/

http://localhost/chat/chat  ===> http://localhost:5001/chat

## proxy_pass：末尾加斜杠，加路径

案例3

```nginx
location /chat/ {
    proxy_pass http://localhost:5001/webchat/;
}
# ===> proxy_pass + 原url匹配的location路径之后的内容
```

http://localhost/chat/  ===> http://localhost:5001/webchat/

http://localhost/chat/chat  ===> http://localhost:5001/webchat/chat

## proxy_pass：末尾不加斜杠，加路径

案例4

```nginx
location /chat/ {
    proxy_pass http://localhost:5001/webchat;
}
# ===> proxy_pass + 原url匹配的location路径之后的内容
```

http://localhost/chat/  ===> http://localhost:5001/webchat

http://localhost/chat/chat  ===> http://localhost:5001/webchatchat

http://localhost/chat/chat/chat ===> http://localhost:5001/webchatchat/chat

## 结论2：

当proxy_pass后面有斜杠时，会将访问路径中和location中的相同的部分替换掉

当proxy_pass后面没有斜杠时，则实际访问路径为：代理路径+访问路径与location相同的部分路径

> 1、proxy_pass 后面有斜杠，
> 转发url为 proxy_pass + 原url匹配的location路径之后的内容，即案例 2，3
>
> 2、 proxy_pass 后面没有斜杠，
> 转发url为 proxy_pass替换原请求url的ip和端口，同时保留了location路径，即案例 1

## 个人总结：

为了不记混，建议全加/，这样约等于location里的路径就会匹配proxy_pass里的路径

```nginx
location /chat/ {
    proxy_pass http://localhost:5001/;
}
# http://localhost/chat/  ===> http://localhost:5001/
```

```nginx
location /chat/ {
    proxy_pass http://localhost:5001/webchat/;
}
# http://localhost/chat/  ===> http://localhost:5001/webchat/
```