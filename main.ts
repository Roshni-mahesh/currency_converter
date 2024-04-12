import inquirer from "inquirer";

const currency:any = {
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
    JYP:1.82,
    AUD:181.11,
    CHF:308.07,
    NZD:166.35,
    SEK:25.92
};

let userAnswer = await inquirer.prompt(
    [
        {
            
                name: "from",
                message: "Enter form currency",
                type: "list",
                choices: ["USD" , "EUR" , "GBP" , "INR" , "PKR" , "JYP" , "AUD" , "CHF" , "NZD" , "SEK"]
        },{
                name:"to",
                message:"Enter form currency",
                type:"list",
                choices: ["USD" , "EUR" , "GBP" , "INR" , "PKR" , "JYP" , "AUD" , "CHF" , "NZD" , "SEK"]

        },{
                name:"amount",
                Message:"Enter your Amount",
                type:"number"
        }
    ]
)

let fromAmount = currency [userAnswer.from] 
let toAmount = currency [userAnswer.to] 
let amount = userAnswer.amount
let baseAmount = amount/ fromAmount 
let convertedAmount = baseAmount * toAmount 
console.log(convertedAmount);
