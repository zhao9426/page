const BG = [
    {
        url: "./img/lunbo1.png",
        picurl:"./img/heart.png",
        text: "hahhaa",
        subText: "oppps"
    }, {
        url: "./img/b.jpg",
        picurl:"./img/sheart.png",
        text: "jjsdjksd",
        subText: "kdkkdkdk"
    }
];

const prev = document.getElementById('prev');
const next = document.getElementById('next');

function changeItem(item, index){
    console.log(item)
    const top = document.getElementsByClassName('top')[0];
    top.setAttribute("style", `background-image: url(${item.url})`);
    top.setAttribute('data-index', index);
    const introduction = document.getElementById('introduction-text'); 
    const subIntroduction = document.getElementById('introduction-subText');
    const into=document.getElementById("picture");
    into.setAttribute("src", item.picurl);
    into.setAttribute('data-index', index);
    introduction.textContent = item.text;
    subIntroduction.textContent = item.subText;
}

function getItem(direction) {
    const top = document.getElementsByClassName('top')[0];
    const index = top.getAttribute('data-index') || 0;
    const LEN = BG.length;
    let gIndex = 0;
    if(direction === "prev") {
        gIndex = (LEN + parseInt(index) -1)%LEN;
    } else {
        gIndex = (1 + parseInt(index)) % LEN;
    } 
    return {item: BG[gIndex], index: gIndex};
   
}

 var pre=prev.addEventListener('click', function(){
    let item = getItem("prev");
    changeItem(item.item, item.index )
});


next.addEventListener('click', function(){
    let item = getItem();
    changeItem(item.item, item.index)
});