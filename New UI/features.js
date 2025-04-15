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
  
  $(document).ready(function () {
    const $container = $('#featureList');
    features.forEach((feature, index) => {
      const html = `
        <div class="col-md-6 mb-3 d-flex align-items-center feature-item">
          <div class="icon-circle me-3">
            <i class="fas fa-check"></i>
          </div>
          <span class="feature-value">${feature}</span>
        </div>
      `;
      $container.append(html);
    });
  });
  