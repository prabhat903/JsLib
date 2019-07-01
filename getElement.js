class Element {
    constructor(node,parent){
        if(!node.tag) throw new Error("No Tag is provided");
        if(!parent) throw new Error("please provide Parent");
        this.ele = document.createElement(node.tag);;
        this.node = node;
        this.parent = parent;
        this.createEle().render()
    }
    createEle(){
        let child = this.node.children
        let type = typeof child;
        switch (type){
            case 'string':
                let staticText = document.createTextNode(child);
                this.ele.appendChild(staticText);
                break;
            case 'function':
                let text = document.createTextNode(child());
                this.ele.appendChild(text);
                break;
            case 'object':
                if(Array.isArray(child)){
                    child.forEach((e)=>{
                        let subNode = new Element(e,this.ele);
                        // subNode.render()
                    })
                }
        }
        return this;
    }
    render(){
        this.parent.appendChild(this.ele);
        return this;
    }
    reRender(){
        this.createEle().render();
        return this;
    }
}

export default Element;
