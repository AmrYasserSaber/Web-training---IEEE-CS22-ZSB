var day= " friday ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
var day=day.replace(/ /g, "");
var day = day.charAt(0).toUpperCase() + day.slice(1);
switch(day){
//let day = "Friday";
//let day = "Saturday";
//let day = "Sunday";
// Output => "No Appointments Available"
    case "Friday":
    case "Saturday":
    case"Sunday":
        console.log("No Appointments Available")
        break;
//let day = "Monday";
//let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
//let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
//let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break;

//let day = "World";
// Output => "Its Not A Valid Day"
    default:
        console.log("Its Not A Valid Day")
    break;
    }