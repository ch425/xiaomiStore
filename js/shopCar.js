var shopCar = (function () {
    return {
        init() {
            this.$topbar_info = document.querySelector('.topbar-info');
            this.insertData();
            this.$carList = document.querySelector('.carlist');
            this.$shopshow = document.getElementsByClassName('shopshow');
            this.$totalbox = document.querySelectorAll('.totalbox');
            // 获取增加和减少商品数量的按钮
            this.$subtract = document.querySelectorAll('.subtract');
            this.$add = document.querySelectorAll('.add');
            // 获取商品数量
            this.$num = document.querySelectorAll('.num');
            // 获取全选按钮
            this.$chooseAll = document.getElementById("all");
            // 获取选择按钮
            this.$choose = document.querySelectorAll(".choosebox");
            // 获取删除商品信息的按钮
            this.$cancel = document.querySelector('.cancel');
            // 获取蒙版
            this.$mb = document.querySelector('.mb');
            // 获取提示是否删除商品提示框
            this.$car_tip = document.querySelector('.car_tip');
            // 获取是否删除商品的按钮
            this.$no = document.querySelector('.no');
            this.$yes = document.querySelector('.yes');
            // 获取是否删除商品提示框的按钮
            this.$car_tip_close = document.querySelector('.car_tip_close');
            // 获取结算按钮
            this.$primary_btn = document.querySelector('.primary_btn');
            this.event();
            this.countShop();
            this.Count();
            this.Sum();
            this.checkCar();
            this.checkUser();
        },
        event() {
            var _this = this;
            this.$topbar_info.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.innerHTML == "注销") {
                    localStorage.removeItem("userid");
                    _this.checkUser();
                }
            }
            this.$carList.parentNode.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.className == 'cancel') {
                    $('.mb').css({
                        display: 'block'
                    });
                    $('.car_tip').css({
                        display: 'block',
                        top: '40%',
                        opacity: 1,
                        transition: 'all 4s'
                    });
                    _this.$no.onclick = function () {
                        _this.close();
                    }
                    _this.$yes.onclick = function () {
                        // 删除数据
                        target.parentNode.parentNode.parentNode.remove();
                        for (var i = 0; i < JSON.parse(localStorage.shopList).length; i++) {
                            if (JSON.parse(localStorage.shopList)[i].name == target.parentNode.parentNode.children[2].children[0].innerHTML) {
                                var arr = [];
                                console.log('数据库:' + JSON.parse(localStorage.shopList)[i].name, '点击数据:' + target.parentNode.parentNode.children[2].children[0].innerHTML);
                                arr = JSON.parse(localStorage.shopList);
                                arr.splice(i, 1);
                                localStorage.shopList = JSON.stringify(arr);
                                break;
                            }
                        }
                        _this.close();
                    }
                    _this.checkCar();
                } else if (target.className == 'add') {
                    var sum = 0;
                    target.parentNode.children[1].value++;
                    target.parentNode.parentNode.parentNode.children[5].children[0].innerHTML = Number(target.parentNode.children[1].value) * parseInt(target.parentNode.parentNode.parentNode.children[3].children[0].innerHTML);
                    _this.Sum();
                    _this.countShop();
                    _this.Count();
                } else if (target.className == 'subtract') {
                    var sum = 0;
                    target.parentNode.children[1].value--;
                    if (target.parentNode.children[1].value <= 1) {
                        target.parentNode.children[1].value = 1;
                    }
                    target.parentNode.parentNode.parentNode.children[5].children[0].innerHTML = Number(target.parentNode.children[1].value) * parseInt(target.parentNode.parentNode.parentNode.children[3].children[0].innerHTML);
                    _this.Sum();
                    _this.countShop();
                    _this.Count();
                }

            }
            this.$chooseAll.onclick = function () {
                if (_this.$chooseAll.checked) {
                    for (var i = 0; i < _this.$choose.length; i++) {
                        _this.$choose[i].checked = true;
                        _this.$choose[i].style.color = "#fff";
                        _this.$choose[i].style.background = "#ff6700";
                    }
                } else {
                    for (var i = 0; i < _this.$choose.length; i++) {
                        _this.$choose[i].checked = false;
                    }
                }
                for (var i = 0; i < _this.$choose.length; i++) {
                    _this.$choose[i].onclick = function () {
                        var stop = true;
                        for (var k = 0; k < _this.$choose.length; k++) {
                            if (!_this.$choose[k].checked) {
                                stop = false;
                                break;
                            }
                        }
                        if (stop) {
                            _this.$chooseAll.checked = true;
                        } else {
                            _this.$chooseAll.checked = false;
                        }
                        
                        $('.shopNum').text(_this.countShop());
                    }
                }
                $('.shopNum').text(_this.countShop());
            }
            // for(var k = 0; k < _this.$choose.length; k ++){
            //     if(_this.$choose[i].checked == true){
            //         $('.shopNum').text(_this.countShop());
            //         break;
            //     }
                    
            // }

            this.$primary_btn.onclick = function () {
                alert('购买成功');
                $('.carShowPanel').css('display', 'block');
                $('.carlist').css('display', 'none');
                localStorage.setItem('shopList','[]');
            }
            this.$car_tip_close.onclick = function () {
                _this.close();
            }
        },
        // 检测用户是否登录
        checkUser() {
            if (localStorage.userid == undefined) {
                this.$topbar_info.innerHTML =
                    `<li>
                                    <a href="../login.html">登录</a>
                                </li>
                                <span class="cutline">|</span>
                                <li>
                                    <a href="../register.html">注册</a>
                                </li>`;
                $('.logo_tip').text('登录后将显示您之前加入的商品');
            } else {
                this.$topbar_info.innerHTML =
                    `<li style="line-height:40px;color:#333">欢迎<b class="userid" style="color:#ec5f00;cursor:pointer">${localStorage.userid}</b>来到小米商城</li>
                    <span class="cutline">|</span>
                                              <li class="cancel"><a style="cursor:pointer">注销</a></li>`;
                $('.logo_tip').text('');
                $('.loginBtn').css('display', 'none');
            }
        },
        // 关闭删除提示框
        close() {
            this.$car_tip.style.display = 'none';
            this.$mb.style.display = 'none';
            location.reload();
        },
        // 渲染数据
        insertData() {
            var arr = [];
            for (var i = 0; i < JSON.parse(localStorage.shopList).length; i++) {
                if (localStorage.userid == JSON.parse(localStorage.shopList)[i].userName) {
                    arr.push(`<div class="shopshow">
                    <div class="shop_info">
                    <div class="chooseBox"><input type="checkbox" class="choosebox"></div>
                    <div class="imgBox">
                        <img src="../img/${JSON.parse(localStorage.shopList)[i].img}" alt="">
                    </div>
                    <div class="nameBox">
                        <h3 class="namebox">${JSON.parse(localStorage.shopList)[i].name}</h3>
                    </div>
                    <div class="propriceBox">
                        <span class="propricebox">${JSON.parse(localStorage.shopList)[i].price}</span>
                    </div>
                    <div class="numberBox">
                        <div class="numberbox">
                            <a href="javascript:void(0)" class="subtract">&#8211;</a>
                            <input type="text" class="num" value="${JSON.parse(localStorage.shopList)[i].number}" data-num="1" data-buylimit="1" autocomplete="off">
                            <a href="javascript:void(0)" class="add">&#43;</a>
                        </div>
                    </div>
                    <div class="totalBox">
                        <span class="totalbox">${parseInt(JSON.parse(localStorage.shopList)[i].price) * JSON.parse(localStorage.shopList)[i].number}</span>元
                    </div>
                    <div class="operationBox">
                        <span class="cancel">×</span>
                    </div>
                </div>
                </div>`);
                }
            }
            arr = arr.join('');
            $('.cartitle').after(arr);
        },
        // 统计购买了商品的数量
        Count() {
            var count = 0;
            for (var i = 0; i < this.$num.length; i++) {
                count += parseInt(this.$num[i].value);
            }
            document.querySelector('.chooseNum').innerHTML = count;
        },
        //    统计购物车商品的种类
        countShop() {
            var sum = 0;
            for (var i = 0; i < this.$choose.length; i++) {
                if (this.$choose[i].checked == true) {
                    sum++;
                }
            }
            return sum;
        },
        // 计算总价
        Sum() {
            sum = 0;
            for (var i = 0; i < this.$totalbox.length; i++) {
                sum += parseInt(this.$totalbox[i].innerHTML);
            }
            document.querySelector('.priceTotal').innerHTML = sum;
        },
        //判断购物车是否为空
        checkCar() {
            if (JSON.parse(localStorage.shopList).length == 0) {
                $('.carlist').css('display', 'none');
                $('.carShowPanel').css('display', 'block');
            }
        }
    }
}())