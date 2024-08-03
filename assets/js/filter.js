document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const foodMenuList = document.querySelector('.food-menu-list');
  const foodMenuCards = foodMenuList.querySelectorAll('.food-menu-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove the 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add the 'active' class to the clicked button
      button.classList.add('active');
      
      // Get the category from the clicked button
      const category = button.textContent.trim();

      // Filter the food menu cards
      foodMenuCards.forEach(card => {
        const cardCategory = card.querySelector('.category').textContent.trim();
        
        if (category === 'All' || cardCategory === category) {
          card.parentElement.style.display = 'block'; // Show the card
        } else {
          card.parentElement.style.display = 'none'; // Hide the card
        }
      });
    });
  });
});
