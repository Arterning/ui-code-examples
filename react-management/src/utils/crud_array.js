const array = [
  { id: 23, name: "aa" },
  { id: 25, name: "aa" },
];

//push
array.push({ id: 26, name: "bb" });

//get
array.map((value, index) => {
  console.log(value, index);
});

//remove
function remove(id) {
  const index = array.findIndex((item) => item.id === id);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

remove(26);

console.log("removed");

console.log(array);

//find
const result = array.find((item) => item.name === "aa");
console.log(result);
