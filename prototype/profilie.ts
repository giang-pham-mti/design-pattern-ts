interface Profile {
  clone(): Profile;
  printInfo(): void;
}

class User implements Profile {
  constructor(name: string, private age: number) {}

  clone(): Profile {
    return new User(this.name, this.age);
  }

  printInfo(): void {
    console.log(`User: ${this.name}, ${this.age}`);
  }
}

class Student extends User {
  constructor(name: string, age: number, private school: string) {
    super(name, age);
  }

  clone(): Profile {
    return new Student(this.name, this.age, this.school);
  }

  printInfo(): void {
    console.log(`Student: ${this.name}, ${this.age}, ${this.school}`);
  }
}

const user = new User("John", 30);
user.printInfo();

const userClone = user.clone();
userClone.printInfo();

const student = new Student("Alice", 20, "ABC School");
const studentClone = student.clone();
studentClone.printInfo();
