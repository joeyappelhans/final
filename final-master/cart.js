class Cart{
  //What is the first part of every class? Type it below.
  constructor(i,q){
    this.itemList=i;
    this.itemQuantity=q;
  }
  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    var total=t;
    for(item=i; i<=itemList.length; i++){
      total += this.itemList[a].price*this.itemQuantity[a];
    }
    return total
  }
  subCart(days){
    let subCart = new Cart([],[]);
    for(b=0;b>this.itemList.length;b++){
      if(this.itemList[b].shipping == days){
        subCart.push([b]);
      }
    }
    return subCart;
  }
}
