const fs = require('fs');
const path = require('path');

const languages = require('./src/constants/languages.json');
const { validLanguages } = languages

// directory to check if exists
const dir = `${__dirname}/src`

describe("Validate Snippet Output Files", () => {
  const tmpFolder = `${dir}/tmp`

  test(`${tmpFolder} folder should exist`, () => {
    expect(fs.existsSync(tmpFolder)).toBeTruthy()
  })

  const metaDataFile = "metadata.json"
  const metaDataPath = `${tmpFolder}/${metaDataFile}`
  test(`${metaDataPath} file should exist`, () => {
    expect(fs.existsSync(metaDataPath)).toBeTruthy()
  })

  const postFile = "post.txt"
  const postFilePath = `${tmpFolder}/${postFile}`
  test(`${postFilePath} file should exist`, () => {
    expect(fs.existsSync(postFilePath)).toBeTruthy()
  })

  const snippetFile = "snippet.js"
  const snippetFilePath = `${tmpFolder}/${snippetFile}`
  test(`${snippetFilePath} file should exist`, () => {
    expect(fs.existsSync(snippetFilePath)).toBeTruthy()
  })

  test('should have valid Metadata keys', () => {
    const metadata = require(metaDataPath)

    const {
      name,
      description,
      hashtags,
      language,
      slug,
      header,
      image_file,
      date
    } = metadata

    expect(name).toBeTruthy()
    expect(typeof name).toBe("string")
    expect(name).toMatch(/^[a-zA-Z ]*$/)

    expect(description).toBeTruthy()
    expect(typeof description).toBe("string")

    expect(hashtags).toBeTruthy()
    expect(Array.isArray(hashtags)).toBeTruthy()
    hashtags.forEach((tag) => {
      expect(tag).toBeTruthy()
      expect(typeof tag).toBe("string")
      expect(tag).toMatch(/(#+[a-zA-Z0-9(_)]{1,})/)
    })

    expect(language).toBeTruthy()
    expect(validLanguages.includes(language)).toBeTruthy()

    expect(slug).toBeTruthy()
    expect(slug).toMatch(/[a-z-]/)

    expect(image_file).toBeTruthy()
    expect(typeof image_file).toBe("string")
    expect(image_file).toMatch(/[^\s]+.png$/)

    const isDate = (date) => {
      return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
    }

    expect(date).toBeTruthy()
    expect(isDate(date)).toBeTruthy()

    expect(header).toBeTruthy()
    expect(header).toHaveProperty('supertitle')
    expect(header).toHaveProperty('title')
  })

  const metadata = require(metaDataPath)
  const { slug } = metadata
  const imageFile = `${slug}-snippet.png`
  const imageFilePath = `${tmpFolder}/${imageFile}`
  test(`${imageFilePath} file should exist`, () => {
    expect(fs.existsSync(imageFilePath)).toBeTruthy()
  })
})