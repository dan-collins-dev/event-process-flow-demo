"use strict";

// For demoing the dynamic nature of objects
// Not recommending as a "do this"
const elements = {
    parent: document.getElementById("parent"),
    child: document.getElementById("child"),
    grandChild: document.getElementById("grand-child"),
    sibling: document.getElementById("sibling"),
}

elements.parent.addEventListener("click", function (event) {
    alert(`Current element handling event: ${this.dataset.nodeName}\nEvent emitted By: ${event.target.dataset.nodeName}`);
});

elements.child.addEventListener("click", function (event) {
    alert(`Current element handling event: ${this.dataset.nodeName}\nEvent emitted By: ${event.target.dataset.nodeName}`);
});

elements.grandChild.addEventListener("click", function (event) {
    alert(`Current element handling event: ${this.dataset.nodeName}\nEvent emitted By: ${event.target.dataset.nodeName}`);
});

elements.sibling.addEventListener("click", function (event) {
    alert(`Current element handling event: ${this.dataset.nodeName}\nEvent emitted By: ${event.target.dataset.nodeName}`);
});
