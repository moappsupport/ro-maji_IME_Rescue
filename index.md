---
title: ro-maji IME Rescue
description: IME をオフにしたまま打ってしまったローマ字を、変換キーひとつで日本語に入力し直す Windows 常駐アプリ。消して打ち直す必要はありません。15日間の無料体験版があります。
# sitemap の lastmod と構造化データの dateModified に使う。内容を変えたら手で更新する。
updated: 2026-08-08
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
  <p class="hero-lead-note">（Microsoft IME / Google 日本語入力で動作確認済み）</p>

  <div class="cta">
    <a class="btn-primary" href="{{ site.store_url }}">Microsoft Store で入手</a>
    <p class="cta-note">15日間の無料体験版があります。ご購入の前に<a href="#env">動作環境</a>と<a href="#limits">できないこと</a>をご確認ください。</p>
  </div>

  <div class="hero-showcase">
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
    <ul class="cards">
      <li><b>変換キーひとつで完結</b><span>覚えるショートカットはありません。打ち間違えたら、そのまま押すだけです。</span></li>
      <li><b>邪魔をしません</b><span>IME がオンのときは変換キーが通常どおり動作するので、普段の日本語入力の邪魔をしません。</span></li>
    </ul>
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

## できること {#can}

<div class="limits" markdown="1">
<div class="limit-item" markdown="1">

### 長さにかかわらず、まとめて変換します

カーソルの直前にある半角英数を、区切りまでまとめて変換します。範囲を選択する必要はありません。

```
kyounotenkihaharedeatatakaidesu
→ 今日の天気は晴れで温かいです
```

画面端での折り返しは影響しません。折り返して数行に見えていても、Enter を押していなければ 1 行としてまとめて変換します。

</div>
<div class="limit-item" markdown="1">

### 大文字の英単語は、そのままの表記で残ります

`API` `HTML` のような略語は、変換されずに元の表記のまま残ります。**1 文字だけの大文字も残ります。**

```
APIwotukau            → APIを使う
kyouhaHTMLwobenkyou   → 今日はHTMLを勉強
Bandeikimasu          → B案で行きます
Ashanoteian           → A社の提案
```

</div>
</div>

## 設定 {#settings}

タスクトレイのアイコンをダブルクリックすると設定画面が開きます。

<div class="settings">
  <figure class="shot">
    <img src="assets/img/settings.png" alt="ro-maji IME Rescue の設定画面。取得範囲・動作の速さ（プリセットと詳細設定）・クリップボード・スタートアップの各項目" width="514" height="822" loading="lazy">
  </figure>
  <ul class="settings-list">
    <li><b>取得範囲</b><span>カーソル位置からどこまで文字を遡って読み取るかを選べます。行頭まで／直前2行まで／文書先頭まで。</span></li>
    <li><b>動作の速さ</b><span>「安定重視／標準／最速」から選べます。動作が追いつかないアプリでは「安定重視」にしてください。詳細設定を開けば、待機時間を7項目まで個別に調整することもできます。</span></li>
    <li><b>クリップボード</b><span>処理中に一時的に上書きされる内容の扱いを選べます。そのまま保持／元の内容を復元／空にする。</span></li>
    <li><b>スタートアップ</b><span>Windows 起動時の自動起動に対応しています。既定はオフです。</span></li>
  </ul>
</div>

## できないこと・制限事項 {#limits}

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

どこからが打ち間違えたローマ字なのかを判別する方法がないためです。区切りになるのは半角スペースと改行だけで、変換済みの日本語の直後でも止まります。

</div>
<div class="limit-item" markdown="1">

### 小文字の英単語は残せません

`api` のように**小文字の英単語はローマ字と区別する方法がない**ため、かなとして読み直されます。`export` のようにローマ字として成立しない綴りは、かなと英字が混じった結果になります。

```
apiwotukau          → アピを使う
PDFwoexportshimasu  → PDFを得x歩rtします
```

残したい英単語は**大文字で入力する**か、間に半角スペースを入れてから変換してください。

</div>
<div class="limit-item" markdown="1">

### その他

- すべてのアプリで動作するわけではありません。対象アプリのコピー操作、選択操作、IME 制御の挙動に依存します。
- パスワード欄など、内容を知られたくない入力欄では使用しないでください。
- 対象のアプリが管理者権限で動作している場合、Windows の仕組み（UIPI）により操作できません。

症状ごとの切り分け手順は[トラブルシューティング](troubleshooting.html)にまとめています。

</div>
</div>

## 動作環境 {#env}

<div class="env" markdown="1">

| 項目 | 要件 |
|---|---|
| OS | Windows 10 バージョン 2004（ビルド 19041）以降 / Windows 11 |
| アーキテクチャ | 64ビット（x64） |
| キーボード | **変換キーがあること**（日本語配列 / JIS） |

<p class="env-note">.NET のインストールは不要です。ネットワーク通信を行わず、管理者権限も必要ありません。</p>

<div class="env-warn">
  <p class="note-title">変換キーのないキーボードでは動作しません</p>
  <p>変換キーは日本語配列（106/109 キー）にあるキーで、<strong>英語配列（US / ANSI）には存在しません。</strong>本アプリ側に、他のキーへ割り当てを変更する機能はありません。</p>
  <p>ただし AutoHotkey などのツールで任意のキーから変換キーを送っている場合は動作します。変換キーがどのキーから送られたかは区別しないためです。</p>
  <p>日本語配列でも、Windows のキーボードレイアウト設定が英語配列になっていると認識されないことがあります。</p>
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
    <p>15日間の無料体験版があります。Microsoft Store から入手できます。</p>
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
    <p>大文字はそのままの表記で残ります（1 文字でも保持されます）。<code>api</code> のような小文字の英単語はローマ字と区別する方法がないため、かなとして読み直されます。<code>export</code> のようにローマ字として成立しない綴りは、かなと英字が混じった結果になります。残したい英単語は大文字で入力するか、間に半角スペースを入れてから変換してください。</p>
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
        "text": "15日間の無料体験版があります。Microsoft Store から入手できます。"
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
        "text": "大文字はそのままの表記で残ります（1 文字でも保持されます）。api のような小文字の英単語はローマ字と区別する方法がないため、かなとして読み直されます。export のようにローマ字として成立しない綴りは、かなと英字が混じった結果になります。残したい英単語は大文字で入力するか、間に半角スペースを入れてから変換してください。"
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
