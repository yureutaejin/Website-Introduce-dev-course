var now_link = document.location.href;

var carrers = document.querySelectorAll(".carrer-item");
var stacks = document.querySelectorAll(".stack-item");

carrers.forEach(function(element){
    element.addEventListener("click", event => move_carrer_page(element.innerText, "carrer"));
});

stacks.forEach(function(element){
    element.addEventListener("click", event => move_stack_page(element.innerText, "stack"));
});

function move_carrer_page(page_name, obj){
    page_name = (page_name.replace(/(\s*)/g, "")).toLowerCase();
    window.location.replace(now_link+obj+"/"+page_name+"#carrer");
};

function move_stack_page(page_name, obj){
    page_name = (page_name.replace(/(\s*)/g, "")).toLowerCase();
    window.location.replace(now_link+obj+"/"+page_name+"#stack");
};