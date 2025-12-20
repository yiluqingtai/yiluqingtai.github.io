hexo.extend.injector.register('head_end', () => {
    return `
    <style>
        /* 1. 整体容器和比例保持 */
        .container { max-width: 1440px !important; width: 95% !important; }
        .column.is-6-widescreen, .column.is-8-desktop, .column.is-8-tablet { flex: none !important; width: 60% !important; }
        .column.is-3-widescreen, .column.is-4-desktop { flex: none !important; width: 20% !important; }

        /* 2. 目录滚动核心修复 */
        /* 针对 Icarus 的 TOC 挂件内部容器进行限高 */
        .widget[data-type="toc"] .card-content, 
        .widget.toc .card-content {
            max-height: 70vh !important;    /* 限制为屏幕高度的 70% */
            overflow-y: auto !important;   /* 强制开启垂直滚动 */
            display: block !important;
        }

        /* 3. 美化目录滚动条（可选，让它更细一点） */
        .widget[data-type="toc"] .card-content::-webkit-scrollbar {
            width: 4px;
        }
        .widget[data-type="toc"] .card-content::-webkit-scrollbar-thumb {
            background: #dbdbdb;
            border-radius: 10px;
        }

        /* 4. 如果侧边栏设置了 sticky: true，确保它不会把底部切掉 */
        .column-left, .column-right {
            align-self: flex-start; 
            height: auto;
        }
    </style>
    `;
});
