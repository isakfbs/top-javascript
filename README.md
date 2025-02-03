# The Odin Project - JavaScript Course

## Organizing your JavaScript code

This lesson series is going to cover a few of the most common design patterns that occur in modern JavaScript code.

## **The patterns we'll be covering in this series are:**

- Plain Old JavaScript Objects and Object Constructors
- Factory Functions and the Module Pattern
- Classes
- ES6 Modules

Going through these will give us a chance to learn about a few other important concepts in JavaScript such as “closure”, “prototypes”, “IIFEs” and more!

Lesson overview
This section contains a general overview of topics that you will learn in this lesson.

- [x] How to write an object constructor and instantiate the object.
- [x] Describe what a prototype is and how it can be used.
- [x] Explain prototypal inheritance.
- [x] Understand the basic do’s and don’t’s of prototypal inheritance.
- [x] Explain what the this keyword is.

### The prototype

All objects in JavaScript have a prototype. The prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

- We can define properties and functions common among all objects on the prototype to save memory. Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.

### Knowledge check

- ## How do you write an object constructor and instantiate the object?

```javascript
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

//use by calling the function with the keyword new.

const player = new Player("steve", "X");
console.log(player.name); // 'steve'
```

- What is a prototype and how can it be used?
- The prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

- What is prototypal inheritance?
  -Prototypal inheritance in JavaScript allows objects to inherit properties and methods from other objects. Each object has a prototype, and when you try to access a property or method, JavaScript looks for it in the object and then up the prototype chain.

  - How it works: Use Object.create() to create an object with a specific prototype.

  - Prototype chain: If a property isn’t found in the object, it’s searched in its prototype and so on.
  - Dynamic updates: Changes to the prototype affect all objects inheriting from it.
  - Modern usage: ES6 class syntax is based on prototypal inheritance.

- What are the basic do’s and don’t’s of prototypal inheritance?

  - Don’t modify built-in prototypes:

    - Avoid adding or changing properties on global objects like Object.prototype, Array.prototype, etc., as it can lead to bugs and conflicts.

  - Don’t overuse inheritance:

  - Keep inheritance hierarchies simple and shallow to prevent overly complex chains that are hard to debug and maintain.

  Don’t use **_proto_** directly:

  - While it provides access to an object’s prototype, it's deprecated in favor of Object.getPrototypeOf() and Object.setPrototypeOf().

- How does this behave in different situations?

### Resources

https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

https://javascript.info/prototype-inheritance

https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8
