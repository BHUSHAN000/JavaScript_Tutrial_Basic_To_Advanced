
// WeakSet is a collection of objects only. It is not iterable and has no methods to access its elements.

// it can be compared with Set

// 1. set can take any type of data
// 2. garbage collection is not possible in set
// 3. set is iterable i.e keys, values, entries,
// 4. set has methods like add, delete, has, clear,size property
{
    let newSet = new Set()
    let obj1 = { name: 'John' }
    
    newSet.add(obj1)
    newSet.add(10)

    console.log(newSet.size);
    // obj1 = null;    // value set as null, but still it is not garbage collected

}

// 1. WeakSet can only take objects
// 2. garbage collection is possible in WeakSet
// 3. WeakSet is not iterable i.e keys, values, entries,
// 4. WeakSet has methods like add, delete, has but not clear, size property
{

  let newWeakSet = new WeakSet();
  let obj1 = { name: "John" };

  newWeakSet.add(obj1);

    // obj1 = null; // value set as null, and it is garbage collected
    // console.log(newWeakSet.delete(obj1));
    console.log(newWeakSet.size)
}
