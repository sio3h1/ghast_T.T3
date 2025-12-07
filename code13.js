gdjs.S8Code = {};
gdjs.S8Code.localVariables = [];
gdjs.S8Code.idToCallbackMap = new Map();
gdjs.S8Code.GDstoryObjects1= [];
gdjs.S8Code.GDstoryObjects2= [];
gdjs.S8Code.GDchatObjects1= [];
gdjs.S8Code.GDchatObjects2= [];
gdjs.S8Code.GDTextObjects1= [];
gdjs.S8Code.GDTextObjects2= [];
gdjs.S8Code.GDNewText2Objects1= [];
gdjs.S8Code.GDNewText2Objects2= [];
gdjs.S8Code.GDbabyghastObjects1= [];
gdjs.S8Code.GDbabyghastObjects2= [];


gdjs.S8Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S8Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S8Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S8Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S9", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.S8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S8Code.GDstoryObjects1.length = 0;
gdjs.S8Code.GDstoryObjects2.length = 0;
gdjs.S8Code.GDchatObjects1.length = 0;
gdjs.S8Code.GDchatObjects2.length = 0;
gdjs.S8Code.GDTextObjects1.length = 0;
gdjs.S8Code.GDTextObjects2.length = 0;
gdjs.S8Code.GDNewText2Objects1.length = 0;
gdjs.S8Code.GDNewText2Objects2.length = 0;
gdjs.S8Code.GDbabyghastObjects1.length = 0;
gdjs.S8Code.GDbabyghastObjects2.length = 0;

gdjs.S8Code.eventsList0(runtimeScene);
gdjs.S8Code.GDstoryObjects1.length = 0;
gdjs.S8Code.GDstoryObjects2.length = 0;
gdjs.S8Code.GDchatObjects1.length = 0;
gdjs.S8Code.GDchatObjects2.length = 0;
gdjs.S8Code.GDTextObjects1.length = 0;
gdjs.S8Code.GDTextObjects2.length = 0;
gdjs.S8Code.GDNewText2Objects1.length = 0;
gdjs.S8Code.GDNewText2Objects2.length = 0;
gdjs.S8Code.GDbabyghastObjects1.length = 0;
gdjs.S8Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S8Code'] = gdjs.S8Code;
