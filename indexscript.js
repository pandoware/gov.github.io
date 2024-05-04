document.addEventListener('DOMContentLoaded', function () {
  var bannerItems = document.querySelectorAll('.banner-item');
  var currentIndex = 0;

  function showNextBannerItem() {
    // Hide the current active item
    bannerItems[currentIndex].classList.remove('active');
    // Calculate the index of the next item
    var nextIndex = (currentIndex + 1) % bannerItems.length;
    // Make the next item active
    bannerItems[nextIndex].classList.add('active');
    // Update currentIndex
    currentIndex = nextIndex;
  }

  // Start the slideshow
  setInterval(showNextBannerItem, 10000); // Change image every 10 seconds
});
