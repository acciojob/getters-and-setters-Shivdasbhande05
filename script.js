//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}
	get name() {
		return this._name;
	}

	set age(value) {
		this.age = value;
	}
}

class Student extends Person {
	study () => {
		console.log(this._name + "is studying");
	}
}

class Teacher extends Person {
	teach () => {
		console.log(this._name + "is teaching");
	}
}

let myStudent = new Student("John Doe" , 25);
let myTeacher = new Teacher("Sita", 33);
myStudent.study();
myTeacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
