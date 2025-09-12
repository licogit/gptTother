// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class UploadInfoCtrl extends cc.Component {

   

    start () {

    }

    backAction()
    {
        // cc.director
        cc.director.loadScene('home');
    }


    zhantieAction()
    {
cc.director.loadScene('editInfo');
    }

    jietuAction()
    {
cc.director.loadScene('editInfo');
    }

    // update (dt) {}
}
