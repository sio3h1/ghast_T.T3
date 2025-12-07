gdjs.S2Code = {};
gdjs.S2Code.localVariables = [];
gdjs.S2Code.idToCallbackMap = new Map();
gdjs.S2Code.GDstoryObjects1= [];
gdjs.S2Code.GDstoryObjects2= [];
gdjs.S2Code.GDchatObjects1= [];
gdjs.S2Code.GDchatObjects2= [];
gdjs.S2Code.GD_9595_9595_9595Objects1= [];
gdjs.S2Code.GD_9595_9595_9595Objects2= [];
gdjs.S2Code.GDbabyghastObjects1= [];
gdjs.S2Code.GDbabyghastObjects2= [];


gdjs.S2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S2Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S2Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S2Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S3", false);
}
}

}


};

gdjs.S2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S2Code.GDstoryObjects1.length = 0;
gdjs.S2Code.GDstoryObjects2.length = 0;
gdjs.S2Code.GDchatObjects1.length = 0;
gdjs.S2Code.GDchatObjects2.length = 0;
gdjs.S2Code.GD_9595_9595_9595Objects1.length = 0;
gdjs.S2Code.GD_9595_9595_9595Objects2.length = 0;
gdjs.S2Code.GDbabyghastObjects1.length = 0;
gdjs.S2Code.GDbabyghastObjects2.length = 0;

gdjs.S2Code.eventsList0(runtimeScene);
gdjs.S2Code.GDstoryObjects1.length = 0;
gdjs.S2Code.GDstoryObjects2.length = 0;
gdjs.S2Code.GDchatObjects1.length = 0;
gdjs.S2Code.GDchatObjects2.length = 0;
gdjs.S2Code.GD_9595_9595_9595Objects1.length = 0;
gdjs.S2Code.GD_9595_9595_9595Objects2.length = 0;
gdjs.S2Code.GDbabyghastObjects1.length = 0;
gdjs.S2Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S2Code'] = gdjs.S2Code;
