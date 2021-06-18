

/* example of application flow; the logic of my programme depends on certain conditions are TRUE or FALSE; IF statements are sometimes called conditional statement or conditional logic, to decide which action to take  for each possible case or block code.

I have defined a function called 'checkPassword' which takes on a single argument: PasswordCorrect which will either be TRUE or FALSE */

/* I have written an IF statement inside a functon that updates the 2 varibles: accessGranted(Boolean) and message (string).


if the PasswordCorrect is TRUE, accessGranted should have a value of TRUE and 'message' should have a value of "welcome to the admin panel".

in any other case, "accessGranted should have a value of FALSE and 'message' value is " wrong password"  */


let accessGranted = "PasswordCorrect";
let message = accessGranted;


function checkPassword (PasswordCorrect) {

  if (PasswordCorrect ===true) {
    accessGranted = true;
    message = "welcome to the admin panel";

  } else {
    accessGranted = false;
    message = "wrong password"

  }
}

checkPassword (true);
console.log(accessGranted);
console.log(message);

