# docs/ — GitHub Pages 用

Store のサポートサイトとして公開する。トラブルシューティングの置き場を用意することが主目的で、審査でプライバシーポリシーの URL を求められた場合の受け皿も兼ねる。

## ファイル

| ファイル | 内容 | 生成元 |
|---|---|---|
| `_config.yml` | Jekyll の設定。テーマとサイト名 | — |
| `index.md` | トップページ。アプリ紹介・サポート連絡先 | — |
| `troubleshooting.md` | 症状別の切り分け | `TROUBLESHOOTING.md` |
| `privacy.md` | プライバシーポリシー | `PRIVACY_POLICY.md` |

**`troubleshooting.md` と `privacy.md` はリポジトリ直下のファイルと同じ本文。片方を直したらもう片方も直すこと。**

生成し直す場合（Git Bash）:

```bash
{ printf -- '---\ntitle: トラブルシューティング\n---\n\n'; cat TROUBLESHOOTING.md; printf -- '\n---\n\n[トップページへ戻る](./)\n'; } > docs/troubleshooting.md
```

生成後、`TROUBLESHOOTING.md` 冒頭の `APP_SPEC.md` へのリンクはサイト上に存在しないため書き換えること。

## 公開方法

無料の GitHub Pages はリポジトリの公開が前提。方法が2つある。

### A. このリポジトリで公開する

ソースコードも公開される。キーボードフックを使うアプリなので、内容を確認できることは利用者にとって安心材料になる。

1. GitHub にリポジトリを作成して push
2. Settings → Pages
3. Source: `Deploy from a branch`
4. Branch: `main`、フォルダー: `/docs` → Save

### B. ドキュメント専用のリポジトリを作る

ソースを非公開のままにできる。`docs/` の**中身**を新しいリポジトリの**直下**へ置く。

```bash
# 例: 隣に作業用フォルダーを作ってコピーする
mkdir ../romaji-ime-rescue-site
cp docs/_config.yml docs/index.md docs/troubleshooting.md docs/privacy.md ../romaji-ime-rescue-site/
cd ../romaji-ime-rescue-site
git init
git add -A
git commit -m "サイトを追加"
```

GitHub で空のリポジトリを作成し、表示される手順に従って push する。その後:

1. Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main`、フォルダー: `/ (root)` → Save

この方法では本体リポジトリと二重管理になる。更新時は `docs/` を直してからコピーし直す。

## 公開後の URL

| ページ | URL |
|---|---|
| トップ | `https://<ユーザー名>.github.io/<リポジトリ名>/` |
| トラブルシューティング | `.../troubleshooting.html` |
| プライバシーポリシー | `.../privacy.html` |

トップページの URL を Partner Center の「Web サイト」欄に指定する。

## 公開後にやること

`index.md` の「入手」節が「準備中」のままなので、Store 公開後にストアページの URL へ差し替える。
