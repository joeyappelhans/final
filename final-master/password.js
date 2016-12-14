class Password{
  //The first part of the class.
  constructor(publickey,privatekey){
    this.publickey=pa;
    this.privatekey=pb;
  }
  //Instance functions below this comment.
  validPublicKey(){
    if(this.publickey.length>=8 && this.publickey.length<=25){
      return true
    }
    else{
      return false
    }
  }
validPrivatekey(){
  if(this.privatekey.chaAt([4]&&[9]=="x")){
    return true
  }
  else{
    return false
  }
}
  //Static function below this comment.
  makePrivatekey(){

  }
}
