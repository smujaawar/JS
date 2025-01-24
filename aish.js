<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- object:
    In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair. 
    Objects are used to store related data and functionality. 
    The keys in an object are also referred to as properties or methods (if they are functions), and they can be strings or symbols, while values can be of any type (strings, numbers, functions, other objects, etc.). -->

    <!-- how to create an object in js  -->
    <!-- let objectName = {
    key1: value1,
    key2: value2,
    key3: function() {
    // method logic
    }
    };
    let obj={
    name:"aishu",
    age:20,
    geet function(){
    console.log("Hello, " + this.name);
    }

    }
    let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
    };

    // Accessing object properties
    console.log(car.brand); // Output: Toyota
    console.log(car.model); // Output: Corolla
    console.log(car.year); // Output: 2021 -->


    <!-- how to fetch the values of the keys in an object
    using . dot notation
    using [ ]arrya notation -->


    <!-- object methods -->
    <script>
        let car = {
            brand: "honda",
            color: "black",
            year: 2021
        };
        //keys
        let keys = Object.keys(car);
        console.log(keys);

        //values
        const object = {
            a: 1,
            b: 2,
            c: 3
        };
        const values = Object.values(object);
        console.log(values);

        //entries
        const entry = { a: 1, b: 2, c: 3 };
        const entries = Object.entries(entry);
        console.log(entries);

        //freeze
        const obj1 = { a: 1, b: 2 };
        const frozenObj = Object.freeze(obj1);
        frozenObj.a = 42;
        console.log(frozenObj.a);

        //Freeze= to check the freezed object by using the method called "isFzozen"
        const obj = { a: 1, b: 2 };
        Object.freeze(obj);

        console.log(Object.isFrozen(obj));

        const unfrozenObj = { c: 3 };
        console.log(Object.isFrozen(unfrozenObj));

        //seal
        const obj3 = { a: 1, b: 2 };
        Object.seal(obj3);

        obj3.a = 42; // You can still modify existing properties
        console.log(obj3.a);

        obj3.c = 3; // Adding new properties is not allowed
        console.log(obj3.c);

        delete obj3.b; // Deleting properties is not allowed
        console.log(obj3.b);
        console.log(Object.isSealed(obj3)); // Output: true

        // A non-sealed object
        const obj4 = { c: 3 };
        console.log(Object.isSealed(obj4)); // Output: false

        // Seal=to check the seal object by using the method called "isSeales" -->


        //create
        const parent = { a: 1, b: 2 };

        // Creating a new object with 'parent' as the prototype
        const child = Object.create(parent);
        child.c = 3;

        console.log(child.a); // Output: 1 (inherited from parent)
        console.log(child.b); // Output: 2 (inherited from parent)
        console.log(child.c); // Output: 3 (own property)


        // prevent extension
        const ab = { a: 1, b: 2 };
        Object.preventExtensions(ab); // Call preventExtensions on 'ab'

        ab.c = 3; // Attempt to add a new property
        console.log(ab.c); // Output: undefined (new property can't be added)

        ab.a = 42; // Existing properties can still be modified
        console.log(ab.a); // Output: 42

        delete ab.b; // Existing properties can be deleted
        console.log(ab.b); // Output: undefined

        //math object methods

        //Math.abs() - Absolute value
        console.log(Math.abs(-5));
        //Math.pow() - Exponentiation
        console.log(Math.pow(2, 3));
        //Math.sqrt() - Square root
        console.log(Math.sqrt(9));
        //Math.max() - Maximum of numbers
        console.log(Math.max(1, 3, 5, 2));
        //Math.min() - Minimum of numbers
        console.log(Math.min(1, 3, 5, 2));
        //Math.random()
        const randomInt = Math.floor(Math.random() * 10);
        console.log(randomInt);
        // Math.round() - Rounds to the nearest integer
        console.log(Math.round(4.6));
        console.log(Math.round(4.3));
        //Math.ceil() - Rounds up to the nearest integer
        console.log(Math.ceil(4.1));
        //math.floor()
        console.log(Math.floor(5.7));  // Output: 5
        console.log(Math.floor(5.3));  // Output: 5
        console.log(Math.floor(-1.1)); // Output: -2
        console.log(Math.floor(-1.9)); // Output: -2

        //date method
        //Getting the Current Date and Time
        const now = new Date();
        console.log(now);
        //.getFullYear(): Gets the 4-digit year.
        console.log(now.getFullYear());
        //getMonth(): Gets the month (0-11). January is 0, December is 11.
        console.log(now.getMonth());
        //getDate(): Gets the day of the month (1-31).
        console.log(now.getDate());
        //getDay(): Gets the day of the week (0-6). Sunday is 0, Saturday is 6
        console.log(now.getDay());
        //getHours(): Gets the hour (0-23).
        console.log(now.getHours());
        //getMinutes(): Gets the minutes (0-59).
        console.log(now.getMinutes());
        //getSeconds(): Gets the seconds (0-59)
        console.log(now.getSeconds());
        //.setFullYear(year): Sets the year.
        now.setFullYear(2025);
        console.log(now.getFullYear()); // Output: 2025























    </script>


    <!-- //  Object Methods
// 1. Object.keys(object)
//    - Params: object (the object to extract keys from).
//    - Returns: An array of the object's keys.

// 2. Object.values(object)
//    - Params: object (the object to extract values from).
//    - Returns: An array of the object's values.

// 3. Object.entries(object)
//    - Params: object (the object to extract key-value pairs from).
//    - Returns: An array of key-value pairs.

// 4. Object.assign(target, ...sources)
//    - Params:
//      - target (the target object).
//      - sources (one or more source objects).
//    - Returns: The modified target object.
Params:
target: The target object that will be modified.
sources: One or more source objects from which properties will be copied.
Returns: The modified target object with all the properties of the source objects added or overwritten.
Key notes:
The Object.assign() method mutates the target object.
Properties from later sources will overwrite those in earlier sources if there are key collisions.
It does a shallow copy, meaning nested objects are copied by reference


// 5. Object.freeze(object)
//    - Params: object (the object to freeze).
//    - Returns: The frozen object.

// 6. Object.seal(object)
//    - Params: object (the object to seal).
//    - Returns: The sealed object.

// 7. Object.create(prototype, properties)
//    - Params:
//      - prototype (the object to use as the prototype).The object that will be used as the prototype of the new object. If null is passed, the object will not have a prototype.
//      - properties (optional, property descriptors).An object specifying property descriptors for new properties to be added to the new object. These descriptors allow you to define characteristics like writable, enumerable, and configurable.
//    - Returns: A new object.

// 8. Object.defineProperty(object, property, descriptor)
//    - Params:
//      - object (the object to define the property on).
//      - property (the name of the property).
//      - descriptor (the property descriptor).
//    - Returns: The object.

// 9. Object.defineProperties(object, descriptors)
//    - Params:
//      - object (the object to define the properties on).
//      - descriptors (an object with property descriptors).
//    - Returns: The object.

// 10. Object.getOwnPropertyNames(object)
//     - Params: object (the object to get property names from).
//     - Returns: An array of property names.

// 11. Object.getPrototypeOf(object)
//     - Params: object (the object to get the prototype from).
//     - Returns: The prototype of the object.

// 12. Object.setPrototypeOf(object, prototype)
//     - Params:
//       - object (the object to set the prototype for).
//       - prototype (the new prototype).
//     - Returns: The object.

// 13. Object.hasOwnProperty(property)
//     - Params: property (the property to check).
//     - Returns: true if the object has the property as its own, otherwise false.

// 14. Object.is(value1, value2)
//     - Params:
//       - value1 (the first value).
//       - value2 (the second value).
//     - Returns: true if the values are the same, otherwise false.

// 15. Object.isFrozen(object)
//     - Params: object (the object to check).
//     - Returns: true if the object is frozen, otherwise false.

// 16. Object.isSealed(object)
//     - Params: object (the object to check).
//     - Returns: true if

// 17. Object.preventExtensions(object)
//     - Params: object (the object to prevent extensions on).
//     - Returns: The object.

// 18. Object.isExtensible(object)
//     - Params: object (the object to check).
//     - Returns: true if the object can be extended, otherwise false. -->

</body>

</html>