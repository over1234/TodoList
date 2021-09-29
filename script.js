var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var clear = document.getElementById('clear');
var cnt = 0;

button.onclick = function() {
    var listText = input.value;

    if (!listText || listText === "" || listText === " ") {
        window.alert("할 일은 제대로 입력해주세요.")
        return false;
    }
    addItemlist(list, listText);
}
input.onkeyup = function(event) {
    if(event.which === 13)
    {
        var listText = input.value;
        if (!listText || listText === "" || listText === " ") {
            swal("이런!", "할 일은 제대로 입력해주실래요?", "error")
            return false;
        }
        addItemlist(list, listText);
    }
}

function addItemlist(list, listText) {
    

    const listItem = document.createElement('li');
    listItem.setAttribute("id", "li" + cnt);
    listItem.innerHTML = listText;
    listItem.innerHTML += "<button class='btn_del' type='button' onclick='remove(" + cnt + ")'>X</button>";
    list.appendChild(listItem);
    input.value = "";
    input.focus();

    listItem.addEventListener("click", function () {
        listItem.style.textDecoration = "line-through";
    })
}

function remove(cnt) {
    var li = document.getElementById('li' + cnt);
    list.removeChild(li);
}

clear.onclick = function allRemove() {
    let del = document.querySelector('ul').innerHTML = '';
}