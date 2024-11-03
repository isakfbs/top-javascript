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
- [ ]Describe what a prototype is and how it can be used.
- [ ]Explain prototypal inheritance.
- [ ]Understand the basic do’s and don’t’s of prototypal inheritance.
- [ ] Explain what the this keyword is.

### The prototype

All objects in JavaScript have a prototype. The prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

- We can define properties and functions common among all objects on the prototype to save memory. Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.

### Resources

https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

https://javascript.info/prototype-inheritance
