myApp.factory('Tiles', function() {
    var Tiles = {};
    Tiles.details = [{message: 'Croods1', url: 'img/croods1.jpg'},
        {message: 'Ratatouille', url: 'img/ratatouille.jpg'},
        {message: 'Up', url: 'img/up.jpg'},
        {message: 'Walle', url: 'img/walle.jpeg'},
        {message: 'Croods', url: 'img/croods2.jpg'},
        {message: 'Shrek', url: 'img/shrek.jpg'},
        {message: 'MonsterInc', url: 'img/monsteruniversity2.jpg'},
        {message: 'Croods', url: 'img/croods3.jpg'},
        {message: 'KungFuPanda', url: 'img/kungfupanda1.jpg'},
        {message: 'ToyStory', url: 'img/toystory.jpg'},
        {message: 'KungFuPanda', url: 'img/kungfupanda2.jpg'},
        {message: 'Up', url: 'img/up2.jpg'},
        {message: 'MonsterInc', url: 'img/monsteruniversity.jpg'},
        {message: 'Up', url: 'img/up.jpg'},
        {message: 'Croods', url: 'img/croods3.jpg'}
    ];
    return Tiles;
});

myApp.factory('TileInfo', function() {
    return {message: ""};
});


