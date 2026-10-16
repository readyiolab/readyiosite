import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, "../public");

async function convertAll() {
  const files = fs.readdirSync(publicDir);
  const imageExtensions = [".png", ".jpg", ".jpeg"];

  console.log(`Scanning ${publicDir}...`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const baseName = path.basename(file, ext);
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(publicDir, `${baseName}.webp`);

      try {
        console.log(`Converting ${file} -> ${baseName}.webp ...`);
        await sharp(inputPath)
          .webp({ quality: 85, effort: 4 })
          .toFile(outputPath);
        console.log(`  ✓ Converted: ${baseName}.webp`);
      } catch (err) {
        console.error(`  ✗ Error converting ${file}:`, err);
      }
    }
  }
  console.log("All image conversions completed successfully.");
}

convertAll();
