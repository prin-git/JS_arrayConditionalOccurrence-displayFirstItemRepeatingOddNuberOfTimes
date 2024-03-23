//display odd number of time repeating elements
//display first item repeating odd times

const fun1 = (arr) => {
  let count = {};
  arr.forEach((e) => {
    count[e] ? count[e]++ : (count[e] = 1);
  });
  console.log("counr obj", count);

  let result = [];
  for (let e in count) {
    count[e] % 2 && result.push(e);
  }

  console.log("result array ", result);
  let strArr = arr.map((i) => i.toString());

  let firstItem = strArr.find((e) => result.includes(e));

  console.log("firstItem", firstItem);
};

fun1([1, 1, 21, 2, 1, 2, 4, 5, 4, 6666, 7, 7, 7, 1]);
