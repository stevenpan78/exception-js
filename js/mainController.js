function getPerson(n){if(n.id<0)throw new Error("this is error");return n}function getPersons(n){var e=[];return n.forEach(function(n){try{var r=getPerson(n);e.push(r)}catch(n){console.log(n)}}),e}var runner=function(n){self=this,self.rows=getPersons([{id:2,name:"Joe"},{id:-37,name:"Carl"},{id:31,name:"Kevin"},{id:56,name:"Annie"},{id:15,name:"Carmen"},{id:39,name:"Nathan"},{id:-24,name:"Anothony"},{id:88,name:"Eli"}])};angular.module("mainApp").controller("mainCtrl",["$scope",runner]);