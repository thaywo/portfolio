![Common Misconceptions About Payment](/images/blog/us.png)

### what is usestate in react

What is useState() in React

Are you learning about useState() concept in React?


const [counter, setCounter] = React.useState(0);
This article will cover the basics of what is React.useState() and how to use it.

What is useState?
useState() is a built-in function that comes with the React library.


import { useState } from "react";
useState() should only be used inside a functional component.


const App = () => {

  const [counter, setCounter] = useState(0);

  // ... JSX elements
};
useState() does not work in class component.

useState() returns a tuple. The first parameter in the array is the current state value. The second parameter is the function that will allow you to update the state value.


setCounter(counter + 1); // Increment state value by 1
React useState() full example

const App = () => {

  const [counter, setCounter] = React.useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  );
};