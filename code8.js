gdjs._51_45800_44228Code = {};
gdjs._51_45800_44228Code.localVariables = [];
gdjs._51_45800_44228Code.idToCallbackMap = new Map();
gdjs._51_45800_44228Code.GD_95953levelObjects1= [];
gdjs._51_45800_44228Code.GD_95953levelObjects2= [];
gdjs._51_45800_44228Code.GDblockObjects1= [];
gdjs._51_45800_44228Code.GDblockObjects2= [];
gdjs._51_45800_44228Code.GDgoodObjects1= [];
gdjs._51_45800_44228Code.GDgoodObjects2= [];
gdjs._51_45800_44228Code.GDt_9595tObjects1= [];
gdjs._51_45800_44228Code.GDt_9595tObjects2= [];
gdjs._51_45800_44228Code.GDchatObjects1= [];
gdjs._51_45800_44228Code.GDchatObjects2= [];
gdjs._51_45800_44228Code.GDNewTextObjects1= [];
gdjs._51_45800_44228Code.GDNewTextObjects2= [];
gdjs._51_45800_44228Code.GDNewText2Objects1= [];
gdjs._51_45800_44228Code.GDNewText2Objects2= [];
gdjs._51_45800_44228Code.GD_9550504_9545236Objects1= [];
gdjs._51_45800_44228Code.GD_9550504_9545236Objects2= [];
gdjs._51_45800_44228Code.GDtearsObjects1= [];
gdjs._51_45800_44228Code.GDtearsObjects2= [];
gdjs._51_45800_44228Code.GDdieObjects1= [];
gdjs._51_45800_44228Code.GDdieObjects2= [];
gdjs._51_45800_44228Code.GDnextObjects1= [];
gdjs._51_45800_44228Code.GDnextObjects2= [];
gdjs._51_45800_44228Code.GDbabyghastObjects1= [];
gdjs._51_45800_44228Code.GDbabyghastObjects2= [];


gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._51_45800_44228Code.GDbabyghastObjects1});
gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs._51_45800_44228Code.GDnextObjects1});
gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._51_45800_44228Code.GDbabyghastObjects1});
gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDdieObjects1Objects = Hashtable.newFrom({"die": gdjs._51_45800_44228Code.GDdieObjects1});
gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._51_45800_44228Code.GDbabyghastObjects1});
gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDtearsObjects1Objects = Hashtable.newFrom({"tears": gdjs._51_45800_44228Code.GDtearsObjects1});
gdjs._51_45800_44228Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._51_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs._51_45800_44228Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDnextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "4단계", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._51_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("die"), gdjs._51_45800_44228Code.GDdieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDdieObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._51_45800_44228Code.GDbabyghastObjects1 */
{for(var i = 0, len = gdjs._51_45800_44228Code.GDbabyghastObjects1.length ;i < len;++i) {
    gdjs._51_45800_44228Code.GDbabyghastObjects1[i].setPosition(-(13),743);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs._51_45800_44228Code.GDchatObjects1);
{for(var i = 0, len = gdjs._51_45800_44228Code.GDchatObjects1.length ;i < len;++i) {
    gdjs._51_45800_44228Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._51_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("tears"), gdjs._51_45800_44228Code.GDtearsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._51_45800_44228Code.mapOfGDgdjs_9546_959551_959545800_959544228Code_9546GDtearsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._51_45800_44228Code.GDtearsObjects1 */
{for(var i = 0, len = gdjs._51_45800_44228Code.GDtearsObjects1.length ;i < len;++i) {
    gdjs._51_45800_44228Code.GDtearsObjects1[i].deleteFromScene(runtimeScene);
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

gdjs._51_45800_44228Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51_45800_44228Code.GD_95953levelObjects1.length = 0;
gdjs._51_45800_44228Code.GD_95953levelObjects2.length = 0;
gdjs._51_45800_44228Code.GDblockObjects1.length = 0;
gdjs._51_45800_44228Code.GDblockObjects2.length = 0;
gdjs._51_45800_44228Code.GDgoodObjects1.length = 0;
gdjs._51_45800_44228Code.GDgoodObjects2.length = 0;
gdjs._51_45800_44228Code.GDt_9595tObjects1.length = 0;
gdjs._51_45800_44228Code.GDt_9595tObjects2.length = 0;
gdjs._51_45800_44228Code.GDchatObjects1.length = 0;
gdjs._51_45800_44228Code.GDchatObjects2.length = 0;
gdjs._51_45800_44228Code.GDNewTextObjects1.length = 0;
gdjs._51_45800_44228Code.GDNewTextObjects2.length = 0;
gdjs._51_45800_44228Code.GDNewText2Objects1.length = 0;
gdjs._51_45800_44228Code.GDNewText2Objects2.length = 0;
gdjs._51_45800_44228Code.GD_9550504_9545236Objects1.length = 0;
gdjs._51_45800_44228Code.GD_9550504_9545236Objects2.length = 0;
gdjs._51_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._51_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._51_45800_44228Code.GDdieObjects1.length = 0;
gdjs._51_45800_44228Code.GDdieObjects2.length = 0;
gdjs._51_45800_44228Code.GDnextObjects1.length = 0;
gdjs._51_45800_44228Code.GDnextObjects2.length = 0;
gdjs._51_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._51_45800_44228Code.GDbabyghastObjects2.length = 0;

gdjs._51_45800_44228Code.eventsList0(runtimeScene);
gdjs._51_45800_44228Code.GD_95953levelObjects1.length = 0;
gdjs._51_45800_44228Code.GD_95953levelObjects2.length = 0;
gdjs._51_45800_44228Code.GDblockObjects1.length = 0;
gdjs._51_45800_44228Code.GDblockObjects2.length = 0;
gdjs._51_45800_44228Code.GDgoodObjects1.length = 0;
gdjs._51_45800_44228Code.GDgoodObjects2.length = 0;
gdjs._51_45800_44228Code.GDt_9595tObjects1.length = 0;
gdjs._51_45800_44228Code.GDt_9595tObjects2.length = 0;
gdjs._51_45800_44228Code.GDchatObjects1.length = 0;
gdjs._51_45800_44228Code.GDchatObjects2.length = 0;
gdjs._51_45800_44228Code.GDNewTextObjects1.length = 0;
gdjs._51_45800_44228Code.GDNewTextObjects2.length = 0;
gdjs._51_45800_44228Code.GDNewText2Objects1.length = 0;
gdjs._51_45800_44228Code.GDNewText2Objects2.length = 0;
gdjs._51_45800_44228Code.GD_9550504_9545236Objects1.length = 0;
gdjs._51_45800_44228Code.GD_9550504_9545236Objects2.length = 0;
gdjs._51_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._51_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._51_45800_44228Code.GDdieObjects1.length = 0;
gdjs._51_45800_44228Code.GDdieObjects2.length = 0;
gdjs._51_45800_44228Code.GDnextObjects1.length = 0;
gdjs._51_45800_44228Code.GDnextObjects2.length = 0;
gdjs._51_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._51_45800_44228Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['_51_45800_44228Code'] = gdjs._51_45800_44228Code;
