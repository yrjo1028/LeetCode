/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    let map = [];
    let count = 0;
    
    for (let mail of emails) {
        let arr = mail.split('@');
        let domain = arr[1];
        let name = replace_name(arr[0]);
        if (!map[domain]) map[domain] = [];
        if (!map[domain].includes(name)) {
            map[domain].push(name)
            count++;
        };
    }
    
    return count;
};

var replace_name = function (name) {
    let arr = name.split("+");
    return arr[0].replace(/\./gi, "");
}