// var h = document.createElement('h1')
// var myValue =  document.createTextNode('Hello World')

// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h)

// var val = 5
// while(val>0){
//   console.log(val);
//   val=val-1;
// }

var ul = document.getElementById('list');
var li;


















var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);







function addItem(){
  var input= document.getElementById('input');
  var item = input.value;
  ul =  document.getElementById('list');
  var textNode= document.createTextNode(item);

  if(item === ''){
    return false;
    //add a p tag and assign a value of "Enter your todo"
    
    // const noElement = document.createElement('p')
    // noElement.textContent = 'No element entered'
    // document.querySelector('div').appendChild(noElement)

  }else{
    //create li
    li = document.createElement('li');
    //create checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','check');
    //create label
    var label =  document.createElement('label');
    // label.setAttribute('for','item') optional

    //add these elements on web page
    // ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = 'visual';
    }, 5);
    input.value='';
  }
}

function removeItem(){
  li = ul.children
  for (let index = 0; index < li.length; index++) {
    const element = li[index];
    console.log(element);
    while(li[index] && li[index].children[0].checked){
      ul.removeChild(li[index])
    }
    
  }
}