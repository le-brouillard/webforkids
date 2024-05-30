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
document.getElementById('greetings').innerHTML = id+'님,<br>반갑습니다!';