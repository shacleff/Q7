cc.Class({
    extends: cc.Component,

    properties: {
        itemTemplate:{//仓库列表项
            default:null,
            type:cc.Prefab
        },
        content:{//列表容器
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.items = [];
        this.initialize();
    },
    initialize:function(){
        var k = 0
        for(let i = 0;i<30;++i){
            let item = cc.instantiate(this.itemTemplate);
            this.content.addChild(item);
            item.getComponent('SetEnterpotItem').setItme(1,k);
            k++;
            this.items.push(item);
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});