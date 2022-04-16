const fs = require('fs');
const path = require('path');

const dir = `${__dirname}/src`
const tmpFolder = `${dir}/tmp`

const metaDataPath = `${tmpFolder}/metadata.json`
const metadata = require(metaDataPath)
const {
  name,
  description,
  hashtags,
} = metadata
const slugName = (name.replace(" ", "-")).toLowerCase()

const output = {
  ...metadata,
  "image_file": `${slugName}-snippet.png`,
  "slug": slugName,
  "date": ((new Date).toISOString())
}

const data = JSON.stringify(output);
fs.writeFileSync(metaDataPath, data);

const postData = ([
  name,
  description,
  hashtags.join(' ')
]).join('\n')
const postDataPath = `${tmpFolder}/post.txt`
fs.writeFileSync(postDataPath, postData);

