gdjs.S10Code = {};
gdjs.S10Code.localVariables = [];
gdjs.S10Code.idToCallbackMap = new Map();
gdjs.S10Code.GDstoryObjects1= [];
gdjs.S10Code.GDstoryObjects2= [];
gdjs.S10Code.GDchatObjects1= [];
gdjs.S10Code.GDchatObjects2= [];
gdjs.S10Code.GD_9553581_9549828_95539442Objects1= [];
gdjs.S10Code.GD_9553581_9549828_95539442Objects2= [];
gdjs.S10Code.GD_9553581_9549828_95539441Objects1= [];
gdjs.S10Code.GD_9553581_9549828_95539441Objects2= [];
gdjs.S10Code.GDNewTextObjects1= [];
gdjs.S10Code.GDNewTextObjects2= [];
gdjs.S10Code.GDbabyghastObjects1= [];
gdjs.S10Code.GDbabyghastObjects2= [];


gdjs.S10Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S10Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S10Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S10Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S11", false);
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

gdjs.S10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S10Code.GDstoryObjects1.length = 0;
gdjs.S10Code.GDstoryObjects2.length = 0;
gdjs.S10Code.GDchatObjects1.length = 0;
gdjs.S10Code.GDchatObjects2.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539442Objects1.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539442Objects2.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539441Objects1.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539441Objects2.length = 0;
gdjs.S10Code.GDNewTextObjects1.length = 0;
gdjs.S10Code.GDNewTextObjects2.length = 0;
gdjs.S10Code.GDbabyghastObjects1.length = 0;
gdjs.S10Code.GDbabyghastObjects2.length = 0;

gdjs.S10Code.eventsList0(runtimeScene);
gdjs.S10Code.GDstoryObjects1.length = 0;
gdjs.S10Code.GDstoryObjects2.length = 0;
gdjs.S10Code.GDchatObjects1.length = 0;
gdjs.S10Code.GDchatObjects2.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539442Objects1.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539442Objects2.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539441Objects1.length = 0;
gdjs.S10Code.GD_9553581_9549828_95539441Objects2.length = 0;
gdjs.S10Code.GDNewTextObjects1.length = 0;
gdjs.S10Code.GDNewTextObjects2.length = 0;
gdjs.S10Code.GDbabyghastObjects1.length = 0;
gdjs.S10Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S10Code'] = gdjs.S10Code;
