var login = (function () {

	return {
		init: function () {
			// 获取提交按钮
			this.$loginBtn = document.querySelector('.loginBtn');
			// 获取用户名输入框
			this.$usernameInp = document.querySelector('.user-inp');
			// 获取密码输入框
			this.$passwordInp = document.querySelector('.pwd-inp');
			// 获取验证码
			this.$_code = document.querySelector('._code');
			// 获取验证码输入框
			this.$code = document.querySelector('.code');
			// 获取提示框
			this.$usernameTip = document.querySelector('.username-tip');
			this.$passwordTip = document.querySelector('.password-tip');
			this.$tip = document.querySelector('.tip');

			this.event();
			this.getCode();
		},
		event: function () {
			var _this = this;
			// 提交按钮
			this.$loginBtn.onclick = function () {
				if (_this.$_code.innerHTML == _this.$code.value.toString()) {
					// 发送ajax，验证用户名和密码
					var params = {
						method: 'post',
						data: {
							username: _this.$usernameInp.value,
							password: _this.$passwordInp.value
						},
						success: function (data) {
							data = JSON.parse(data);
							_this.loginSuccess(data);
						}
					}
					sendAjax('php/login.php', params);
					localStorage.userid = params.data.username;
				}

				_this.getCode();

			}
			this.$_code.onclick = function () {
				_this.getCode();
			}
			$(".id").click( function () {  
				$('.Code').css('color','#333');
				$(this).css('color','red');
				$('.form').css("display",'block');
				$('.Codepanel').css("display",'none');
			});
			$(".Code").click( function () {  
				$('.id').css('color','#333');
				$(this).css('color','red');
				$('.form').css("display",'none');
				$('.Codepanel').css("display",'block');
			});

		},
		loginSuccess: function (data) {
			if (data.code == 200) {
				document.cookie = "user-id=" + data.data.id;
				document.cookie = "token=" + data.data.token;
				localStorage.userImg = data.data.ataver;
				location.href = 'index.html';
				this.$tip.style.display = "none";
			} else {
				// alert(data.msg);
				this.$tip.style.display = 'block';
				// if(this.$usernameInp.value == '' || this.$passwordInp){
				// 	this.$tip.innerHTML = '';
				// 	this.$tip.innerHTML = '用户名或密码不能为空';
				// }
				if (this.$_code.innerHTML != this.$code.value.toString()) {
					// alert('验证码输入错误');
					this.getCode();
				}
			}
		},
		getCode() {
			var str = '';
			for (var i = 0; i < 4; i++) {
				str += Math.floor(Math.random() * 10);
			}
			this.$_code.innerHTML = str;
		}
	}

}())