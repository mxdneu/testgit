/**
 * Created by Administrator on 2016/3/28.
 */
window.onload = function(){
    fn("pic1",['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg'],['图片一','图片二','图片三','图片四'],"onclick");
    fn("pic2",['image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg'],['图片一','图片二','图片三','图片四'],"onmouseover");
}
function fn(a,arrImg,arrP,evt){
    var oPic = document.getElementById(a);
    var oUl = oPic.getElementsByTagName("ul")[0];
    var oLi = oUl.getElementsByTagName("li");
    var oImg = oPic.getElementsByTagName("img")[0];
    var oSpan = oPic.getElementsByTagName("span")[0];
    var oP = oPic.getElementsByTagName("p")[0];
    //var arrImg = ['image/1.jpg','image/2.jpg','image/3.jpg','image/4.jpg'];
    //var arrP = ['图片一','图片二','图片三','图片四'];
    var oldLi = null;
    var num = 0;
    for(var i = 0;i<arrImg.length;i++){
        oUl.innerHTML += "<li></li>";
    }
    oldLi = oLi[num];
    for(var i= 0;i<oLi.length;i++){
        oLi[i].index = i;
        oLi[i][evt] = function(){
            //for(var i = 0;i<oLi.length;i++){
            //    oLi[i].className = "";
            //}  //是全部清空li的class
            oldLi.className ="";
            oldLi = this;    //清空上个li的class
            this.className = "active";
            oImg.src = arrImg[this.index];
            oSpan.innerHTML = this.index+1 + "/" + arrImg.length;
            oP.innerHTML = arrP[this.index];
        }
    }
}