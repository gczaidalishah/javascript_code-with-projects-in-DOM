let todo = [];
let req = prompt("Enter your request:");
while (true) {
    
    if (req === "quit") {
        console.log("quitting app");
        break;
    }

    if (req === "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("**********");
    } else if (req === "add") {
        const task = prompt("Enter the task you want to add:");
        if (task !== null && task !== "") {
            todo.push(task);
            console.log("Task added");
        } else {
            console.log("No task added.");
        }
    } else if (req === "delete") {
        let index = prompt("Enter the index of the task you want to delete:");
        todo.splice(index, 1);
        console.log("Task deleted");
    }else{
        console.log("wrong request");
    }

    req = prompt("Enter your request:");

}
