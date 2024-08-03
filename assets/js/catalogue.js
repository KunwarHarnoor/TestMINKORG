
    // Function to open the modal with product details
    function openModal(imageSrc, title, details) {
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDetails').textContent = details;
        document.getElementById('productModal').style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('productModal').style.display = 'none';
    }

    // Event listeners for the close button
    document.querySelector('.close').addEventListener('click', closeModal);

    // Event listener for clicking outside the modal to close it
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('productModal')) {
            closeModal();
        }
    });

    // Event listener for product clicks
    document.querySelectorAll('.food-menu-card').forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('.card-banner img').src;
            const title = this.querySelector('.card-title').textContent;
            const details = this.querySelector('.category').textContent; // Add more details as needed
            openModal(img, title, details);
        });
    });

