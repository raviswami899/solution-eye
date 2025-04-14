const features = [
    "Control motor using a phone call IVR (Interactive voice response).",
    "Real-time status feedback via Voice response.",
    "Dry run protection.",
    "Phase failure detection.",
    "Built in Auto switch — no need of extra auto switch.",
    "Under voltage and over voltage protection.",
    "Emergency stop just by calling.",
    "Supports single-phase and three-phase motors.",
    "Time-saving and fuel-saving.",
    "Useful for pipeline change or water tank filling via mobile.",
    "Supports all kind of 2G, 3G, 4G, 5G SIM cards.",
    "Supports all telecom operators SIM.",
    "Secured on-off — Only registered user can turn on & off the water pump.",
    "Multiple users (up to 5 users) can control a single water pump.",
    "Doesn’t require any app or smartphone — you can use a feature phone to control your water pump."
  ];

  const featureList = document.getElementById("featureList");

  features.forEach(feature => {
    const li = document.createElement("li");
    li.className = "mb-3";
    li.innerHTML = `<i class="fas fa-check-circle text-primary me-2"></i>${feature}`;
    featureList.appendChild(li);
  });