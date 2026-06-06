hexo.extend.filter.register('marked:extensions', function (extensions) {

  // ==========================================
  // 1. 对齐块 :::align{center}
  // ==========================================
  extensions.push({
    name: 'alignBlock',
    level: 'block',
    start: (src) => src.match(/^:::align/)?.index,
    tokenizer: (src) => {
      const rule = /^:::align\{(\w+)\}\s*?\n([\s\S]*?)\s*?:::(?=\n|$)/;
      const match = src.match(rule);
      if (match) {
        return {
          type: 'alignBlock',
          raw: match[0],
          dir: match[1].trim(),
          content: match[2].trim(),
        };
      }
    },
    renderer: (token) => {
      return `<div class="align-${token.dir}">${hexo.render.renderSync({ text: token.content, engine: 'markdown' })}</div>`;
    },
  });

  // ==========================================
  // 2. 引言块 :::epigraph[作者]
  // ==========================================
  extensions.push({
    name: 'epigraph',
    level: 'block',
    start: (src) => src.match(/^:::epigraph/)?.index,
    tokenizer: (src) => {
      const rule = /^:::epigraph(?:\[([^\]]*)\])?\s*?\n([\s\S]*?)\s*?:::(?=\n|$)/;
      const match = src.match(rule);
      if (match) {
        return {
          type: 'epigraph',
          raw: match[0],
          author: match[1] || '',
          content: match[2].trim(),
        };
      }
    },
    renderer: (token) => {
      const author = token.author ? `<p class="epigraph-author">${token.author}</p>` : '';
      return `<div class="epigraph">${hexo.render.renderSync({ text: token.content, engine: 'markdown' })}${author}</div>`;
    },
  });

  // ==========================================
  // 3. 折叠块 :::warning[标题]
  // ==========================================
  extensions.push({
    name: 'foldable',
    level: 'block',
    start: (src) => src.match(/^:::/)?.index,
    tokenizer: (src) => {
      const rule = /^:::(\w+)\[([^\]]*)\](?:\{([^}]*)\})?\s*?\n([\s\S]*?)\s*?:::(?=\n|$)/;
      const match = src.match(rule);
      if (!match) return;

      const type = match[1];
      const title = match[2];
      const opt = match[3] || '';
      const content = match[4].trim();
      const allowed = ['info', 'warning', 'success', 'error', 'bug', 'flask'];

      if (allowed.includes(type)) {
        return {
          type: 'foldable',
          raw: match[0],
          type: type,
          title: title,
          open: opt.includes('open'),
          content: content,
        };
      }
    },
    renderer: (token) => {
      const openAttr = token.open ? 'open' : '';
      return `
<details class="foldable ${token.type}" ${openAttr}>
  <summary>${token.title || '详情'}</summary>
  <div>${hexo.render.renderSync({ text: token.content, engine: 'markdown' })}</div>
</details>`;
    },
  });

  return extensions;
});