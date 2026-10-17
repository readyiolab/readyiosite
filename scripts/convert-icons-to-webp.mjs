import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.resolve(__dirname, "../assets/Icons");
const destDir = path.resolve(__dirname, "../public/icons");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function convertIcons() {
  const files = fs.readdirSync(iconsDir);
  console.log(`Found ${files.length} icon files in ${iconsDir}`);

  for (const file of files) {
    if (!file.endsWith(".png")) continue;
    const inputPath = path.join(iconsDir, file);
    const baseName = path.basename(file, ".png");
    
    // Slug name: e.g. "Business & AI Automation" -> "business-ai-automation"
    const slugName = baseName
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    console.log(`Processing "${baseName}" -> slug: "${slugName}"`);

    // 1. Save as WebP with slug name
    const webpSlugPath = path.join(destDir, `${slugName}.webp`);
    await sharp(inputPath).webp({ quality: 90, effort: 4 }).toFile(webpSlugPath);

    // 2. Also save with original name as WebP
    const webpOrigPath = path.join(destDir, `${baseName}.webp`);
    await sharp(inputPath).webp({ quality: 90, effort: 4 }).toFile(webpOrigPath);

    // 3. Copy original png as fallback
    fs.copyFileSync(inputPath, path.join(destDir, file));
    fs.copyFileSync(inputPath, path.join(destDir, `${slugName}.png`));
  }

  console.log("All icons converted and copied to public/icons successfully!");
}

convertIcons().catch(console.error);
