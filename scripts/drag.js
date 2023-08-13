function allowDrop(ev) {
  ev.preventDefault();
  ev.target.classList.add("drag-over");
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  ev.target.classList.remove("drag-over"); // Remove the drag-over class
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
