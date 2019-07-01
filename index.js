import Element from "./getElement";
var root = document.getElementById("root");
var count  = 0;
let init = new Element ({
    tag:"div",
    id: "main",
    children : [
        {
            tag:"h1",
            children:"hello Booss"
        },
        {
            tag:"p",
            children:"I an sub child"
        }
    ]
},root);
