---
title: IME オフで打ったローマ字を直す方法
description: IME をオフ（半角英数）にしたまま打ってしまったローマ字を、ro-maji IME Rescue で日本語に入力し直す方法。文字列の直後にカーソルを置いて変換キーを押すだけで、すでに入力されている半角英数のローマ字にも使えます。
updated: 2026-09-14
---

IME をオフ（半角英数）にしたまま打ってしまったローマ字は、ro-maji IME Rescue で日本語に入力し直せます。

## 使い方 {#howto}

1. 打ってしまったローマ字の、すぐ後ろにカーソルを置きます。範囲を選択する必要はありません。
2. 変換キーを押します。英語配列のキーボードでは、設定で右Ctrl キーに変えて使います。
3. 日本語で入力し直されて変換候補が出るので、いつもどおり選んで確定します。

```
AsangaHTMLtoAPIwotantousuru
→ AさんがHTMLとAPIを担当する
```

打った直後だけでなく、すでに入力されている半角英数のローマ字にも使えます。直したい文字列のすぐ後ろにカーソルを移してから、変換キーを押してください。

API・HTML や「A社」「B案」のような大文字の表記は、そのまま残ります。IME がオンのときは、そのキー本来の動作をそのまま行います。

<div class="cta">
  <a class="btn-primary" href="{{ site.store_url }}?cid=site_guide">Microsoft Store で無料で試す</a>
  <p class="cta-note">{{ site.trial_days }}日間の無料体験版があります（体験後は {{ site.price_jpy }} 円の買い切り）。Windows の PC 用アプリです。<a href="{{ '/' | relative_url }}">製品の詳しい説明</a></p>
</div>

## 使うときに知っておくこと {#notes}

- **Enter で改行した前の行は対象外です。** 改行で区切られた範囲ごとに、末尾へカーソルを置いて変換してください（[詳しく]({{ '/troubleshooting.html#no-multiline' | relative_url }})）
- **小文字の英単語はかなになります。** `api` のような小文字の英単語はローマ字と区別できません。残したい英単語は大文字で打つか、間に半角スペースを入れてください（[詳しく]({{ '/troubleshooting.html#unwanted-conversion' | relative_url }})）
- **長い文章は区切って変換してください。** 目安はローマ字で 150 文字程度です。それより長いと、IME が先頭のほうから変換を自動で確定していきます（[詳しく]({{ '/troubleshooting.html#long-text' | relative_url }})）
- **途中で止まっても戻せます。** 文字を消す前に止まった場合は、元のローマ字がそのまま残っています。消した後に止まった場合も、既定の設定なら元のローマ字を `Ctrl+V` で貼り戻せます。入力していたアプリの「元に戻す」（`Ctrl+Z`）で戻せる場合もあります（[詳しく]({{ '/troubleshooting.html#interrupted' | relative_url }})）
- **すべてのアプリで動くわけではありません。** 対象のアプリのコピー操作・選択操作・IME 制御の挙動に依存します（[動作環境]({{ '/#env' | relative_url }})）
