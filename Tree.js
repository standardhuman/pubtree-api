class Tree {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  addChild(value){
    const child = new Tree(value);
    this.children.push(child);
  }

  contains(target){
    //contains is a recursive function

    if ( this.value === target){
      return true;
    }

    for (let i = 0; i < this.children.length; i++){
      const child = this.children[i];
      if (child.contains(target)){
        return true;
      }
    }

    return false;
  }

  findNode(target){
    if (this.value === target){
      return this;
    }

    for(let i = 0; i < this.children.length; i++){
      const child = this.children[i];
      if (child.contains(target)){
        return child.findNode(target);
      }
    }

    return false;

  }

}

module.exports = Tree;