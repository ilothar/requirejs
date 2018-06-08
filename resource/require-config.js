require.config({
    baseUrl:'resource/app',
    paths:{
        'css':'../lib/css.min',
        'jquery':'../lib/jquery.3.1.min',
        'bootstrap':'../lib/bootstrap.min'
    },
    shim:{
        'bootstrap':{
            'deps':['css!../css/bootstrap.min.css','jquery']
        }
    }
})
require(['bootstrap','util'],function ($,util) {
    alert(util.trim("我      爱                   code          "))
})