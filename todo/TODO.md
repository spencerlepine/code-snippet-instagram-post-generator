## Drafts (`./drafts`)
- refer to paper

## Snippet Generator (`./generator`)
- refer to paper

## Publish Scripts (`./publish`)

### Twitter Post Script:
 - [ ] Set up Twitter account API
 - [ ] download node libraries
 - [ ] create `credentials` to use for script
 - [ ] document how to use script

> `index.js` (via ShibaBot twitter poster)
```js

```


### LinkedIn Post Script:
 - [ ] Set up LinkedIn account API
 - [ ] download python libraries
 - [ ] create `credentials` to use for script
 - [ ] document how to use script

> `linkedin-post.py` (via Python LinkedIn API [Article](https://www.jcchouinard.com/how-to-post-on-linkedin-api-with-python/))
```py
import requests

from ln_oauth import auth, headers

credentials = 'credentials.json'
access_token = auth(credentials) # Authenticate the API
headers = headers(access_token) # Make the headers to attach to the API call.

def user_info(headers):
    '''
    Get user information from Linkedin
    '''
    response = requests.get('https://api.linkedin.com/v2/me', headers = headers)
    user_info = response.json()
    return user_info

# Get user id to make a UGC post
user_info = user_info(headers)
urn = user_info['id']

# UGC will replace shares over time.
api_url = 'https://api.linkedin.com/v2/ugcPosts'
author = f'urn:li:person:{urn}'

message = '''
Interested to automate LinkedIn using #Python and the LinkedIn API?
Read this in-depth Python for #SEO post by Jean-Christophe Chouinard.
Proof being, I just made this post using the LinkedIn API
'''
link = 'https://www.jcchouinard.com/how-to-use-the-linkedin-api-python/'
link_text = 'Complete tutorial using the LinkedIn API'

post_data = {
    "author": author,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": message
                },
                "shareMediaCategory": "ARTICLE",
                "media": [
                    {
                        "status": "READY",
                        "description": {
                            "text": message
                        },
                        "originalUrl": link,
                        "title": {
                            "text": link_text
                        }
                    }
                ]
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "CONNECTIONS"
        }
    }

if __name__ == '__main__':
    r = requests.post(api_url, headers=headers, json=post_data)
    r.json()
```



## GitHub Action
Run this action manually

JOB #1 - Build Snippet from draft
1. Pull a draft file from `draft` folder, end the GitHub Action if none found
2. Move draft file into `build` folder
3. Run the builder (Converting `draft-metadata.json` file to snippet image file)
  - Pull from the assets
  - Pull from the constants
  - Render the html page, save to image
     - dom-to-image
     - wkhtmltoimage (included in the wkhtmltopdf tool)
     - IMGKit (for ruby and based on wkhtmltoimage)
     - imgkit (for python and based on wkhtmltoimage)
     - python-webkit2png
4. Save the image to output folder
5. Add to metadata, and save to output folder
6. Generate `post.txt` file, with name, description, and hashtags for social media posts
7. Upload output folder to artifacts
8. Move the output files into `snippets` folder
9. CLEANUP, delete folder in drafts, delete output folder in builder
10. Commit new snippet to the repo, with fake commit "Bot"

JOB #2 - Publish the snippet to Portfolio Site

1. Git Clone portfolio-site
2. Download snippet artifact
3. Move snippet folder/files into `content/snippets/...`
4. Commit new snippet to the repo, with fake commit "Bot"

JOB #3 - LinkedIn Snippet Post
1. Clone Git Repo
2. Set up PYTHON
3. Download the artifact
4. Move snippet folder/files into `publisher/linkedin` folder
5. Run publish script
6. Output the LinkedIn post url


JOB #4 - Twitter Snippet Post
1. Clone Git repo
2. set up node/dependencies
3. Download artifact
4. Move snippet folder/files into `publisher/linkedin` folder
5. Run publish script
6. POST the tweet on twitter
7. Output the tweet URL