// Installation steps data
const installationSteps = [
    {
        stepNumber: 1,
        title: "Mounting",
        description: [
            "Install the unit in a weather-protected location near the motor starter."
        ]
    },
    {
        stepNumber: 2,
        title: "Wiring",
        description: [
            "Switch off the 3 phase power or remove all 3 fuses.",
            "Use proper tools for removing the fuse and connections. If you don’t have knowledge, please hire professionals.",
            "Connect all 3 yellow wires to 3 phase terminals of the starter (R, Y, B) as per wiring diagram 1.",
            "Connect 2 green wires on the green button of the starter or power-on button of the motor.",
            "Connect 2 red wires on the red button series of the starter as per diagram 1 (Remove 1 wire from the red button and connect it to the device’s first red wire and connect the second wire to the red button of the device).",
            "Fix the antenna firmly and make sure it does not touch any high voltage wires.",
            "Insert any active SIM card (Jio, Vi, Airtel, BSNL, etc.) with sufficient balance and SMS pack (Optional)."
        ]
    },
    {
        stepNumber: 3,
        title: "Power On",
        description: [
            "Switch on the power supply.",
            "Check the power LED: Power LED is solid green - Power Ok, Power LED blinking green - Low voltage detected.",
            "Check the Phase LED: Phase LED Solid green - 3 Phase Ok, Phase LED blinking green - Phase failure detected.",
            "Check the NET LED: NET LED Solid green - Network is registered, NET LED OFF - No network (Check the sim card or antenna).",
            "STA LED: STA LED solid green - Water Pump running, STA LED OFF - Water Pump off.",
            "Wait for the network LED to become stable (shows connectivity).",
            "After powering on, wait for 40-50 seconds for booting up the device before using it for operations."
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
