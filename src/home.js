export function home() {
  const content = document.querySelector("#content");
  const title =  document.createElement('h1');
  const text = document.createElement("div");
  title.textContent = "Shawarma Palace"
  text.textContent = "Hello World"
  content.appendChild(text);
  
}

