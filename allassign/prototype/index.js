// Employee object constructor
// function Employee(id, name, experienceLevel, role) {
//     this.id = id;
//     this.name = name;
//     this.experienceLevel = experienceLevel;
//     this.role = role;
// }

// // Prototype for the Salary based on experience level
// Employee.prototype.calculateSalary = function() {
//     switch (this.experienceLevel) {
//         case "Entry":
//             return 10000;
//         case "Intermediate":
//             return 70000;
//         case "junior":
//             return 40000;
//             case "Senior":
//             return 90000;
//         default:
//             return 0; 
//     }
// };

// // Prototype for the role
// Employee.prototype.getDesignationInfo = function() {
//     return `Employee ${this.name} with ID ${this.id} has the role of ${this.role}.`;
// };

// // Create employee instances
// var employee1 = new Employee(1, "John", "Entry", "Software Engineer");
// var employee2 = new Employee(2, "Jane", "junior", "Team Lead");
// var employee3 = new Employee(3, "Bob", "Intermediate", "Intern");
// var employee4 = new Employee(4, "Alice", "Senior", "Manager");


// // Output salary and designation information for each employee
// console.log(`Salary for ${employee1.name}: $${employee1.calculateSalary()}`);
// console.log(`Salary for ${employee2.name}: $${employee2.calculateSalary()}`);
// console.log(`Salary for ${employee3.name}: $${employee3.calculateSalary()}`);
// console.log(`Salary for ${employee4.name}: ${employee4.calculateSalary()}`);

// console.log(employee1.getDesignationInfo());
// console.log(employee2.getDesignationInfo());
// console.log(employee3.getDesignationInfo());
// console.log(employee4.getDesignationInfo());
// Original object with a nested array
const originalObject = { name: "John", hobbies: ["reading", "gaming"] };

// Shallow copy
const shallowCopy = { ...originalObject };

// Modify the shallow copy


// Output both objects
console.log(originalObject);
console.log(shallowCopy);

