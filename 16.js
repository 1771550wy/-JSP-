
function functions(flag) {
   if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }
    return getValue();
}


/* else中的语句相当于将if中的function重写，因此无论flag为何值，返回的方法始终为重写后的方法。将方法赋值给一个变量，方法就不会被重写 */
/* 将方法赋值给一个变量 */
function functions(flag) {
    var getValue = null;
    if (flag) {
        getValue = function () { return 'a'; }
    } else {
        getValue = function () { return 'b'; }
    }
    return getValue();
}

 /* 修改为闭包形式 */
function functions(flag) {
    if (flag) {
        return (function() { return 'a'; })();
    } else {
        return (function() { return 'b'; })();
    }
}
