function make_list() {
	var list_item = prompt("Please enter your item");
    var node = document.createElement("li");
    var textnode = document.createTextNode(list_item);
    node.className = "ui-state-default";
    node.appendChild(textnode);
    document.getElementById("sortable").appendChild(node);
    node.addEventListener("click", function() {
         this.innerHTML = prompt("Change Your Text");
 });
         node.addEventListener('contextmenu',function(event){
        
                this.remove(this);
                event.preventDefault();
                return false;
                
        },false);
        
        
    };

function delete_function() {
    var list = document.getElementById("sortable");
    if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
}