// 1 Завдання

const user = {
    hobby: "karate",
    premium: true,
  };
  
  user.mood = "happy";
  
  user.hobby = "skydiving";
  
  user.premium = false;
  
  const keys = Object.keys(user);
  for (const key in user) {
    const information = `${key}: ${user[key]}`;
    console.log(information);
  }
  
  const { hobby, premium, mood } = user;

// 2 Завдання
const testObj = {
  one: 1,

  two: 2,

  three: 3,

  four: 4,
};

const countProps = (obj) => {
  const objProperties = Object.keys(obj);
  return objProperties.length;
};

console.log(countProps(testObj));


// 3 Завдання

const employees = {
  employeesOne: 18,
  employeesTwo: 11,
  employeesThree: 15,
  employeesFour: 21,
};

const { employeesOne, employeesTwo, employeesThree, employeesFour } = employees;

const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }

  return bestEmployee;
};

const logFindBestEmployee = findBestEmployee(employees);

console.log(logFindBestEmployee); 

// 4 Завдання 

const employeesSallary = {
  employeesOne: "28000 гривень",
  employeesTwo: "21000 гривень",
  employeesThree: "27000 гривень",
  employeesFour: "35000 гривень",
};

const { employeesOne: employeesOneSalary, employeesTwo: employeesTwoSalary, employeesThree: employeesThreeSalary, employeesFour: employeesFourSalary } = employeesSallary;

const countTotalSalary = (salaryEmployees) => {
  let totalSalary = 0;

  for (let salaryWorker in salaryEmployees) {
    let numberSalary = parseInt(salaryEmployees[salaryWorker]);
    totalSalary += numberSalary;
  }

  const totalNumberOfSalaryString = `${totalSalary} грн`;

  console.log(totalNumberOfSalaryString);
};

countTotalSalary(employeesSallary);


// 5 Завдання

const objects = [
  {
    keyOne: "One One One",
    keyTwo: "Two Two Two",
  },
  {
    keyOne: "One One One",
    keyTwo: "Two Two Two",
  },
  {
    keyOne: "One One One",
    keyTwo: "Two Two Two",
  },
];

const [ { 
            keyOne: firstKeyOne, 
            keyTwo: firstKeyTwo 
        },

        {
            keyOne: secondkeyOne, 
            keyTwo: secondKeyTwo 
        },

        { 
            keyOne: thirdkeyOne, 
            keyTwo: thirdKeyTwo 
        }, 
      ] = objects;


const getAllPropValues = (arr, prop) => {
  let values = [];

  for (let object of arr) {
      values.push(object[prop]);
  }

  console.log(values);
}

getAllPropValues(objects, ["keyOne"]);


// 6 Завданя

const products = [
  { 
    name: "Apple", 
    price: 2, 
    quantity: 10 
  },

  { 
    name: "Banana", 
    price: 1, 
    quantity: 5 
  },

  { 
    name: "Lemon", 
    price: 2, 
    quantity: 3
  },

  { 
    name: "Orange", 
    price: 3, 
    quantity: 7 
  },
];

const [
    {
      name: firstProductName,
      price: firstProductPrice,
      quantity: firstProductQuantity,
    },
    {
      name: secondProductName,
      price: secondProductPrice,
      quantity: secondProductQuantity,
    },
    {
      name: thirdProductName,
      price: thirdProductPrice,
      quantity: thirdProductQuantity,
    },
    {
        name: fourthProductName,
        price: fourthProductPrice,
        quantity: fourthProductQuantity,
      },
  ] = products;
  

const calculateTotalPrice = (allProducts, productName) => {
  let totalPrice = 0;
  
  for (let product of allProducts) {
    if (product.name === productName) {
      totalPrice += product.price * product.quantity;
    }
  }
  
  return totalPrice;
};


console.log(calculateTotalPrice(products, "Apple")); 
console.log(calculateTotalPrice(products, "Banana")); 
console.log(calculateTotalPrice(products, "Lemon")); 
console.log(calculateTotalPrice(products, "Orange")); 


// 7 Завдання

const account = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push(`Deposit: ${amount} гривень`);
    }
  },

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push(`Withdraw: ${amount} гривень`);
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionHistory() {
    return this.transactions.length ? this.transactions : "Транзакцій ще немає";
  }
};

console.log("Initial Balance:", account.getBalance()); 

account.deposit(500); 

account.withdraw(200); 

console.log("Current Balance:", account.getBalance()); 

console.log("Історія транзакцій:", account.getTransactionHistory()); 