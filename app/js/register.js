// this.$usernameInp.oninput = function(){
//     var reg = /^\w{6,13}$/;
//     if(reg.test(_this.$usernameInp.value)){
//         console.log(111);
//     }
// }
// this.$passwordInp.oninput = function(){
//     var reg = /^\w{6,13}$/;
//     if(reg.test(_this.$passwordInp.value)){
//         console.log(111);
//     }
// }

var register = (function () {

	return {
		init: function () {
			// 获取注册按钮
			this.$registerBtn = document.querySelector('.registerBtn');
			// 获取地区框
			this.$country_box = document.querySelector('.country_box');
			this.$country = document.querySelector('.country');
			this.$country_add = document.querySelector('.country_add');
			// 获取手机区号框
			this.$list_panel_box = document.querySelector('.list_panel_box');
			this.$list_panel = document.querySelector('.list_panel');
			this.$country_tel = document.querySelector('.country_tel');
			this.$country_add_tel = document.querySelector('.country_add_tel');
			this.$code = document.querySelector('.code');
			// 获取地区名称
			this.$countryAll = document.getElementsByClassName('address');

			// 获取country_box里面的p标签
			this.$country_box_p = this.$country_box.querySelector('p');

			// 获取手机号码框
			this.$tel_inp = document.querySelector('.tel_inp');
			// 获取密码框
			this.$pwd_inp = document.querySelector('.pwd_inp');
			// 获取提示框
			this.$tip = document.querySelector('.tip');
			// 获取同意按钮
			this.$agree = document.querySelector('.agree');
			// 获取搜索框
			this.$search_inp1 = document.querySelector('.search_inp1');
			this.$search_inp2 = document.querySelector('.search_inp2');
			this.event();
		},
		event: function () {
			var _this = this;
			var count_add = 0;
			var count_tel = 0;
			var count = 0;

			// 检测手机号码
			var reg = /^1[35789]\d{9}$/;
			this.$tel_inp.oninput = function () {
				if (_this.$tel_inp.value.trim() != '' && reg.test(_this.$tel_inp.value.trim())) {
					_this.$tel_inp.style.border = '1px solid #e0e0e0';
					_this.$tip.style.display = 'none';
				} else {
					_this.$tel_inp.style.border = '1px solid red';
					_this.$tip.style.display = 'block';
					_this.$tip.innerHTML = '请输入正确的手机号码';
				}
			}
			this.$tel_inp.onblur = function () {
				if (_this.$tel_inp != '') {
					_this.$tel_inp.style.border = '1px solid #e0e0e0';
				} else {
					_this.$tip.style.display = 'block';
					_this.$tip.innerHTML = '请输入正确的手机号码';

				}
			}
			
			this.$country_box.onclick = function () {
				if (count_add % 2 == 0) {
					_this.$country_add.style.display = 'block';
				} else {
					_this.$country_add.style.display = 'none';
				}
				count_add++;
				if (count_add > 3) {
					count_add = 0;
				}
			}
			this.$country_add.onclick = function (e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if (target.nodeName === 'LI') {
					_this.$country_box_p.innerHTML = target.innerText;
					_this.$country_add.style.display = 'none';
					if (count_add % 2 == 0) {
						_this.$country_add.style.display = 'block';
					} else {
						_this.$country_add.style.display = 'none';
					}
					count_add++;
					if (count_add > 3) {
						count_add = 0;
					}
				}
			}
			this.$list_panel_box.onclick = function () {
				if (count_tel % 2 == 0) {
					_this.$country_tel.style.display = 'block';
				} else {
					_this.$country_tel.style.display = 'none';
				}
				count_tel++;
				if (count_tel > 3) {
					count_tel = 0;
				}
			}
			this.$country_add_tel.onclick = function (e) {
				var str = '';
				var start;
				e = e || window.event;
				var target = e.target || e.srcElement;
				if (target.nodeName === 'LI') {
					str = target.innerText;
					start = str.indexOf('+');
					str = str.slice(start);
					_this.$code.innerHTML = str;
					_this.$country_tel.style.display = 'none';
					if (count_tel % 2 == 0) {
						_this.$country_tel.style.display = 'block';
					} else {
						_this.$country_tel.style.display = 'none';
					}
					count_tel++;
					if (count_tel > 3) {
						count_tel = 0;
					}
				}
			}
			

			// 点击勾选
			this.$agree.onclick = function () {
				if (count % 2 == 0) {
					_this.$agree.innerHTML = '';
				} else {
					_this.$agree.innerHTML = '<img src="img/dui.png" alt="">';
				}
				count++;
				if (count > 3) {
					count = 0;
				}

			}

			// 提交按钮
			this.$registerBtn.onclick = function () {
				if (_this.$tel_inp.value.trim() !== '' && _this.$pwd_inp.value.trim() !== '') {

					// 发送ajax，验证用户名和密码
					var params = {
						method: 'post',
						data: {
							username: _this.$tel_inp.value,
							password: _this.$pwd_inp.value
						},
						success: function (data) {
							data = JSON.parse(data);
							_this.registerSuccess(data);
						}
					}
					sendAjax('http://localhost:8080/xiaomi/php/register.php', params);
					this.$tel_inp.onchange = function () {
						var params = {
							data: {
								username: _this.$tel_inp.value
							},
							success: function (data) {
								data = JSON.parse(data);
								_this.checkName(data);
							}
						}
						sendAjax('http://localhost:8080/xiaomi/php/check_username.php', params);
					}
				}
				else {
					alert('请输入手机号码及密码');
				}
			}

		},
		checkName: function (data) {
			if (data.code == 200) {
				// 用户名称不存在
			} else {
				// 用户名称存在
				alert(data.msg);
			}
		},
		registerSuccess: function (data) {
			if (data.code == 200) {
				location.href = 'login.html';
			} else {
				alert(data.msg);
			}
		}
	}

}())