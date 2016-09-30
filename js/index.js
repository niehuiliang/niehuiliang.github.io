/**
 * Created by Administrator on 2016/9/30.
 */
window.onload = function () {
    
    var topicsLeft = document.querySelector('.topics-left'),
        topicsright = document.querySelector('.topics-right'),
        snipesfreed = document.querySelector('.snipes-freed');

    topicsLeft.onclick = function () {
        animate(snipesfreed,{left:-1200});
    };
    topicsright.onclick = function () {
        animate(snipesfreed,{left:0});
    };
    
    
    var hotclicka = document.querySelector('.hot-click-a');
    var hotclickb = document.querySelector('.hot-click-b');
    var evilimg = document.querySelector('.evil-img');
    var len = document.querySelector('.evil-img').getElementsByTagName('li').length;
    var cur = 0;

    hotclicka.onclick = function () {
        cur++;
        if (cur==len-1){
            cur=1;
            evilimg.style.left = 0;
        }
        animate(evilimg,{left:-880*cur});


    };
    
    
    hotclickb.onclick = function () {
        // alert(getComputedStyle(evilimg,null).left)
        cur++;
        if (cur == len-1){
            cur == 0;
            evilimg.style.left = -880*cur+'px';
            // getComputedStyle(evilimg,null).left = -880*cur+'px';
        }
        animate(evilimg,{left:880*cur})
    };
    function animate(obj,json,fn) {
        //避免连续点击
        clearInterval(obj.timer);
        //开始运动
        obj.timer = setInterval(function () {
           //假设所有动画执行完毕
            var flag = true;
            for(var attr in json){
                //获取当前属性值
                var val = parseInt(getStyle(obj,attr));
                //获取当前目标属性值
                var target = json[attr];
                //获取速度
                var speed = (target-val)/6;
                speed = target > val ? Math.ceil(speed) : Math.floor(speed);
                if(val != target){
                    obj.style[attr] = val + speed + 'px';
                    flag = false;
                }
            }
            //所有动画执行完毕 关闭定时器
            if (flag==true){
                clearInterval(obj.timer);
                if (fn){
                    fn();
                }
            }
        },30)
    };


    /**
     * 获取元素样式
     */
    function getStyle(obj,attr) {
        var result;
        if(obj.currentStyle){
            result = obj.currentStyle[attr];
        }else {
            result = getComputedStyle(obj,null)[attr];
        }
        return result;
    }
    
    
};