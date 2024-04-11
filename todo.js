import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([{
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in you todos",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "what would you like to add more in you todos",
            default: false,
        }]);
    todo.push(todoQuestions.firstQuestion);
    condition = todoQuestions.secondQuestion;
    console.log(todo);
}
