var doc = document.getElementById("root");

let createElement = function(node,parent){
    if(!node.tag){
        throw new Error("No Tag is provided");
    }
    let ele = document.createElement(node.tag);

    if(typeof node.children == 'string'){
        let text = document.createTextNode(node.children);
        ele.appendChild(text);
    }
    parent.appendChild(ele);
}
createElement({
    tag:"div",
    id: "main",
    children : "HEllo Budy !!!"
},doc);
