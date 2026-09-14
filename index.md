---
title: IME オフで打ったローマ字を日本語に変換
description: IME をオフ（半角英数）にしたまま打ってしまったローマ字を、変換キーひとつで日本語に入力し直す Windows アプリ。英語配列では右Ctrl キーで使えます。API などの大文字は残ります。30日間の無料体験版があります。
# sitemap の lastmod と構造化データの dateModified に使う。内容を変えたら手で更新する。
# description では Liquid が使えないので、体験日数（_config.yml の trial_days）を直接書いている。
updated: 2026-09-14
---

<div class="hero">
  <div class="hero-head">
    <img class="hero-icon" src="{{ '/assets/img/icon.png' | relative_url }}" alt="ro-maji IME Rescue のアイコン" width="88" height="88">
    <div class="hero-titles">
      <h1>ro-maji IME Rescue</h1>
      <p class="hero-tagline">{{ site.tagline }}</p>
    </div>
  </div>

  <p class="hero-lead">IME をオフ（半角英数）にしたまま打ってしまったローマ字を、<strong>変換キーひとつ</strong>で日本語に入力し直します。消して打ち直す必要はありません（Microsoft IME / Google 日本語入力で動作確認済み）。</p>

  <div class="cta">
    <a class="btn-primary" href="{{ site.store_url }}?cid=site_hero">Microsoft Store で無料で試す</a>
    <p class="cta-note">{{ site.trial_days }}日間の無料体験版があります（体験後は {{ site.price_jpy }} 円の買い切り）。Windows の PC 用アプリです。ご購入の前に<a href="{{ '/#env' | relative_url }}">動作環境</a>と<a href="{{ '/#limits' | relative_url }}">できないこと</a>をご確認ください。</p>
  </div>

  <div class="hero-showcase">
    <div class="demo">
      <div class="demo-row is-before">
        <span class="demo-label">IME オフのまま打ってしまった</span>
        <p class="demo-text">AsangaHTMLtoAPIwotantousuru</p>
      </div>
      <div class="demo-key">
        <kbd>変換</kbd>
        <strong>カーソルを文字列の直後に置いて押すだけ。範囲を選択する必要はありません。</strong>
      </div>
      <div class="demo-row is-after">
        <span class="demo-label">日本語に入力し直される</span>
        <p class="demo-text">AさんがHTMLとAPIを担当する</p>
      </div>
    </div>
    <ul class="cards">
      <li><b>普段の入力を邪魔しません</b><span>IME がオンのときは、そのキー本来の動作をそのまま行います。</span></li>
      <li><b>変換キーひとつで完結</b><span>覚えるショートカットはありません（右Ctrl キーにも変更できます）。</span></li>
    </ul>
  </div>

  <p class="hero-foot">起動するとタスクトレイに常駐します。読み取りにコピー操作を使うため、処理中はクリップボードを一度上書きします。</p>
</div>

## 使い方 {#howto}

1. Microsoft Store からインストールして起動します。タスクトレイに常駐します。
2. IME オフのまま打ってしまった文字列の、すぐ後ろにカーソルを置きます。範囲を選択する必要はありません。
3. 変換キーを押します。日本語で入力し直されて変換候補が出るので、いつもどおり確定してください。英語配列のキーボードでは、設定で右Ctrl キーに変えて使います。

打った直後だけでなく、すでに入力されている半角英数のローマ字にも使えます。詳しくは「[IME オフで打ったローマ字を直す方法]({{ '/ime-off.html' | relative_url }})」をご覧ください。

## 実際の画面 {#screens}

<div class="shots">
  <figure class="shot">
    <img src="{{ '/assets/img/before.png' | relative_url }}" alt="IME をオフのまま入力した半角ローマ字がメモ帳に並んでいる状態" width="1920" height="370" loading="lazy">
    <figcaption>変換キーを押す前（IME オフのまま打ったローマ字）</figcaption>
  </figure>
  <figure class="shot">
    <img src="{{ '/assets/img/after.png' | relative_url }}" alt="変換キーを押して同じ文が日本語に入力し直され、変換候補を選んで確定できる状態" width="1920" height="370" loading="lazy">
    <figcaption>変換キーを押した後（変換候補を選んで確定します）</figcaption>
  </figure>
</div>

<div class="can-row" markdown="1">
<section class="can-col" markdown="1">

## できること {#can}

<div class="limits" markdown="1">
<div class="limit-item" markdown="1">

### 区切りまでまとめて変換します

カーソル直前から続く**半角の英数字・記号**をまとめて変換します。半角スペースや日本語など、それ以外の文字が現れた時点で止まります。

```
kyounotenkihaharedeatatakaidesu
→ 今日の天気は晴れで温かいです
```

画面端での折り返しは影響しません。Enter を押していなければ、数行に見えていても 1 行として扱います。

</div>
<div class="limit-item" markdown="1">

### 大文字の英単語はそのままの表記で残ります

`API` `HTML` のような略語は元の表記のまま残ります。**「A社」「B案」のような 1 文字だけの大文字も残ります。**

```
kyouhaHTMLwobenkyou  → 今日はHTMLを勉強
Bandeikimasu         → B案で行きます
```

</div>
</div>

</section>
<aside class="can-col changelog" markdown="1">

## 変更履歴 {#changelog}

<div class="changelog-body">
<div class="changelog-scroll" markdown="1">

### v1.2.2

- 処理中の中止やクリップボードの扱いなどの不具合を修正

### v1.2.1

- 内部の安定性を改善

### v1.2.0

- 右Ctrl キーに対応（英語配列のキーボード向け）
- 処理中にクリックすると中止
- 「元の内容を復元」が画像・ファイル・書式付きテキストに対応
- キーボード保護と選択確認の上限を設定可能に

### v1.1.0

- 「A社」「B案」のような 1 文字の大文字も残す
- 選択の取りこぼしを自動で 1 回やり直す
- 設定画面に「安定重視 / 標準 / 最速」を追加

### v1.0.3

- 「API」「HTML」のように 2 文字以上続く大文字を残す

### v1.0.2

- 変換を高速化（100 文字で約 1.7 倍）

</div>
</div>

</aside>
</div>

## 設定 {#settings}

タスクトレイのアイコンをダブルクリックすると設定画面が開きます。

<div class="settings">
  <figure class="shot">
    <img src="{{ '/assets/img/settings.png' | relative_url }}" alt="ro-maji IME Rescue の設定画面。トリガーキー・取得範囲・動作の速さ（プリセットと待機時間の一覧）・クリップボード・スタートアップの各項目" width="560" height="1018" loading="lazy">
  </figure>
  <ul class="settings-list">
    <li><b>トリガーキー</b><span>変換キー（既定）か右Ctrl キーを選びます。英語配列（US / ANSI）のキーボードには変換キーが無いため、右Ctrl キーをお使いください。</span></li>
    <li><b>取得範囲</b><span>カーソルからどこまで遡って読み取るかを選びます。行頭まで／直前2行まで／文書先頭まで（既定）。「行頭まで」は画面の折り返しで途中までしか取れないアプリがあるため、既定は最も確実な「文書先頭まで」です。広く取っても<b>変換される範囲は変わりません</b>。</span></li>
    <li><b>動作の速さ</b><span>「安定重視／標準（既定）／最速」から選びます。変換に失敗する、途中で崩れるといった場合は「安定重視」にしてください。速いほど短く済みますが、対象のアプリが追いつかずに失敗しやすくなります。</span></li>
    <li><b>待機時間と上限</b><span>速さの設定で決まる値が一覧で見えます。個別に変えると「カスタム」になります。<b>キーボード保護の上限</b>（既定 30 秒）を超えると、キーを押して処理を中止できます。<b>選択確認の上限</b>（既定 5 秒）は、打ち直す文字を選び直せたかの確認を諦めるまでの時間です。</span></li>
    <li><b>クリップボード</b><span>処理中に上書きされる内容の扱いを選びます。そのまま保持（既定）／元の内容を復元／空にする。<b>既定のままなら、誤変換や中断のときに <code>Ctrl+V</code> で元のローマ字へ戻せます。</b></span></li>
    <li><b>スタートアップ</b><span>Windows 起動時の自動起動に対応しています。既定はオフです。</span></li>
  </ul>
</div>

## できないこと・制限事項 {#limits}

<div class="limits" markdown="1">
<div class="limit-item" markdown="1">

### Enter で改行した位置を越えて変換できません

変換されるのは、直前の改行からカーソルまでの範囲だけです。改行で区切られた範囲ごとに、末尾へカーソルを置いて変換してください。

```
kyouhaiitenki           ← Enter で改行したので変換されません
desunodesannposisimasu  ← ここにカーソルがあると、この範囲だけ変換されます
```

</div>
<div class="limit-item" markdown="1">

### 処理中にクリックすると中止されます

変換中はキーボードを一時的にロックしていますが、**マウスはロックしません。** ボタンを押している間に気付いて中止するので、止めたいときはクリックしてください。逆に、止めるつもりがないなら処理中はクリックしないでください。ボタンの状態は短い間隔で見ているため、ごく短いクリックは見落とすことがあります。

読み取りや選択の確認に失敗した場合は、文字を消さずに中断します。文字を消す前の中断なら、やり直すだけです。消した後だった場合、元のローマ字を `Ctrl+V` で戻せるかはクリップボードの設定で決まります。

| クリップボードの扱い | 元のローマ字を `Ctrl+V` で戻せるか |
|---|---|
| そのまま保持する（既定） | **戻せます** |
| 元の内容を復元する / 空にする | 戻せません |

どの設定でも、入力していたアプリの「元に戻す」（`Ctrl+Z`）で戻せる場合があります。

</div>
<div class="limit-item" markdown="1">

### 長い文章を一度に変換すると先頭が確定されます

一度に変換する文字数が多いと、**IME が先頭のほうから順に変換を自動で確定していきます。** 確定された部分は変換候補を選び直せません。目安は**ローマ字で 150 文字程度**で、文の区切り方によって前後します（[詳しく]({{ '/troubleshooting.html#long-text' | relative_url }})）。

所要時間も文字数に比例して伸びます。下の表は**最速にしても縮まない下限**で、実際はお使いのアプリと PC の重さでこれより長くかかります。

| ローマ字の文字数 | 最速 | 標準 | 安定重視 |
|---:|---:|---:|---:|
| 150 文字 | 約 1.2 秒 | 約 1.8 秒 | 約 2.4 秒 |
| 500 文字 | 約 4 秒 | 約 6 秒 | 約 8 秒 |
| 800 文字 | 約 6.4 秒 | 約 9.6 秒 | 約 13 秒 |

**文や文節の区切りごとに変換してください。** この間はキーボードの入力を止めているため、長い文章ほど「キーが効かない時間」が延びます（[詳しく]({{ '/troubleshooting.html#keyboard-blocked-briefly' | relative_url }})）。

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

症状ごとの切り分け手順は[トラブルシューティング]({{ '/troubleshooting.html' | relative_url }})にまとめています。

</div>
</div>

## 動作環境 {#env}

<div class="env" markdown="1">

| 項目 | 要件 |
|---|---|
| OS | Windows 10 バージョン 2004（ビルド 19041）以降 / Windows 11 |
| アーキテクチャ | 64ビット（x64） |
| キーボード | **変換キー**（日本語配列 / JIS）または**右Ctrl キー** |
| 日本語 IME | Microsoft IME / Google 日本語入力で動作確認済み |

<p class="env-note">.NET のインストールは不要です。ネットワーク通信を行わず、管理者権限も必要ありません。</p>

<div class="env-warn">
  <p class="note-title">起動用のキーはこの2つから選びます</p>
  <p>変換キーは日本語配列（106/109 キー）にあるキーで、英語配列（US / ANSI）には存在しません。<strong>英語配列のキーボードでは右Ctrl キーをお使いください。</strong>右Ctrl キーは単独で短く押したときだけ働き、Ctrl+C などの組み合わせでは働きません（Ctrl+クリックは押している時間の長さで見分けるため、ごく短い操作では働くことがあります）。これ以外のキーへ割り当てる機能はありません（AutoHotkey などで変換キーを送っている場合は動作します）。</p>
</div>

</div>

## 価格と基本情報 {#info}

<div class="env" markdown="1">

| 項目 | 内容 |
|---|---|
| 製品名 | {{ site.title }}（{{ site.name_reading }}） |
| 価格 | {{ site.price_jpy }} 円（買い切り）。{{ site.trial_days }}日間の無料体験版があります |
| 入手先 | [Microsoft Store]({{ site.store_url }}?cid=site_info) |
| 現在のバージョン | {{ site.app_version }} |
| 開発元 | {{ site.publisher }} |
| お問い合わせ | [{{ site.email }}](mailto:{{ site.email }}) |
| このページの更新日 | {{ page.updated }} |

</div>

## 情報の取り扱い {#data}

- **通信しません。** 本アプリはネットワーク通信を一切行いません。広告・解析・トラッキングも含みません。
- **読み取った文章は保存しません。** 変換のためにカーソル直前のテキストを読み取りますが、本アプリのファイルに保存することはありません。
- **クリップボードを使います。** 読み取りに Ctrl+C を使うため、処理中はクリップボードを一度上書きします。Windows の「クリップボードの履歴」（Win+V）や「デバイス間で同期」を有効にしていると、その機能によって記録・同期されることがあります。
- **キーの内容は記録しません。** 起動用のキーの検知と、変換中に打った文字を混ぜないために、キーボード全体の入力を監視します。どのキーを押したかを記録したり、送信したりはしません。

パスワード欄など、内容を知られたくない入力欄では使用しないでください。詳しくは[プライバシーポリシー]({{ '/privacy.html' | relative_url }})をご覧ください。

## よくある質問 {#faq}

<div class="faq">
{%- for item in site.data.faq %}
  <details>
    <summary>{{ item.q }}</summary>
    <p>{{ item.a | replace: "{price}", site.price_jpy | replace: "{trial}", site.trial_days | replace: "{base}", site.baseurl }}</p>
  </details>
{%- endfor %}
</div>

まずは{{ site.trial_days }}日間、普段お使いのアプリで試してください。

<div class="cta">
  <a class="btn-primary" href="{{ site.store_url }}?cid=site_bottom">Microsoft Store で無料で試す</a>
  <p class="cta-note">体験後は {{ site.price_jpy }} 円の買い切り。Windows の PC 用アプリです。</p>
</div>

## ご意見・不具合のご報告 {#feedback}

うまく動かなかったアプリや、使ってみて良かった点をお聞かせください。[{{ site.email }}](mailto:{{ site.email }}) で受け付けています。不具合のときは、次の情報があると原因を絞り込めます。

- 使っていたアプリ（例: メモ帳、ブラウザーと Web サイトの名前）
- 日本語 IME（Microsoft IME / Google 日本語入力 など）
- 本アプリのバージョン（設定画面のタイトルに表示されます）
- 起きたこと（通知が出た場合はその文言）

入力していた文章そのものを送っていただく必要はありません。症状ごとの対処は[トラブルシューティング]({{ '/troubleshooting.html' | relative_url }})にもまとめています。

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "{{ '/' | absolute_url }}#faq",
  "mainEntity": [
{%- for item in site.data.faq %}
    {
      "@type": "Question",
      "name": {{ item.q | jsonify }},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": {{ item.a | replace: "{price}", site.price_jpy | replace: "{trial}", site.trial_days | replace: "{base}", site.baseurl | strip_html | jsonify }}
      }
    }{% unless forloop.last %},{% endunless %}
{%- endfor %}
  ]
}
</script>
