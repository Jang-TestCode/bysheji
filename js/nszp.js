// JavaScript Document
window.onload = function() {
        // 获取节点
        var items = document.getElementsByClassName('item');
        var le = document.getElementById('le');
        var ri = document.getElementById('ri');
        var points = document.getElementsByClassName('point');
        var right = document.getElementById('right');     
        // 定义一个索引值用来记录当前图片
        var index=0;
        //清空所有图片的display和小圆点的className
        function clear(){
            for (var x=0;x<items.length;x++){
                items[x].style.display = 'none';
            }
            for(var i=0;i<points.length;i++){
                points[i].className = 'point'
            }
        }
        //改变索引的值
        function goindex(){
            clear();
            items[index].style.display = 'block';
            points[index].className='point active';
        }
        //前往下一张
        function gonext(){
            if(index<6) {
                index++;
            } else{
                index=0;
            }
            goindex();
        }
        //前往上一张
        function gopre(){
            if(index>0) {
                index--;
            } else{
                index=6;
            }
            goindex();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri.onclick = function(){
            gonext();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le.onclick = function(){
            gopre();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points.length;j++){
            points[j].addEventListener('click',function () {
                index = this.getAttribute('data-index');
                    goindex();
            })
        }
}