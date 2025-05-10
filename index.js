"use strict";

/* 
    Notes
    =====
    - Examine the structure of the HTML
    - Explore the event process flow
    - Explore the phases
        - Capturing
        - Target
        - Bubbling
    - Toy around with the demo in general
    
*/

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandchild = document.querySelector(".grandchild");
const sibling = document.querySelector(".sibling");

parent.addEventListener("click", (event) => {
    console.log(`Parent`);
});

child.addEventListener("click", (event) => {
    console.log(`Child`);
});

grandchild.addEventListener("click", (event) => {
    console.log(`Grandchild`);
});

sibling.addEventListener("click", (event) => {
    console.log(`Sibling`);
});

function makeSiblingYell(event) {
    console.log("SIBLING IS YELLING");
}
