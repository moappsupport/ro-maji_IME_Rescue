# docs/ — サイトの内容

公開サイトの内容をここで管理する。公開は別リポジトリ（`../ro-maji-ime-rescue`）から GitHub Pages で行う。本体のソースを非公開に保つため分けている。

## ファイル

| ファイル | 内容 | 生成元 |
|---|---|---|
| `index.md` | トップページ。アプリ紹介・サポート連絡先 | 直接編集する |
| `troubleshooting.md` | 症状別の切り分け | `TROUBLESHOOTING.md` から自動生成 |
| `privacy.md` | プライバシーポリシー | `PRIVACY_POLICY.md` から自動生成 |
| `_config.yml` | Jekyll の設定 | 直接編集する |
| `README.md` | この手順書 | サイトへはコピーされない |

## 内容を修正する手順

**直接編集してよいのは `index.md` と `_config.yml` だけ。** `troubleshooting.md` と `privacy.md` は生成物なので、直接編集しても次回の同期で上書きされる。

### 1. 編集する

| 修正したい内容 | 編集するファイル |
|---|---|
| トラブルシューティング | リポジトリ直下の `TROUBLESHOOTING.md` |
| プライバシーポリシー | リポジトリ直下の `PRIVACY_POLICY.md` |
| トップページ | `docs/index.md` |
| サイトのタイトル・テーマ | `docs/_config.yml` |

### 2. 同期する

リポジトリ直下で実行する（Git Bash）。

```bash
./sync-site.sh
```

生成し直したうえで公開用リポジトリへコピーし、差分を表示する。push はしない。

### 3. 反映する

差分を確認してから、表示されたコマンドを実行する。

```bash
cd ../ro-maji-ime-rescue && git add -A && git commit -m "内容を更新" && git push
```

push から1〜2分でサイトに反映される。

## 公開設定

公開用リポジトリの Settings → Pages

- Source: `Deploy from a branch`
- Branch: `main`、フォルダー: `/ (root)`

## URL

| ページ | URL |
|---|---|
| トップ | `https://<ユーザー名>.github.io/ro-maji_IME_Rescue/` |
| トラブルシューティング | `.../troubleshooting.html` |
| プライバシーポリシー | `.../privacy.html` |

