
/* parseInt(string, radix);
   当参数radix的值为0，或没有设置该参数时，parseInt()会根据 string 来判断数字的基数。
   如果string以"0x"开头，parseInt()会把string的其余部分解析为十六进制的整数。
   如果string以0开头，那么ECMAScript3允许parseInt()的一个实现把其后的字符解析为八进制
   或十六进制的数字。如果string以1~9的数字开头，parseInt()将把它解析为十进制的整数 */
/* 根据示例的意思，我们可以看出它要求我们将所有输入转换成十进制输出 */
function parse2Int(num) {
    return parseInt(num, 10);
}
