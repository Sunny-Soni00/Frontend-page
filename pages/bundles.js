// Fetch clothing data from the API
async function fetchClothingData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/product-collection'); // Flask API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayClothingData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display clothing data dynamically
function displayClothingData(data) {
    const container = document.getElementById('clothing-container');
    container.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'clothes-card';
        itemDiv.innerHTML = `
            <img src="${item.image_url}">
            <div class="clothes-info">
                <h3>${item.name}</h3>
                <p>Type: ${item.type}</p>
                <p>Size: ${item.size}</p>
                <p class="price">Price: ₹${item.price}</p>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}

// Call the function to fetch and display data when the page loads
document.addEventListener('DOMContentLoaded', fetchClothingData);