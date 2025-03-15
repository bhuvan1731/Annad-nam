function showContent(section) {
    const header = document.getElementById('header');
    const paragraph = document.getElementById('paragraph');
    const centersSection = document.getElementById('centers-section');
    const mapButtons = document.getElementById('map-buttons');
    const registrationSection = document.getElementById('registration-section');
    const joinUsSection = document.getElementById('join-us-section');
    const contentSection = document.getElementById('content-section');

    // Hide all sections initially
    centersSection.style.display = 'none';
    mapButtons.style.display = 'none';
    registrationSection.style.display = 'none';
    joinUsSection.style.display = 'none';
    contentSection.style.display = 'none';

    // Clear the header and paragraph content
    header.innerHTML = '';
    paragraph.innerHTML = '';

    // Show the relevant section based on the user's selection
    if (section === 'home') {
        header.innerHTML = 'अन्नदानम् <br><span>-Annadānam</span>';
        paragraph.innerHTML = 'अन्नं मा व्ययः। -Do not waste food.';
    } else if (section === 'centers') {
        centersSection.style.display = 'block';
        header.innerHTML = 'Centers';
        paragraph.innerHTML = 'Find a center near you:';
    } else if (section === 'map') {
        mapButtons.style.display = 'block';
        header.innerHTML = 'Maps';
        paragraph.innerHTML = 'Find directions to centers:';
    } else if (section === 'donate') {
        window.location.href = "ww.html"; 
    } else if (section === 'registration') {
        registrationSection.style.display = 'block';
        header.innerHTML = 'Register';
        paragraph.innerHTML = 'Create an account to get started:';
    } else if (section === 'join') {
        joinUsSection.style.display = 'block';
        header.innerHTML = 'Join Us';
        paragraph.innerHTML = 'Become a part of our mission:';
    } else if (section === 'content') {
        contentSection.style.display = 'block';
        header.innerHTML = 'Contact';
        paragraph.innerHTML = 'Explore details about our centers and volunteers:';
    }
    
    // Load center details if centers section is active
    if (section === 'centers') {
        loadCenterDetails();
    }
}
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}


function loadCenterDetails() {
    const centerData = [
        { name: "LB Nagar", volunteer: "ADI", phone: "1234567890" },
        { name: "Alwal", volunteer: "BHUVI", phone: "9876543210" },
        { name: "Secunderabad", volunteer: "CHARAN", phone: "4567891230" },
        { name: "Banjara Hills", volunteer: "DHRUV", phone: "6543219870" },
        { name: "Patancheruvu", volunteer: "ESHWAR", phone: "7418529630" }
    ];

    const centerDetailsContainer = document.getElementById('center-details');
    centerDetailsContainer.innerHTML = ''; // Clear existing content

    centerData.forEach(center => {
        const centerInfo = `
            <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                <strong>Center Name:</strong> ${center.name}<br>
                <strong>Volunteer:</strong> ${center.volunteer}<br>
                <strong>Phone:</strong> ${center.phone}
            </div>
        `;
        centerDetailsContainer.innerHTML += centerInfo;
    });
}


function showCenterDetails(center) {
    const centerDetails = {
        'LB Nagar': {
            head: 'ASHISH',
            address: 'LB Nagar, Hyderabad',
            email: 'ash@example.com'
        },
        'Alwal': {
            head: 'BHAVYA',
            address: 'Alwal, Hyderabad',
            email: 'bhavya@example.com'
        },
        'Secunderabad': {
            head: 'CHANDRA',
            address: 'Secunderabad, Hyderabad',
            email: 'chandra@example.com'
        },
        'Banjara Hills': {
            head: 'DHONI',
            address: 'Banjara Hills, Hyderabad',
            email: 'dhoni@example.com'
        },
        'Patancheruvu': {
            head: 'ESHA',
            address: 'Patancheruvu, Hyderabad',
            email: 'esha@example.com'
        }
    };

    // Get the center's details
    const details = centerDetails[center];

    if (details) {
        // Dynamically create the center details content
        const detailsContent = `
            <div class="center-details-item">
                <h3>${center} Center Details</h3>
                <p><strong>Head:</strong> ${details.head}</p>
                <p><strong>Address:</strong> ${details.address}</p>
                <p><strong>Email:</strong> ${details.email}</p>
            </div>
        `;

        // Insert the details content into the center details container
        const centerDetailsContainer = document.getElementById('center-details-container');
        centerDetailsContainer.innerHTML = detailsContent;

        // Show the center details container
        centerDetailsContainer.style.display = 'block';
    } else {
        alert('Center details not found.');
    }

}
function openDonatePage() {
    window.location.href = "index1.html"; // Redirects to index1.html
}
