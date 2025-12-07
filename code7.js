gdjs._50_45800_44228Code = {};
gdjs._50_45800_44228Code.localVariables = [];
gdjs._50_45800_44228Code.idToCallbackMap = new Map();
gdjs._50_45800_44228Code.GD_95952_9595levelObjects1= [];
gdjs._50_45800_44228Code.GD_95952_9595levelObjects2= [];
gdjs._50_45800_44228Code.GDblockObjects1= [];
gdjs._50_45800_44228Code.GDblockObjects2= [];
gdjs._50_45800_44228Code.GDnextObjects1= [];
gdjs._50_45800_44228Code.GDnextObjects2= [];
gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects1= [];
gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects2= [];
gdjs._50_45800_44228Code.GDchatObjects1= [];
gdjs._50_45800_44228Code.GDchatObjects2= [];
gdjs._50_45800_44228Code.GD_9551096_9554664_9550633Objects1= [];
gdjs._50_45800_44228Code.GD_9551096_9554664_9550633Objects2= [];
gdjs._50_45800_44228Code.GD_9548520_9551312_9549900_9595_9595Objects1= [];
gdjs._50_45800_44228Code.GD_9548520_9551312_9549900_9595_9595Objects2= [];
gdjs._50_45800_44228Code.GDNewTextObjects1= [];
gdjs._50_45800_44228Code.GDNewTextObjects2= [];
gdjs._50_45800_44228Code.GDNewText2Objects1= [];
gdjs._50_45800_44228Code.GDNewText2Objects2= [];
gdjs._50_45800_44228Code.GD_95952_9545800_95442282Objects1= [];
gdjs._50_45800_44228Code.GD_95952_9545800_95442282Objects2= [];
gdjs._50_45800_44228Code.GDtearsObjects1= [];
gdjs._50_45800_44228Code.GDtearsObjects2= [];
gdjs._50_45800_44228Code.GDbabyghastObjects1= [];
gdjs._50_45800_44228Code.GDbabyghastObjects2= [];


gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._50_45800_44228Code.GDbabyghastObjects1});
gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs._50_45800_44228Code.GDnextObjects1});
gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDdie_95959595_95959512640_95959512640Objects1Objects = Hashtable.newFrom({"die_ㅠㅠ": gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects1});
gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._50_45800_44228Code.GDbabyghastObjects1});
gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDbabyghastObjects1Objects = Hashtable.newFrom({"babyghast": gdjs._50_45800_44228Code.GDbabyghastObjects1});
gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDtearsObjects1Objects = Hashtable.newFrom({"tears": gdjs._50_45800_44228Code.GDtearsObjects1});
gdjs._50_45800_44228Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._50_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs._50_45800_44228Code.GDnextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDnextObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3단계", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._50_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("die_ㅠㅠ"), gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDdie_95959595_95959512640_95959512640Objects1Objects, gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDbabyghastObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50_45800_44228Code.GDbabyghastObjects1 */
{for(var i = 0, len = gdjs._50_45800_44228Code.GDbabyghastObjects1.length ;i < len;++i) {
    gdjs._50_45800_44228Code.GDbabyghastObjects1[i].setPosition(-(13),786);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs._50_45800_44228Code.GDchatObjects1);
{for(var i = 0, len = gdjs._50_45800_44228Code.GDchatObjects1.length ;i < len;++i) {
    gdjs._50_45800_44228Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("babyghast"), gdjs._50_45800_44228Code.GDbabyghastObjects1);
gdjs.copyArray(runtimeScene.getObjects("tears"), gdjs._50_45800_44228Code.GDtearsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDbabyghastObjects1Objects, gdjs._50_45800_44228Code.mapOfGDgdjs_9546_959550_959545800_959544228Code_9546GDtearsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50_45800_44228Code.GDtearsObjects1 */
{for(var i = 0, len = gdjs._50_45800_44228Code.GDtearsObjects1.length ;i < len;++i) {
    gdjs._50_45800_44228Code.GDtearsObjects1[i].deleteFromScene(runtimeScene);
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

gdjs._50_45800_44228Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50_45800_44228Code.GD_95952_9595levelObjects1.length = 0;
gdjs._50_45800_44228Code.GD_95952_9595levelObjects2.length = 0;
gdjs._50_45800_44228Code.GDblockObjects1.length = 0;
gdjs._50_45800_44228Code.GDblockObjects2.length = 0;
gdjs._50_45800_44228Code.GDnextObjects1.length = 0;
gdjs._50_45800_44228Code.GDnextObjects2.length = 0;
gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects1.length = 0;
gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects2.length = 0;
gdjs._50_45800_44228Code.GDchatObjects1.length = 0;
gdjs._50_45800_44228Code.GDchatObjects2.length = 0;
gdjs._50_45800_44228Code.GD_9551096_9554664_9550633Objects1.length = 0;
gdjs._50_45800_44228Code.GD_9551096_9554664_9550633Objects2.length = 0;
gdjs._50_45800_44228Code.GD_9548520_9551312_9549900_9595_9595Objects1.length = 0;
gdjs._50_45800_44228Code.GD_9548520_9551312_9549900_9595_9595Objects2.length = 0;
gdjs._50_45800_44228Code.GDNewTextObjects1.length = 0;
gdjs._50_45800_44228Code.GDNewTextObjects2.length = 0;
gdjs._50_45800_44228Code.GDNewText2Objects1.length = 0;
gdjs._50_45800_44228Code.GDNewText2Objects2.length = 0;
gdjs._50_45800_44228Code.GD_95952_9545800_95442282Objects1.length = 0;
gdjs._50_45800_44228Code.GD_95952_9545800_95442282Objects2.length = 0;
gdjs._50_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._50_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._50_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._50_45800_44228Code.GDbabyghastObjects2.length = 0;

gdjs._50_45800_44228Code.eventsList0(runtimeScene);
gdjs._50_45800_44228Code.GD_95952_9595levelObjects1.length = 0;
gdjs._50_45800_44228Code.GD_95952_9595levelObjects2.length = 0;
gdjs._50_45800_44228Code.GDblockObjects1.length = 0;
gdjs._50_45800_44228Code.GDblockObjects2.length = 0;
gdjs._50_45800_44228Code.GDnextObjects1.length = 0;
gdjs._50_45800_44228Code.GDnextObjects2.length = 0;
gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects1.length = 0;
gdjs._50_45800_44228Code.GDdie_9595_9512640_9512640Objects2.length = 0;
gdjs._50_45800_44228Code.GDchatObjects1.length = 0;
gdjs._50_45800_44228Code.GDchatObjects2.length = 0;
gdjs._50_45800_44228Code.GD_9551096_9554664_9550633Objects1.length = 0;
gdjs._50_45800_44228Code.GD_9551096_9554664_9550633Objects2.length = 0;
gdjs._50_45800_44228Code.GD_9548520_9551312_9549900_9595_9595Objects1.length = 0;
gdjs._50_45800_44228Code.GD_9548520_9551312_9549900_9595_9595Objects2.length = 0;
gdjs._50_45800_44228Code.GDNewTextObjects1.length = 0;
gdjs._50_45800_44228Code.GDNewTextObjects2.length = 0;
gdjs._50_45800_44228Code.GDNewText2Objects1.length = 0;
gdjs._50_45800_44228Code.GDNewText2Objects2.length = 0;
gdjs._50_45800_44228Code.GD_95952_9545800_95442282Objects1.length = 0;
gdjs._50_45800_44228Code.GD_95952_9545800_95442282Objects2.length = 0;
gdjs._50_45800_44228Code.GDtearsObjects1.length = 0;
gdjs._50_45800_44228Code.GDtearsObjects2.length = 0;
gdjs._50_45800_44228Code.GDbabyghastObjects1.length = 0;
gdjs._50_45800_44228Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['_50_45800_44228Code'] = gdjs._50_45800_44228Code;
