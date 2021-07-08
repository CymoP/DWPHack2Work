// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = []; 
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) { 
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
  {
    id: "40454230",
    jobTitle: "Milk Man",
    salary: "$129.00",
    image: "../assets/",
  },
  {
    id: "70078463",
    jobTitle: "Beekeeper",
    salary: "$49.99",
    image: "../assets/",
  },
  {
    id: "99305926",
    jobTitle: "Firefighter",
    salary: "$99.00",
    image: "../assets/",
  },
  {
    id: "90359829",
    jobTitle: "Retail Assistant",
    salary: "$249.00",
    image: "../assets/",
  },
  {
    id: "29221746",
    jobTitle: "Software Developer",
    salary: "$149.00",
    image: "",
  },
];
