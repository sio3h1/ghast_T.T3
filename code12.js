gdjs.S7Code = {};
gdjs.S7Code.localVariables = [];
gdjs.S7Code.idToCallbackMap = new Map();
gdjs.S7Code.GDstoryObjects1= [];
gdjs.S7Code.GDstoryObjects2= [];
gdjs.S7Code.GDchatObjects1= [];
gdjs.S7Code.GDchatObjects2= [];
gdjs.S7Code.GD_9553581_9549828_95539441Objects1= [];
gdjs.S7Code.GD_9553581_9549828_95539441Objects2= [];
gdjs.S7Code.GDbabyghastObjects1= [];
gdjs.S7Code.GDbabyghastObjects2= [];


gdjs.S7Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S7Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S7Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S7Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 3;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S8", false);
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

gdjs.S7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S7Code.GDstoryObjects1.length = 0;
gdjs.S7Code.GDstoryObjects2.length = 0;
gdjs.S7Code.GDchatObjects1.length = 0;
gdjs.S7Code.GDchatObjects2.length = 0;
gdjs.S7Code.GD_9553581_9549828_95539441Objects1.length = 0;
gdjs.S7Code.GD_9553581_9549828_95539441Objects2.length = 0;
gdjs.S7Code.GDbabyghastObjects1.length = 0;
gdjs.S7Code.GDbabyghastObjects2.length = 0;

gdjs.S7Code.eventsList0(runtimeScene);
gdjs.S7Code.GDstoryObjects1.length = 0;
gdjs.S7Code.GDstoryObjects2.length = 0;
gdjs.S7Code.GDchatObjects1.length = 0;
gdjs.S7Code.GDchatObjects2.length = 0;
gdjs.S7Code.GD_9553581_9549828_95539441Objects1.length = 0;
gdjs.S7Code.GD_9553581_9549828_95539441Objects2.length = 0;
gdjs.S7Code.GDbabyghastObjects1.length = 0;
gdjs.S7Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S7Code'] = gdjs.S7Code;
