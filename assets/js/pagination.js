document.addEventListener('DOMContentLoaded', () => {
  const productsPerPage = 12;
  let currentPage = 1;
  let currentCategory = 'Smoothies'; // Default category

  function groupProductsByCategory() {
    const productItems = Array.from(document.querySelectorAll('.product-item'));
    const categoryMap = {};

    productItems.forEach(product => {
      const category = product.getAttribute('data-category');
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push(product);
    });

    return categoryMap;
  }

  function displayProducts(categoryProducts, page = 1) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Hide all products first
    document.querySelectorAll('.product-item').forEach(product => {
      product.style.display = 'none';
    });

    // Show products for the current page
    const productsToShow = categoryProducts.slice(startIndex, endIndex);
    productsToShow.forEach(product => {
      product.style.display = 'block';
    });

    updatePaginationControls(categoryProducts.length, page);
  }

  function updatePaginationControls(totalProducts, currentPage) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pageInfo = document.getElementById('pageInfo');
    pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;

    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    prevButton.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        displayProducts(groupedProducts[currentCategory], currentPage);
      }
    };

    nextButton.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayProducts(groupedProducts[currentCategory], currentPage);
      }
    };
  }

  const groupedProducts = groupProductsByCategory();
  displayProducts(groupedProducts[currentCategory], currentPage);

  // Add event listeners for category buttons
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      currentCategory = event.target.getAttribute('data-category');
      currentPage = 1;
      displayProducts(groupedProducts[currentCategory], currentPage);
    });
  });
});