---
title: ro-maji IME Rescue
description: IME をオフにしたまま打ってしまったローマ字を、変換キーひとつで日本語に入力し直す Windows 常駐アプリ。消して打ち直す必要はありません。7日間の無料体験版があります。
# sitemap の lastmod と構造化データの dateModified に使う。内容を変えたら手で更新する。
updated: 2026-08-04
---

<div class="hero">
  <div class="hero-head">
    <img class="hero-icon" src="assets/img/icon.png" alt="ro-maji IME Rescue のアイコン" width="88" height="88">
    <div class="hero-titles">
      <h1>ro-maji IME Rescue</h1>
      <p class="hero-tagline">ローマ字を日本語に変換するアプリ</p>
    </div>
  </div>

  <p class="hero-lead">IME をオフにしたまま打ってしまったローマ字を<strong>変換キーひとつ</strong>で日本語に入力し直します、消して打ち直す必要はありません。</p>

  <div class="cta">
    <a class="btn-primary" href="{{ site.store_url }}">Microsoft Store で入手</a>
    <p class="cta-note">7日間の無料体験版があります。ご購入の前に<a href="#env">動作環境</a>と<a href="#limits">制限事項</a>をご確認ください。</p>
  </div>

  <div class="demo">
    <div class="demo-row is-before">
      <span class="demo-label">IME オフのまま打ってしまった</span>
      <p class="demo-text">kyouhaHTMLtoAPIwobenkyousita</p>
    </div>
    <div class="demo-key">
      <kbd>変換</kbd>
      <span>カーソルを文字列の直後に置いて押すだけ。範囲を選択する必要はありません。</span>
    </div>
    <div class="demo-row is-after">
      <span class="demo-label">日本語に入力し直される</span>
      <p class="demo-text">今日はHTMLとAPIを勉強した</p>
    </div>
  </div>

  <p class="hero-foot">起動するとタスクトレイに常駐します。文字の読み取りにコピー操作を使うため、処理中はクリップボードを一時的に上書きします。</p>
</div>

## 実際の画面 {#screens}

<div class="shots">
  <figure class="shot">
    <img src="assets/img/before.png" alt="IME をオフのまま入力した半角ローマ字がメモ帳に並んでいる状態" width="1920" height="370" loading="lazy">
    <figcaption>変換キーを押す前</figcaption>
  </figure>
  <figure class="shot">
    <img src="assets/img/after.png" alt="変換キーを押して同じ文が日本語に入力し直された状態" width="1920" height="370" loading="lazy">
    <figcaption>変換キーを押した後</figcaption>
  </figure>
</div>

## 特長 {#features}

<ul class="cards">
  <li><b>変換キーひとつで完結</b><span>覚えるショートカットはありません。打ち間違えたら、そのまま押すだけです。</span></li>
  <li><b>邪魔をしません</b><span>IME がオンのときは、変換キーは通常どおり動作します。</span></li>
  <li><b>文章を壊しません</b><span>処理に失敗した場合は文字を消さずに中断します。元の文章はそのまま残ります。</span></li>
</ul>

## 設定 {#settings}

タスクトレイのアイコンをダブルクリックすると設定画面が開きます。

<div class="settings">
  <figure class="shot">
    <img src="assets/img/settings.png" alt="ro-maji IME Rescue の設定画面。取得範囲・動作設定・クリップボード・スタートアップの各項目" width="501" height="661" loading="lazy">
  </figure>
  <ul class="settings-list">
    <li><b>取得範囲</b><span>カーソル位置からどこまで文字を遡って読み取るかを選べます。行頭まで／直前2行まで／文書先頭まで。</span></li>
    <li><b>動作設定</b><span>各動作の待機時間を 7 項目まで調整できます。動作が追いつかないアプリでは、まず操作間待機を増やしてください。</span></li>
    <li><b>クリップボード</b><span>処理中に一時的に上書きされる内容の扱いを選べます。そのまま保持／元の内容を復元／空にする。</span></li>
    <li><b>スタートアップ</b><span>Windows 起動時の自動起動に対応しています。既定はオフです。</span></li>
  </ul>
</div>

## 動作環境 {#env}

<div class="env" markdown="1">

| 項目 | 要件 |
|---|---|
| OS | Windows 10 バージョン 2004（ビルド 19041）以降 / Windows 11 |
| アーキテクチャ | 64ビット（x64） |
| キーボード | **変換キーがあること**（日本語配列 / JIS） |
| IME | 日本語 IME（Microsoft IME / Google 日本語入力で動作確認済み） |

<p class="env-note">.NET のインストールは不要です。ネットワーク通信を行わず、管理者権限も必要ありません。</p>

<div class="env-warn">
  <p class="note-title">変換キーのないキーボードでは動作しません</p>
  <p>変換キーは日本語配列（106/109 キー）にあるキーで、<strong>英語配列（US / ANSI）には存在しません。</strong>本アプリ側に、他のキーへ割り当てを変更する機能はありません。</p>
  <p>ただし AutoHotkey などのツールで任意のキーから変換キーを送っている場合は動作します。変換キーがどのキーから送られたかは区別しないためです。</p>
  <p>日本語配列でも、Windows のキーボードレイアウト設定が英語配列になっていると認識されないことがあります。</p>
</div>

</div>

## 制限事項 {#limits}

<div class="limits" markdown="1">
<div class="limit-item" markdown="1">

### Enter で改行した位置を越えて変換できません

変換されるのは、直前の改行からカーソルまでの範囲だけです。それより前の行は残ります。

```
kyouhaiitenki           ← Enter で改行したので変換されません
desunodesannposisimasu  ← ここにカーソルがあると、この範囲だけ変換されます
```

画面端での折り返しは影響しません。長い文章が折り返して複数行に見えていても、Enter を押していなければ 1 行として扱われ、まとめて変換されます。改行で区切られた範囲ごとにカーソルを置いて変換してください。

</div>
<div class="limit-item" markdown="1">

### 直前の半角英数はまとめて対象になります

カーソル直前の半角英数は、空白で区切られていない限りすべて変換対象になります。

```
apiwotukau       → api ごと変換されてしまいます
api wotukau      → wotukau だけが変換されます
```

どこからが打ち間違えたローマ字なのかを判別する方法がないためです。意図して入力した英数字を残したい場合は、間に半角スペースを入れてから変換してください。

</div>
<div class="limit-item" markdown="1">

### 大文字の英単語は残りますが、小文字は残りません

`API` `OK` のように**大文字は、そのままの表記で残ります**（1 文字でも保持されます）。

```
APIwotukau            → APIを使う
kyouhaHTMLwobenkyou   → 今日はHTMLを勉強
desuI                 → ですI
```

`api` のように**小文字の英単語はローマ字と区別できない**ため、かなに変換されます。残したい場合は、間に半角スペースを入れてから変換してください。

</div>
<div class="limit-item" markdown="1">

### その他

- すべてのアプリで動作するわけではありません。対象アプリのコピー操作、選択操作、IME 制御の挙動に依存します。
- パスワード欄など、内容を知られたくない入力欄では使用しないでください。
- 対象のアプリが管理者権限で動作している場合、Windows の仕組み（UIPI）により操作できません。

症状ごとの切り分け手順は[トラブルシューティング](troubleshooting.html)にまとめています。

</div>
</div>

## よくある質問 {#faq}

<div class="faq">
  <details>
    <summary>英語配列のキーボードでも使えますか</summary>
    <p>使えません。本アプリは変換キーだけを合図に動作しますが、変換キーは日本語配列（106/109 キー）にあるキーで、英語配列（US / ANSI）には存在しません。本アプリ側に、他のキーへ割り当てを変更する機能はありません。ただし AutoHotkey などのツールで任意のキーから変換キーを送っている場合は動作します。</p>
  </details>
  <details>
    <summary>無料で試せますか</summary>
    <p>7日間の無料体験版があります。Microsoft Store から入手できます。</p>
  </details>
  <details>
    <summary>インターネット接続や .NET は必要ですか</summary>
    <p>どちらも不要です。本アプリはネットワーク通信を一切行わず、必要なものはすべてアプリに含まれています。管理者権限も必要ありません。</p>
  </details>
  <details>
    <summary>Google 日本語入力でも動きますか</summary>
    <p>動きます。Microsoft IME と Google 日本語入力の両方で動作を確認しています。</p>
  </details>
  <details>
    <summary>API や HTML のような英単語も変換されてしまいますか</summary>
    <p>大文字はそのままの表記で残ります（1 文字でも保持されます）。<code>api</code> のような小文字の英単語はローマ字と区別できないため、かなに変換されます。残したい場合は、間に半角スペースを入れてから変換してください。</p>
  </details>
  <details>
    <summary>Enter で改行した前の行も変換できますか</summary>
    <p>できません。変換されるのは、直前の改行からカーソルまでの範囲だけです。画面端での折り返しは影響しないため、Enter を押していなければ複数行に見えていてもまとめて変換されます。</p>
  </details>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "{{ '/' | absolute_url }}#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "英語配列のキーボードでも使えますか",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "使えません。本アプリは変換キーだけを合図に動作しますが、変換キーは日本語配列（106/109 キー）にあるキーで、英語配列（US / ANSI）には存在しません。本アプリ側に、他のキーへ割り当てを変更する機能はありません。ただし AutoHotkey などのツールで任意のキーから変換キーを送っている場合は動作します。"
      }
    },
    {
      "@type": "Question",
      "name": "無料で試せますか",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "7日間の無料体験版があります。Microsoft Store から入手できます。"
      }
    },
    {
      "@type": "Question",
      "name": "インターネット接続や .NET は必要ですか",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "どちらも不要です。本アプリはネットワーク通信を一切行わず、必要なものはすべてアプリに含まれています。管理者権限も必要ありません。"
      }
    },
    {
      "@type": "Question",
      "name": "Google 日本語入力でも動きますか",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "動きます。Microsoft IME と Google 日本語入力の両方で動作を確認しています。"
      }
    },
    {
      "@type": "Question",
      "name": "API や HTML のような英単語も変換されてしまいますか",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "大文字はそのままの表記で残ります（1 文字でも保持されます）。api のような小文字の英単語はローマ字と区別できないため、かなに変換されます。残したい場合は、間に半角スペースを入れてから変換してください。"
      }
    },
    {
      "@type": "Question",
      "name": "Enter で改行した前の行も変換できますか",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "できません。変換されるのは、直前の改行からカーソルまでの範囲だけです。画面端での折り返しは影響しないため、Enter を押していなければ複数行に見えていてもまとめて変換されます。"
      }
    }
  ]
}
</script>
