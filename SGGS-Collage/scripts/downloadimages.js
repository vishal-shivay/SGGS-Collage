const fs = require("fs");
const https = require("https");
const path = require("path");

console.log("Script started...");

const images = [
  "https://sggskcm.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-10.48.54-AM-1-600x400.jpeg",
 "https://sggskcm.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-10.58.28-AM-600x400.jpeg",
 "https://sggskcm.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-23-at-9.06.21-PM-1-600x400.jpeg",
 "https://sggskcm.org/wp-content/uploads/2022/05/DSC_0731-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2022/05/IMG-20220510-WA0015-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2022/05/DSC_0734-A-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2022/05/IMG-20220510-WA0016-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2023/05/WhatsApp-Image-2023-04-30-at-5.15.27-PM-600x400.jpeg",
 "https://sggskcm.org/wp-content/uploads/2023/10/DSC_0335-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/02/ncc-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/02/music-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2021/09/amandeep-singh-1-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2021/08/sugandha-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2021/08/mahima-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2021/09/bhupinder-pgdca-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2020/05/DSC_0924-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/05/418851659_911348747450629_5784420673145472628_n-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/05/438906644_950853903384266_8250800380471273248_n-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/05/432991193_922510126334491_5521687533864108804_n-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/05/DSC_3044-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/05/DSC_1146-600x400.jpg",
 "https://sggskcm.org/wp-content/uploads/2024/05/DSC_0520-scaled-600x400.jpg",

];

if (!fs.existsSync("./images")) {
  fs.mkdirSync("./images");
  console.log("Created images folder");
}

images.forEach((url, index) => {
  console.log("Downloading:", url);

  const cleanUrl = url.split("?")[0];
  let ext = path.extname(cleanUrl);
  if (!ext) ext = ".jpg";

  const filePath = `./images/img${index}${ext}`;
  const file = fs.createWriteStream(filePath);

  https.get(url, (res) => {
    if (res.statusCode !== 200) {
      console.log("Failed:", url);
      return;
    }

    res.pipe(file);

    file.on("finish", () => {
      console.log("Saved:", filePath);
      file.close();
    });
  }).on("error", (err) => {
    console.log("Error:", err.message);
  });
});

// const images = [
//   "https://sggskcm.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-10.48.54-AM-1-600x400.jpeg",
//  "https://sggskcm.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-10.58.28-AM-600x400.jpeg",
//  "https://sggskcm.org/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-23-at-9.06.21-PM-1-600x400.jpeg",
//  "https://sggskcm.org/wp-content/uploads/2022/05/DSC_0731-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2022/05/IMG-20220510-WA0015-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2022/05/DSC_0734-A-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2022/05/IMG-20220510-WA0016-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2023/05/WhatsApp-Image-2023-04-30-at-5.15.27-PM-600x400.jpeg",
//  "https://sggskcm.org/wp-content/uploads/2023/10/DSC_0335-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/02/ncc-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/02/music-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2021/09/amandeep-singh-1-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2021/08/sugandha-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2021/08/mahima-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2021/09/bhupinder-pgdca-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2020/05/DSC_0924-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/05/418851659_911348747450629_5784420673145472628_n-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/05/438906644_950853903384266_8250800380471273248_n-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/05/432991193_922510126334491_5521687533864108804_n-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/05/DSC_3044-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/05/DSC_1146-600x400.jpg",
//  "https://sggskcm.org/wp-content/uploads/2024/05/DSC_0520-scaled-600x400.jpg",

// ];