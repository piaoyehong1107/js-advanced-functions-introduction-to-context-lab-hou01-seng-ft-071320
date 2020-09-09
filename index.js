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
   obj.timeInEvents.push({
     type: "TimeIn",
     hour: parseInt(timeArr[1]),
     date: timeArr[0] })
   return obj
}

function createTimeOutEvent(obj,stamp){
  let timeArr=stamp.split(" ");
   obj.timeOutEvents.push({
     type: "TimeOut",
     hour: parseInt(timeArr[1]),
     date: timeArr[0] })
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
    obj.timeOutEvents.forEach(timeOut=>{
      total+=((timeOut.hour-timeIn.hour)/100)*(obj.payPerHour)
    })
  })
  return total;
}
function findEmployeeByFirstName(){
  
}
function calculatePayroll(){
  
}