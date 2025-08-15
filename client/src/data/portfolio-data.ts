export const portfolioData = {
  projects: [
    {
      id: "rentify",
      title: "RENTIFY",
      description: "A MERN stack application that allows users to rent various products on a time-based model. Features seamless product posting and management.",
      date: "May 2025",
      color: "bg-blue-600",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Modern tech portfolio design showcasing RENTIFY project",
    },
    {
      id: "civicfix",
      title: "CIVICFIX",
      description: "A transparency-focused system to control corruption through real-time tracking and reporting of governance activities.",
      date: "April 2025",
      color: "bg-purple-600",
      technologies: [ "MERN", "API Integration"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Modern tech interface design representing CIVICFIX governance platform",
    },
    {
      id: "reliv",
      title: "RELIV",
      description: "Flutter-based disaster management app for rescue coordination of volunteers and the goods management.",
      date: "March 2024",
      color: "bg-green-600",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Emergency response and disaster management technology interface",
    },

  ],
  
  projectDetails: {
    rentify: {
      title: "RENTIFY - Product Rental Platform",
      content: `
        <h3>Project Overview</h3>
        <p>RENTIFY is a comprehensive MERN stack application that revolutionizes the rental market by allowing users to rent various products on a time-based model. The platform provides a seamless experience for both product owners and renters.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>User authentication and profile management</li>
          <li>Product listing with detailed descriptions and images</li>
          <li>Advanced search and filtering capabilities</li>
          <li>Time-based rental booking system</li>
          <li>Secure payment processing</li>
          <li>Rating and review system</li>
          <li>Real-time notifications</li>
        </ul>
        
        <h3>Technologies Used</h3>
        <p><strong>Frontend:</strong> React.js, Redux, Material-UI<br>
        <strong>Backend:</strong> Node.js, Express.js<br>
        <strong>Database:</strong> MongoDB<br>
        <strong>Authentication:</strong> JWT tokens<br>
        <strong>Payment:</strong> Stripe API integration</p>
        
        <h3>Challenges & Solutions</h3>
        <p>One of the main challenges was implementing a dynamic pricing model based on rental duration. I solved this by creating a flexible algorithm that calculates prices based on daily, weekly, and monthly rates with automatic discounts for longer rentals.</p>
      `,
    },
    civicfix: {
      title: "CIVICFIX - Government Transparency Platform",
      content: `
        <h3>Project Overview</h3>
        <p>CIVICFIX is an innovative system designed to combat corruption by ensuring transparency in public processes. It provides real-time tracking and reporting of governance activities to enhance accountability.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Public project tracking dashboard</li>
          <li>Budget allocation transparency</li>
          <li>Citizen complaint filing system</li>
          <li>Government response tracking</li>
          <li>Data visualization and analytics</li>
          <li>Mobile-responsive design</li>
        </ul>
        
        <h3>Technologies Used</h3>
        <p><strong>Backend:</strong> Django, Python<br>
        <strong>Frontend:</strong> HTML, CSS, JavaScript<br>
        <strong>Database:</strong> PostgreSQL<br>
        <strong>APIs:</strong> Government data integration<br>
        <strong>Deployment:</strong> Heroku</p>
        
        <h3>Impact</h3>
        <p>This project aims to increase government transparency and reduce corruption by providing citizens with easy access to information about public projects, budget allocations, and government responses to citizen complaints.</p>
      `,
    },
    reliv: {
      title: "RELIV - Disaster Management Application",
      content: `
        <h3>Project Overview</h3>
        <p>RELIV is a cutting-edge Flutter-based disaster management application that provides network-less communication using innovative Beacon technology. It enables efficient rescue coordination and volunteer management during disaster situations.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Network-less communication using Beacon technology</li>
          <li>Real-time rescue coordination</li>
          <li>Volunteer management system</li>
          <li>Aid distribution tracking</li>
          <li>Emergency contact integration</li>
          <li>Offline map functionality</li>
          <li>SOS alert system</li>
        </ul>
        
        <h3>Technologies Used</h3>
        <p><strong>Framework:</strong> Flutter<br>
        <strong>Language:</strong> Dart<br>
        <strong>Communication:</strong> Bluetooth Beacon Technology<br>
        <strong>Storage:</strong> SQLite for offline data<br>
        <strong>Maps:</strong> Google Maps SDK</p>
        
        <h3>Innovation</h3>
        <p>The most innovative aspect of RELIV is its ability to function without traditional network infrastructure. During disasters when cellular networks often fail, Beacon technology enables device-to-device communication, ensuring that rescue operations can continue effectively.</p>
      `,
    },
  },
};
