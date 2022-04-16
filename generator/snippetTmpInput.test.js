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
      header,
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

    expect(header).toBeTruthy()
    expect(header).toHaveProperty('supertitle')
    expect(header).toHaveProperty('title')
  })
})