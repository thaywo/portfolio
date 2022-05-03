![Boost your post for increasing sales](/images/blog/1-1.jpg)

### What is map in JavaScript

JavaScript used to be restricted with its collections capabilities. In other languages, you could work with sets, associative maps, lists, and dictionaries, but JavaScript only allowed you to work with arrays. JavaScript developers found a way to map keys to values, but their method came with its own limitations.

In the ES6 release, JavaScript introduced a new built-in class for maps that makes it easier to work with collections. In this short tutorial, we’ll discuss JavaScript Map code examples, methods, and use cases, and we’ll introduce advanced concepts to learn.

We’ll cover:

What is JavaScript map?
JavaScript map syntax
JavaScript map methods and use cases
Advanced map concepts



Get hands on with modern JavaScript
This course covers modern JavaScript features, including 2015 ES6, 2016 ES7, and 2017 ES8. By the end, you’ll be able to add new features and write code more efficiently.

Rediscovering JavaScript: ES6, ES7, & ES8


What is JavaScript map?
Before ES6, JavaScript developers used objects to map keys to values, but using an object as a map has some restrictions:

There’s no dependable way to iterate over keys
The keys() method converts fields to strings, which creates key collision
There’s no simple way to add new keys and new values
These issues were addressed in the ES6 release when the Map collection type was introduced. It can hold key-value pairs of any type and can remember key insertion order. Any value (objects and primitives) can be used as a key or a value.

JavaScript Map creates a new array, which contains the results from the iteration over the elements of the array and calls the provided function once for each element in order. It’s an important data structure that has many essential uses.

Note: WeakMap is similar to Map, but all keys in a WeakMap are objects.

To create a new Map, follow this syntax:

let map = new Map([iterable]);
Let’s say we want to create one that stores names as keys and scores as values.

12345678910
'use strict';

//START:DEFINE
const scores =
	new Map([['Ruby', 12], ['Steven', 11], ['Sam', 15], ['Robin', 14]]);

scores.set('James', 14);

console.log(scores.size);
//END:DEFINE

Run

Visual representation of names as keys and scores as values
We did three things here:

Initialized the scores map with names and scores
Added a key and value to the map using the set() method (line 7)
Used the size property to determine how many keys are in the map (line 9)
There’s a lot more we can do with JavaScript maps, such as:

Iterate through maps
Initialize maps with iterable objects
Get elements from maps by key
Get the number of elements in a map
Convert map keys or values to arrays
Invoke callbacks for each key-value pair in insertion order
Etc.
Before we dive deeper into some methods and use cases, let’s first learn the JavaScript map syntax.



JavaScript map syntax
This JavaScript map syntax is as follows:


widget
Description:

array: the array on which the specific function is called
map: the method called for the array with the required parameters
function(currentValue, index, arr): the function with its parameters, which is required to run for each element in the array
currentValue: the value of the current element
index: the index of the current element
arr: the array object on which the map() is called
thisValue: the value used as the function’s this value when it’s executed
Now that we’ve learned the syntax, let’s look at an example implementation of the map() function:

123456789101112
//creating an array
var an_array = [5, 3, 1, 4, 2]

//map calls a function with “item” as parameter
//map will pass each element of an_array as “item” in this function
//the function will triple each element passed and return it as the return value
result = an_array.map(function(item) {
	return item*3;
});



Run
Note: The original map array doesn’t change.


Modernize your JavaScript skills
Take your Javascript skills to the next level. This course covers modern JavaScript features, including 2015 ES6, 2016 ES7, and 2017 ES8. Educative’s text-based courses are easy to skim and feature live coding environments to make learning more fun and efficient.

Rediscovering JavaScript: ES6, ES7, & ES8



JavaScript map methods and use cases
Now that we know the JavaScript map syntax and walked through an example implementation, let’s discuss some commonly used map methods along with their use cases.

Initialize a map with an iterable object
The Map() constructor initializes a map with an iterable object:

123456
let userRoles = new Map( [
	[ruby, 'director'],
	[steven, 'producer'],
	[foo, 'writer'],
	[robin, 'actress']
]);
Return a value mapped to a specific key
get() returns a value mapped to a specific key:

1
userRoles.get(robin); // actress
If you pass a key that’s not in the map, it will return as undefined:

12
let emma = {name: 'Emma'};
userRoles.get(emma); // undefined
Return a boolean value showing whether a specified key exists
has() returns a boolean value showing whether a specified key exists:

12
userRoles.has(emma); // false
userRoles.has(ruby); // true
Return the number of entries in the map
The size property returns the number of entries in the map:

1
console.log(userRoles.size); // 4
Return a new iterator object that includes the value of each element
values() returns a new iterator object that includes the value of each element:

1234567
for (let role of userRoles.values()) {
	console.log(role); 
}
// director
// producer
// writer
// actress
Remove specified elements from map object
delete() removes specified elements from map object:

1
userRoles.delete(ruby);
Remove all elements in map object
clear() removes all elements in map object:

1
userRoles.clear();
If we checked the size, it would return as zero:

1
console.log(userRoles.size); // 0
More important map methods:
forEach(callback[, thisArg]): invokes a callback for each key-pair value in the map in insertion order
set(key, value): sets the value for the key in the map object
keys(): returns a new iterator with the keys for elements in insertion order
entries(): iterates over a collection of keys and values


Advanced map concepts
JavaScript Map is a valuable collection type that makes programming with JavaScript cleaner and more efficient. We’ve learned about map syntax, methods, and use cases. Now you’re ready to tackle more advanced concepts. Some recommended concepts to cover next are:

Metaprogramming
Prototypal inheritance
Implementing constructors
Literals
To get up to speed on JavaScript’s features, check out Educative’s course Rediscovering JavaScript: ES6, ES7, & ES8. This course explores modern JavaScript features to help you make your code more concise, expressive, and less error-prone. You’ll begin by learning basic features of modern JavaScript, and then you’ll move into more complex features, like destructuring, metaprogramming, object literals, and inheritance.

By the end of the course, you’ll be able to add new JavaScript features easily and write your code more efficiently.

Happy learning!

