/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.ListNode = function (key, value, prev, next) {
        this.key = (key===undefined ? null : key)
        this.value = (value===undefined ? null : value)
        this.prev = (prev===undefined ? null : prev)
        this.next = (next===undefined ? null : next)
    }
    
    this.capacity = capacity;
    this.map = {};
    this.size = 0;
    this.head = new this.ListNode();
    this.tail = new this.ListNode();
    
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.addNode = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    
    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype.removeNode = function(node) {
    let prev = node.prev;
    let next = node.next;
    
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.popTail = function(node) {
    let res = this.tail.prev;
    this.removeNode(res);
    return res;
}

LRUCache.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.addNode(node);
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map[key];
    if (node == null) return -1;
    
    this.moveToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map[key];
    if (node == null) {
        node = new this.ListNode(key, value);
        this.map[key] = node;
        this.addNode(node);
        
        this.size++;
        
        if (this.size > this.capacity) {
            let tail = this.popTail();
            delete this.map[tail.key];
            this.size--;
        }
    } else {
        node.value = value;
        this.moveToHead(node);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */