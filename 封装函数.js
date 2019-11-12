RegExp.prototype.execAll = function(str){
	let  _this = this;
	if(!_this.global){
	let s = /^\/(.+)\/$/.exec(_this +  '')[1]
	_this = new RegExp(s, 'g')
}
	let res = _this.exec(str)
	let ary = []
	
	while (res){
	          ary.push(res);
		res = _this.exec(str)
	}
	return ary	
} 
// ==========================================================
// ==========================================================
function getMax(str){
	let obj = {}
	for(let i = 0; i < str.length; i++) {
		if(obj.hasOwnproperty(str[i])){
		  obj[str[i]]+=1;
		}else{
		    obj[str[i]]=1;
}
}
return obj
}
getMax(str)

// ============================================================
// ============================================================
function render(template,data){
	let str = template.replace(/{{(\w+)}}/g,function(a,b){
	return data[b]
});
return str
}
render(template,data)

// ========================================================
// ========================================================
//var res = fn.call(ary,1,2,3,4);// fn执行  改变fn中this指向   把1，2，3，4传给fn;
// call的第一个参数 是让fn中的this指向 这个 参数
// 第二个及以后的参数 都是传给fn的实参；
// call执行结果  就是  fn 的执行结果；
Function .prototype.myCall = function (context,...arg){
	context = context || window;
	let a =Symbol()
	context[a]= this;
	let res = context[a](...arg);
	delete  context[a];
	return res
}
fn.myCall(obj,6,6,6,6)
// ========================================================
// ========================================================
Function.prototype.myApply = function myApply(context,arg) { // ... 剩余运算符
	arg = arg || [];
	context = context || window;
	let a = Symbol(); // 产生一个唯一的不会重复的值
	context[a] = this;
	let res = context[a](...arg);
	delete context[a];
	return res;
}
// ========================================================
// ========================================================
Function.prototype.myBind = function(context,...arg){
	// this --->  fn
	var _this = this;
	return function(...ary){
		// _this(...arg)
		return _this.apply(context,arg.concat(ary))
	}
}
var f2 = fn.myBind(obj,6,6,6,6);
f2(8,8,8,8)

// ========================================================
// ========================================================

function  myNew(classN,...arg){
var obj = new Object();
obj.__proto__ = classN.prototype;
var res = classN.call(obj,...arg)
return typeof res === 'object' ? res : obj;
}  
var ary = myNew(Array,10,20);// new Array(10,20)    
console.log(ary); 
//====================================================
//====================================================
function myInstanceof(temp,classN){
// temp的某一次的  __proto__  和  classN 的prototype 相等了； 那就要返回true
if(typeof temp !== 'object' && typeof temp !== 'function'){
return false;
}
var left = temp.__proto__,
right = classN.prototype;
while(left){
if(left === right){
return true
}
left = left.__proto__;
}    
return false;
}

// ===================================================
// ==================数组方法==========================


  // 实现一个判断数据类型的方法 getType()
  Object.prototype.getType = function(){
	var str = this.constructor.toString();
	str = str.slice(9,str.indexOf('('))
	return str.toLowerCase();
	
}

''.getType(); // string
(1).getType(); // number
[].getType(); // array

// myPop  myPush 返回值是改变后的原有数组
var ary = [1,2,3,4,5]
Array.prototype.myPop = function () {
	this.length--;
	return this;
}
Array.prototype.myPush =function(...ary){
	var l=ary.length;
	for(var i =0;i<l;i++){
		this[this.length]=ary[i]
	}
	return this
}
ary.myPop().myPush(6,6,6).myPop().myPush(4,5)
// arr[arr.length] = 12

// myReverse 等同于  reverse
Array.prototype.myReverse = function () {
	// 0       length-1-0
	// 1       length-1-1
	// 2       length-1-2
	// ...
	for(var i = 0 ; i < this.length/2;i++){
		var temp = this[i];
		this[i] = this[this.length-1-i];
		this[this.length-1-i] = temp;
	}
	return this;
}

Array.prototype.myUnique = function(){
	var arr = [...(new Set(this))]
	this.length = 0;
	this.push(...arr);
	return this;
	for(var i=0; i<arr.length; i++){
		this.push(arr[i])
	}


	var obj = {};
	for(var i = 0; i < this.length; i++){
		var temp = this[i];
		if(obj.hasOwnProperty(temp)){
			// 思考： 把i这一项跟最后一项交换位置 然后删除最后一项；
			this.splice(i,1);
			i--;
		}else{
			obj[temp] = temp;
		}
	}
	return this;

	// indexOf  lastIndexOf 获取的值一样 这就是不重复的

}