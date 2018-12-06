const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //alert('New TODO button clicked!')

  let item = prompt("Enter an Item");

  let listitem = document.createElement("li");
  let text = document.createTextNode(item);
  listitem.appendChild(text);
  listitem.setAttribute("class", classNames.TODO_ITEM);

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
  listitem.appendChild(checkbox);

  list.appendChild(listitem);

  /*logic for counting checked items and total items*/
  let numberofitems = document.getElementsByTagName('li');
  itemCountSpan.textContent = numberofitems.length;

  //checking if at this moment if there is any checked item
  checkunchecked();

  let checkboxes = document.getElementsByTagName("input");

  var numberofcheckeditems = 0;

  for(let i = 0; i < checkboxes.length; i++)
  {
      if(checkboxes[i].checked == true)
      {
          numberofcheckeditems += 1;
      }

      checkboxes[i].addEventListener("change", function (e)
        {
            let target = e.target;
            if(target.checked == true)
            {
                numberofcheckeditems += 1;
                let numunchecked = numberofitems.length - numberofcheckeditems;
                uncheckedCountSpan.textContent = numunchecked;

            }
            else
            {
                //minus one from unchecked
                numberofcheckeditems -= 1;
                let numunchecked = numberofitems.length - numberofcheckeditems;
                uncheckedCountSpan.textContent = numunchecked;
            }
        }, false);
  }
}


function checkunchecked()
{
    let checkb = document.getElementsByTagName("input");
    let count = 0;
    let unchk = 0;
    if(checkb.length > 0)
    {
        for (let i = 0; i < checkb.length; i++)
        {
            if(checkb[i].checked == true)
            {
                count += 1;

            }
        }
        console.log(count);
        unchk = checkb.length - count;
        uncheckedCountSpan.textContent = unchk ;
    }
}
