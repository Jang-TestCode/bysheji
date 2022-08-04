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
            if(index<5) {
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
                index=5;
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
		
		//2
		// 获取节点
        var items1 = document.getElementsByClassName('item1');
        var le1 = document.getElementById('le1');
        var ri1 = document.getElementById('ri1');
        var points1 = document.getElementsByClassName('point1');
        var right1 = document.getElementById('right1');     
        // 定义一个索引值用来记录当前图片
        var index1=0;
        //清空所有图片的display和小圆点的className
        function clear1(){
            for (var x=0;x<items1.length;x++){
                items1[x].style.display = 'none';
            }
            for(var i=0;i<points1.length;i++){
                points1[i].className = 'point1'
            }
        }
        //改变索引的值
        function goindex1(){
            clear1();
            items1[index1].style.display = 'block';
            points1[index1].className='point1 active1';
        }
        //前往下一张
        function gonext1(){
            if(index1<6) {
                index1++;
            } else{
                index1=0;
            }
            goindex1();
        }
        //前往上一张
        function gopre1(){
            if(index1>0) {
                index1--;
            } else{
                index1=6;
            }
            goindex1();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri1.onclick = function(){
            gonext1();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le1.onclick = function(){
            gopre1();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points1.length;j++){
            points1[j].addEventListener('click',function () {
                index1 = this.getAttribute('data-index');
                    goindex1();
            })
        }
		
		//3
		// 获取节点
        var items2 = document.getElementsByClassName('item2');
        var le2 = document.getElementById('le2');
        var ri2 = document.getElementById('ri2');
        var points2 = document.getElementsByClassName('point2');
        var right2 = document.getElementById('right2');     
        // 定义一个索引值用来记录当前图片
        var index2=0;
        //清空所有图片的display和小圆点的className
        function clear2(){
            for (var x=0;x<items2.length;x++){
                items2[x].style.display = 'none';
            }
            for(var i=0;i<points2.length;i++){
                points2[i].className = 'point2'
            }
        }
        //改变索引的值
        function goindex2(){
            clear2();
            items2[index2].style.display = 'block';
            points2[index2].className='point2 active2';
        }
        //前往下一张
        function gonext2(){
            if(index2<3) {
                index2++;
            } else{
                index2=0;
            }
            goindex2();
        }
        //前往上一张
        function gopre2(){
            if(index2>0) {
                index2--;
            } else{
                index2=3;
            }
            goindex2();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri2.onclick = function(){
            gonext2();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le2.onclick = function(){
            gopre2();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points2.length;j++){
            points2[j].addEventListener('click',function () {
                index2 = this.getAttribute('data-index');
                    goindex2();
            })
        }
		
		
		
		//4
		// 获取节点
        var items3 = document.getElementsByClassName('item3');
        var le3 = document.getElementById('le3');
        var ri3 = document.getElementById('ri3');
        var points3 = document.getElementsByClassName('point3');
        var right3 = document.getElementById('right3');     
        // 定义一个索引值用来记录当前图片
        var index3=0;
        //清空所有图片的display和小圆点的className
        function clear3(){
            for (var x=0;x<items3.length;x++){
                items3[x].style.display = 'none';
            }
            for(var i=0;i<points3.length;i++){
                points3[i].className = 'point3'
            }
        }
        //改变索引的值
        function goindex3(){
            clear3();
            items3[index3].style.display = 'block';
            points3[index3].className='point3 active3';
        }
        //前往下一张
        function gonext3(){
            if(index3<6) {
                index3++;
            } else{
                index3=0;
            }
            goindex3();
        }
        //前往上一张
        function gopre3(){
            if(index3>0) {
                index3--;
            } else{
                index3=6;
            }
            goindex3();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri3.onclick = function(){
            gonext3();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le3.onclick = function(){
            gopre3();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points3.length;j++){
            points3[j].addEventListener('click',function () {
                index3 = this.getAttribute('data-index');
                    goindex3();
            })
        }
		
		
		//5
		// 获取节点
        var items4 = document.getElementsByClassName('item4');
        var le4 = document.getElementById('le4');
        var ri4 = document.getElementById('ri4');
        var points4 = document.getElementsByClassName('point4');
        var right4 = document.getElementById('right4');     
        // 定义一个索引值用来记录当前图片
        var index4=0;
        //清空所有图片的display和小圆点的className
        function clear4(){
            for (var x=0;x<items4.length;x++){
                items4[x].style.display = 'none';
            }
            for(var i=0;i<points4.length;i++){
                points4[i].className = 'point4'
            }
        }
        //改变索引的值
        function goindex4(){
            clear4();
            items4[index4].style.display = 'block';
            points4[index4].className='point4 active4';
        }
        //前往下一张
        function gonext4(){
            if(index4<4) {
                index4++;
            } else{
                index4=0;
            }
            goindex4();
        }
        //前往上一张
        function gopre4(){
            if(index4>0) {
                index4--;
            } else{
                index4=4;
            }
            goindex4();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri4.onclick = function(){
            gonext4();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le4.onclick = function(){
            gopre4();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points4.length;j++){
            points4[j].addEventListener('click',function () {
                index4 = this.getAttribute('data-index');
                    goindex4();
            })
        }
		
		
		//6
		// 获取节点
        var items5 = document.getElementsByClassName('item5');
        var le5 = document.getElementById('le5');
        var ri5 = document.getElementById('ri5');
        var points5 = document.getElementsByClassName('point5');
        var right5 = document.getElementById('right5');     
        // 定义一个索引值用来记录当前图片
        var index5=0;
        //清空所有图片的display和小圆点的className
        function clear5(){
            for (var x=0;x<items5.length;x++){
                items5[x].style.display = 'none';
            }
            for(var i=0;i<points5.length;i++){
                points5[i].className = 'point5'
            }
        }
        //改变索引的值
        function goindex5(){
            clear5();
            items5[index5].style.display = 'block';
            points5[index5].className='point5 active5';
        }
        //前往下一张
        function gonext5(){
            if(index5<3) {
                index5++;
            } else{
                index5=0;
            }
            goindex5();
        }
        //前往上一张
        function gopre5(){
            if(index5>0) {
                index5--;
            } else{
                index5=3;
            }
            goindex5();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri5.onclick = function(){
            gonext5();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le5.onclick = function(){
            gopre5();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points5.length;j++){
            points5[j].addEventListener('click',function () {
                index5 = this.getAttribute('data-index');
                    goindex5();
            })
        }
		
		
		
		//7
		// 获取节点
        var items6 = document.getElementsByClassName('item6');
        var le6 = document.getElementById('le6');
        var ri6 = document.getElementById('ri6');
        var points6 = document.getElementsByClassName('point6');
        var right6 = document.getElementById('right6');     
        // 定义一个索引值用来记录当前图片
        var index6=0;
        //清空所有图片的display和小圆点的className
        function clear6(){
            for (var x=0;x<items6.length;x++){
                items6[x].style.display = 'none';
            }
            for(var i=0;i<points6.length;i++){
                points6[i].className = 'point6'
            }
        }
        //改变索引的值
        function goindex6(){
            clear6();
            items6[index6].style.display = 'block';
            points6[index6].className='point6 active6';
        }
        //前往下一张
        function gonext6(){
            if(index6<2) {
                index6++;
            } else{
                index6=0;
            }
            goindex6();
        }
        //前往上一张
        function gopre6(){
            if(index6>0) {
                index6--;
            } else{
                index6=2;
            }
            goindex6();
        }
        // 给右边的小箭头绑定事件，前往下一张
        ri6.onclick = function(){
            gonext6();
        }
        // 给左边的小箭头绑定事件，前往上一张
        le6.onclick = function(){
            gopre6();
        }
        // 给小点绑定事件，点击时会前往当前图片
        for(var j=0;j<points6.length;j++){
            points6[j].addEventListener('click',function () {
                index6 = this.getAttribute('data-index');
                    goindex6();
            })
        }
}