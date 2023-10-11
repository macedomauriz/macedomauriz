![image](https://github.com/macedomauriz/me/assets/21261211/e75cce92-35c4-4b24-b00c-a6ace2760939)

# macedomauriz.com

## Development

- **Languages**: Typescript, CSS
- **Frontend library**: Next JS (React)
- **Style library**: NextUI
- **MDX (blog)**: mdx-bundler
- **Linting**: ESlint
- **Formatting**: Prettier

#### Install dependencies

```bash
npm i
```

#### Run the development server

```bash
npm run dev
```

#### Build production

```bash
npm run build
```

## Deploy

Github Actions makes the deploy in AWS S3 when pushing to `master` branch

```bash
  git push origin master
```

## Roadmap

- Customized OpenGraph image
- Lambda function update from GitHub Actions
  - https://awstip.com/tutorial-updating-an-aws-lambda-function-using-github-actions-af832b493a0d
  - https://blog.jakoblind.no/aws-lambda-github-actions/
- Use isDark hook in every mode condition
- Remove unused Lint hooks
- Evaluate Speed Insights warnings
- Videos in MDX
- Better hero image load handling
- JSON-LD
- Migrate out of NextUI beta to stable version (Switches to Tailwind) https://github.com/nextui-org/nextui/discussions/1035
- Body content separation
- Blog landing page
- Non-MDX-table test
- Breadcrumbs
- Upgrade hero image
- Code-title styles
- Throttle to Debounce
- Multiple of X separation (CSS)
- Merchandise

## License

[MIT](https://choosealicense.com/licenses/mit/)
