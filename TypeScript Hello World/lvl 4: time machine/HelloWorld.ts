let dayOfWeek: string [] = ["Monday", "Tuesday", "Wednesday", 
                            "Thursday", "Friday","Saturday"];

dayOfWeek.push("Sunday");

let message: string = "Hello world from ";

dayOfWeek.forEach(day => {
    if(day == "Monday"){
        console.log(`${message} last ${day}.`);
    }
    else{
    console.log(`${message} next ${day}.`);}
    
});