let data = null,
    xhr = new XMLHttpRequest();
xhr.open('get', './data.json', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        dara = JSON.parse(xhr.response);
        a(data);
        b(data);
    }
}
xhr.send()

let box = document.getElementById('box'),
    timeBtn = document.getElementById('timeBtn'),
    priceBtn = document.getElementById('priceBtn'),
    commentBtn = document.getElementById('bcommentBtnox');

function a(ary) {
    let str = '';
    ary.forEach(item => {
        // item 就是数组中的每一个对象；
        let {
            img,
            title,
            price,
            num
        } = item;
        str += `<li>
                <div class="imgBox">
                    <img src="${img}" alt="">
                </div>
                <div class="til">${title}</div>
                <div class="desc">${title}</div>
                <div class="price">￥${price}</div>
                <div class="botBox">
                    <div>选购</div>
                    <div>${num}评价</div>
                </div>
            </li>`;
    })
    box.innerHTML = str;

}

function b(data) {
    function click(ele, key) {
        ele.flag = 1;
        ele.onclick = function () {
            this.flag *= -1;
            data.sort((a, b) => {
                return (a[key] - b[key]) * this.flag
            })
            a(data)
        }
    }
    click(timeBtn, 'time')
    click(priceBtn, 'price')
    click(commentBtn, 'num')
}