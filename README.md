# ro-maji IME Rescue — サイト

Windows 常駐アプリ **ro-maji IME Rescue** の公開サイトです。GitHub Pages で配信しています。

IME をオフにしたまま打ってしまったローマ字を、変換キーひとつで日本語に入力し直すアプリです。

<https://moappsupport.github.io/ro-maji_IME_Rescue/>

## ページ

| ファイル | 内容 |
|---|---|
| `index.md` | トップページ。使い方・実際の画面・できること・変更履歴・設定・できないこと・動作環境・価格と基本情報・情報の取り扱い・よくある質問 |
| `ime-off.md` | IME オフで打ってしまったローマ字を直す方法 |
| `troubleshooting.md` | 症状別の切り分け手順 |
| `privacy.md` | プライバシーポリシー |

## 構成

| ファイル | 内容 |
|---|---|
| `_config.yml` | Jekyll の設定と、サイト共通の定数（価格・体験日数・読み方など） |
| `_data/faq.yml` | トップページの「よくある質問」。本文と構造化データの両方をここから作る |
| `_layouts/default.html` | 唯一のレイアウト。ヘッダーと構造化データを含む |
| `assets/css/style.css` | 唯一のスタイルシート |
| `assets/img/` | アイコン・スクリーンショット・SNS 共有用画像 |
| `robots.txt` / `sitemap.xml` | クローラ向け |
| `9b1e6c4a2f7d4a0e8c3b5d1f6a9e2c7b.txt` | IndexNow のキーファイル（更新を検索エンジンへ知らせるときに使う） |

外部の CDN・Web フォント・JavaScript・解析ツールは使っていません。アプリがネットワーク
通信を行わないのと同じく、このサイトも外部への通信を持ちません。

## 補足

このリポジトリにはサイトの内容のみを置いています。アプリのソースコードは含まれません。
`troubleshooting.md` と `privacy.md` は、開発リポジトリ側の Markdown から生成しています。

## お問い合わせ

- moappsupport@gmail.com
