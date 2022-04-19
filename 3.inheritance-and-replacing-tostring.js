function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        };
        toString() {
            return (`${this.constructor.name} (name: ${this.name}, email: ${this.email})`);
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        };
        toString() {
            return (`${this.constructor.name} (name: ${this.name}, email: ${this.email}, course: ${this.course})`);
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject, course) {
            super(name, email, course);
            this.subject = subject;
        };
        toString() {
            return (`${this.constructor.name} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`);
        }
    }

    return {
        Person,
        Student,
        Teacher,
    }
}
console.log(personAndTeacher())

