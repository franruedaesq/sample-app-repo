const fs = require("fs");
const path = require("path");

const report = {
  scan_timestamp: new Date().toISOString(),
  vulnerabilities: [
    {
      id: "CVE-2023-12345",
      severity: "HIGH",
      package: "outdated-dependency",
      version: "1.2.3",
      description:
        "A critical vulnerability that allows remote code execution.",
    },
    {
      id: "CVE-2023-67890",
      severity: "MEDIUM",
      package: "another-package",
      version: "4.5.6",
      description: "Potential for cross-site scripting (XSS).",
    },
  ],
  summary: {
    total: 2,
    critical: 0,
    high: 1,
    medium: 1,
    low: 0,
  },
};

const reportsDir = "reports";
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

fs.writeFileSync(
  path.join(reportsDir, "security-report.json"),
  JSON.stringify(report, null, 2)
);

console.log(
  "Mock security scan complete. Report generated at reports/security-report.json"
);
