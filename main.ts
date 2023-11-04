import inquirer from "inquirer";


const counter = (paragraph: string) => {
    return paragraph.replace(/\s/g, "").length
}

let wordCounter = async () => {
    let res = await inquirer.prompt({
        type: "input",
        name: "Paragraph",
        message: "Enter your words?"
    })
    console.log(`Total words count: ${counter(res.Paragraph)}`)

}

wordCounter()