gdjs.S9Code = {};
gdjs.S9Code.localVariables = [];
gdjs.S9Code.idToCallbackMap = new Map();
gdjs.S9Code.GDstoryObjects1= [];
gdjs.S9Code.GDstoryObjects2= [];
gdjs.S9Code.GDchatObjects1= [];
gdjs.S9Code.GDchatObjects2= [];
gdjs.S9Code.GDNewTextObjects1= [];
gdjs.S9Code.GDNewTextObjects2= [];
gdjs.S9Code.GDNewText2Objects1= [];
gdjs.S9Code.GDNewText2Objects2= [];
gdjs.S9Code.GD_9552292_95540213Objects1= [];
gdjs.S9Code.GD_9552292_95540213Objects2= [];
gdjs.S9Code.GDbabyghastObjects1= [];
gdjs.S9Code.GDbabyghastObjects2= [];


gdjs.S9Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S9Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S9Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S9Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S10", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ni");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.S9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S9Code.GDstoryObjects1.length = 0;
gdjs.S9Code.GDstoryObjects2.length = 0;
gdjs.S9Code.GDchatObjects1.length = 0;
gdjs.S9Code.GDchatObjects2.length = 0;
gdjs.S9Code.GDNewTextObjects1.length = 0;
gdjs.S9Code.GDNewTextObjects2.length = 0;
gdjs.S9Code.GDNewText2Objects1.length = 0;
gdjs.S9Code.GDNewText2Objects2.length = 0;
gdjs.S9Code.GD_9552292_95540213Objects1.length = 0;
gdjs.S9Code.GD_9552292_95540213Objects2.length = 0;
gdjs.S9Code.GDbabyghastObjects1.length = 0;
gdjs.S9Code.GDbabyghastObjects2.length = 0;

gdjs.S9Code.eventsList0(runtimeScene);
gdjs.S9Code.GDstoryObjects1.length = 0;
gdjs.S9Code.GDstoryObjects2.length = 0;
gdjs.S9Code.GDchatObjects1.length = 0;
gdjs.S9Code.GDchatObjects2.length = 0;
gdjs.S9Code.GDNewTextObjects1.length = 0;
gdjs.S9Code.GDNewTextObjects2.length = 0;
gdjs.S9Code.GDNewText2Objects1.length = 0;
gdjs.S9Code.GDNewText2Objects2.length = 0;
gdjs.S9Code.GD_9552292_95540213Objects1.length = 0;
gdjs.S9Code.GD_9552292_95540213Objects2.length = 0;
gdjs.S9Code.GDbabyghastObjects1.length = 0;
gdjs.S9Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S9Code'] = gdjs.S9Code;
