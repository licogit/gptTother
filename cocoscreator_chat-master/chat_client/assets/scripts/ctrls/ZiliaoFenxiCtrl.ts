// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ZiliaoFenxiCtrl extends cc.Component {

   liaotianAction()
   {
        cc.director.loadScene('Chat');
   }

   backAction()
    {
        // cc.director
        cc.director.loadScene('editInfo');
    }



}
