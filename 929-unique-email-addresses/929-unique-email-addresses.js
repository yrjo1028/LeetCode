/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    let map = [];
    for (let mail of emails) {
        let domain = mail.substring(mail.indexOf("@"));
        let name = mail.substring(0, mail.indexOf("@")).replace(/\./gi, "");
        if (name.indexOf("+") > 0) {
            name = name.substring(0, name.indexOf("+"));
        }
        if (!map.includes(name + domain)) map.push(name + domain);
    }
    
    return map.length;
};