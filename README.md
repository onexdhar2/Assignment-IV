## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById and getElementsByClassName is used for catch a single element.Both target only one id or class.querySelector is for select first element.querySelectorAll is used for catch all element of a div or section.

### 2. How do you create and insert a new element into the DOM?
document.creatElement("div").
There are many tags in html.Like p,a,h1,div,section etc.We can use creatElement to creat tag from Jaascript

### 3. What is Event Bubbling? And how does it work?
Event bubbling work with event.First of all it targets the event and then work for parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is use catch all element together.Thats why code is shorten and browser work first.It also work for load fast.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault is use for stop default behavior and stopPropagation is for stop bubbling.