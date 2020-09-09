function createEmployeeRecord(arr){
 let newObj={
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return newObj
}
function createEmployeeRecords(arr){
  let newArr=[]
  arr.forEach(obj=>{newArr.push(createEmployeeRecord(obj))})
  return newArr
}
function createTimeInEvent(obj,stamp){
  let timeArr=stamp.split(" ");
   obj.timeInEvents[0]={
     type: "TimeIn",
     hour: parseInt(timeArr[1]),
     date: timeArr[0] }
   return obj
}

function createTimeOutEvent(obj,stamp){
  let timeArr=stamp.split(" ");
   obj.timeOutEvents[0]={
     type: "TimeOut",
     hour: parseInt(timeArr[1]),
     date: timeArr[0] }
   return obj
}
function hoursWorkedOnDate(obj,stamp){
  return (obj.timeOutEvents[0].hour-obj.timeInEvents[0].hour)/100
}
function wagesEarnedOnDate(obj,stamp){
  return hoursWorkedOnDate(obj)*obj.payPerHour
}
function allWagesFor(obj){
  let total=0;
  obj.timeInEvents.forEach(timeIn=>{
    obj.timeInEvents.forEach(timeOut=>{
      total+=(timeOut-timeIn)*obj.payPerHour
    })
  })
  return total
}
function findEmployeeByFirstName(){
  
}
function calculatePayroll(){
  
}