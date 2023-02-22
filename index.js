let docTitle = document.title;
window.addEventListener('blur', ()=>{
    document.title = "Ayoo, you got Sponsors";
});

window.addEventListener('focus',()=>{
    document.title = docTitle;
})