function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  console.log(nextInLine([1, 2, 3, 4, 5], 6))