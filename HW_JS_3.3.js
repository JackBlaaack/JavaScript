const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
];
// for( i=0; i<enterprises.length; i++ ) {
//   let sum = 0;
//   for( j=0; j<enterprises[i].departments.length; j++ ) {
//     sum += enterprises[i].departments[j].employees_count;   
//     }     
//     console.log(`${enterprises[i].name}  (${sum} сотрудников) `);
    
//     for( j= 0; j< enterprises[i].departments.length; j++ ) {

//       console.log(`-${enterprises[i].departments[j].name}  (${enterprises[i].departments[j].employees_count} сотрудников) `);
//     }
//   }

// function getEnterpriseName(element) {
//   for (i =0 ; i< enterprises.length ; i++) {
//     for (j = 0 ; j <enterprises[i].departments; j++) {
//       if (element === enterprises[i].departments[j].name || element === enterprises[i].id) {
//        console.log(enterprises[i].name);
//        break;
     
// } else if (element === enterprises[i].name){
//   console.log('Это не департамент');
//   break;
// }
//  }

// }
// }
// getEnterpriseName('Отдел Маркетинга');
// console.log()
// function addEnterprise(newName) {
//  length = enterprises.length;
// let lastAdd = enterprises[length - 1].departments.find(element => element.id);
// let lastId = lastAdd.id ;
//  let newObject = {
//   id: lastId +1,
//   name: newName,
//  departments: [],
// };
//   enterprises.push({
//     id: lastId+1,
//     name: newName,
//    departments: [
//     {
//       id: lastId+1,
//       name: 'Отдел безделия',
//       employees_count: 0,
//     }
//    ],
// });
// }
// addEnterprise('Предприятие 4')
// console.log(enterprises);

function addDepartment(idItem, newDep) {
for (let i =0; i <enterprises.length; i++) {
  for(let j=0; j< enterprises[i].departments.length; j++) {
if (idItem === enterprises[i].id) {
  enterprises[i].departments.push({
    id: idItem,
    name: newDep,
    employees_count: 0,
  })
}
  }
}
}
addDepartment(1, 'хей');
console.log(enterprises);