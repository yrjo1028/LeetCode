/**
 * @param {number} target
 * @return {number}
 */
let min = Number.MAX_SAFE_INTEGER;
var racecar = function(target) {
    min = Number.MAX_SAFE_INTEGER;
    return drive(target, 0, 1, 0);
};

var drive = function(target, position, speed, step) {
    if (target == position) {
        if (min > step) {
            min = step;
        }
        return step;
    }
    
    if (step > min) {
        return min;
    }
    
    step++;
    let result = 0;
    if (speed > 0) {
        if (target > position) {
            result = drive(target, position + speed, speed*2, step);
            if (speed > target - position) {
                let stop1 = drive(target, position, 1, step + 1);
                let stop2 = drive(target, position-1, 1, step + 2);
                let stop3 = drive(target, position-3, 1, step + 3);
                let stop4 = drive(target, position-7, 1, step + 4);
                let stop5 = drive(target, position-15, 1, step + 5);
                result = Math.min(result, stop1, stop2, stop3, stop4, stop5);
            }
        } else {
            result = drive(target, position, -1, step);
        }
    } else {
        if (position > target) {
            result = drive(target, position + speed, speed*2, step);
            if (target - position > speed) {
                let stop1 = drive(target, position, -1, step + 1);
                let stop2 = drive(target, position+1, -1, step + 2);
                let stop3 = drive(target, position+3, -1, step + 3);
                let stop4 = drive(target, position+7, -1, step + 4);
                let stop5 = drive(target, position+15, -1, step + 5);
                result = Math.min(result, stop1, stop2, stop3, stop4, stop5);
            }
        } else {
            result = drive(target, position, 1, step);
        }
    }
    return result;
}