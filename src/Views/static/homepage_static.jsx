import Exp from "./Images/expense_homepage.jpg"
import Rel from "./Images/Reliable.jpg"
import Sec from "./Images/security.jpg"
export default{
    Name:'Expense Manager',
    routes:['Register','Login'],//its configured same in routes jsx
    Desription:'Welcome to Expense manager',
    features:{
        'Easy to manage':['It Helps you to manage your expensess',Exp],
        'Reliable':['Stores Data online',Rel],
        'Secure':['Uses Open source tech ',Sec]

    },
    quote:`"When you know the impact of little expenses, you will realise that there is nothing little in this world."`,
    quotea:'― Manoj Arora, From the Rat Race to Financial Freedom ',
    About:'Hobby project to make things helpfull for community'
}