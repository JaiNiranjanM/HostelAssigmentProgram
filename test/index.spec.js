var assert = require('assert');
var expect = require('chai').expect;
var hostelManagement =  require('../index.js');

var outputTwelveRegister = {
      'ANV': [6, 8, 11],
      'AV': [2, 3, 7],
      'BNV': [4, 9, 12],
      'BV': [1, 5, 10]
}

var outputThirteenRegister = {
      'ANV': [6, 8, 11],
      'AV': [2, 3, 7],
      'BNV': [4, 9, 12],
      'BV': [1, 5, 10],
      'NA': [13]
}

var inputOne = ['input 12','reg 1 B V','reg 2 A V','reg 3 A V','reg 4 B NV','reg 5 B V','reg 6 A NV','reg 7 A V','reg 8 A NV','reg 9 B NV','reg 10 B V','reg 11 A NV','reg 12 B NV','fin'];
var inputTwo = ['input 12','reg 1 B V','reg 2 A V','reg 3 A V','reg 4 B NV','reg 5 B V','reg 6 A NV','reg 7 A V','reg 8 A NV','reg 9 B NV','reg 10 B V','reg 11 A NV','reg 12 B NV', 'reg 13 A NV', 'fin'];

describe('HostelManagement', function() {
      it('should return true for 12 registered users', function(){
            var when12StudentsRegisters = hostelManagement.registerQueue.renderHostelManagement(inputOne);
            expect(outputTwelveRegister).to.eql(when12StudentsRegisters);
            console.log("*****Expected***", outputTwelveRegister);
            console.log("*****Output*****", when12StudentsRegisters);
      });

      it('should return true for 13 registered users', function(){
            var when13StudentsRegisters = hostelManagement.registerQueue.renderHostelManagement(inputTwo);
            expect(outputThirteenRegister).to.eql(when13StudentsRegisters);
            console.log("*****Expected***", outputThirteenRegister);
            console.log("*****Output*****", when13StudentsRegisters);
      });
});