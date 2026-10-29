//Switch condition ----- an alternate for if else
const score=50;
switch(score){
    case 90:
        console.log("A+");
        break;
    case 80:
        console.log("A");
        break;
    case 70:
        console.log("B+");
        break;
    case 60:
        case 50:
        console.log("B");
        break;
    default:
        console.log("Need to Improve");
        break; //optional to keep break here
}
// for characters
const grade='U';
switch(grade){
    case 'A':
        console.log("A+");
        break;
    case 'B':
        console.log("A");
        break;
    case 'C':
        console.log("B+");
        break;
    case 'D':
        case 'E':
        console.log("B");
        break;
    default:
        console.log("Need to Improve - Failed");
        break; //optional to keep break here
}