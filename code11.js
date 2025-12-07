gdjs.S6Code = {};
gdjs.S6Code.localVariables = [];
gdjs.S6Code.idToCallbackMap = new Map();
gdjs.S6Code.GDstoryObjects1= [];
gdjs.S6Code.GDstoryObjects2= [];
gdjs.S6Code.GDchatObjects1= [];
gdjs.S6Code.GDchatObjects2= [];
gdjs.S6Code.GDbabyghastObjects1= [];
gdjs.S6Code.GDbabyghastObjects2= [];


gdjs.S6Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S6Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S6Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S6Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S7", false);
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

gdjs.S6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S6Code.GDstoryObjects1.length = 0;
gdjs.S6Code.GDstoryObjects2.length = 0;
gdjs.S6Code.GDchatObjects1.length = 0;
gdjs.S6Code.GDchatObjects2.length = 0;
gdjs.S6Code.GDbabyghastObjects1.length = 0;
gdjs.S6Code.GDbabyghastObjects2.length = 0;

gdjs.S6Code.eventsList0(runtimeScene);
gdjs.S6Code.GDstoryObjects1.length = 0;
gdjs.S6Code.GDstoryObjects2.length = 0;
gdjs.S6Code.GDchatObjects1.length = 0;
gdjs.S6Code.GDchatObjects2.length = 0;
gdjs.S6Code.GDbabyghastObjects1.length = 0;
gdjs.S6Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S6Code'] = gdjs.S6Code;
