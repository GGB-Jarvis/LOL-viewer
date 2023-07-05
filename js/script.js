/**
 * @description: 通过XMLHttpRequest同步请求获取json数据
 */
function request(url, params) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, false);
    xhr.send(params);
    return JSON.parse(xhr.responseText);
}
let data = request('../static/json/championFull.json', {});
// document.getElementById('champion').innerHTML = JSON.stringify(data.data.Akali);
let championName = 'Akali'



let champion = data.data[championName]
let skinId = 0;
// let skinNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '13', '14', '15', '32', '50', '60', '61', '68'];
var skinNum = [];
let liList = document.querySelector('.content-left ul');
let img = document.querySelector('.content-right img');

window.onload = function () {
    for (let skin of champion['skins']) {
        skinNum.push(skin.num);
        let li = document.createElement('li');
        li.innerHTML = `<div class="name" style="
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        ">${skin.name ==='default' ? champion.name+' '+champion.title : skin.name}</div>`
        liList.appendChild(li);
    }
    setInterval(()=>{
        changSkin();
    }, 2000)
}

function changSkin() {
    // document.getElementById('champion').innerHTML = skinNum
    skinId++;
    if (skinId > champion['skins'].length - 1) {
        skinId = 0;
    }
    img.remove();
    img = document.createElement('img');
    img.src = `img/splash/${championName}_${skinNum[skinId]}.jpg`;
    // img.src = `../img/splash/Akali_${skinId}.jpg`;
    img.setAttribute('style','width: var(--img-width);height: 717px;object-fit: contain;');
    document.querySelector('.content-right').appendChild(img);
    
}


