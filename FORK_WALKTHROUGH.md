# Forking the Code Snippets Repository

## Personalization
- Edit the Social Media [`constants`](./generator/src/constants/socials.json)
- Replace the Logo: [`logo.png`](./generator/assets/images/logo.png)

## Admin Envriroment
GitHub Actions is referencing the `admin` environment with protected permissions. This requires the owner to approve a workflow run.

#### Steps
- Navigate to Repository `Settings > Environments`
- Create a new environment called `admin`
- *Check* "Require reviewers"