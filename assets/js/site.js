// 下層ページの左の目次に「このページの内容」を作り、読んでいる位置を示す。
// 本文の h2 と、id の付いた h3（トラブルシューティングの症状）を拾う。JavaScript が無ければページの一覧だけが出る。
(() => {
  'use strict';
  const toc = document.querySelector('.side-toc');
  const doc = document.querySelector('.page-grid .prose');
  if (!toc || !doc) return;

  const heads = [...doc.querySelectorAll('h2, h3[id]')];
  if (heads.length < 2) return;

  const list = toc.querySelector('ol');
  let n = 0;
  heads.forEach((h) => {
    if (!h.id) h.id = 'sec-' + (++n);
    const li = document.createElement('li');
    if (h.tagName === 'H3') li.className = 'is-sub';
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.trim();
    li.appendChild(a);
    list.appendChild(li);
  });
  toc.hidden = false;
  document.body.classList.add('has-sidetoc');

  // 狭い画面では目次が本文の上に来るので、最初は畳んでおく
  const menu = toc.closest('details');
  if (menu && window.matchMedia('(max-width: 60rem)').matches) menu.open = false;

  // 目次の枠の中だけをスクロールして、示している項目を見える位置に置く。scrollIntoView はページ全体まで
  // 動かしうる（目次が本文の上にある狭い画面で、読んでいる途中に上へ飛ぶ）ので使わない
  const box = toc.closest('.sidebar');
  const keepVisible = (a) => {
    if (!box || box.scrollHeight <= box.clientHeight) return;
    const r = a.getBoundingClientRect();
    const b = box.getBoundingClientRect();
    if (r.top < b.top) box.scrollTop -= b.top - r.top + 8;
    else if (r.bottom > b.bottom) box.scrollTop += r.bottom - b.bottom + 8;
  };

  // 画面の上のほうにある見出しを「いま読んでいる位置」とする
  const links = new Map([...list.querySelectorAll('a')].map((a) => [a.hash.slice(1), a]));
  const seen = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
    const top = heads.find((h) => seen.has(h));
    if (!top) return;
    links.forEach((a) => a.removeAttribute('aria-current'));
    const a = links.get(top.id);
    if (a) {
      a.setAttribute('aria-current', 'location');
      keepVisible(a);
    }
  }, { rootMargin: '-10% 0px -70% 0px' });
  heads.forEach((h) => io.observe(h));
})();
