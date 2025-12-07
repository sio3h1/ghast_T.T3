gdjs._52_45800_44228Code = {};
gdjs._52_45800_44228Code.localVariables = [];
gdjs._52_45800_44228Code.idToCallbackMap = new Map();
gdjs._52_45800_44228Code.GD_95954levelObjects1= [];
gdjs._52_45800_44228Code.GD_95954levelObjects2= [];
gdjs._52_45800_44228Code.GDblockObjects1= [];
gdjs._52_45800_44228Code.GDblockObjects2= [];
gdjs._52_45800_44228Code.GDnextObjects1= [];
gdjs._52_45800_44228Code.GDnextObjects2= [];
gdjs._52_45800_44228Code.GDdieObjects1= [];
gdjs._52_45800_44228Code.GDdieObjects2= [];
gdjs._52_45800_44228Code.GDchatObjects1= [];
gdjs._52_45800_44228Code.GDchatObjects2= [];
gdjs._52_45800_44228Code.GD_9550504_9545236Objects1= [];
gdjs._52_45800_44228Code.GD_9550504_9545236Objects2= [];
gdjs._52_45800_44228Code.GDUnnamedObjects1= [];
gdjs._52_45800_44228Code.GDUnnamedObjects2= [];
gdjs._52_45800_44228Code.GDtearsObjects1= [];
gdjs._52_45800_44228Code.GDtearsObjects2= [];
gdjs._52_45800_44228Code.GDbabyghastObjects1= [];
gdjs._52_45800_44228Code.GDbabyghastObjects2= [];


gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._52_45800_44228Code.GDbabyghastObjects1});
gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDdieObjects1Objects = Hashtable.newFrom({"die": gdjs._52_45800_44228Code.GDdieObjects1});
gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._52_45800_44228Code.GDbabyghastObjects1});
gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs._52_45800_44228Code.GDnextObjects1});
gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._52_45800_44228Code.GDbabyghastObjects1});
gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDtearsObjects1Objects = Hashtable.newFrom({"tears": gdjs._52_45800_44228Code.GDtearsObjects1});
gdjs._52_45800_44228Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._52_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("die"), gdjs._52_45800_44228Code.GDdieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDdieObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._52_45800_44228Code.GDbabyghastObjects1 */
{for(var i = 0, len = gdjs._52_45800_44228Code.GDbabyghastObjects1.length ;i < len;++i) {
    gdjs._52_45800_44228Code.GDbabyghastObjects1[i].setPosition(-(20),762);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._52_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs._52_45800_44228Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDnextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "5단계 (마지막 단계)", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs._52_45800_44228Code.GDchatObjects1);
{for(var i = 0, len = gdjs._52_45800_44228Code.GDchatObjects1.length ;i < len;++i) {
    gdjs._52_45800_44228Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._52_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("tears"), gdjs._52_45800_44228Code.GDtearsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._52_45800_44228Code.mapOfGDgdjs_9546_959552_959545800_959544228Code_9546GDtearsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._52_45800_44228Code.GDtearsObjects1 */
{for(var i = 0, len = gdjs._52_45800_44228Code.GDtearsObjects1.length ;i < len;++i) {
    gdjs._52_45800_44228Code.GDtearsObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._52_45800_44228Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52_45800_44228Code.GD_95954levelObjects1.length = 0;
gdjs._52_45800_44228Code.GD_95954levelObjects2.length = 0;
gdjs._52_45800_44228Code.GDblockObjects1.length = 0;
gdjs._52_45800_44228Code.GDblockObjects2.length = 0;
gdjs._52_45800_44228Code.GDnextObjects1.length = 0;
gdjs._52_45800_44228Code.GDnextObjects2.length = 0;
gdjs._52_45800_44228Code.GDdieObjects1.length = 0;
gdjs._52_45800_44228Code.GDdieObjects2.length = 0;
gdjs._52_45800_44228Code.GDchatObjects1.length = 0;
gdjs._52_45800_44228Code.GDchatObjects2.length = 0;
gdjs._52_45800_44228Code.GD_9550504_9545236Objects1.length = 0;
gdjs._52_45800_44228Code.GD_9550504_9545236Objects2.length = 0;
gdjs._52_45800_44228Code.GDUnnamedObjects1.length = 0;
gdjs._52_45800_44228Code.GDUnnamedObjects2.length = 0;
gdjs._52_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._52_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._52_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._52_45800_44228Code.GDbabyghastObjects2.length = 0;

gdjs._52_45800_44228Code.eventsList0(runtimeScene);
gdjs._52_45800_44228Code.GD_95954levelObjects1.length = 0;
gdjs._52_45800_44228Code.GD_95954levelObjects2.length = 0;
gdjs._52_45800_44228Code.GDblockObjects1.length = 0;
gdjs._52_45800_44228Code.GDblockObjects2.length = 0;
gdjs._52_45800_44228Code.GDnextObjects1.length = 0;
gdjs._52_45800_44228Code.GDnextObjects2.length = 0;
gdjs._52_45800_44228Code.GDdieObjects1.length = 0;
gdjs._52_45800_44228Code.GDdieObjects2.length = 0;
gdjs._52_45800_44228Code.GDchatObjects1.length = 0;
gdjs._52_45800_44228Code.GDchatObjects2.length = 0;
gdjs._52_45800_44228Code.GD_9550504_9545236Objects1.length = 0;
gdjs._52_45800_44228Code.GD_9550504_9545236Objects2.length = 0;
gdjs._52_45800_44228Code.GDUnnamedObjects1.length = 0;
gdjs._52_45800_44228Code.GDUnnamedObjects2.length = 0;
gdjs._52_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._52_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._52_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._52_45800_44228Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['_52_45800_44228Code'] = gdjs._52_45800_44228Code;
