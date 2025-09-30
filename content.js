function replaceCheckboxWithDots() {
  document.querySelectorAll('div.flex.flex-row.items-center.space-x-\\[6px\\]').forEach(row => {
    if (row.querySelector('.leetcode-oldui-dot')) return;

    // Check accepted or failed BEFORE removing icon div
    const isAccepted = row.querySelector('div.relative.text-\\[12px\\].leading-\\[normal\\].p-\\[1px\\].before\\:block.before\\:h-3.before\\:w-3.text-green-60') !== null;
    const isFailed = row.querySelector('div.relative.text-\\[12px\\].leading-\\[normal\\].p-\\[1px\\].before\\:block.before\\:h-3.before\\:w-3.text-red-60') !== null;

    // Now remove the icon div
    const iconDiv = row.querySelector('div.relative.text-\\[12px\\].leading-\\[normal\\].p-\\[1px\\].before\\:block.before\\:h-3.before\\:w-3.text-green-60, div.relative.text-\\[12px\\].leading-\\[normal\\].p-\\[1px\\].before\\:block.before\\:h-3.before\\:w-3.text-red-60');
    if (iconDiv) {
      iconDiv.remove();
    }

    const dot = document.createElement('span');
    dot.className = 'leetcode-oldui-dot';
    dot.style.cssText = `
      display: inline-block;
      width: 6px; height: 6px;
      margin-right: 5px;
      vertical-align: middle;
      border-radius: 50%;
      background-color: ${isAccepted ? 'limegreen' : isFailed ? 'red' : 'gray'};
    `;

    const flexContainer = row.querySelector('div.flex.flex-row.items-center.space-x-\\[6px\\]');
    if (flexContainer) {
      const caseTextDiv = flexContainer.querySelector('div:last-child');
      if (caseTextDiv) {
        flexContainer.insertBefore(dot, caseTextDiv);
      } else {
        flexContainer.insertBefore(dot, flexContainer.firstChild);
      }
    } else {
      row.insertBefore(dot, row.firstChild);
    }
  });
}

(new MutationObserver(replaceCheckboxWithDots))
  .observe(document.body, { subtree: true, childList: true });

replaceCheckboxWithDots();
