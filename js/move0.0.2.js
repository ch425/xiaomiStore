/*
    bug: 物体运动不能终止(多个定时器影响)
    增加功能: 修改透明度
    增加多属性运动

*/
var timer = null;
function move(ele, attr, target,callback) {
    if(typeof ele == 'string') {
        ele = document.querySelector(ele);
    }
    clearInterval(ele.timer);
    var init = parseFloat(getStyle(ele, attr));
    // 如果是修改透明度, 转化成一百进行计算
    // target默认传进来的就已经转换了
    if(attr == 'opacity') {
        init *= 100;
    }
    var speed = 4;
    if(target < init) {
        speed *= -1;
    }
    // 给每一个dom对象添加专有定时器
    ele.timer = setInterval(function () {
        init += speed;
        // 添加终止运动的条件
        // 从小变大,speed为正,init > target 终止
        // 从大到小, speed为负, init < target 终止
        if ((speed > 0 && init > target) || (speed < 0 && init <  target)) {
            init = target;
            clearInterval(ele.timer);
            if(typeof callback == 'function'){
                callback(ele);
            }
        }
        if(attr == 'opacity') {
            // 透明度放大了100, 最后要在缩小100
            ele.style[attr] = init / 100;
        } else {
            ele.style[attr] = init + 'px';
        }
    }, 10);
}
// 获取非行内样式
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}