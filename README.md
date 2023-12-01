# Project Name

The BananaCounter/Weather project is a simple React application that allows users to track the quantity of bananas they have and get real-time weather information. The project consists of multiple components, including the main App component, BananaCounter component, and Weather component.

The BananaCounter component provides functionality to increase or decrease the quantity of bananas. It also includes a feature to send an email notification when the quantity reaches zero. Users can interact with buttons to adjust the quantity and send the email.

The Weather component retrieves weather data from the AccuWeather API based on the user's location (currently set to Raleigh, NC). It displays the current temperature, weather condition, humidity, and wind speed. The component utilizes Axios to make HTTP requests and useState to manage the fetched data.

The project also includes routing functionality using React Router, allowing users to navigate between the home, counter, and weather pages. Each page is rendered with the corresponding component.

Overall, the Banana Weather project demonstrates the integration of React components, API communication, state management, and routing to create a simple application that combines tracking banana quantities and displaying real-time weather information.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (https://nodejs.org) and NPM (Node Package Manager) must be installed on your machine.

### Installation

1. Clone the repository:

shell>
    git clone https://github.com/DmytHol/React1.git

2. Navigate to the project directory:

shell>
    cd [project directory]

3. Install project dependencies:

shell>
npm install

4. Running the Application
Start the development server:

shell>
npm start

5. Open your web browser and navigate to http://localhost:3000 to view the application.