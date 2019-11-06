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
var res = fn.call(ary,1,2,3,4);// fn执行  改变fn中this指向   把1，2，3，4传给fn;
// call的第一个参数 是让fn中的this指向 这个 参数
// 第二个及以后的参数 都是传给fn的实参；
// call执行结果  就是  fn 的执行结果；
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