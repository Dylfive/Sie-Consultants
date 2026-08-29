import fs from 'fs';
import path from 'path';
import https from 'https';

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else if (res.statusCode === 301 || res.statusCode === 302) {
          // follow redirect
          downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const extractImagesFromPage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const regex = /<img[^>]+src="([^">]+)"/g;
        let match;
        const images = [];
        while ((match = regex.exec(data)) !== null) {
          let imgSrc = match[1];
          if (imgSrc.startsWith('/')) {
            imgSrc = new URL(url).origin + imgSrc;
          }
          if (imgSrc.includes('wp-content/uploads')) {
              images.push(imgSrc);
          }
        }
        
        const bgRegex = /url\(\s*['"]?([^'")]*wp-content\/uploads[^'")]*)['"]?\s*\)/gi;
        while ((match = bgRegex.exec(data)) !== null) {
            let imgSrc = match[1];
            if (imgSrc.startsWith('/')) {
                imgSrc = new URL(url).origin + imgSrc;
            }
            images.push(imgSrc);
        }

        resolve([...new Set(images)]);
      });
    }).on('error', reject);
  });
};

const run = async () => {
  const dir = './public/images';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  const urlsToScrape = [
    'https://www.sieconsultants.ca/',
    'https://www.sieconsultants.ca/projects-photos/'
  ];

  let allImages = [];
  for (const url of urlsToScrape) {
    console.log(`Scraping ${url}...`);
    try {
        const images = await extractImagesFromPage(url);
        allImages = allImages.concat(images);
    } catch(e) {
        console.error(`Error scraping ${url}: ${e.message}`);
    }
  }

  allImages = [...new Set(allImages)];
  console.log(`Found ${allImages.length} images.`);

  for (const imgUrl of allImages) {
    try {
        // Fix protocol relative URLs
        let fixedUrl = imgUrl;
        if (fixedUrl.startsWith('//')) {
            fixedUrl = 'https:' + fixedUrl;
        } else if (fixedUrl.startsWith('http:')) {
            fixedUrl = fixedUrl.replace('http:', 'https:');
        }
        const filename = path.basename(new URL(fixedUrl).pathname);
        console.log(`Downloading ${filename}...`);
        await downloadImage(fixedUrl, path.join(dir, filename));
    } catch (e) {
        console.error(`Failed to download ${imgUrl}: ${e.message}`);
    }
  }
  console.log('Done.');
};

run();
