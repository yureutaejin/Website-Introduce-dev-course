var now_link = document.location.href;

var carrers = document.querySelectorAll(".carrer-item");

carrers.forEach(function(element){
    element.addEventListener("click", event => move_page(element.innerText, "carrer"));
});

function move_page(page_name, obj){
    page_name = (page_name.replace(/(\s*)/g, "")).toLowerCase();
    window.location.replace(now_link+obj+"/"+page_name+"#carrer");
};