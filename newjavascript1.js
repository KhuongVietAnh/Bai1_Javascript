var node;

var textNode;
//
var delLi = 1;
//funtion create tag button
function createButton() {
    var button = document.createElement("BUTTON");
    textNode = document.createTextNode("X");
    button.appendChild(textNode);
    button.classList.add("del-js");
    button.setAttribute("onClick", "delParent()");
    button.setAttribute("value", delLi);
    return button;
}
;
//Del tag
function delParent(e) {
    /*put id of tag Li= value button
     Get value button <=> get id want to del*/
    e = e || window.event;
    e = e.target || e.srcElement;
    var items = document.getElementById(e.value);
    items.parentNode.removeChild(items);
}
;
/*funtion create tag Li 
 *  params : tag need add child
 *  params : input add
 * */
function CreateLi(list, input) {
    node = document.createElement("LI");
    textNode = document.createTextNode(input);
    node.appendChild(textNode);
    node.appendChild(createButton());
    node.classList.add("list__items_js");
    //  node.setAttribute("onClick", "delParent()");
    node.setAttribute("id", delLi);
    list.appendChild(node);
}
;
/*funtion check  input exis
 * params: lenght of list
 * params: value new input
 * params: list old input
 * */
function checkExist(listOldIems, count, newinPut) {
    for (var i = 0; i < count; i++)
    {
        var a = listOldIems[i];//lấy Li theo mang
        var b = a.childNodes[0];//lấy thằng đầu tiền luôn luôn
        var z = b.nodeValue;
        if (z === newinPut)
            return 1;
    }
    return 0;
}
//funtion create tag
function CreateTag() {
    var input = document.getElementById("input").value;
    var list = document.getElementById("list-js");
    if (input.trim().length <= 0)
    {
        alert("Input is empty. Please add input.");
    } else if (input.trim().length > 20)
    {
        alert("Input is too long, input < 20");
    } else {
        var listItems = document.getElementsByClassName("list__items_js");
        if (listItems.length <= 0)
            CreateLi(list, input);
        else {
            if (checkExist(listItems, listItems.length, input) === 0) {
                CreateLi(list, input);
            } else {
                alert("Input is existed");
            }
        }
    }
}
//event when click button Add
function clickAdd() {
    CreateTag();
    document.getElementById('input').focus();
    document.getElementById('input').value = '';
    delLi++;
}
;

