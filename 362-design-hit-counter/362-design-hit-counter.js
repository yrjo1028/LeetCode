
var HitCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.arr.unshift(timestamp);
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let hit = 0;
    this.arr.some(t => {
        if (timestamp - 300 >= t) return;
        hit++;
    })
    return hit;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */