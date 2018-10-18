var index = (function () {
    return {
        init() {
            this.$topbar_info = document.querySelector('.topbar-info');


            // 获取倒计时的时间
            this.hour = document.querySelector('._hours');
            // 获取倒计时的框
            this.h = document.querySelector('.h');
            this.m = document.querySelector('.m');
            this.s = document.querySelector('.s');
            // 获取播放按钮
            this.$start1 = document.querySelector('.play1');
            this.$start2 = document.querySelector('.play2');
            this.$start3 = document.querySelector('.play3');
            this.$start4 = document.querySelector('.play4');
            // 获取播放视频区域
            this.$video = document.querySelector('.video');
            // 获取视频内容
            this.$movie1 = document.querySelector('.movie1');
            this.$movie2 = document.querySelector('.movie2');
            this.$movie3 = document.querySelector('.movie3');
            this.$movie4 = document.querySelector('.movie4');
            // 获取关闭视频窗口按钮
            this.$close = document.querySelector('.close');
            // 获取蒙版
            this.$mb = document.querySelector('#mb');
            // 获取top元素
            this.$_top1 = document.querySelector('._top1');


            this.checkUser();
            this.event();
            this.insertData();
            this.countDown();
        },
        event() {
            var _this = this;
            // 注销当前用户
            this.$topbar_info.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.innerHTML == "注销") {
                    console.log(11);
                    localStorage.removeItem("userid");
                    _this.checkUser();
                }
            }
            // $('.car').on('mouseover',function(){
            //     console.log(111);
            //     $('.showCar').slideDown('slow');
            // });

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

            $('.pc').on('mouseenter', function () {
                $(this).css('background-image', 'url(img/41f858550f42eb1770b97faf219ae215.png)');
                // $('pc-tip').css('display','block');
            });
            $('.pc').on('mouseleave', function () {
                $(this).css('background-image', 'url(img/55cad219421bee03a801775e7309b920.png)');
                // $('pc-tip').css('display','none');
            });
            $('._online').on('mouseover', function () {
                $(this).css('background-image', 'url(img/5e9f2b1b0da09ac3b3961378284ef2d4.png)');
                // $('online-tip').css('display','block');
            });
            $('._online').on('mouseleave', function () {
                $(this).css('background-image', 'url(img/4f036ae4d45002b2a6fb6756cedebf02.png)');
                // $('online-tip').css('display','none');
            });
            $('._car').on('mouseover', function () {
                $(this).css('background-image', 'url(img/692a6c3b0a93a24f74a29c0f9d68ec71.png)');
                // $('_car-tip').css('display','block');
            });
            $('._car').on('mouseleave', function () {
                $(this).css('background-image', 'url(img/d7db56d1d850113f016c95e289e36efa.png)');
                // $('_car-tip').css('display','none');
            });
            $('._top1').on('mouseleave', function () {
                $(this).css('background-image', 'url(img/totop.png)');
            });
            $('._top1').on('mouseover', function () {
                $(this).css('background-image', 'url(img/totop_hover.png)');
            });

            this.$_top1.onclick = function () {
                var time = setInterval(function () {
                    var _top = document.documentElement.scrollTop - 15;
                    if (_top <= 0) {
                        _top = 0;
                        clearInterval(time);
                    }
                    document.documentElement.scrollTop = _top;
                }, 10);
            }
            window.onscroll = function () {
                // 获取滚动距离
                var top = document.documentElement.scrollTop;
                if (top >= 400) {
                    _this.$_top1.style.display = 'block';
                } else {
                    _this.$_top1.style.display = 'none';
                }
            }



            // 视频播放部分
            this.$start1.onclick = function () {
                _this.$mb.style.display = 'block';
                _this.$video.style.display = 'block';
                _this.$movie4.style.display = 'none';
                _this.$movie3.style.display = 'none';
                _this.$movie2.style.display = 'none';
                _this.$movie1.style.display = 'block';
            }
            this.$start2.onclick = function () {
                _this.$mb.style.display = 'block';
                _this.$video.style.display = 'block';
                _this.$movie4.style.display = 'none';
                _this.$movie3.style.display = 'none';
                _this.$movie1.style.display = 'none';
                _this.$movie2.style.display = 'block';
            }
            this.$start3.onclick = function () {
                _this.$mb.style.display = 'block';
                _this.$video.style.display = 'block';
                _this.$movie4.style.display = 'none';
                _this.$movie1.style.display = 'none';
                _this.$movie2.style.display = 'none';
                _this.$movie3.style.display = 'block';
            }
            this.$start4.onclick = function () {
                _this.$mb.style.display = 'block';
                _this.$video.style.display = 'block';
                _this.$movie1.style.display = 'none';
                _this.$movie3.style.display = 'none';
                _this.$movie2.style.display = 'none';
                _this.$movie4.style.display = 'block';
            }
            document.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className == 'close') {
                    _this.$mb.style.display = 'none';
                    _this.$video.style.display = 'none';
                }

            }


        },
        //检测用户是否登录
        checkUser() {
            if (localStorage.userid == undefined) {
                this.$topbar_info.innerHTML =
                    `<li><a href="login.html">登录</a></li>
                                              <li><a href="register.html">注册</a></li>
                                              <li><a href="#">消息通知</a></li>`;
            } else {
                this.$topbar_info.innerHTML =
                    `<li style="line-height:40px">欢迎<b class="userid" style="color:lightyellow;cursor:pointer">${localStorage.userid}</b>来到小米商城</li>
                                              <li class="cancel"><a style="cursor:pointer">注销</a></li>
                                              <li><a href="#">消息通知</a></li>`;
            }
        },
        // 倒计时
        countDown() {
            var _this = this;
            // 获取当前本地时间
            var date = new Date();
            var _hour = date.getHours();
            var year = date.getFullYear();
            var month = date.getMonth();
            this.hour.innerHTML = _hour + 1;
            var timer;

            function countTime(dateStr) {
                dateStr = new Date(dateStr);
                // 不可以放在函数外面，需要重新获取值
                var nowDate = new Date();
                // 获取两个日期相差的秒数
                var time = (dateStr.getTime() - nowDate.getTime()) / 1000;
                var sec = Math.floor(time % 60);
                var min = Math.floor(time / 60 % 60);
                var hour = Math.floor(time / 60 / 60);
                _this.h.innerHTML = Number(hour) < 10 ? ('0' + hour) : hour; //
                _this.m.innerHTML = Number(min) < 10 ? ('0' + min) : min; // 
                _this.s.innerHTML = Number(sec) < 10 ? ('0' + sec) : sec; // 
            }
            var dataString = `${year}/${month + 1}/${date.getDate()} ${(date.getHours() + 1) > 24 ? 0 : (date.getHours() + 1) }:00:00`;
            setInterval(function () {
                countTime(dataString);
            }, 1000);
        },
        // 渲染数据
        insertData() {
            var arr = [];
            arr.push(`<ul>`);
            for (var i = 0; i < JSON.parse(localStorage.shopList).length; i++) {
                if (localStorage.userid == JSON.parse(localStorage.shopList)[i].userName) {
                    arr.push(`<li>
            <img src="img/${JSON.parse(localStorage.shopList)[i].img}" alt="">
            <span class="produce_name"><a href="#">${JSON.parse(localStorage.shopList)[i].name}</a></span>
            <span>${JSON.parse(localStorage.shopList)[i].price}</span><span>×</span><span>${JSON.parse(localStorage.shopList)[i].number}</span>
        </li>`);
                }
            }
            arr.push(`</ul>`);
            arr = arr.join('');
            document.querySelector('.showCar').innerHTML = arr;
        }
        
    }
}());
index.init();

// banner
var swiper = new Swiper('.banner_img', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.left',
        prevEl: '.right',
    },
    controller: {
        inverse: true,
        by: 'slide',
    },
});
var banner = (function () {
    var timer2;
    return {
        init() {
            // 获取最大的盒子
            this.box = document.querySelector('.box');
            this.box2 = document.querySelector('.box2');
            this.box3 = document.querySelector('.box3');
            this.box4 = document.querySelector('.box4');
            // 获取img图片的盒子
            this.imgBox = document.querySelector('.imgBox');
            this.imgBox2 = document.querySelector('.imgBox2');
            this.imgBox3 = document.querySelector('.imgBox3');
            this.imgBox4 = document.querySelector('.imgBox4');
            // 获取每一张图片
            this.imgLi = this.imgBox.children;
            this.imgLi2 = this.imgBox2.children;
            this.imgLi3 = this.imgBox3.children;
            this.imgLi4 = this.imgBox4.children;
            // 获取小圆点的盒子
            this.tipBox = document.querySelector('.tipBox');
            this.tipBox2 = document.querySelector('.tipBox2');
            this.tipBox3 = document.querySelector('.tipBox3');
            this.tipBox4 = document.querySelector('.tipBox4');
            // 获取每个小圆点
            this.btnLi = this.tipBox.children;
            this.btnLi2 = this.tipBox2.children;
            this.btnLi3 = this.tipBox3.children;
            this.btnLi4 = this.tipBox4.children;
            // 给每个小圆点添加一个索引
            for (var i = 0; i < this.btnLi.length; i++) {
                this.btnLi[i].index = i;
            }
            for (var i = 0; i < this.btnLi2.length; i++) {
                this.btnLi2[i].index = i;
            }
            for (var i = 0; i < this.btnLi3.length; i++) {
                this.btnLi3[i].index = i;
            }
            for (var i = 0; i < this.btnLi4.length; i++) {
                this.btnLi4[i].index = i;
            }
            // 获取第一张图片和最后一张图片
            var first = this.imgLi[0];
            var last = this.imgLi[this.imgLi.length - 1];
            var first2 = this.imgLi2[0];
            var last2 = this.imgLi2[this.imgLi2.length - 1];
            var first3 = this.imgLi3[0];
            var last3 = this.imgLi3[this.imgLi3.length - 1];
            var first4 = this.imgLi4[0];
            var last4 = this.imgLi4[this.imgLi4.length - 1];
            // 将第一张图片克隆到最后,最后一张图片克隆到第一张图片的前面
            this.imgBox.appendChild(first.cloneNode(true));
            this.imgBox.insertBefore(last.cloneNode(true), first);
            this.imgBox2.appendChild(first2.cloneNode(true));
            this.imgBox2.insertBefore(last2.cloneNode(true), first2);
            this.imgBox3.appendChild(first3.cloneNode(true));
            this.imgBox3.insertBefore(last3.cloneNode(true), first3);
            this.imgBox4.appendChild(first4.cloneNode(true));
            this.imgBox4.insertBefore(last4.cloneNode(true), first4);
            // 将第一张图显示出来
            this.imgBox.style.left = -296 + 'px';
            this.imgBox2.style.left = -296 + 'px';
            this.imgBox2.style.left = -296 + 'px';
            this.imgBox2.style.left = -296 + 'px';
            // 获取按钮的盒子
            this.btnBox = document.querySelector('.btnBox');
            this.btnBox2 = document.querySelector('.btnBox2');
            this.btnBox3 = document.querySelector('.btnBox3');
            this.btnBox4 = document.querySelector('.btnBox4');
            // 获取两个切换按钮
            this.left = document.querySelector('._left');
            this.right = document.querySelector('._right');
            this.left2 = document.querySelector('._left2');
            this.right2 = document.querySelector('._right2');
            this.left3 = document.querySelector('._left3');
            this.right3 = document.querySelector('._right3');
            this.left4 = document.querySelector('._left4');
            this.right4 = document.querySelector('._right4');
            // 创建一个全局的index
            this.index = 0;
            this.index2 = 0;
            this.index3 = 0;
            this.index4 = 0;
            // 创建一个定时器
            this.timer = null;
            // 事件处理程序
            // this.autoPlay(this.index);
            this.event();
            this.count();
        },
        event() {
            var _this = this;

            // 第一个小盒子
            _this.tipBox.onclick = function (e) {
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    // 显示图片
                    _this.showImage(target.index);
                }
                // 自动播放图片
            }
            // 鼠标滑上最大的盒子时
            _this.box.onmouseenter = function () {
                // 按钮显示
                _this.btnBox.style.display = 'block';
                // 点击左按钮
                _this.left.onclick = function () {
                    _this.showImage(--_this.index);
                    // _this.autoPlay(_this.index);
                }
                // 点击右按钮
                _this.right.onclick = function () {
                    _this.showImage(++_this.index);
                    // _this.autoPlay(_this.index);
                }
            }
            // 鼠标离开最大的盒子,按钮隐藏
            _this.box.onmouseleave = function () {
                _this.btnBox.style.display = 'none';
            }

            // 第二个小盒子
            _this.tipBox2.onclick = function (e) {
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    // 显示图片
                    _this.showImage2(target.index);
                }
                // 自动播放图片
                // _this.autoPlay(_this.index);
            }
            // 鼠标滑上最大的盒子时
            _this.box2.onmouseenter = function () {
                // 按钮显示
                _this.btnBox2.style.display = 'block';
                // 点击左按钮
                _this.left2.onclick = function () {
                    _this.showImage2(--_this.index);
                    // _this.autoPlay(_this.index);
                }
                // 点击右按钮
                _this.right2.onclick = function () {
                    _this.showImage2(++_this.index);
                    // _this.autoPlay(_this.index);
                }
            }
            // 鼠标离开最大的盒子,按钮隐藏
            _this.box2.onmouseleave = function () {
                _this.btnBox2.style.display = 'none';
            }

            // 第三个小盒子
            _this.tipBox3.onclick = function (e) {
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    // 显示图片
                    _this.showImage3(target.index);
                }
                // 自动播放图片
                // _this.autoPlay(_this.index);
            }
            // 鼠标滑上最大的盒子时
            _this.box3.onmouseenter = function () {
                // 按钮显示
                _this.btnBox3.style.display = 'block';
                // 点击左按钮
                _this.left.onclick = function () {
                    _this.showImage3(--_this.index);
                    // _this.autoPlay(_this.index);
                }
                // 点击右按钮
                _this.right3.onclick = function () {
                    _this.showImage3(++_this.index);
                    // _this.autoPlay(_this.index);
                }
            }
            // 鼠标离开最大的盒子,按钮隐藏
            _this.box3.onmouseleave = function () {
                _this.btnBox3.style.display = 'none';
            }
            // 第四个小盒子
            _this.tipBox4.onclick = function (e) {
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    // 显示图片
                    _this.showImage4(target.index);
                }
                // 自动播放图片
                // _this.autoPlay(_this.index);
            }
            // 鼠标滑上最大的盒子时
            _this.box4.onmouseenter = function () {
                // 按钮显示
                _this.btnBox4.style.display = 'block';
                // 点击左按钮
                _this.left4.onclick = function () {
                    _this.showImage4(--_this.index);
                    // _this.autoPlay(_this.index);
                }
                // 点击右按钮
                _this.right4.onclick = function () {
                    _this.showImage4(++_this.index);
                    // _this.autoPlay(_this.index);
                }
            }
            // 鼠标离开最大的盒子,按钮隐藏
            _this.box4.onmouseleave = function () {
                _this.btnBox4.style.display = 'none';
            }
        },
        // 显示购物车商品数量
        count() {
            var sum = 0;
            sum = JSON.parse(localStorage.shopList).length;
            $('.count').text(sum);
        },
        // 展示图片
        showImage(index) {
            // 获取一个最大的索引值
            var maxIndex = this.btnLi.length - 1;
            if (index > maxIndex) {
                index = 0;
                this.imgBox.style.left = 0;
            } else if (index < 0) {
                index = maxIndex;
                this.imgBox.style.left = -294 * (maxIndex + 2) + 'px';
            }
            this.index = index;
            // 把所有的小圆点的class去除
            for (var i = 0; i < this.btnLi.length; i++) {
                this.btnLi[i].removeAttribute('class');
            }
            // 给点击的小圆点添加一个class
            this.btnLi[index].className = 'current';
            this.move(this.imgBox, 'left', -294 * (index + 1));
        },
        showImage2(index) {
            // 获取一个最大的索引值
            var maxIndex = this.btnLi2.length - 1;
            if (index > maxIndex) {
                index = 0;
                this.imgBox2.style.left = 0;
            } else if (index < 0) {
                index = maxIndex;
                this.imgBox2.style.left = -294 * (maxIndex + 2) + 'px';
            }
            this.index = index;
            // 把所有的小圆点的class去除
            for (var i = 0; i < this.btnLi2.length; i++) {
                this.btnLi2[i].removeAttribute('class');
            }
            // 给点击的小圆点添加一个class
            this.btnLi2[index].className = 'current';
            this.move(this.imgBox2, 'left', -294 * (index + 1));
        },
        showImage3(index) {
            // 获取一个最大的索引值
            var maxIndex = this.btnLi3.length - 1;
            if (index > maxIndex) {
                index = 0;
                this.imgBox3.style.left = 0;
            } else if (index < 0) {
                index = maxIndex;
                this.imgBox3.style.left = -294 * (maxIndex + 2) + 'px';
            }
            this.index = index;
            // 把所有的小圆点的class去除
            for (var i = 0; i < this.btnLi3.length; i++) {
                this.btnLi3[i].removeAttribute('class');
            }
            // 给点击的小圆点添加一个class
            this.btnLi3[index].className = 'current';
            this.move(this.imgBox3, 'left', -294 * (index + 1));
        },
        showImage4(index) {
            // 获取一个最大的索引值
            var maxIndex = this.btnLi4.length - 1;
            if (index > maxIndex) {
                index = 0;
                this.imgBox4.style.left = 0;
            } else if (index < 0) {
                index = maxIndex;
                this.imgBox4.style.left = -294 * (maxIndex + 2) + 'px';
            }
            this.index = index;
            // 把所有的小圆点的class去除
            for (var i = 0; i < this.btnLi4.length; i++) {
                this.btnLi4[i].removeAttribute('class');
            }
            // 给点击的小圆点添加一个class
            this.btnLi4[index].className = 'current';
            this.move(this.imgBox4, 'left', -294 * (index + 1));
        },
        // 图片运动的方式,ele是要运动的元素,attr是元素的属性,target是运动的终止位置
        move(ele, attr, target) {
            // 判断传入的是dom对象还是类名
            if (typeof ele == 'string') {
                ele = document.querySelector(ele);
            }
            // 清除之前的定时器
            clearInterval(ele.timer);
            // 获取初始值
            var init = parseFloat(this.getStyle(ele, attr));
            // 给每个ele添加一个定时器
            ele.timer = setInterval(function () {
                // 定义一个运动时的速度
                var speed = (target - init) / 20;
                // 判断速度是大于0还是小于0
                if (speed > 0) {
                    speed = Math.ceil(speed);
                } else {
                    speed = Math.floor(speed);
                }
                init += speed
                if ((speed >= 0 && init >= target) || (speed <= 0 && init <= target)) {
                    init = target;
                    clearInterval(ele.timer);
                }
                ele.style[attr] = init + 'px';
            }, 10)
        },
        // 获取非行内样式
        getStyle(ele, attr) {
            // 兼容性
            if (window.getComputedStyle) {
                return window.getComputedStyle(ele, null)[attr];
            }
            return ele.currentStyle[attr];
        }
    }
}())
banner.init();