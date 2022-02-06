/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    let map = [];
    for (let mail of emails) {
        let arr = mail.split("@");
        arr[0] = arr[0].replace(/\++.*/, "");
        arr[0] = arr[0].replace(/\./g, "");
        mail = arr[0] + '@' + arr[1];
        
        console.log(mail);
        if (!map.includes(mail)) map.push(mail);
    }
    
    return map.length;
};