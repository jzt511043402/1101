
let box = document.getElementById('box'),
       uls = document.getElementsByClassName('list'),
       is = document.getElementsByClassName('btn'),
       is2 = document.getElementsByClassName('btn1'),
       ems = document.querySelectorAll('.list li em'),
       lis = document.querySelectorAll('.list li'),
       str1 = document.querySelectorAll('.lft'),
       str = document.querySelectorAll('.reg');
//以上是获取元素

for (let i = 0; i < is.length; i++) {
       let str2 = parseFloat(str[i].innerText)
       let str3 = parseFloat(str1[i].innerText)

       is[i].onclick = function () {
              ems[i].values = ems[i].innerText--
}
}
for (let i = 0; i < is2.length; i++) {
       is2[i].onclick = function () {
       let str2 = parseFloat(str[i].innerText)
       let str3 = parseFloat(str1[i].innerText)
       console.log(str3);
       console.log(str2);
       
       ems[i].values = 1 * ems[i].innerText++
       
       str[i].innerText =ems[i].innerText* str3 
       }
}



