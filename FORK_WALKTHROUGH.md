# Forking the Code Snippets Repository

## Personalization
- Edit the Social Media [`constants`](./generator/src/constants/socials.json)
- Replace the Logo: [`logo.png`](./generator/assets/images/logo.png)
- Replace the Character image: [`character.png`](./generator/assets/images/character.png)

## Admin Envriroment
GitHub Actions is referencing the `admin` enviroment with protected permissions. This requires the owner to approve a workflow run.

#### Steps
- Navigate to Repository `Settings > Enviroments`
- Create a new enviroment called `admin`
- *Check* "Require reviewers"