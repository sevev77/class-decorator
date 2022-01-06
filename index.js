function logMethod(target, name, descriptor) {
  console.log(target, name, descriptor);
  const original = descriptor.value;
  // if (typeof original === 'function') {
  //   descriptor.value = function(...args) {
  //     console.log("Logged at: " + new Date().toLocaleString());
  //     try {
  //       const result = original.apply(this, args);
  //       return result;
  //     } catch (e) {
  //       console.log(`Error: ${e}`);
  //       throw e;
  //     }
  //   }
  // }
  return descriptor;
}

function logClass(target) {
  console.log("target is:", target);
  return (...args) => {
    console.log(args);
    return new target(...args);
  };
}
@logClass
class Person {
  constructor(name) {
    this.name = name;
  }

  @logMethod
  hi() {
    console.log("hi " + this.name);
  }
}

const person = new Person("seven");
person.hi();
