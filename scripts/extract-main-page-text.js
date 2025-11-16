const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const componentsDir = path.join(rootDir, "src", "components");

const mainPageComponents = [
  "HeroSection.tsx",
  "SavingsImpactSection.tsx",
  "FeaturesSection.tsx",
  "HowItWorksSection.tsx",
  "TestimonialsSection.tsx",
  "AIAssistantSection.tsx",
  "FAQSection.tsx",
  "ClosingTaglineSection.tsx",
  "SignupForm.tsx",
  "Footer.tsx",
];

function extractReadableText(content) {
  let text = content;

  // Remove multi-line and single-line comments
  text = text.replace(/\/\*[\s\S]*?\*\//g, " ");
  text = text.replace(/\/\/.*$/gm, " ");

  // Remove import/export statements
  text = text.replace(/import[\s\S]*?;(\r?\n)?/g, " ");
  text = text.replace(/export\s+(default\s+)?(function|const|class)\s+[^{]+{/g, " ");

  // Replace template strings with their raw content (strip backticks)
  text = text.replace(/`([\s\S]*?)`/g, (_, match) => ` ${match} `);

  // Remove object/array literals and code blocks to avoid leaking code
  text = text.replace(/\{[^{}]*\}/g, " ");

  // Strip JSX tags
  text = text.replace(/<\/?[^>]+>/g, " ");

  // Remove leftover punctuation that isn't helpful for plain copy
  text = text.replace(/[();{}[\]=<>]/g, " ");

  // Collapse whitespace
  text = text.replace(/\s+/g, " ");

  return text.trim();
}

const sections = mainPageComponents.map((fileName) => {
  const filePath = path.join(componentsDir, fileName);
  if (!fs.existsSync(filePath)) {
    return `Missing component file: ${fileName}`;
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const readable = extractReadableText(rawContent);

  return `=== ${fileName} ===\n${readable}`;
});

const outputDir = path.join(rootDir, "content");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "main-page-copy.txt");
fs.writeFileSync(outputPath, sections.join("\n\n"), "utf8");

console.log(`Main page copy written to ${outputPath}`);



