/**
 * Created by Administrator on 2016/1/7.
 */
window.onload = function(){
    var obtn = document.getElementById("btn");

    obtn.onclick = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的距离
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}