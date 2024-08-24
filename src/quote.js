const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
];
// const bgimgs = [
//   "/img/bed1.jpg", "/img/bed3.jpg", "/img/desk2.jpg", 
//   "/img/living1.jpg", "/img/living2.jpg", "/img/living3.jpg",
//   "/img/living11.jpg"
// ]
const bgimgs = [
  `https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg`,
  `https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg`,
  `https://img.freepik.com/free-photo/landscape-morning-fog-mountains-sunrise_335224-793.jpg`,
  `https://img.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_335224-315.jpg`,
  `https://img.freepik.com/free-photo/vertical-shot-winter-landscape-with-northern-lights-reflection-frozen-lake-tromso_181624-54199.jpg`,
  `https://img.freepik.com/free-photo/beautiful-shot-sea-waves-with-snowy-mountain-background_181624-36598.jpg`,
  `https://img.freepik.com/free-photo/morning-mountains-carpathian-ukraine-europe-beauty-world_1153-5814.jpg`
]
let quote = document.querySelector("#quote p:first-child");
let author = document.querySelector("#quote p:last-child");
let randomIdx = Math.floor(Math.random() * quotes.length);
quote.innerText = `"${quotes[randomIdx].quote}"`;
author.innerText = `- ${quotes[randomIdx].author} -`;
let bgIdx = Math.floor(Math.random() * bgimgs.length);
document.querySelector("body").style.background = `url(${bgimgs[bgIdx]}) no-repeat center top`

const todoForm = document.forms[1];
const todoList = document.querySelector("#todoList")
function addList(e) {
  e.preventDefault();
  console.log(e, todoForm.todo.value);
  let li = document.createElement("li")
  let span = document.createElement("span")
  let delBtn = document.createElement("i")
  span.innerText = todoForm.todo.value
  delBtn.className = "bi bi-x-lg ms-5 fw-bolder"
  li.append(span)
  li.append(delBtn)
  todoList.append(li)
  saveLocalStorage()
  todoForm.todo.value = ""
  todoForm.todo.focus()
}
function todoClick(e) {
  if(e.target.tagName==="SPAN") {
    e.target.classList.toggle("done")
    saveLocalStorage()
  } else if(e.target.tagName==="I") {
    todoList.removeChild(e.target.parentNode)
    saveLocalStorage()
  }
}
function saveLocalStorage() {
  let items = Array.from(todoList.children).map(li => ({
    text: li.querySelector("span").innerText,
    done: li.querySelector('span').classList.contains('done')
  }))
  localStorage.setItem("todoList", JSON.stringify(items))
}

todoForm.onsubmit = addList;
todoList.onclick = todoClick;

const items = JSON.parse(localStorage.getItem("todoList"))
if(items) {
  items.forEach(item => {
    let li = document.createElement("li")
    let span = document.createElement("span")
    let delBtn = document.createElement("i")
    span.innerText = item.text
    if(item.done) span.classList.add("done")
    delBtn.className = "bi bi-x-lg ms-5 fw-bolder"
    li.append(span)
    li.append(delBtn)
    todoList.append(li)
  });
}
