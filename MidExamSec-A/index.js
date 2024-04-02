document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider img");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const totalImages = images.length;
    let currentImageIndex = 0;
  
    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }
  
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      showImage(currentImageIndex);
      showThumbnail(currentImageIndex);
    }
  
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      showImage(currentImageIndex);
      showThumbnail(currentImageIndex);
    }


  
    document.querySelector(".next").addEventListener("click", nextImage);
    document.querySelector(".prev").addEventListener("click", prevImage);
  
    thumbnails.forEach((thumb, i) => {
      thumb.addEventListener("click", function() {
        currentImageIndex = i;
        showImage(currentImageIndex);
        showThumbnail(currentImageIndex);
      });
    });
  
   
    showImage(currentImageIndex);
    showThumbnail(currentImageIndex);
  });