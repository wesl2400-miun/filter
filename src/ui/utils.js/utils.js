
// Hämta ett existerande HTML-element via en referens
export const node = (ref) => {
  return document.getElementById(ref);
}

// Skapa ett HTML-element
export const newNode = (type, text = null, 
  style = null, parent = null) => {
  const tag = document.createElement(type);
  if(text) tag.textContent = text;
  if(style) tag.classList.add(style);
  if(parent) parent.appendChild(tag);
  return tag;
}