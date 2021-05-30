module.exports = {
    base: '/',
    title: 'ئۇيغۇر VuePress',
    theme: 'default-uyghur',
    themeConfig: {
        persianDate: true,
        lastUpdated: 'يېڭىلانغان ۋاقتى',
        editLinks: true,
        smoothScroll: true,
        nav: [
            {
                text: 'باشبەت',
                link: '/'
            }
        ]
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }]
    ]
}
