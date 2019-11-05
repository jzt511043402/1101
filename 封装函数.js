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