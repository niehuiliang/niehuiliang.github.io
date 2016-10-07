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
    
    var wesleySnipes = document.querySelectorAll('.wesley-snipes');
    var wesleySnipesTax = document.querySelectorAll('.wesley-snipes-tax');
    
    var lens = wesleySnipes.length;
    for (var i=0;i<lens;i++){
        wesleySnipes[i].index=i;
        wesleySnipes[i].onmouseover = function () {
            console.log(this.index);
            for(var j=0;j<lens;j++){
                if (j==this.index){
                    console.log(j);
                    animate(wesleySnipesTax[j],{top:0});
                }
            }
        };
        wesleySnipes[i].onmouseout = function () {
            console.log(this.index);
            for(var j=0;j<lens;j++){
                if (j==this.index){
                    console.log(j);
                    animate(wesleySnipesTax[j],{top:223});
                }
            }
        };
    }
    
    
    
    
    
    
    
    
    var hotclicka = document.querySelector('.hot-click-a');
    var hotclickb = document.querySelector('.hot-click-b');
    var evilimg = document.querySelector('#evilImg');
    var dead = document.querySelector('.dead-p-a-b');
    var len1 = evilimg.getElementsByTagName('li').length;
    var cur = 1;


    setInterval(function () {
        cur++;
        if (cur==len1-1){
            cur=1;
            evilimg.style.left = 0;
            dead.style.top = 0;
        }
        animate(evilimg,{left:-880*cur});
        animate(dead,{top:-120*cur});
    },1000)

    hotclickb.onclick = function () {
        cur++;
        if (cur==len1-1){
            cur=1;
            evilimg.style.left = 0;
        }
        animate(evilimg,{left:-880*cur});


    };
    
    
    hotclicka.onclick = function () {
        if (cur == 1){
            cur = len1-1;
            evilimg.style.left = -880*cur+'px';
        }
        cur--;
        animate(evilimg,{left:-880*cur})
    };

    // hotclicka.onclick = function () {
    //
    //     if(cur == 1){
    //         cur = len1-1;
    //         evilimg.style.left = -880*cur+'px';
    //         console.log(evilimg.style.left)
    //     }
    //     cur--;
    //     animate(evilimg,{left:-880*cur});
    // };


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


    var navPopular = document.getElementById('navPopular').getElementsByTagName('li');
    var len2 = navPopular.length;
    var howBudget = document.getElementById('howBudget');
    for(var i=0;i<len2;i++){
        navPopular[i].index = i;
        navPopular[i].onclick = function () {
            for(var j=0;j<len2;j++){
                if (j==this.index){
                    animate(howBudget,{left:-285*j});
                    this.className = 'on';
                }else {
                    navPopular[j].className = '';
                }
            }


        };
    }


    var environmentLeft = document.getElementById('environmentLeft');
    var environmentRight = document.getElementById('environmentRight');
    var environmentTop = document.getElementById('environmentTop');
    var dreamingFrom = document.getElementById('dreamingFrom');
    var curr = 1;
    var len3 = environmentTop.getElementsByTagName('li').length;

    environmentLeft.onclick = function () {

        if(curr == 1){
            curr = len3-1;
            environmentTop.style.left = -880*curr+'px';
            // console.log(environmentTop.style.left)
        }
        curr--;
        animate(environmentTop,{left:-880*curr});
    };

    environmentRight.onclick = function () {
        curr++;
        if(curr == len3-1){
            curr = 1;
            environmentTop.style.left = 0;
        }
        animate(environmentTop,{left:-880*curr});
    };
    setInterval(function () {
        if(curr == 1){
            curr = len3-1;
            environmentTop.style.left = -880*curr+'px';
            dreamingFrom.style.top = -170*curr+'px';
            // console.log(environmentTop.style.left)
        }
        curr--;
        animate(environmentTop,{left:-880*curr});
        animate(dreamingFrom,{top:-170*curr});
    },1000)

};