# Code Snippet Generator
Generating and storing code snippets for various tips and tricks. Upload snippet metadata, then generate an image automatically with GitHub Actions.

## Demo Video
See everything in action in the [demo video](https://www.youtube.com/watch?v=btBxWrSrr80).

[![Demo Youtube Video](./action-screenshots/youtube_thumbnail.png)
](https://www.youtube.com/watch?v=btBxWrSrr80)

## Example Snippet:
![Example Tidbit](./snippets/snippet-example/javascript-destructure-snippet.png)

## Supported Languages:
See [`languages.json`](./generator/src/constants/languages.json)


## Resources
- Icons from [Icons8](https://icons8.com/)
- Syntax Highlighter: [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)
## Generate Snippet w/ GitHub Actions

### Navigate to Actions Tab
Trigger manual workflow runs from the Actions tab. Click 'run workflow'

![Actions Tab](./action-screenshots/actions_tab.png)

### Admin Workflow Approval
Approve these actions after triggering

![Admin Workflow Approval](./action-screenshots/approve_workflow.png)

![Admin Workflow Approval](./action-screenshots/admin_approve.png)

### Run the `Upload Draft Snippet` Action
Makes folder in the `/drafts` with metadata inputs

![Upload Draft Snippet](./action-screenshots/upload_draft.png)

### Run the `Delete Draft Snippet` Action
Removes snippet from `/drafts` folder if found

![Delete Draft Snippet](./action-screenshots/delete_draft.png)

### Run the `Draft Generator Test` Action
Acceses the `/drafts` folder and attempts to generate a snippet

![Draft Generator Test](./action-screenshots/test_generator.png)


### Download Sample Snippet
After running the `Draft Generator Test` action, download the artifact

![Download Sample Snippet](./action-screenshots/draft_generator_test.png)

### Run the `Generate Snippet` Action
Accesses the `/drafts` folder, generates the snippet image, save to `/snippets` folder

![Generate Snippet](./action-screenshots/generate_snippet.png)

![Snippet Commit](./action-screenshots/snippet_commit.png)

![Snippet Folder](./action-screenshots/snippets_folder.png)

### Run the `Delete Published Snippet` Action
Removes snippet from `/snippets` folder if found

![Delete Published Snippet](./action-screenshots/delete_published.png)

---
## Run Snippet Generator Locally
Run the following commands to make snippet draft, and generate a snippet image:
```sh
  git clone https://github.com/spencerlepine/code-snippets.git
  cd code-snippets
  mkdir -p ./drafts/my-cool-snippet
  cp -a ./drafts/snippet-example/. ./drafts/my-cool-snippet
  # edit "snippet.js" and "metadata.json"
  mkdir -p ./generator/src/tmp
  cp -a ./drafts/my-cool-snippet/. ./generator/src/tmp
  cd generator && npm install
  npm run generate:screenshot
  cd ..
  mkdir -p ./snippets/my-cool-snippet
  cp -a ./generator/src/tmp/. ./snippets/my-cool-snippet
  # view the ".png" file in ./snippets/my-cool-snippet
```

### Takes metadata
```json
{
  "name": "JavaScript Destructuring",
  "description": "Discover JavaScript object destructuring. A common way to cleanly extract properties from objects.",
  "hashtags": [
    "#javascript",
    "#coding",
    "#programming",
  ],
  "language": "javascript",
  "header": {
    "supertitle": "",
    "title": "JavaScript Destructuring"
  },
}
```

### Generates snippet image
![Example Tidbit](./snippets/snippet-example/javascript-destructure-snippet.png)

### Saves output metadata
```diff
{
  "name": "JavaScript Destructuring",
  "description": "Discover JavaScript object destructuring. A common way to cleanly extract properties from objects.",
  "hashtags": [
    "#javascript",
    "#coding",
    "#programming",
  ],
  "language": "javascript",
+  "slug": "javascript-destructuring",
  "header": {
    "supertitle": "",
    "title": "JavaScript Destructuring"
  },
+  "image_file": "snippet.png",
+  "date": "2022-04-15T21:39:32.284Z"
}
```

### Saves POST text file (for social media)
```
// post.txt
Discover JavaScript object destructuring. A common way to cleanly extract properties from objects.

#javascript #softwareengineer #coding #programming #developer #software #code
```

# 🚀 Contributors

- [Spencer Lepine](https://github.com/spencerlepine)
  - 🏠 Blog [spencerlepine.com](https://www.spencerlepine.com)
  - 😺 GitHub [@spencerlepine](https://github.com/spencerlepine)
  - 🐦 Twitter [@spencerlepine](http://twitter.com/spencerlepine)
  - 💼 [LinkedIn](https://www.linkedin.com/in/spencer-lepine)

<a href="https://www.buymeacoffee.com/spencerlepine" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
