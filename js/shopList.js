// 判断用户是否登录
var $topbar_info = document.querySelector('.topbar-info');

function checkUser() {
    if (localStorage.userid == undefined) {
        $topbar_info.innerHTML =
            `<li><a href="../login.html">登录</a></li>
                                      <li><a href="../register.html">注册</a></li>
                                      <li><a href="#">消息通知</a></li>`;
    } else {
        $topbar_info.innerHTML =
            `<li style="line-height:40px">欢迎<b class="userid" style="color:lightyellow;cursor:pointer">${localStorage.userid}</b>来到小米商城</li>
                                      <li class="cancel"><a style="cursor:pointer">注销</a></li>
                                      <li><a href="#">消息通知</a></li>`;
    }
}
checkUser();
$topbar_info.onclick = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.innerHTML == "注销") {
        localStorage.removeItem("userid");
        checkUser();
    }
}

// 渲染数据
function insertData() {
    var arr = [];
    arr.push(`<ul>`);
    for (var i = 0; i < JSON.parse(localStorage.shopList).length; i++) {
        if(localStorage.userid == JSON.parse(localStorage.shopList)[i].userName){
            arr.push(`<li>
            <img src="../img/${JSON.parse(localStorage.shopList)[i].img}" alt="">
            <span class="produce_name"><a href="#">${JSON.parse(localStorage.shopList)[i].name}</a></span>
            <span>${JSON.parse(localStorage.shopList)[i].price}</span><span>×</span><span>${JSON.parse(localStorage.shopList)[i].number}</span>
        </li>`);
        }
    }
    arr.push(`</ul>`);
    arr = arr.join('');
   document.querySelector('.showCar').innerHTML = arr;
}
insertData();


// 小米手机
$('.xiaomi').on('mouseenter', function () {
    $('.xmp').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
    // 移出li,移入显示框
    $('.xmp').on('mouseenter', function () {
        console.log(111);
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('xmp').css({
            height: '250px',
            display: 'block'
        });
    });
});
$('.xiaomi').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.xmp').on('mouseenter', function () {
        console.log(111);
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('xmp').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.xmp').on('mouseleave', function () {
        $('.xmp').css({
            height: 0,
            transition: 'all 0.5s',
            // display:'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.xmp').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});

// 红米手机
$('.hmi').on('mouseenter', function () {
    $('.hmp').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.hmi').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.hmp').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('hmp').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.hmp').on('mouseleave', function () {
        $('.hmp').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.hmp').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});

// 电视
$('.Tv').on('mouseenter', function () {
    $('.tv').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.Tv').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.tv').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('tv').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.tv').on('mouseleave', function () {
        $('.tv').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.tv').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});


// 笔记本
$('.computer').on('mouseenter', function () {
    $('._computer').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.computer').on('mouseleave', function () {
    // 移出li,移入显示框
    $('._computer').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('_computer').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('._computer').on('mouseleave', function () {
        $('._computer').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('._computer').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});


// 空调
$('.air_conditioner').on('mouseenter', function () {
    $('.kt').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.air_conditioner').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.kt').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('kt').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.kt').on('mouseleave', function () {
        $('.kt').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.kt').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});


// 新品
$('.new').on('mouseenter', function () {
    $('.xp').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.new').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.xp').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('xp').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.xp').on('mouseleave', function () {
        $('.xp').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.xp').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});

// 路由器
$('.Router').on('mouseenter', function () {
    $('.luyou').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.Router').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.luyou').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('luyou').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.luyou').on('mouseleave', function () {
        $('.luyou').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.luyou').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});


// 智能硬件
$('.Smart').on('mouseenter', function () {
    $('.smart').css({
        height: 250,
        transition: 'all 0.5s',
        display: 'block'
    });
    $('.listShow').css({
        height: 250,
        transition: 'all 0.5s',
        'border-top': '1px solid #999',
        display: 'block'
    });
});
$('.Smart').on('mouseleave', function () {
    // 移出li,移入显示框
    $('.smart').on('mouseenter', function () {
        $('.listShow').css({
            height: '250px',
            'border-top': '1px solid #999',
            display: 'block'
        });
        $('smart').css({
            height: '250px',
            display: 'block'
        });
    });
    // 移出显示框
    $('.smart').on('mouseleave', function () {
        $('.smart').css({
            height: 0,
            transition: 'all 0.5s',
            display: 'none'
        });
        $('.listShow').css({
            height: 0,
            transition: 'all 0.5s',
            'border-top': 0,
            display: 'none'
        });
    });
    $('.listShow').css({
        height: 0,
        transition: 'all 0.5s',
        'border-top': 0,
        display: 'none'
    });
    $('.smart').css({
        height: 0,
        transition: 'all 0.5s',
        display: 'none'
    });
});

var checkcount1 = 0;
var checkcount2 = 0;
document.querySelector('.server_item1').onclick = function () {
    if (checkcount1 % 2 == 0) {
        document.querySelector('.check1').style.background = 'url(../img/dui.png) no-repeat center center';
        document.querySelector('.checkbox1').style.background = 'url(../img/dui.png) no-repeat center center';
        document.querySelector('.server_item1').style.border = '1px solid #ff7600';
    } else {
        document.querySelector('.check1').style.background = 'none';
        document.querySelector('.checkbox1').style.background = 'none';
        document.querySelector('.server_item1').style.border = '1px solid #e0e0e0';
    }
    if (checkcount2 % 2 != 0) {
        document.querySelector('.check2').style.background = 'none';
        document.querySelector('.checkbox2').style.background = 'none';
        document.querySelector('.server_item2').style.border = '1px solid #e0e0e0';
        checkcount2++;
    }
    checkcount1++;
}
document.querySelector('.server_item2').onclick = function () {
    if (checkcount2 % 2 == 0) {
        document.querySelector('.check2').style.background = 'url(../img/dui.png) no-repeat center center';
        document.querySelector('.checkbox2').style.background = 'url(../img/dui.png) no-repeat center center';
        document.querySelector('.server_item2').style.border = '1px solid #ff7600';
    } else {
        document.querySelector('.check2').style.background = 'none';
        document.querySelector('.checkbox2').style.background = 'none';
        document.querySelector('.server_item2').style.border = '1px solid #e0e0e0';
    }
    if (checkcount1 % 2 != 0) {
        document.querySelector('.check1').style.background = 'none';
        document.querySelector('.checkbox1').style.background = 'none';
        document.querySelector('.server_item1').style.border = '1px solid #e0e0e0';
        checkcount1++;
    }
    checkcount2++;
}





// 获取内存大小,获取颜色
$('.bb_item2').on('click', function () {
    $('.bb_item1').toggleClass('select');
    $('.bb_item2').toggleClass('select');

    $('.price_total').text(`${$('.select').text().split('  ')[1]}`);
    $('.buyinfo').text(`小米8 屏幕指纹版 ${$('.select').text().split(' ')[0]} 暮光金`);
});
$('.bb_item1').on('click', function () {
    $('.bb_item2').toggleClass('select');
    $('.bb_item1').toggleClass('select');

    $('.price_total').text(`${$('.select').text().split('  ')[1]}`);
    $('.buyinfo').text(`小米8 屏幕指纹版 ${$('.select').text().split(' ')[0]} 暮光金`);
});

$('.color_item2').on('click', function () {
    $('.color_item1').toggleClass('select1');
    $('.color_item2').toggleClass('select1');
    $('.buyinfo').text(`小米8 屏幕指纹版 ${$('.select').text().split(' ')[0]} ${$('.select1').text()}`);
});
$('.color_item1').on('click', function () {
    $('.color_item2').toggleClass('select1');
    $('.color_item1').toggleClass('select1');
    $('.buyinfo').text(`小米8 屏幕指纹版 ${$('.select').text().split(' ')[0]} ${$('.select1').text()}`);
});


// 点击是否喜欢
$('.habit').on('click', function () {
    $('.hart').toggleClass('like');
})

// 加入购物车
$('.addCar').on('click', function () {
    var sum = 0;
    // 获取商品数据
    var params = {
        'userName':localStorage.userid,
        'name': $('.buyinfo').text(),
        'price': $('.price_total').text(),
        'img': document.querySelector('.select1').firstChild.src.split('img/')[1],
        'number': 1
    }
    // console.log(params.name);
    function addCar (params){
        var arr;
        var shopList = localStorage.shopList || '[]';
        shopList = JSON.parse(shopList);
        if(JSON.parse(localStorage.shopList).length > 0){
            for(var i = 0; i < JSON.parse(localStorage.shopList).length; i++){
                arr = JSON.parse(localStorage.shopList);
                if(JSON.parse(localStorage.shopList)[i].name == params.name){
                    arr[i].number = arr[i].number + params.number;
                    shopList = arr;
                    break;
                } else {
                    shopList.unshift(params);
                }
            }
        } else {
            shopList.unshift(params);
        }
        localStorage.shopList = JSON.stringify(shopList);
    }
    addCar(params);
    for(var i = 0; i < JSON.parse(localStorage.shopList).length; i++){
        if(localStorage.userid == JSON.parse(localStorage.shopList)[i].userName){
            sum ++;
        }else if(localStorage.userid == ''){
            sum = JSON.parse(localStorage.shopList).length;
        }
    }
    console.log(sum);
    $('.count').text(sum);
    $('.addCar_tip').css({
        display:"block"
    });
})

$('.goOn').on('click',function(){
    $('.addCar_tip').css({
        display:"none"
    });
});
$('.goCar').on('click',function(){
    $('.addCar_tip').css({
        display:"none"
    });
});


window.onscroll = function(){
    var top = document.documentElement.scrollTop;
    if(top > 208){
        console.log(top);
        $('.proheader').slideDown();
        $('.proheader').css({
            position: 'fixed',
            top:0,
            'z-index':100
        });
    } else{
        $('.proheader').css({
            position: 'static',
        });
    }
    if(top > 275 && top < 660){
        $('#img').css({
            top: top - 65,
        });
    }
    else if(top >= 660){
        $('#img').css({
           top: 600
        });
    } 
    else if(top < 250){
        $('#img').css({
            top: 50,
        });
    }
}