var tooglebtn = document.getElementById('toggle');
var mybody = document.getElementById('container');

var cssarr = ['background-color:black;color:white;','background-color:white;color:black;'];
var cssarrcount = 0;

//click event for toogle btn
tooglebtn.addEventListener('click',function(){
    if(cssarrcount>=cssarr.length){
        cssarrcount = 0;
    }
    console.log(cssarrcount)
    mybody.style.cssText = cssarr[cssarrcount];
    cssarrcount++;
});