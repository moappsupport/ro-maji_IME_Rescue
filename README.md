# docs/ — GitHub Pages 用

Microsoft Store はプライバシーポリシーの**公開 URL** を要求するため、このフォルダーを GitHub Pages で公開する。

## ファイル

| ファイル | 内容 |
|---|---|
| `_config.yml` | Jekyll の設定。テーマとサイト名 |
| `index.md` | トップページ。アプリ紹介・サポート連絡先 |
| `privacy.md` | プライバシーポリシー |

`privacy.md` の本文はリポジトリ直下の `PRIVACY_POLICY.md` と同じ内容。**片方を直したらもう片方も直すこと。** 差分が出ると、Store に提出したポリシーと公開しているポリシーが食い違う。

## 公開手順

1. GitHub にリポジトリを作成して push する
2. リポジトリの Settings → Pages を開く
3. Source で `Deploy from a branch` を選ぶ
4. Branch に `main`、フォルダーに `/docs` を指定して Save
5. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

プライバシーポリシーの URL は `https://<ユーザー名>.github.io/<リポジトリ名>/privacy.html`。これを Partner Center のプライバシーポリシー URL 欄に指定する。

## 注意

GitHub Pages を無料で使う場合、リポジトリを**公開**する必要がある。このリポジトリで公開するとソースコードも公開される。ソースを非公開のままにしたい場合は、この `docs/` の中身だけを別のリポジトリへコピーして、そちらで Pages を有効にする。

## 公開後にやること

`index.md` の「入手」節が「準備中」のままなので、Store 公開後にストアページの URL へ差し替える。
