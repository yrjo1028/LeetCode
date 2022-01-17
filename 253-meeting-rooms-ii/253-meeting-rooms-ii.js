/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    
    let i_arr = sortIntervals(intervals);
    
    let room_arr = [];
    i_arr.forEach(cur => {
        let need_room = true;
        let idx = room_arr.findIndex(time => cur[0] >= time);
        if (idx !== -1) {
            room_arr[idx] = cur[1];
        } else {
            room_arr.push(cur[1]);
        }
    });
    
    return room_arr.length;
    
};

var sortIntervals = function (arr) {
    
    let item = arr.pop();
    let s_arr = arr.filter(cur => item[0] >= cur[0]);
    let e_arr = arr.filter(cur => cur[0] > item[0]);
    
    if (s_arr.length > 1) {
        s_arr = sortIntervals(s_arr);
    }
    
    if (e_arr.length > 1) {
        e_arr = sortIntervals(e_arr);
    }
    
    s_arr.push(item);
    return s_arr.concat(e_arr);
}