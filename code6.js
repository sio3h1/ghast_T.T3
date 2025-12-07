gdjs._49_45800_44228Code = {};
gdjs._49_45800_44228Code.localVariables = [];
gdjs._49_45800_44228Code.idToCallbackMap = new Map();
gdjs._49_45800_44228Code.GD_95951level2Objects1= [];
gdjs._49_45800_44228Code.GD_95951level2Objects2= [];
gdjs._49_45800_44228Code.GDblockObjects1= [];
gdjs._49_45800_44228Code.GDblockObjects2= [];
gdjs._49_45800_44228Code.GDtearsObjects1= [];
gdjs._49_45800_44228Code.GDtearsObjects2= [];
gdjs._49_45800_44228Code.GDnextObjects1= [];
gdjs._49_45800_44228Code.GDnextObjects2= [];
gdjs._49_45800_44228Code.GDchatObjects1= [];
gdjs._49_45800_44228Code.GDchatObjects2= [];
gdjs._49_45800_44228Code.GDbaby_9595ghast_9595chatObjects1= [];
gdjs._49_45800_44228Code.GDbaby_9595ghast_9595chatObjects2= [];
gdjs._49_45800_44228Code.GDNewText2Objects1= [];
gdjs._49_45800_44228Code.GDNewText2Objects2= [];
gdjs._49_45800_44228Code.GDbabyghastObjects1= [];
gdjs._49_45800_44228Code.GDbabyghastObjects2= [];


gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._49_45800_44228Code.GDbabyghastObjects1});
gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs._49_45800_44228Code.GDnextObjects1});
gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._49_45800_44228Code.GDbabyghastObjects1});
gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDtearsObjects1Objects = Hashtable.newFrom({"tears": gdjs._49_45800_44228Code.GDtearsObjects1});
gdjs._49_45800_44228Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._49_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs._49_45800_44228Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDnextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2단계", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs._49_45800_44228Code.GDchatObjects1);
{for(var i = 0, len = gdjs._49_45800_44228Code.GDchatObjects1.length ;i < len;++i) {
    gdjs._49_45800_44228Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._49_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("tears"), gdjs._49_45800_44228Code.GDtearsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._49_45800_44228Code.mapOfGDgdjs_9546_959549_959545800_959544228Code_9546GDtearsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._49_45800_44228Code.GDtearsObjects1 */
{for(var i = 0, len = gdjs._49_45800_44228Code.GDtearsObjects1.length ;i < len;++i) {
    gdjs._49_45800_44228Code.GDtearsObjects1[i].deleteFromScene(runtimeScene);
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

gdjs._49_45800_44228Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49_45800_44228Code.GD_95951level2Objects1.length = 0;
gdjs._49_45800_44228Code.GD_95951level2Objects2.length = 0;
gdjs._49_45800_44228Code.GDblockObjects1.length = 0;
gdjs._49_45800_44228Code.GDblockObjects2.length = 0;
gdjs._49_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._49_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._49_45800_44228Code.GDnextObjects1.length = 0;
gdjs._49_45800_44228Code.GDnextObjects2.length = 0;
gdjs._49_45800_44228Code.GDchatObjects1.length = 0;
gdjs._49_45800_44228Code.GDchatObjects2.length = 0;
gdjs._49_45800_44228Code.GDbaby_9595ghast_9595chatObjects1.length = 0;
gdjs._49_45800_44228Code.GDbaby_9595ghast_9595chatObjects2.length = 0;
gdjs._49_45800_44228Code.GDNewText2Objects1.length = 0;
gdjs._49_45800_44228Code.GDNewText2Objects2.length = 0;
gdjs._49_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._49_45800_44228Code.GDbabyghastObjects2.length = 0;

gdjs._49_45800_44228Code.eventsList0(runtimeScene);
gdjs._49_45800_44228Code.GD_95951level2Objects1.length = 0;
gdjs._49_45800_44228Code.GD_95951level2Objects2.length = 0;
gdjs._49_45800_44228Code.GDblockObjects1.length = 0;
gdjs._49_45800_44228Code.GDblockObjects2.length = 0;
gdjs._49_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._49_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._49_45800_44228Code.GDnextObjects1.length = 0;
gdjs._49_45800_44228Code.GDnextObjects2.length = 0;
gdjs._49_45800_44228Code.GDchatObjects1.length = 0;
gdjs._49_45800_44228Code.GDchatObjects2.length = 0;
gdjs._49_45800_44228Code.GDbaby_9595ghast_9595chatObjects1.length = 0;
gdjs._49_45800_44228Code.GDbaby_9595ghast_9595chatObjects2.length = 0;
gdjs._49_45800_44228Code.GDNewText2Objects1.length = 0;
gdjs._49_45800_44228Code.GDNewText2Objects2.length = 0;
gdjs._49_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._49_45800_44228Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['_49_45800_44228Code'] = gdjs._49_45800_44228Code;
