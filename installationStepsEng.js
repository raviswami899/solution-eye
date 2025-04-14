// Installation steps data
const installationSteps = [
    {
        stepNumber: 1,
        title: "Mounting",
        description: [
            "Install in a weather-protected location near the motor starter."
        ]
    },
    {
        stepNumber: 2,
        title: "Turn Off Power & Prepare Tools",
        description: [
            "Switch off the 3-phase power or remove all 3 fuses.",
            "Use proper tools for fuse removal and wiring. Hire a professional if unsure."
        ]
    },
    {
        stepNumber: 3,
        title: "Connect Wires",
        description: [
            "Connect 3 yellow wires to the starter terminals (R, Y, B) as per the diagram.",
            "Connect 2 green wires to the power-on button.",
            "Connect 2 red wires to the red button series as per the diagram."
        ]
    },
    {
        stepNumber: 4,
        title: "Install Antenna & Insert SIM",
        description: [
            "Fix the antenna away from high-voltage wires.",
            "Insert an active SIM card (Jio, Vi, Airtel, BSNL) with SMS pack."
        ]
    },
    {
        stepNumber: 5,
        title: "Power On & Check LEDs",
        description: [
            "Switch on the power supply.",
            "Check Power LED: Green - Power OK, Blinking Green - Low Voltage.",
            "Check Phase LED: Green - 3-Phase OK, Blinking Green - Phase Failure.",
            "Check Network LED: Green - Network Registered, OFF - No Network.",
            "STA LED: Green - Pump Running, OFF - Pump Off.",
            "Wait 40-50 seconds for boot-up before using the device."
        ]
    }
];



// Function to dynamically generate the installation steps
function generateInstallationSteps(steps) {
    const container = document.getElementById('installation-steps-container');
    const ol = document.createElement('ol');
    ol.classList.add('installation-steps', 'list-unstyled');
    
    steps.forEach(step => {
        const li = document.createElement('li');
        li.classList.add('step-item');

        const stepNumberDiv = document.createElement('div');
        stepNumberDiv.classList.add('step-number');
        stepNumberDiv.textContent = step.stepNumber;

        const stepContentDiv = document.createElement('div');
        stepContentDiv.classList.add('step-content');

        const stepTitle = document.createElement('h3');
        stepTitle.classList.add('step-title');
        stepTitle.textContent = step.title;

        const stepDescription = document.createElement('p');
        stepDescription.classList.add('step-description');
        stepDescription.innerHTML = step.description.join('<br/>');

        const ul = document.createElement('ul'); // Create the bulleted list
        step.description.forEach(point => {
            const liPoint = document.createElement('li');
            liPoint.textContent = point;
            ul.appendChild(liPoint);
        });

        stepContentDiv.appendChild(stepTitle);
        stepContentDiv.appendChild(ul);
        li.appendChild(stepNumberDiv);
        li.appendChild(stepContentDiv);
        ol.appendChild(li);
    });

    container.appendChild(ol);
}

// Call the function to generate the steps dynamically
generateInstallationSteps(installationSteps);
