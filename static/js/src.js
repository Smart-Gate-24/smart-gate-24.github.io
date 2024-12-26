
// Function to Toggle Dark mode button in Websites
function enableDark(){
    var element = document.body
    element.classList.add("dark");
    var isFirst = document.getElementById("dark_mode_toggle");
    if(isFirst.value){
        document.getElementById("dark_mode_tut").style = "display:none;"
        isFirst.value = 0;
    }
    var element = document.getElementsByClassName("owl-carousel")[0];
    element.classList.add("filter");
    element.classList.add("brightness-50");
}

function toggleDark(){
    event.preventDefault();
    var isFirst = document.getElementById("dark_mode_toggle");
    if(isFirst.value){
        document.getElementById("dark_mode_tut").style = "display:none;"
        isFirst.value = 0;
    }
    var DarkMode = localStorage.getItem("darkMode");
    if(DarkMode == "1"){
        localStorage.setItem("darkMode", "0");
        var element = document.body
        element.classList.remove("dark");
        var element = document.getElementsByClassName("owl-carousel")[0];
        if(element){
            element.classList.remove("filter");
            element.classList.remove("brightness-50");
        }
        
    }else{
        localStorage.setItem("darkMode", "1");
        var element = document.body
        element.classList.add("dark");
        var element = document.getElementsByClassName("owl-carousel")[0];
        if(element){
            element.classList.add("filter");
            element.classList.add("brightness-50");
        }
    }
}