# Local Storage Activity
Please use the following websites for resources on using local storage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://blog.logrocket.com/localstorage-javascript-complete-guide/

- Local storage only stores strings, so we will need to use 2 methods when setting and getting information from local storage. When we "set" information to local storage we will use `JSON.stringify()` this method turns any datatype into a string, even an object. When we "get" information from local storage we will need to use `JSON.parse()` to return the data to it's original data type.

# localStorage methods:

- `localStorage.setItem("key", "value")` > this will be used to add items to the localStorage. The "key" is how we will get the value later on and the value is the item we are saving. (think key: value pair just like an object)

- `localStorage.getItem("key")` > we need to pass in the key in order to get the value that is stored on it back from localStorage.

- `localStorage.removeItem("key")` > this will delete an item based on the "key" given.

- `localStorage.clear()` > deletes all localStorage

- `localStorage.key(index)` > localStorage has an index starting from 0 and continuing just like our arrays. We can access localStorage keys by passing through an index number.

- `localStorage.length` - will give us the total items in localStorage. Remember we can subtract 1 from length and that will give us the last index of localStorage.


