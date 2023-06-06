


//открытие картинки в новом окне для просмотра
function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
  }
  
  
//всплывающее окно
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
