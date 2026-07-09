
// Task :- Find the most active user from the below array of objects using reduce method.

let userActivity = [
    { user:"ABC", activityCount: 45 },
    { user:"XYZ", activityCount: 72 },
    { user:"PQR", activityCount: 33 },
    { user:"LMN", activityCount: 80 },
];

let mostActiveUser = userActivity.reduce((acc, curr) => {
    return acc.activityCount > curr.activityCount ? acc : curr;
});

// console.log(mostActiveUser);

// Task :- Create an expense report that sums up the total expenses for each category using reduce method.

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expensesReport = expenses.reduce((report, expenses) => {
    report[expenses.category] += expenses.amount;
    return report;
}, { Food: 0, Utilities: 0 });

// console.log(expensesReport);

// Task :- Sort the pending tasks based on their priority.

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let predictSortedTasks = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priority - b.priority);

// console.log(predictSortedTasks);
