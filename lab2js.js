var list = document.querySelector('ul');
var todos;

function toLocal(){
  todos = list.innerHTML;
  localStorage.setItem('todos',todos);
}

if (localStorage.getItem('todos')){
  list.innerHTML = localStorage.getItem('todos');
}

// Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    toLocal();
  }
}

// Добавить "checked" символ при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    toLocal();
 }
}, false);

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("my").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  // Добавляем символы закрытия только к новому элементу списка
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Навешиваем обработчик события на символы закрытия только для нового элемента списка
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    toLocal();
  }

  document.getElementById("my").value = "";
  toLocal();
}

