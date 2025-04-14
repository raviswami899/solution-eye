// Installation steps data
const installationSteps = [
    {
        stepNumber: 1,
        title: "माउंटिंग (Mounting)",
        description: [
            "डिवाइस को मोटर स्टार्टर के पास किसी सुरक्षित और मौसम से बचाव वाले स्थान पर इंस्टॉल करें।"
        ]
    },
    {
        stepNumber: 2,
        title: "वायरिंग (Wiring)",
        description: [
            "सबसे पहले 3-फेज की बिजली सप्लाई बंद करें या तीनों फ्यूज़ निकाल दें।",
            "फ्यूज़ निकालने और वायरिंग करने के लिए सही टूल्स का इस्तेमाल करें। यदि जानकारी न हो तो किसी एक्सपर्ट की मदद लें।",
            "तीनों पीले तारों को स्टार्टर के 3-फेज टर्मिनल (R, Y, B) से कनेक्ट करें (जैसा डायग्राम 1 में दिखाया गया है)।",
            "दोनों हरे तारों को स्टार्टर के ग्रीन बटन (या मोटर स्टार्ट बटन) से जोड़ें।",
            "दोनों लाल तारों को रेड बटन के साथ इस तरह से जोड़ें: रेड बटन का एक तार हटाकर डिवाइस के पहले लाल तार से जोड़ें और दूसरा तार रेड बटन से जोड़ें (डायग्राम 1 देखें)।",
            "एंटीना को अच्छी तरह से कसकर लगाएं और ध्यान रखें कि यह किसी हाई वोल्टेज तार को न छुए।",
            "कोई भी एक्टिव सिम कार्ड (Jio, Vi, Airtel, BSNL आदि) डालें जिसमें पर्याप्त बैलेंस और एसएमएस पैक हो (वैकल्पिक)।"
        ]
    },
    {
        stepNumber: 3,
        title: "पावर ऑन (Power On)",
        description: [
            "बिजली की सप्लाई चालू करें।",
            "पावर एलईडी देखें: अगर हरा है तो सब ठीक है, अगर हरा ब्लिंक कर रहा है तो वोल्टेज कम है।",
            "फेज एलईडी जांचें: अगर यह लगातार हरा है तो तीनों फेज ठीक हैं, अगर ब्लिंक कर रहा है तो कोई फेज नहीं आ रहा।",
            "नेटवर्क एलईडी देखें: हरा है तो नेटवर्क मिल चुका है, बंद है तो सिम या एंटीना चेक करें।",
            "STA एलईडी: हरा है तो मोटर चालू है, बंद है तो मोटर बंद है।",
            "नेटवर्क एलईडी स्थिर होने तक इंतजार करें जिससे कनेक्टिविटी सुनिश्चित हो सके।",
            "पावर ऑन करने के बाद लगभग 40-50 सेकंड का समय डिवाइस के बूट होने के लिए दें, फिर इसे इस्तेमाल में लें।"
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
