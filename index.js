function HostelManagement() {
    function Queue() {
        this.students = [];
        this.NUM_BOARDIN_HOUSES = 4;
    }
    
    Queue.prototype.register = function (e) {
        this.students.push(e);
    };
    
    Queue.prototype.isEmpty = function () {
        return this.students.length == 0;
    };
    
    Queue.prototype.length = function() {
        return this.students.length;
    }

    Queue.prototype.reset = function() {
        this.students = [];
    }
     
    Queue.prototype.allocateHostel = function() {
        const students = this.students;
        const studentObj = {};
        const MAX_STUDENTS = Math.round(students.length / this.NUM_BOARDIN_HOUSES);
        students.map((student) => {
            const studentSplit = (student).split(" ");
            const regNum = studentSplit[1];
            const section = studentSplit[2];
            const food = studentSplit[3];
     
            if(Object.keys(studentObj).length === 0) {
                studentObj[`${section+food}`] = [parseInt(regNum)];
            } else if (!Object.keys(studentObj).includes(section+food)) {
                studentObj[`${section+food}`] = [parseInt(regNum)];
            } else if(Object.keys(studentObj).includes(section+food)){
                if(Object.keys(studentObj).includes(section+food) && (studentObj[section+food]).length < MAX_STUDENTS) {
                    (studentObj[section+food]).push(parseInt(regNum));
                } else {
                    studentObj['NA'] = [parseInt(regNum)];
                }
            }
        })
    
        Object.entries(studentObj).forEach(([key, value]) => {
            console.log(`${key} : [${value}]`);
        });
        return studentObj;
    }

    const registerQueue = new Queue();

    Queue.prototype.renderHostelManagement = function(input) {
        registerQueue.reset();
        for(var i = 1; i < input.length-1; i++) {
            registerQueue.register(input[i]);
        }
        return registerQueue.allocateHostel();
    }
    return { registerQueue }
}
  
module.exports = HostelManagement();
