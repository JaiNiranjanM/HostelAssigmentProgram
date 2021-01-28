# HostelAssigmentProgram
Implementing School Hostel Assignment Program

1. clone the repository.
2. `npm install` to install dependencies.
3. `npm test` to execute the test cases.


Input
-----
Feed input in the form of and array,

With 12 registered students: ['input 12','reg 1 B V','reg 2 A V','reg 3 A V','reg 4 B NV','reg 5 B V','reg 6 A NV','reg 7 A V','reg 8 A NV','reg 9 B NV','reg 10 B V','reg 11 A NV','reg 12 B NV','fin']

With 13 registered students: ['input 12','reg 1 B V','reg 2 A V','reg 3 A V','reg 4 B NV','reg 5 B V','reg 6 A NV','reg 7 A V','reg 8 A NV','reg 9 B NV','reg 10 B V','reg 11 A NV','reg 12 B NV', 'reg 13 A NV', 'fin']

Execute
-------
Call the function with input as below,

HostelManagement().registerQueue.renderHostelManagement(<input in array>);

Expected Output
---------------
12 Students
BV : [1,5,10]
AV : [2,3,7]
BNV : [4,9,12]
ANV : [6,8,11]

13 Students
BV : [1,5,10]
AV : [2,3,7]
BNV : [4,9,12]
ANV : [6,8,11]
NA : [13]
