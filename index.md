---
title: IME オフで打ったローマ字を日本語に変換
description: IME をオフ（半角英数）にしたまま打ってしまったローマ字を、変換キーひとつで日本語に入力し直す Windows アプリ。英語配列では右Ctrl キーで使えます。API などの大文字は残ります。30日間の無料体験版があります。
# sitemap の lastmod と構造化データの dateModified に使う。内容を変えたら手で更新する。
# description では Liquid が使えないので、体験日数（_config.yml の trial_days）を直接書いている。
updated: 2026-10-10
---

<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow"><img src="{{ '/assets/img/icon.png' | relative_url }}" alt="" width="28" height="28"><span>{{ site.title }}</span><span class="eyebrow-reading">{{ site.name_reading }}</span></p>
      <h1>IME オフで打ったローマ字を、<br><em>変換キーひとつ</em>で日本語に。</h1>
      <p class="lead">{{ site.title }} は、IME をオフ（半角英数）にしたまま打ってしまったローマ字を、日本語に入力し直す Windows 用の常駐アプリです。カーソルを文字列の直後に置いて変換キーを押すだけで、範囲を選択する必要はありません。</p>
      <div class="hero-cta">
        <a class="btn btn-primary btn-lg" href="{{ site.store_url }}?cid=site_hero">Microsoft Store で無料で試す</a>
        <p class="cta-note"><b>{{ site.trial_days }}日間の無料体験版</b>があります。体験後は {{ site.price_jpy }} 円の買い切りです。<br>ご購入の前に<a href="{{ '/#env' | relative_url }}">動作環境</a>と<a href="{{ '/#limits' | relative_url }}">できないこと</a>をご確認ください。</p>
      </div>
      <ul class="trust">
        <li>Windows 10 / 11</li>
        <li>Microsoft IME・Google 日本語入力で動作確認済み</li>
        <li>通信なし・広告なし</li>
      </ul>
    </div>

    <div class="hero-demo">
      <div class="window">
        <div class="window-bar" aria-hidden="true">
          <span class="window-title">メモ帳</span>
          <span class="window-ctrl"><i></i><i></i><i></i></span>
        </div>
        <div class="window-body">
          <p class="pair-head"><span class="is-before">IME オフのまま打ってしまった</span><span class="is-after">変換キーを押すと</span></p>
          <dl class="pairs">
            <div><dt>AsangaHTMLtoAPIwotantousuru</dt><dd><span class="seg is-focus">Aさんが</span><span class="seg">HTMLと</span><span class="seg">APIを</span><span class="seg">担当する</span></dd></div>
            <div><dt>kyounotenkihaharedeatatakaidesu</dt><dd><span class="seg is-focus">今日の</span><span class="seg">天気は</span><span class="seg">晴れで</span><span class="seg">暖かいです</span></dd></div>
            <div><dt>Bandeikimasu</dt><dd><span class="seg is-focus">B案で</span><span class="seg">行きます</span></dd></div>
          </dl>
        </div>
        <div class="window-foot">
          <kbd class="keycap">変換</kbd>
          <p class="demo-status">カーソルを文字列の直後に置いて押すだけ。日本語で入力し直されて変換候補が出るので、いつもどおり確定します。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="block" id="howto">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">使い方</span> カーソルを置いて、変換キーを押すだけ</h2>
    </div>
    <ol class="steps">
      <li>
        <span class="step-no">1</span>
        <h3>インストールして起動</h3>
        <p>Microsoft Store からインストールして起動します。タスクトレイに常駐します。</p>
      </li>
      <li>
        <span class="step-no">2</span>
        <h3>文字列の直後にカーソル</h3>
        <p>IME オフのまま打ってしまった文字列の、すぐ後ろにカーソルを置きます。範囲を選択する必要はありません。</p>
      </li>
      <li>
        <span class="step-no">3</span>
        <h3>変換キーを押す</h3>
        <p>日本語で入力し直されて変換候補が出るので、いつもどおり確定してください。英語配列のキーボードでは、設定で右Ctrl キーに変えて使います。</p>
      </li>
    </ol>
    <p class="howto-more">打った直後だけでなく、すでに入力されている半角英数のローマ字にも使えます。詳しくは「<a href="{{ '/ime-off.html' | relative_url }}">IME オフで打ったローマ字を直す方法</a>」をご覧ください。</p>
  </div>
</section>

<section class="block alt" id="screens">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">実際の画面</span> 押す前と、押した後</h2>
      <p class="sec-lead">メモ帳で、IME オフのまま打ったローマ字に変換キーを押したところです。</p>
    </div>
    <div class="shots">
      <figure class="shot is-before">
        <img src="{{ '/assets/img/before.png' | relative_url }}" alt="IME をオフのまま入力した半角ローマ字がメモ帳に並んでいる状態" width="1920" height="370" loading="lazy">
        <figcaption>押す前（IME オフのまま打ったローマ字）</figcaption>
      </figure>
      <figure class="shot is-after">
        <img src="{{ '/assets/img/after.png' | relative_url }}" alt="変換キーを押して同じ文が日本語に入力し直され、変換候補を選んで確定できる状態" width="1920" height="370" loading="lazy">
        <figcaption>押した後（変換候補を選んで確定します）</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="block" id="can">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">できること</span> 打ち直さずに、その場で日本語へ</h2>
    </div>
    <ul class="features">
      <li>
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M4 12h16M4 17h7"/><path d="M18 15v6"/></svg>
        <h3>区切りまでまとめて変換</h3>
        <p>カーソル直前から続く<b>半角の英数字・記号</b>をまとめて変換します。半角スペースや日本語など、それ以外の文字が現れた時点で止まります。画面端での折り返しは影響しません。Enter を押していなければ、数行に見えていても 1 行として扱います。</p>
      </li>
      <li>
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 10 5l5 14M7 14h6"/><path d="M17 9h4M19 7v4"/></svg>
        <h3>大文字の英単語は残ります</h3>
        <p><code>API</code> <code>HTML</code> のような略語は元の表記のまま残ります。<b>「A社」「B案」のような 1 文字だけの大文字も残ります。</b></p>
        <p class="ex"><span class="ex-in">kyouhaHTMLwobenkyou</span><span class="ex-out">今日はHTMLを勉強</span></p>
      </li>
      <li>
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M8 14h6"/></svg>
        <h3>ファイル名の変更にも</h3>
        <p>エクスプローラーやデスクトップで、ファイルやフォルダの名前を変更している入力欄でも使えます（v1.2.3 から）。</p>
        <p class="ex"><span class="ex-in">kaigisiryou</span><span class="ex-out">会議資料</span></p>
      </li>
      <li>
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M8 14h8"/></svg>
        <h3>普段の入力を邪魔しません</h3>
        <p>IME がオンのときは、そのキー本来の動作をそのまま行います。覚えるショートカットはありません。</p>
      </li>
      <li>
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>
        <h3>失敗したら消さずに止まります</h3>
        <p>読み取りや選択の確認に失敗した場合は、文字を消さずに中断します。処理中にクリックすれば、その場で中止できます。</p>
      </li>
      <li>
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0"/><path d="M3 3l18 18"/></svg>
        <h3>通信しません</h3>
        <p>ネットワーク通信を一切行わず、広告・解析・トラッキングも含みません。.NET のインストールや管理者権限も不要です。</p>
      </li>
    </ul>
  </div>
</section>

<section class="block alt" id="settings">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">設定</span> お使いの環境に合わせて調整できます</h2>
      <p class="sec-lead">タスクトレイのアイコンをダブルクリックすると設定画面が開きます。</p>
    </div>
    <div class="settings">
      <figure class="settings-shot">
        <button type="button" class="shot-zoom" aria-label="設定画面を拡大して表示" onclick="document.getElementById('settings-zoom').showModal()">
          <img src="{{ '/assets/img/settings.png' | relative_url }}" alt="ro-maji IME Rescue の設定画面。トリガーキー・取得範囲・動作の速さ（プリセットと待機時間の一覧）・クリップボード・スタートアップの各項目" width="560" height="1018" loading="lazy">
          <span class="zoom-hint">クリックで拡大</span>
        </button>
      </figure>
      <dialog id="settings-zoom" class="zoom" aria-label="設定画面（拡大）" onclick="this.close()">
        <img src="{{ '/assets/img/settings.png' | relative_url }}" alt="" width="560" height="1018" loading="lazy">
      </dialog>
      <dl class="settings-list">
        <div><dt>トリガーキー</dt><dd>変換キー（既定）か右Ctrl キーを選びます。英語配列（US / ANSI）のキーボードには変換キーが無いため、右Ctrl キーをお使いください。</dd></div>
        <div><dt>取得範囲</dt><dd>カーソルからどこまで遡って読み取るかを選びます。行頭まで／直前2行まで／文書先頭まで（既定）。「行頭まで」は画面の折り返しで途中までしか取れないアプリがあるため、既定は最も確実な「文書先頭まで」です。広く取っても<b>変換される範囲は変わりません</b>。</dd></div>
        <div><dt>動作の速さ</dt><dd>「安定重視／標準（既定）／最速」から選びます。変換に失敗する、途中で崩れるといった場合は「安定重視」にしてください。速いほど短く済みますが、対象のアプリが追いつかずに失敗しやすくなります。</dd></div>
        <div><dt>待機時間と上限</dt><dd>速さの設定で決まる値が一覧で見えます。個別に変えると「カスタム」になります。<b>キーボード保護の上限</b>（既定 30 秒）を超えると、キーを押して処理を中止できます。<b>選択確認の上限</b>（既定 5 秒）は、打ち直す文字を選び直せたかの確認を諦めるまでの時間です。</dd></div>
        <div><dt>クリップボード</dt><dd>処理中に上書きされる内容の扱いを選びます。そのまま保持する（既定）／元の内容を復元する／空にする。<b>既定のままなら、誤変換や中断のときに <code>Ctrl+V</code> で元のローマ字へ戻せます。</b></dd></div>
        <div><dt>スタートアップ</dt><dd>Windows 起動時の自動起動に対応しています。既定はオフです。</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="block" id="limits">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">できないこと・制限事項</span> ご購入の前にご確認ください</h2>
    </div>
    <div class="limits">
      <article class="limit">
        <h3>Enter で改行した位置を越えて変換できません</h3>
        <p>変換されるのは、直前の改行からカーソルまでの範囲だけです。改行で区切られた範囲ごとに、末尾へカーソルを置いて変換してください。</p>
<pre><code>kyouhaiitenki           ← Enter で改行したので変換されません
desunodesannposisimasu  ← ここにカーソルがあると、この範囲だけ変換されます</code></pre>
      </article>
      <article class="limit">
        <h3>小文字の英単語は残せません</h3>
        <p><code>api</code> のように<b>小文字の英単語はローマ字と区別する方法がない</b>ため、かなとして読み直されます。<code>export</code> のようにローマ字として成立しない綴りは、かなと英字が混じった結果になります。</p>
<pre><code>apiwotukau          → アピを使う
PDFwoexportshimasu  → PDFを得x歩rtします</code></pre>
        <p>残したい英単語は<b>大文字で入力する</b>か、間に半角スペースを入れてから変換してください。</p>
      </article>
      <article class="limit">
        <h3>長い文章を一度に変換すると先頭が確定されます</h3>
        <p>一度に変換する文字数が多いと、<b>IME が先頭のほうから順に変換を自動で確定していきます。</b>確定された部分は変換候補を選び直せません。目安は<b>ローマ字で 150 文字程度</b>で、文の区切り方によって前後します（<a href="{{ '/troubleshooting.html#long-text' | relative_url }}">詳しく</a>）。</p>
        <p>所要時間も文字数に比例して伸びます。下の表は<b>最速にしても縮まない下限</b>で、実際はお使いのアプリと PC の重さでこれより長くかかります。</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ローマ字の文字数</th><th class="num">最速</th><th class="num">標準</th><th class="num">安定重視</th></tr></thead>
            <tbody>
              <tr><td>150 文字</td><td class="num">約 1.2 秒</td><td class="num">約 1.8 秒</td><td class="num">約 2.4 秒</td></tr>
              <tr><td>500 文字</td><td class="num">約 4 秒</td><td class="num">約 6 秒</td><td class="num">約 8 秒</td></tr>
              <tr><td>800 文字</td><td class="num">約 6.4 秒</td><td class="num">約 9.6 秒</td><td class="num">約 13 秒</td></tr>
            </tbody>
          </table>
        </div>
        <p><b>文や文節の区切りごとに変換してください。</b>この間はキーボードの入力を止めているため、長い文章ほど「キーが効かない時間」が延びます（<a href="{{ '/troubleshooting.html#keyboard-blocked-briefly' | relative_url }}">詳しく</a>）。</p>
      </article>
      <article class="limit">
        <h3>処理中にクリックすると中止されます</h3>
        <p>変換中はキーボードを一時的にロックしていますが、<b>マウスはロックしません。</b>ボタンを押している間に気付いて中止するので、止めたいときはクリックしてください。逆に、止めるつもりがないなら処理中はクリックしないでください。ボタンの状態は短い間隔で見ているため、ごく短いクリックは見落とすことがあります。</p>
        <p>読み取りや選択の確認に失敗した場合は、文字を消さずに中断します。文字を消す前の中断なら、やり直すだけです。消した後だった場合、元のローマ字を <code>Ctrl+V</code> で戻せるかはクリップボードの設定で決まります。</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>クリップボードの扱い</th><th>元のローマ字を <code>Ctrl+V</code> で戻せるか</th></tr></thead>
            <tbody>
              <tr><td>そのまま保持する（既定）</td><td><b>戻せます</b></td></tr>
              <tr><td>元の内容を復元する / 空にする</td><td>戻せません</td></tr>
            </tbody>
          </table>
        </div>
        <p>どの設定でも、入力していたアプリの「元に戻す」（<code>Ctrl+Z</code>）で戻せる場合があります。</p>
      </article>
      <article class="limit is-wide is-plain">
        <h3>その他</h3>
        <ul>
          <li>すべてのアプリで動作するわけではありません。対象アプリのコピー操作、選択操作、IME 制御の挙動に依存します。</li>
          <li>パスワード欄など、内容を知られたくない入力欄では使用しないでください。</li>
          <li>対象のアプリが管理者権限で動作している場合、Windows の仕組み（UIPI）により操作できません。</li>
        </ul>
        <p>症状ごとの切り分け手順は<a href="{{ '/troubleshooting.html' | relative_url }}">トラブルシューティング</a>にまとめています。</p>
      </article>
    </div>
  </div>
</section>

<section class="block alt" id="pricing">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">価格と動作環境</span> {{ site.trial_days }}日間は無料。その後は {{ site.price_jpy }} 円の買い切り</h2>
    </div>
    <div class="pricing">
      <div class="price-card" id="info">
        <p class="price-name">{{ site.title }}<span>{{ site.name_reading }}</span></p>
        <p class="price"><span class="price-num">{{ site.price_jpy }}</span><span class="price-unit">円</span><span class="price-term">買い切り</span></p>
        <p class="price-trial">{{ site.trial_days }}日間の無料体験版があります</p>
        <a class="btn btn-primary btn-block" href="{{ site.store_url }}?cid=site_info">Microsoft Store で入手</a>
        <dl class="price-meta">
          <div><dt>現在のバージョン</dt><dd>{{ site.app_version }}</dd></div>
          <div><dt>開発元</dt><dd>{{ site.publisher }}</dd></div>
          <div><dt>お問い合わせ</dt><dd><a href="mailto:{{ site.email }}">{{ site.email }}</a></dd></div>
          <div><dt>このページの更新日</dt><dd>{{ page.updated }}</dd></div>
        </dl>
      </div>
      <div class="env" id="env">
        <h3>動作環境</h3>
        <dl class="env-list">
          <div><dt>OS</dt><dd>Windows 10 バージョン 2004（ビルド 19041）以降 / Windows 11</dd></div>
          <div><dt>アーキテクチャ</dt><dd>64ビット（x64）</dd></div>
          <div><dt>キーボード</dt><dd><b>変換キー</b>（日本語配列 / JIS）または<b>右Ctrl キー</b></dd></div>
          <div><dt>日本語 IME</dt><dd>Microsoft IME / Google 日本語入力で動作確認済み</dd></div>
        </dl>
        <p class="env-note">.NET のインストールは不要です。ネットワーク通信を行わず、管理者権限も必要ありません。</p>
        <div class="callout">
          <p class="callout-title">起動用のキーはこの2つから選びます</p>
          <p>変換キーは日本語配列（106/109 キー）にあるキーで、英語配列（US / ANSI）には存在しません。<strong>英語配列のキーボードでは右Ctrl キーをお使いください。</strong>右Ctrl キーは単独で短く押したときだけ働き、Ctrl+C などの組み合わせでは働きません（Ctrl+クリックは押している時間の長さで見分けるため、ごく短い操作では働くことがあります）。これ以外のキーへ割り当てる機能はありません（AutoHotkey などで変換キーを送っている場合は動作します）。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="block" id="data">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">情報の取り扱い</span> 入力した文章は、送信も保存もしません</h2>
    </div>
    <ul class="data-grid">
      <li><h3>通信しません</h3><p>本アプリはネットワーク通信を一切行いません。広告・解析・トラッキングも含みません。</p></li>
      <li><h3>読み取った文章は保存しません</h3><p>変換のためにカーソル直前のテキストを読み取りますが、本アプリのファイルに保存することはありません。</p></li>
      <li><h3>クリップボードを使います</h3><p>読み取りに Ctrl+C を使うため、処理中はクリップボードを一度上書きします。Windows の「クリップボードの履歴」（Win+V）や「デバイス間で同期」を有効にしていると、その機能によって記録・同期されることがあります。</p></li>
      <li><h3>キーの内容は記録しません</h3><p>起動用のキーの検知と、変換中に打った文字を混ぜないために、キーボード全体の入力を監視します。どのキーを押したかを記録したり、送信したりはしません。</p></li>
    </ul>
    <p class="data-foot">パスワード欄など、内容を知られたくない入力欄では使用しないでください。詳しくは<a href="{{ '/privacy.html' | relative_url }}">プライバシーポリシー</a>をご覧ください。</p>
  </div>
</section>

<section class="block alt" id="faq">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">よくある質問</span> よくいただく質問と答え</h2>
    </div>
    <div class="faq">
{%- comment -%}
  答えの置き換えは、ここと下の構造化データの2か所とも assign で行う。出力タグの中に "{price}" のような閉じ波かっこを
  含む文字列を書くと、GitHub Pages の Jekyll 3.10（Liquid 4）では変数がそこで切れたと見なされ、ビルドが失敗する。
{%- endcomment -%}
{%- for item in site.data.faq %}
  {%- assign answer = item.a | replace: "{price}", site.price_jpy | replace: "{trial}", site.trial_days | replace: "{base}", site.baseurl %}
      <details>
        <summary>{{ item.q }}</summary>
        <p>{{ answer }}</p>
      </details>
{%- endfor %}
    </div>
  </div>
</section>

<section class="block" id="changelog">
  <div class="wrap">
    <div class="sec-head">
      <h2><span class="kicker">変更履歴</span> バージョンごとの主な変更</h2>
    </div>
    <ol class="timeline">
      <li><h3>v1.2.3</h3><ul><li>ファイルやフォルダの名前を変更しているときに使えなかった問題を修正</li><li>内部の安定性を改善</li></ul></li>
      <li><h3>v1.2.2</h3><ul><li>処理中の中止やクリップボードの扱いなどの不具合を修正</li></ul></li>
      <li><h3>v1.2.1</h3><ul><li>内部の安定性を改善</li></ul></li>
      <li><h3>v1.2.0</h3><ul><li>右Ctrl キーに対応（英語配列のキーボード向け）</li><li>処理中にクリックすると中止</li><li>「元の内容を復元」が画像・ファイル・書式付きテキストに対応</li><li>キーボード保護と選択確認の上限を設定可能に</li></ul></li>
      <li><h3>v1.1.0</h3><ul><li>「A社」「B案」のような 1 文字の大文字も残す</li><li>選択の取りこぼしを自動で 1 回やり直す</li><li>設定画面に「安定重視 / 標準 / 最速」を追加</li></ul></li>
      <li><h3>v1.0.3</h3><ul><li>「API」「HTML」のように 2 文字以上続く大文字を残す</li></ul></li>
      <li><h3>v1.0.2</h3><ul><li>変換を高速化（100 文字で約 1.7 倍）</li></ul></li>
    </ol>
  </div>
</section>

<section class="cta-band">
  <div class="wrap cta-band-inner">
    <div>
      <h2>まずは{{ site.trial_days }}日間、普段お使いのアプリで。</h2>
      <p>体験後は {{ site.price_jpy }} 円の買い切り。Windows の PC 用アプリです。</p>
    </div>
    <a class="btn btn-light btn-lg" href="{{ site.store_url }}?cid=site_bottom">Microsoft Store で無料で試す</a>
  </div>
</section>

<section class="block" id="feedback">
  <div class="wrap narrow">
    <div class="sec-head">
      <h2><span class="kicker">ご意見・不具合のご報告</span> うまく動かなかったアプリを教えてください</h2>
    </div>
    <p>うまく動かなかったアプリや、使ってみて良かった点をお聞かせください。<a href="mailto:{{ site.email }}">{{ site.email }}</a> で受け付けています。不具合のときは、次の情報があると原因を絞り込めます。</p>
    <ul class="checklist">
      <li>使っていたアプリ（例: メモ帳、ブラウザーと Web サイトの名前）</li>
      <li>日本語 IME（Microsoft IME / Google 日本語入力 など）</li>
      <li>本アプリのバージョン（設定画面のタイトルに表示されます）</li>
      <li>起きたこと（通知が出た場合はその文言）</li>
    </ul>
    <p>入力していた文章そのものを送っていただく必要はありません。症状ごとの対処は<a href="{{ '/troubleshooting.html' | relative_url }}">トラブルシューティング</a>にもまとめています。</p>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "{{ '/' | absolute_url }}#faq",
  "mainEntity": [
{%- for item in site.data.faq %}
  {%- assign answer = item.a | replace: "{price}", site.price_jpy | replace: "{trial}", site.trial_days | replace: "{base}", site.baseurl %}
    {
      "@type": "Question",
      "name": {{ item.q | jsonify }},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": {{ answer | strip_html | jsonify }}
      }
    }{% unless forloop.last %},{% endunless %}
{%- endfor %}
  ]
}
</script>
