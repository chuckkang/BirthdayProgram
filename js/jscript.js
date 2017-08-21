
// if > 30 print a sad message
// if less than 30 print an excited message
// if less than 5 Scream

var totaldays = 60;
var message ='';

function daysleft(days){

    while (days >=0)
    {
        message = days + ' days until my birthday. '
            if (days > 30){
                message =   message + 'Such a long time.';
            }
            else if (days <= 30 && days >5)
            {
                message = message + ' We\'re getting closer.';
            }
            else if (days <= 5 && days > 0)
            {
                message = message + ' Almost there';
            }
            else if (days == 0)
            {
                message = "WHOAAAAAAAAAAAA HOOOOOOOOOOOOOOOOOOOOOOOOOOOO!";
            }
            console.log(message);
            days--;
    }
    
}

daysleft(totaldays);