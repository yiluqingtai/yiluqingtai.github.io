hexo.extend.injector.register('head_end', () => {
    return `
    <style>
        /* 1. 初始隐藏，防止闪烁 */
        .highlight.plaintext, .highlight.mermaid, .highlight.language-mermaid {
            /* 我们稍后通过 JS 逻辑判断是否隐藏 */
        }
        .mermaid {
            background: white !important;
            display: flex;
            justify-content: center;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            /* 修复文字截断的核心 */
            line-height: 1.2 !important;
            font-family: Arial !important;
        }
        .mermaid svg {
            max-width: 100% !important;
            height: auto;
        }
    </style>
    `;
});

hexo.extend.injector.register('body_end', () => {
    return `
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>
    <script>
    (function() {
        const mermaidKeywords = ['graph ', 'sequenceDiagram', 'gantt', 'classDiagram', 'stateDiagram', 'pie', 'erDiagram', 'journey'];

        function renderMermaid() {
            if (!window.mermaid) return;

            // 扫描所有的 highlight 代码块
            const blocks = document.querySelectorAll('.highlight');
            
            blocks.forEach(block => {
                const codeElement = block.querySelector('.code');
                if (!codeElement) return;
                
                const rawCode = codeElement.innerText.trim();
                
                // 检查开头是否符合 Mermaid 语法
                const isMermaid = mermaidKeywords.some(kw => rawCode.startsWith(kw));
                
                if (isMermaid) {
                    const container = document.createElement('div');
                    container.className = 'mermaid';
                    container.textContent = rawCode;

                    // 替换掉整个 figure 标签
                    block.parentNode.insertBefore(container, block);
                    block.remove();
                }
            });

            mermaid.initialize({
                startOnLoad: false,
                theme: 'default',
                securityLevel: 'loose',
                flowchart: { 
                    htmlLabels: false, // 设为 false 能极大缓解文字溢出问题
                    useMaxWidth: true 
                }
            });
            
            mermaid.run();
        }

        window.addEventListener('load', renderMermaid);
        document.addEventListener('pjax:success', renderMermaid);
    })();
    </script>
    `;
});