function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }
    
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject;
        }
    }
    // let person = new Person('Ivan', 'ivan@abv.bg');
    // let teacher = new Teacher('Ivan', 'ivan@abv.bg', 'IT')
    return {
        Person,
        Teacher
    }
}
console.log(personAndTeacher())

