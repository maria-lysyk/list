
document.querySelectorAll('.sideBtn > a').forEach(btn => {
    btn.addEventListener('click', function(e) {
       this.nextElementSibling.classList.toggle('show');
    });
});
var hid = document.getElementsByClassName("hide");
var vbn = document.querySelector('.btn-all-loc-upd');

    vbn.addEventListener('click' , showList);

    function showList(){
        for (var j = 0; j <= hid.length; j++) {
            if(hid[j].style.display == "none"){
                hid[j].style.display = "block";
            }
            else{
                hid[j].style.display = "none";
            }
    }
}