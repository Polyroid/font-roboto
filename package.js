Package.describe({
    name: 'polyroid:font-roboto',
    version: '1.0.1',
    summary: 'An HTML import for Roboto',
    git: 'https://github.com/Polyroid/font-roboto.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.addAssets([
        'roboto.html'
    ], 'client');
});
