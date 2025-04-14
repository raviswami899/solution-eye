// Installation steps data
const installationSteps = [
    {
        stepNumber: 1,
        title: "स्थापना",
        description: [
            "मोटर स्टार्टर के पास, मौसम से सुरक्षित स्थान पर यूनिट स्थापित करें।"
        ]
    },
    {
        stepNumber: 2,
        title: "पावर बंद करें और उपकरण तैयार करें",
        description: [
            "3-फेज पावर बंद करें या सभी 3 फ्यूज हटा दें।",
            "फ्यूज हटाने और वायरिंग के लिए सही उपकरण का उपयोग करें। यदि आपको अनुभव नहीं है, तो पेशेवर की मदद लें।"
        ]
    },
    {
        stepNumber: 3,
        title: "वायर कनेक्ट करें",
        description: [
            "3 पीले तारों को स्टार्टर के टर्मिनल (R, Y, B) से जोड़ें।",
            "2 हरे तारों को पावर ऑन बटन से जोड़ें।",
            "2 लाल तारों को रेड बटन सीरीज से जोड़ें जैसा कि आरेख में दिखाया गया है।"
        ]
    },
    {
        stepNumber: 4,
        title: "एंटेना स्थापित करें और SIM डालें",
        description: [
            "एंटेना को उच्च-वोल्टेज तारों से दूर मजबूती से स्थापित करें।",
            "एक सक्रिय SIM कार्ड (Jio, Vi, Airtel, BSNL) डालें, जिसमें SMS पैक हो।"
        ]
    },
    {
        stepNumber: 5,
        title: "पावर ऑन करें और LEDs जांचें",
        description: [
            "पावर सप्लाई को चालू करें।",
            "पावर LED जांचें: हरा - पावर ठीक है, हरा झपकता - कम वोल्टेज।",
            "फेज LED जांचें: हरा - 3-फेज ठीक है, हरा झपकता - फेज फेलियर।",
            "नेटवर्क LED जांचें: हरा - नेटवर्क पंजीकृत है, बंद - नेटवर्क नहीं है।",
            "STA LED: हरा - पंप चालू है, बंद - पंप बंद है।",
            "उपकरण चालू होने के बाद 40-50 सेकंड तक प्रतीक्षा करें।"
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
