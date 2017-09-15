const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);
    	if(this.length){
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	}
    	else{
    		this._head = node;
    		this._tail = node;
    	}
    	this.length++;
    	return this;
    }

    head() {
    	if(this._head){
    	return this._head.data;
    }
    else return this._head;
    }

    tail() {
    	if(this._tail){
    	return this._tail.data;
    }
    else return this._tail;
    }

    at(index) {
    	var i = 0;
    	var head = this._head;
		while(i < index){
	head = head.next;
	i++;
		}	
		return head.data;
    }

    insertAt(index, data) {
    	let p = new Node(data),
    	 	head = this._head,
  			i = 0;
  			if(index < 0 || index > this.length-1) return -1;
  			while(i < index){
  				head = head.next;
  				i++;
  			}

  			if(index === 0){
  				p.next = this._head;
  				this._head.prev = p;
  				this._head = p;
  				this.length++;
  			}
  			/*
  			else if(index === this.length - 1){
  				this._tail.next = p;
  				p.prev = this._tail;
  				p.next = null;
  				this._tail = p;
  				console.log(this._tail);
  				this.length++;
  			}
  			*/
  			else{
  				head.prev.next = p;
  				p.prev = head.prev;
  				head.prev = p;
  				p.next = head;
  				this.length++;
  			}
  			return this;
    }

    isEmpty() {
    	return this.length ? false: true;
    }

    clear() {

    	this._head = this._tail = null;
    	this.length = 0;
    	return this;
    }

    deleteAt(index) {
    	let head = this._head,
    		tail = this._tail,
    		p = null,
    		i = 0;
	if(index < 0 || index > this.length-1) return -1;
	if(!index){
		if(this._head.next){
			head= this._head.next;
			this._head = null;
			this._head = head;
			this._head.prev = null;
			 this.length--;
			 return this;
		}
		else{
	this._head = this._tail = null;
	 this.length--;
	 return this;
		}
	}
	if(index ===  this.length -1)
	{
		tail = this._tail.prev;
		this._tail = null;
		this._tail = tail;
		this._tail.next = null;
		this.length--;
		return this;
	}
	while(i < index){
		head = head.next;
		i++;
	}
	p = head.next;
	head.prev.next = p;
	p.prev = head.prev;
 	this.length--;
   
    return this;
    }

    reverse() {
    	let tmp = null,
    		head = this._head,
    		tail = this._tail;
    	for (var i = 0; i < this.length/2; i++) {
    		tmp = head.data;
    		head.data = tail.data;
    		tail.data = tmp;
    		head = head.next;
    		tail = tail.prev;
    	}
    	return this;
    }

    indexOf(data) {
    	var i = 0;
    	var head = this._head;
    	while(i< this.length){
    		if (head.data === data) {return i; break;}
    		i++;
    		head = head.next;
    	}
    	return -1;
    }
}

module.exports = LinkedList;
