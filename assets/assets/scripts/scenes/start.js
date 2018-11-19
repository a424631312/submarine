// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var backgroundModule = require('background');
var submarine = require('submarine');
var mine = require('mine');
var gameState = require('common');

cc.Class({
    extends: cc.Component,

    properties:()=> ({
        //功能模块
        //背景
        backgroundModule:
        {
            default:null,
            type:backgroundModule,
        },
        //玩家
        playerModule:
        {
            default:null,
            type:submarine,
        },
        //鱼雷
        itemModule:
        {
            default:null,
            type:mine,
        },
        //计分label
        label:cc.Label,
    }),

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.backgroundModule.initBackgroundImagesPosotion();
        this.playerModule.init();
    },

    // start () {

    // },

    update (dt) {
        // if (window.common.gameState == gameState.pause || window.common.gameState == gameState.stop)
        // {
        //     return;
        // }
        // else 
        // {
            //保持背景移动
            this.backgroundModule.startAndKeepScrollingBackgroundImages();
            this.backgroundModule.checkScrollingBackgroundImages();
            //保持潜艇下沉
            if (this.playerModule.isTouching == false)
            {
                this.playerModule.startAndKeepDeclining();
            }
            
        // }
        
    },
});
