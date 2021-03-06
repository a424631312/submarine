// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var playerControl = require('playerControl');

cc.Class({
    extends: cc.Component,

    properties:()=> ({
        submarine:{
            default:null,
            type:cc.Node,
        },
        //上浮速度
        riseSpeed: 1,
        //下沉速度
        delineSpeed: 1,

        isTouching: false,
    }),

    //初始化
    init: function()
    {
        //开始监控屏幕触碰
        playerControl.submarine = this;
    },

    //下沉
    startAndKeepDeclining: function()
    {
        this.submarine.y -= this.delineSpeed;
    },

    //上浮
    startRise: function()
    {
        this.submarine.y += this.riseSpeed;
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    // update (dt) {},
});
