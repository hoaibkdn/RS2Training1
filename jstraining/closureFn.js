/** @format */

// encapsulate, closure function
function Counter() {
  let count = 0;

  const increasement = () => {
    count++; // 2
    console.log('count in ', count);
  };
  const decreasement = () => {
    count--;
    console.log('count de ', count);
  };
  const reset = () => {
    count = 0;
    console.log('reset ', count);
  };
  return {
    increasement,
    decreasement,
    reset,
  };
}

const counter = Counter();
// counter.increasement();
// counter.increasement();
// counter.increasement();
// counter.decreasement();

const TodoList = (function () {
  const tasks = []; // {id, value}

  function renderTasks() {
    tasks.forEach((task) => {
      console.log(`Task ${task.id}: ${task.value}`);
    });
  } // console.log('Task {id}: {value}')
  function addTasks(value) {
    const lastTask = tasks[tasks.length - 1];
    tasks.push({
      id: lastTask ? lastTask.id + 1 : 1,
      value,
    });
  }
  function removeTasks(index) {
    tasks.splice(index, 1);
  }

  renderTasks(); // IIFE

  return {
    renderTasks,
    addTasks,
    removeTasks,
  };
})(); // IIFE
// Immediately Invoked Function Expression - IIFE

// const todoList = TodoList();
TodoList.addTasks('hello world');
TodoList.addTasks('finish homework');
TodoList.addTasks('sleep at 11pm');
TodoList.renderTasks();
TodoList.removeTasks(0);
TodoList.renderTasks();
// ...[1, 2, 4] ~ 1, 2, 4
function rateLimiter(fn, limit) {
  lastCall = 0;

  return function (...args) {
    console.log('args ', args);
    const now = Date.now(); //
    if (now - lastCall >= limit) {
      // 2s
      lastCall = now;
      return fn(...args); // clickRate
    }
  };
}

function clickRate(date, date2) {
  console.log(`clicked ### ${date.getDate()} ${date2.getDate()}`);
}

const handleRateLimit = rateLimiter(clickRate, 2000);

// handleRateLimit(new Date('2024-02-01'), new Date('2024-05-30'));

/**
 * array1: [1, 2, 7, 0, 0, 0, 0, 0] -> non-decrease
 * array2: [1, 1, 3, 7, 7]  // O(m+n)
 * merge(arr1, m, arr2, n) { // modify on array1: [1, 1, 1, 2, 3, 7, 7, 7]
 *
 * }
 */

const array1 = [1, 2, 7, 0, 0, 0, 0, 0]; // array1.length = m + n
const array2 = [1, 1, 3, 7, 7];

const merge = function (arr1, m, arr2, n) {
  let i = m - 1,
    j = n - 1;
  let writtenIdx = arr1.length - 1; // O(1)
  while (writtenIdx >= 0) {
    if (j < 0 || arr1[i] >= arr2[j]) {
      arr1[writtenIdx] = arr1[i];
      i--;
    } else if (i < 0 || arr1[i] < arr2[j]) {
      arr1[writtenIdx] = arr2[j];
      j--;
    }
    writtenIdx--;
  }
  return arr1;
};

console.log(merge(array1, 3, array2, 5));
