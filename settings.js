let Moment = require('moment');

module.exports = function(){
    let amount = 0;
    let userDaysLeft = 0;
    let userList = [];

    function NewUser(username, amountDays){
        var newDates = Moment(new Date()).fromNow();
        let users = {
            'usernames' : username ,
            'leaveDays' : amountDays,
            'date' : newDates
        }
        if(amountDays > 0){
            userDaysLeft = amountDays;
        }


        userList.push(users);
    }



}