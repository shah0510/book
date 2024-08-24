let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if (page == currentPage - 1) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}

// Add event listeners for both click and touch events
document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    page.addEventListener('click', function(e) {
      movePage(this, index + 1);
    });
    page.addEventListener('touchend', function(e) {
      e.preventDefault();
      movePage(this, index + 1);
    });
  });
});