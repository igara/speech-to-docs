# speech-to-docs

## how to use

```
# login
npx clasp login

# new create docs & script project & .clasp.json
npm run new name=[docs & script project name]
## example
npm run new name=hoge

# build
npm run build
# push
npx clasp push
# build & push & watch
npm run watch
```

## memo

```
# login for debug
npx clasp login --creds creds.json
link: https://qiita.com/abetomo/items/59379e26679e342ef6e3
mv .clasprc.json ~/

# local run (add projectId clasp.json)
npx clasp run [gas function name]
link: https://qiita.com/jiroshin/items/dcc398285c652554e66a#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%8B%E3%82%89gas%E3%82%92%E5%8F%A9%E3%81%8F

# logs
npx clasp logs
https://github.com/google/clasp#logs

# deployments
npx clasp deployments
npx clasp deploy -i [xxxxxxxxx]
```

