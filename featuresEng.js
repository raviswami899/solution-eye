const features = [
    "Control motor via phone call (IVR-based).",
  "Real-time status updates through voice response.",
  "Dry run & phase failure protection.",
  "Auto switch built-in — no extra device needed.",
  "Over/under voltage safety features.",
  "Emergency stop by just calling.",
  "Works with single & three-phase motors.",
  "Supports all SIM types (2G–5G) and operators.",
  "Secure control — only registered users can operate.",
  "No app needed — even works with basic phones."
  ];

  const featureList = document.getElementById("featureList");

  features.forEach(feature => {
    const li = document.createElement("li");
    li.className = "mb-3";
    li.innerHTML = `<i class="fas fa-check-circle text-primary me-2"></i>${feature}`;
    featureList.appendChild(li);
  });