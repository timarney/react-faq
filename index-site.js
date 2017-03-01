let path = require("path");
let fs = require("fs");
let snarkdown = require("snarkdown");
let cheerio = require("cheerio");
let md5 = require("md5");
let algoliasearch = require("algoliasearch");
let config = require("./config");
let { appID, apiKey, searchIndex } = config.algolia;
let client = algoliasearch(appID, apiKey);
let index = client.initIndex(searchIndex);

const toJSON = data => {
  return JSON.stringify(data, null, 4);
};

/*  temp function to testing */
const saveFile = (data, filename) => {
  fs.writeFile(`${__dirname}/${filename}.json`, data, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log(`${filename} was saved!`);
  });
};

const walkFiles = (dir, results) => fs.readdirSync(dir).map(file => {
  let isDir = fs.statSync(path.join(dir, file)).isDirectory();
  isDir
    ? walkFiles(path.join(dir, file), results)
    : filterFile(dir, file, results);
});

const filterFile = (dir, file, results) => {
  let filename = path.join(dir, file);
  let ext = path.extname(filename);

  if (ext != ".md") return;

  console.log(filename);

  results.push(filename);
};

/* read the contents of the file */
const getContent = file => {
  try {
    let data = fs.readFileSync(file, "utf8");
    return data;
  } catch (e) {
    console.log("error:", e.stack);
  }
};

const parseHTML = content => {
  let html = snarkdown(content);
  return html;
};

const loadHTML = html => {
  saveFile(html, "html");
  let $ = cheerio.load(html);
  return $;
};

/* pull out the defined tags and save each one to a record */
const getTags = ($, filename, records, selectors) => {
  let current_position = 1;

  selectors.map(item => {
    $(item.tag).each(function(i, elem) {
      let text = $(this).text();
      let html = $(this).html();
      let uuid = md5(filename);

      let d = {
        uuid,
        text,
        tag_name: item.tag,
        weight: {
          position: current_position,
          score: item.weight
        }
      };

      records.push(d);
      current_position++;
    });
  });
};

const indexFile = records => {
  const selectors = [
    { tag: "strong", weight: 5 },
    { tag: "p", weight: 2 },
    { tag: "li", weight: 6 }
  ];
  const html = parseHTML(getContent(file));
  const $ = loadHTML(html);
  getTags($, file, records, selectors);
  saveFile(toJSON(records), "test");
};

/* save data back to algolia */
const saveData = data => {
  index.addObjects(data, function(err, content) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(content);
  });
};

const go = dir => {
  // kick things off
  let records = [];
  let filenames = [];
  
  walkFiles(dir, filenames);

  filenames.map(item => {
    console.log(`== ${item} == `);
  });
};


let dir = __dirname + "/pages/";
go(dir);

/* https://discourse.algolia.com/t/gatsbyjs-phenomic-algolia-site-search/649 */
