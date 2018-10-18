
  var sendAjax = function (url, options) {
    //->参数初始化
    var _default = {
        method: "get",
        async: true,
        data: null,
        success: null
    };
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            _default[key] = options[key];
        }
    }
    //->发送请求
    var xhr = new XMLHttpRequest();
    if (_default["method"].toLowerCase() === "get") {
        var suffix = url.indexOf("?") > -1 ? "&" : "?";
        url += suffix + "_=" + Date.now();
      //   拼接url
      for(var i in _default["data"]) {
          url += '&' + i + '=' + _default.data[i];
      }
      _default.data = null;
    } else {
      _default.data = JSON.stringify(_default.data);
    }

    xhr.open(_default["method"], url, _default["async"]);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            var data = xhr.responseText;
            _default["success"] && _default["success"](data);
        }
    };
    xhr.send(_default["data"]);
};