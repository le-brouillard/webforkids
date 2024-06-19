function push(){
    let menu = document.getElementById("menu");
    let bar = document.getElementById('bar');
    menu.style.display = 'none';
    bar.style.display = 'block';
}
function pull(){
    let menu = document.getElementById("menu");
    let bar = document.getElementById('bar');
    menu.style.display = 'block';
    bar.style.display = 'none';
}

let id = window.localStorage.getItem('ID');
if(id){
    document.getElementById('greetings').innerHTML = id+'님,<br>반갑습니다!';
} else{
    document.getElementById('greetings').innerHTML = '로그인을 해주세요.';
}



document.getElementById('maker').addEventListener('mouseover', function (){document.getElementById('maker').innerHTML = '김누리';});
document.getElementById('maker').addEventListener('mouseout', function (){document.getElementById('maker').innerHTML = '제작자';});
