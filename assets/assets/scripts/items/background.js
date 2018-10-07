// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties:()=> ({
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        //包含需要滚动的图片的数组(元素类型为Node,即在层级管理器中存在的图片资源)
        iamgeArray:{
        	default:[],
        	type:cc.Node,
        },

        //滚动速度
        scrollSpeed:0,

        //滚动次数（未实现）
        scrollTime:0,

        //边界值
        _boundingX:0,
    }),

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    //初始化背景图位置
    initBackgroundImagesPosotion: function()
    {    	
    	let array = this.iamgeArray;

    	for (let i=0;i<array.length;++i)
    	{
		 	let thisImage = array[i];

			let boundingBox = thisImage.getBoundingBox();

    		if (!i)
    		{
    			//获取第一张背景图轴向最小值，为后面的背景图作为参考
    			this._boundingX = boundingBox.xMin;
    		}

    		if (i+1 < array.length)
    		{
    			let nextImage = array[i+1];

    			nextImage.setPosition(boundingBox.xMax,  thisImage.y);
    		}
    	}

    },

    //开始滚动背景图
    startScrollBackgroundImages: function()
    {
    	let array = this.iamgeArray;

    	for (let i=0;i<array.length;++i)
    	{
    		let image = array[i];

    		image.x -= this.scrollSpeed;
    //检查背景图是否需要重置
    	}
    },

    checkScrollingBackgroundImages: function()
    {
    	let array = this.iamgeArray;

		let image = array[0];

		let boundingBox = image.getBoundingBox();

		if (boundingBox.xMax <= this._boundingX)
		{
			let imageOutOfBounding = array.shift();

			array.push(imageOutOfBounding);

			this.changeScrollingBackgroundImages(array, imageOutOfBounding);
		}
    },

    //更换背景图，重置所有背景图在数组中的位置
    changeScrollingBackgroundImages: function(array, imageOutOfBounding)
    {
    	if (array.length>1)
    	{
    		//获取倒数第二张背景图
    		let lastButOneImage = array[array.length - 2];

    		let boundingBox = lastButOneImage.getBoundingBox();

    		imageOutOfBounding.x = boundingBox.xMax;
    	}
    }, 

    // start () {

    // },

    // update (dt) {},
});
