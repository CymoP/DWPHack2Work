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
    salary: "£12.22",
    image: "https://33q47o1cmnk34cvwth15pbvt120l-wpengine.netdna-ssl.com/wp-content/uploads/raw-milk-1-e1563894986431-768x1042.jpg",
    location: "London"
  },
  {
    id: "70078463",
    jobTitle: "Beekeeper",
    salary: "£18.00",
    image: "https://www.slowfood.com/wp-content/uploads/2020/05/WhatsApp-Image-2020-05-18-at-15.39.18.jpeg",
    location: "London"
  },
  {
    id: "99305926",
    jobTitle: "Firefighter",
    salary: "£12.16",
    image: "https://i.guim.co.uk/img/media/e8df19ef141d9deb17aa18642e6f156cb919b87e/0_186_1722_1032/master/1722.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=65127d520446aecc47a8852d55d4cd04",
    location: "London"
  },
  {
    id: "90359829",
    jobTitle: "Retail Assistant",
    salary: "£11.45",
    image: "https://www.jobs.ie/job-talk/wp-content/uploads/retail-assistant-job-description.jpg",
    location: "London"
  },
  {
    id: "29221746",
    jobTitle: "Software Developer",
    salary: "£12.42",
    image: "https://lacitycollege.edu/LACC/media/Campus-News/CyberSecurity.jpg?ext=.jpg",
    location: "London"
  },
];
