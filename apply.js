var tree = {
	key:"vvv",
	value:"",
	setKey:function(key){
		this.key = key;
	},
	setValue:function(value){
		this.value = value;
	},
	set:function(key,value){
		this.key = key;
		this.value = value;
	},
	aaa:function(){
		alert(this.key);
	}
}

var bTree = {
	kxxey:"kkk",
	/*aaa:function(tree){
		tree.aaa.apply(this)
	}*/
}

//bTree.aaa(bTree);
//tree.aaa();
tree.aaa.apply(bTree);
//tree.setValue("xxx");