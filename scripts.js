

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');

  setInterval(() => {
    galleryItems.forEach(item => {
      item.classList.add('move'); // Add the animation class
    });

    // Reset after animation completes
    setTimeout(() => {
      galleryItems.forEach(item => {
        item.classList.remove('move');
      });
    }, 12000); // Reset after the duration of your animation (12 seconds in this case)
  }, 12000); // Repeat the cycle (adjust the interval as needed)
});

// Function to open the modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('show');  // Add the 'show' class to trigger the modal's appearance
}

// Close modal if clicking on background or close button
function closeModal(event, modalId) {
  // Only close the modal if the target is the background (not the modal content)
  if (event.target.classList.contains('menu-modal') || event.target.classList.contains('close-button')) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('show'); // Remove the 'show' class to hide the modal
  }
}





