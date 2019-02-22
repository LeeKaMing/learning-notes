var reg = /\bis\b/;
var result = text.replace(reg,'IS');

'g': global 全文搜索，不添加，搜索到第一个停止
'i': ignore case 忽略大小写，默认大小写敏感
'm': multiple 多行搜索 ，检测字符串中的换行符，主要是影响字符串开始标识符^和结束标识符$的使用

## 元字符
正则中主要存在这些特殊字符：* , + , ? , $ , ^ , . , | , \ , ( , ) , { , } , [ , ]

## 字符类（字符集合）
表达式'[abc]'把字符a或b或c归为一类，表达式可以匹配这样的字符。
反向类的意思是不属于类的内容，表达式'[^abc]'表示不是字符a或b或c的内容

## 范围类
正则表达式给我们提供了范围类，我们可以使用[a-z]来连接两个字符，表示从a到z的任意字符，这是一个闭区间，包含 a 和 z 本身
```
var reg = /[0-9]/g; //这样是跟前面一样的结果，不行
var text = '2018-05-13';
var result = text.replace(reg,'Q');
console.log(result); //QQQQ-QQ-QQ

var reg = /[0-9-]/g; //只要在后面另外加一个‘-’符号就可以了
var text = '2018-05-13';
var result1 = text.replace(reg,'Q');
console.log(result1); //QQQQQQQQQQ
```
## 预定义类及边界




## 量词


## 贪婪模式
正则表达式默认是贪婪模式，即每次匹配都尽可能的匹配多的字符，直到匹配失败为止。
我们希望它只匹配3次，即尽可能少的匹配，一旦匹配成功不再继续尝试，即非贪婪模式需要怎么做呢？很简单，在量词后面加上'?'即可

## 分组
```
var reg = /(Byron){3}/g;
var text = 'ByronByronByronnn';
var result = text.replace(reg,'0');
console.log(result);		//0nn
```

## 或
利用之前的'[]'字符类（字符集合）可能只能匹配单个字符的或者关系，比如匹配a或b，你可以这样写：'[ab]'，但是如果你需要匹配的是一整个单词的或者关系呢，可能'[]'就不好使了。这时候，我们用'|'可以达到或的效果
```
//匹配单词Byron或者Casper
var reg = /Byron|Casper/g;
var text = 'ByronCasper'
var result = text.replace(reg,'X');
console.log(result);		//XX
```
```
//匹配Byr+on或Ca+sper
var reg = /Byr(on|Ca)sper/g;
var text = 'ByronsperByrCasper'
var result1 = text.replace(reg,'X');
console.log(result1);		//XX
```
## 反向引用
表达式在匹配时，表达式引擎会将小括号 "( )" 包含的表达式所匹配到的字符串记录（分组捕获）下来。在获取匹配结果的时候，小括号包含的表达式所匹配到的字符串可以单独获取。
在js中正则匹配成功的字符串可以用$1表示第一次匹配成功，$3表示第三次匹配成功的字符，以此类推至$99）
```
var reg = /(\d{4})-(\d{2})-(\d{2})/g;
var text = '2015-12-25'
var result = text.replace(reg,'$2/$3/$1');
console.log(result);		//  12/25/2015
```
## 忽略分组
不希望捕获某些分组，只需要在分组内加上'?:'就可以了。
```
var reg = /(?:Byron)(\d{4})-(\d{2})-(\d{2})/g;
var text = 'Byron2016-12-05'
var result = text.replace(reg,'$2/$3/$1');
console.log(result);			//  12/05/2016
```
## 前瞻


## 对象属性
golbal: 是否全文搜索，默认false
ignoreCase: 是否大小写敏感，默认false
multiline: 多行搜索，默认false
lastIndex: 是当前表达式匹配内容的最后一个字符的下一个位置
source: 正则表达式的文本字符串

## 正则表达式RegExp对象本身的方法
test： 检索字符串中指定的值。返回 true 或 false
exec： 检索字符串中指定的值。返回找到的值，并确定其位置
compile： 编译正则表达式（不常用）

## 支持正则表达式的 String 对象的方法
search： 检索与正则表达式相匹配的值
match： 找到一个或多个正则表达式的匹配。
replace： 替换与正则表达式匹配的子串。
split： 把字符串分割为字符串数组。

























