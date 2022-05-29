var userdata = [
    { id: 401, name: "Nrupul Dev", age: 35, salary: 80000 },
    { id: 501, name: "parbhanjan", age: 29, salary: 90000 },
    { id: 301, name: "Ankush", age: 26, salary: 60000 },
    { id: 201, name: "yogesh", age: 40, salary: 70000 },
    { id: 101, name: "chandra", age: 36, salary: 540000 }
];
console.log(userdata);
// const userdata = userdata.sort((a,b)=>a.id-b.id)
// console.log(userdata)
function insertionSort(userdata, id) {
    var i, key, j;
    for (i = 1; i < userdata.length; i++) {
        key = userdata[i];
        j = i - 1;
        while (j >= 0 && userdata[j].id > key.id) {
            userdata[j + 1] = userdata[j];
            j = j - 1;
        }
        userdata[j + 1] = key;
    }
    return userdata;
}
var new_data = insertionSort(userdata, "id");
console.log(new_data);
// Chemistry, Physics, Maths
var subject;
(function (subject) {
    subject["PHYSICS"] = "PHYSICS";
    subject["CHEMISTRY"] = "CHEMISTRY";
    subject["MATHS"] = "MATHS";
})(subject || (subject = {}));
var teacher = [
    {
        id: 601, name: "Md Shahbaj Alam", Numberofstudent: 500, subject: subject.PHYSICS
    },
    {
        id: 401, name: "Nrupul Dev", Numberofstudent: 500, subject: subject.CHEMISTRY
    },
    {
        id: 501, name: "parbhanjan", Numberofstudent: 700, subject: subject.PHYSICS
    },
    {
        id: 301, name: "Ankush", Numberofstudent: 700, subject: subject.MATHS
    },
    {
        id: 201, name: "yogesh", Numberofstudent: 700, subject: subject.MATHS
    },
    {
        id: 101, name: "chandra", Numberofstudent: 700, subject: subject.CHEMISTRY
    }
];
console.log(teacher);
function insertionSortdata(teacher, id) {
    var i, key, j;
    for (i = 1; i < teacher.length; i++) {
        key = teacher[i];
        j = i - 1;
        while (j >= 0 && teacher[j].id > key.id) {
            teacher[j + 1] = teacher[j];
            j = j - 1;
        }
        teacher[j + 1] = key;
    }
    return teacher;
}
var new_data1 = insertionSortdata(teacher, "id");
console.log(new_data1);
