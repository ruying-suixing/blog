const allowedFoldableTypes = new Set(['info', 'warning', 'success', 'error', 'bug', 'flask']);

function renderMarkdown(content) {
  return hexo.render.renderSync({ text: content.trim(), engine: 'markdown' });
}

function replaceCustomBlocks(content) {
  const customBlockRegExp = /^\s*:::(\w+)(?:\[([^\]]*)\])?(?:\{([^}]*)\})?\s*\r?\n([\s\S]*?)^\s*:::\s*$/gim;
  return content.replace(customBlockRegExp, (match, type, title, opt, inner) => {
    const body = inner.trim();
    if (type === 'align') {
      const dir = title || 'left';
      return `<div class="align-${dir}">${renderMarkdown(body)}</div>`;
    }

    if (type === 'epigraph') {
      const author = title ? `<p class="epigraph-author">${title}</p>` : '';
      return `<div class="epigraph">${renderMarkdown(body)}${author}</div>`;
    }

    if (allowedFoldableTypes.has(type)) {
      const openAttr = opt && opt.includes('open') ? ' open' : '';
      const summary = title || '详情';
      return `\n<details class="foldable ${type}"${openAttr}>\n  <summary>${summary}</summary>\n  <div>${renderMarkdown(body)}</div>\n</details>`;
    }

    return match;
  });
}

hexo.extend.filter.register('before_post_render', data => {
  if (typeof data.content !== 'string') return data;
  hexo.log.debug('custom_marked before_post_render', data.source || data.path || data.title || 'unknown');
  data.content = replaceCustomBlocks(data.content);
  return data;
});
