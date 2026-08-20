---
title: ro-maji IME Rescue
description: IME をオフにしたまま打ってしまったローマ字を、変換キーひとつで日本語に入力し直す Windows 常駐アプリ。右Ctrl キーにも変更できます。15日間の無料体験版があります。
# sitemap の lastmod と構造化データの dateModified に使う。内容を変えたら手で更新する。
updated: 2026-08-20
---

<div class="hero">
  <div class="hero-head">
    <img class="hero-icon" src="{{ '/assets/img/icon.png' | relative_url }}" alt="ro-maji IME Rescue のアイコン" width="88" height="88">
    <div class="hero-titles">
      <h1>ro-maji IME Rescue</h1>
      <p class="hero-tagline">ローマ字を日本語に変換するアプリ</p>
    </div>
  </div>

  <p class="hero-lead">IME をオフにしたまま打ってしまったローマ字を<strong>変換キーひとつ</strong>で日本語に入力し直します、消して打ち直す必要はありません。</p>

  <div class="cta">
    <a class="btn-primary" href="{{ site.store_url }}">Microsoft Store で入手</a>
    <p class="cta-note">15日間の無料体験版があります。ご購入の前に<a href="{{ '/#env' | relative_url }}">動作環境</a>と<a href="{{ '/#limits' | relative_url }}">できないこと</a>をご確認ください。</p>
  </div>

  <div class="hero-showcase">
    <div class="demo">
      <div class="demo-row is-before">
        <span class="demo-label">IME オフのまま打ってしまった</span>
        <p class="demo-text">AsangaHTMLtoAPIwotantousuru</p>
      </div>
      <div class="demo-key">
        <kbd>変換</kbd>
        <span>カーソルを文字列の直後に置いて押すだけ。範囲を選択する必要はありません。</span>
      </div>
      <div class="demo-row is-after">
        <span class="demo-label">日本語に入力し直される</span>
        <p class="demo-text">AさんがHTMLとAPIを担当する</p>
      </div>
    </div>
    <ul class="cards">
      <li><b>普段の入力を邪魔しません</b><span>IME がオンのときは、そのキー本来の動作をそのまま行います。</span></li>
      <li><b>失敗しても文章は壊れません</b><span>読み取りや選択の確認に失敗した場合は、文字を消さずに中断します。</span></li>
    </ul>
  </div>

  <p class="hero-foot">起動するとタスクトレイに常駐します。設定で右Ctrl キーにも変更できます（Microsoft IME / Google 日本語入力で動作確認済み）。読み取りにコピー操作を使うため、処理中はクリップボードを一度上書きします。</p>
</div>

## 実際の画面 {#screens}

<div class="shots">
  <figure class="shot">
    <img src="{{ '/assets/img/before.png' | relative_url }}" alt="IME をオフのまま入力した半角ローマ字がメモ帳に並んでいる状態" width="1920" height="370" loading="lazy">
    <figcaption>変換キーを押す前</figcaption>
  </figure>
  <figure class="shot">
    <img src="{{ '/assets/img/after.png' | relative_url }}" alt="変換キーを押して同じ文が日本語に入力し直された状態" width="1920" height="370" loading="lazy">
    <figcaption>変換キーを押した後</figcaption>
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

### v1.2.1

- **まれに変換キーに反応しなくなることがある問題を修正しました**

  クリップボードを他のアプリが長く使用しているときなどに、キー監視が Windows によって解除されてしまうことがありました。解除されると再起動するまで反応しません。仕組みを見直し、あわせて解除された場合は自動で復帰するようにしました。

- **中止したときや終了したときに、打ち直しが途中で残らないようにしました**

  変換の途中でアプリを終了・再起動すると、文字を消したところで処理が止まることがありました。安全な位置まで処理を止めてから終わります。

- **打ち直せない文字が含まれる場合は、文字を消さずに中止するようにしました**

  これまでは打ち直せない文字を飛ばしていたため、1文字だけ欠けた文章が残ることがありました。消す前に確認します。

### v1.2.0

- **右Ctrl キーでも使えるようになりました**

  設定画面から選べます。英語配列（US / ANSI）のキーボードでもお使いいただけます。単独で短く押したときだけ働くため、Ctrl+C や Ctrl+クリックなどの組み合わせ操作はこれまでどおりです。

- **処理中にクリックするといつでも中止できるようになりました**

  これまでは処理の途中でクリックして別のウィンドウへ移ると、変換中の文字がそちらへ入力されてしまうことがありました。マウスのボタンが押されたら、その時点で安全に打ち切ります。

- **クリップボードの復元が画像やファイルにも対応しました**

  「元の内容を復元」を選んでいる場合、これまではテキストしか戻せませんでした。画像・ファイル・Web ページからコピーした書式付きテキストも戻ります。

- **上限を調整する項目が増えました**

  キー入力を止める時間の上限（既定 30 秒）と、選択の確認にかける時間の上限（既定 5 秒）を調整できます。

### それ以前

- **v1.1.0** — 「A社」「B案」のような 1 文字だけの大文字もそのまま残るようになりました。選択の取りこぼしを自動で 1 回再試行し、設定画面に「安定重視 / 標準 / 最速」を追加しました。
- **v1.0.3** — 「API」「HTML」のように大文字が 2 文字以上続く部分を、変換せず元の表記のまま残すようになりました。
- **v1.0.2** — 変換処理を高速化しました（100 文字で約 1.7 倍）。

</div>
</div>

</aside>
</div>

## 設定 {#settings}

タスクトレイのアイコンをダブルクリックすると設定画面が開きます。

<div class="settings">
  <figure class="shot">
    <img src="{{ '/assets/img/settings.png' | relative_url }}" alt="ro-maji IME Rescue の設定画面。トリガーキー・取得範囲・動作の速さ（プリセットと待機時間の一覧）・クリップボード・スタートアップの各項目" width="537" height="1059" loading="lazy">
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

変換中はキーボードを一時的にロックしていますが、**マウスはロックしません。** ボタンを押した時点で安全に中止するので、止めたいときはクリックしてください。逆に、止めるつもりがないなら処理中はクリックしないでください。

文字を消す前の中断なら、やり直すだけです。消した後だった場合、元のローマ字を戻せるかはクリップボードの設定で決まります。

| クリップボードの扱い | 元のローマ字を戻せるか |
|---|---|
| そのまま保持する（既定） | **`Ctrl+V` で戻せます** |
| 元の内容を復元する / 空にする | 戻せません |

</div>
<div class="limit-item" markdown="1">

### 長い文章を一度に変換すると先頭が確定されます

一度に変換する文字数が多いと、**IME が先頭のほうから順に変換を自動で確定していきます。** 確定された部分は変換候補を選び直せません。目安は**ローマ字で 150 文字程度**で、文の区切り方によって前後します。

所要時間も文字数に比例して伸びます。下の表は**最速にしても縮まない下限**で、実際はお使いのアプリと PC の重さでこれより長くかかります。

| ローマ字の文字数 | 最速 | 標準 | 安定重視 |
|---:|---:|---:|---:|
| 150 文字 | 約 1.2 秒 | 約 1.8 秒 | 約 2.4 秒 |
| 500 文字 | 約 4 秒 | 約 6 秒 | 約 8 秒 |
| 800 文字 | 約 6.4 秒 | 約 9.6 秒 | 約 13 秒 |

**文や文節の区切りごとに変換してください。** この間はキーボードの入力を止めているため、長い文章ほど「キーが効かない時間」が延びます（[詳しく]({{ '/troubleshooting.html#long-text' | relative_url }})）。

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

<p class="env-note">.NET のインストールは不要です。ネットワーク通信を行わず、管理者権限も必要ありません。</p>

<div class="env-warn">
  <p class="note-title">起動用のキーはこの2つから選びます</p>
  <p>変換キーは日本語配列（106/109 キー）にあるキーで、英語配列（US / ANSI）には存在しません。<strong>英語配列のキーボードでは右Ctrl キーをお使いください。</strong>右Ctrl キーは単独で短く押したときだけ働くため、Ctrl+C や Ctrl+クリックはこれまでどおりです。これ以外のキーへ割り当てる機能はありません（AutoHotkey などで変換キーを送っている場合は動作します）。</p>
</div>

</div>

## よくある質問 {#faq}

<div class="faq">
  <details>
    <summary>英語配列のキーボードでも使えますか</summary>
    <p>使えます。設定画面で起動用のキーを「右Ctrl キー」に変更してください。単独で短く押したときだけ働くため、Ctrl+C や Ctrl+クリックなどの組み合わせ操作はこれまでどおり使えます。</p>
  </details>
  <details>
    <summary>無料で試せますか</summary>
    <p>15日間の無料体験版があります。Microsoft Store から入手できます。</p>
  </details>
  <details>
    <summary>インターネット接続や .NET は必要ですか</summary>
    <p>どちらも不要です。ネットワーク通信を一切行わず、必要なものはすべてアプリに含まれています。管理者権限も必要ありません。</p>
  </details>
  <details>
    <summary>Google 日本語入力でも動きますか</summary>
    <p>動きます。Microsoft IME と Google 日本語入力の両方で動作を確認しています。</p>
  </details>
  <details>
    <summary>API や HTML のような英単語も変換されてしまいますか</summary>
    <p>大文字はそのままの表記で残ります（1 文字でも残ります）。<code>api</code> のような小文字の英単語はローマ字と区別する方法がないため、かなとして読み直されます。残したい場合は大文字で入力するか、間に半角スペースを入れてください。</p>
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
        "text": "使えます。設定画面で起動用のキーを「右Ctrl キー」に変更してください。単独で短く押したときだけ働くため、Ctrl+C や Ctrl+クリックなどの組み合わせ操作はこれまでどおり使えます。"
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
        "text": "どちらも不要です。ネットワーク通信を一切行わず、必要なものはすべてアプリに含まれています。管理者権限も必要ありません。"
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
        "text": "大文字はそのままの表記で残ります（1 文字でも残ります）。api のような小文字の英単語はローマ字と区別する方法がないため、かなとして読み直されます。残したい場合は大文字で入力するか、間に半角スペースを入れてください。"
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
