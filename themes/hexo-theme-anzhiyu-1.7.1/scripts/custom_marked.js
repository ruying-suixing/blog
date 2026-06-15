const allowedFoldableTypes = new Set(['info', 'warning', 'success', 'error', 'bug', 'flask']);

function renderMarkdown(content) {
  return hexo.render.renderSync({ text: content.trim(), engine: 'markdown' });
}

function renderCustomBlock(blockType, title, opt, body) {
  const type = blockType.toLowerCase();
  const content = renderMarkdown(body.trim());

  if (type === 'align') {
    const dir = title ? title.trim() : 'left';
    return `\n<div class="align-${dir}">\n${content}\n</div>\n`;
  }

  if (type === 'epigraph') {
    const author = title ? `<p class="epigraph-author">${title}</p>` : '';
    return `\n<div class="epigraph">\n${content}${author}\n</div>\n`;
  }

  if (allowedFoldableTypes.has(type)) {
    const openAttr = opt && opt.includes('open') ? ' open' : '';
    const summary = title ? title.trim() : '详情';
    return `\n<details class="foldable ${type}"${openAttr}>\n  <summary>${summary}</summary>\n  <div>\n${content}\n  </div>\n</details>\n`;
  }

  return null;
}

function parseCustomBlocks(content) {
  const lines = content.split(/\r?\n/);
  const root = { type: 'root', children: [] };
  const stack = [root];
  let codeFence = null;
  const openRule = /^\s*(:{3,})([a-zA-Z]\w*)(?:\s*\[([^\]]*)\])?(?:\s*\{([^}]*)\})?\s*$/;
  const closeRule = /^\s*(:{3,})\s*$/;

  for (const line of lines) {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);
    if (fenceMatch) {
      const fence = fenceMatch[1];
      if (!codeFence) {
        codeFence = fence;
      } else if (codeFence === fence) {
        codeFence = null;
      }
      stack[stack.length - 1].children.push({ type: 'text', value: line });
      continue;
    }

    if (codeFence) {
      stack[stack.length - 1].children.push({ type: 'text', value: line });
      continue;
    }

    const openMatch = line.match(openRule);
    if (openMatch) {
      const level = openMatch[1].length;
      const blockType = openMatch[2].toLowerCase();
      const title = openMatch[3] || '';
      const opt = openMatch[4] || '';
      const node = { type: 'block', level, blockType, title, opt, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
      continue;
    }

    const closeMatch = line.match(closeRule);
    if (closeMatch) {
      const level = closeMatch[1].length;
      if (stack.length > 1 && stack[stack.length - 1].level === level) {
        stack.pop();
        continue;
      }
    }

    stack[stack.length - 1].children.push({ type: 'text', value: line });
  }

  return renderNode(root);
}

function renderNode(node) {
  if (node.type === 'root') {
    return node.children.map(renderNode).join('\n');
  }
  if (node.type === 'text') {
    return node.value;
  }
  if (node.type === 'block') {
    const inner = node.children.map(renderNode).join('\n');
    const customHtml = renderCustomBlock(node.blockType, node.title, node.opt, inner);
    if (customHtml !== null) {
      return customHtml;
    }
    const start = `${':'.repeat(node.level)}${node.blockType}${node.title ? `[${node.title}]` : ''}${node.opt ? `{${node.opt}}` : ''}`;
    const end = ':'.repeat(node.level);
    return `${start}\n${inner}\n${end}`;
  }
  return '';
}

hexo.extend.filter.register('before_post_render', data => {
  if (typeof data.content !== 'string') return data;
  hexo.log.debug('custom_marked before_post_render', data.source || data.path || data.title || 'unknown');
  data.content = parseCustomBlocks(data.content);
  return data;
});
