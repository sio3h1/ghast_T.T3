gdjs.S1Code = {};
gdjs.S1Code.localVariables = [];
gdjs.S1Code.idToCallbackMap = new Map();
gdjs.S1Code.GDstartObjects1= [];
gdjs.S1Code.GDstartObjects2= [];
gdjs.S1Code.GDchatObjects1= [];
gdjs.S1Code.GDchatObjects2= [];
gdjs.S1Code.GDbabyghastObjects1= [];
gdjs.S1Code.GDbabyghastObjects2= [];


gdjs.S1Code.eventsList0 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S2", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S1Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S1Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S1Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


};

gdjs.S1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S1Code.GDstartObjects1.length = 0;
gdjs.S1Code.GDstartObjects2.length = 0;
gdjs.S1Code.GDchatObjects1.length = 0;
gdjs.S1Code.GDchatObjects2.length = 0;
gdjs.S1Code.GDbabyghastObjects1.length = 0;
gdjs.S1Code.GDbabyghastObjects2.length = 0;

gdjs.S1Code.eventsList0(runtimeScene);
gdjs.S1Code.GDstartObjects1.length = 0;
gdjs.S1Code.GDstartObjects2.length = 0;
gdjs.S1Code.GDchatObjects1.length = 0;
gdjs.S1Code.GDchatObjects2.length = 0;
gdjs.S1Code.GDbabyghastObjects1.length = 0;
gdjs.S1Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S1Code'] = gdjs.S1Code;
