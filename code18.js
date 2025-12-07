gdjs.S13Code = {};
gdjs.S13Code.localVariables = [];
gdjs.S13Code.idToCallbackMap = new Map();
gdjs.S13Code.GDstoryObjects1= [];
gdjs.S13Code.GDstoryObjects2= [];
gdjs.S13Code.GD_9551068_9551452_9551068_9554980Objects1= [];
gdjs.S13Code.GD_9551068_9551452_9551068_9554980Objects2= [];
gdjs.S13Code.GDbabyghastObjects1= [];
gdjs.S13Code.GDbabyghastObjects2= [];


gdjs.S13Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "마무리", false);
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

gdjs.S13Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S13Code.GDstoryObjects1.length = 0;
gdjs.S13Code.GDstoryObjects2.length = 0;
gdjs.S13Code.GD_9551068_9551452_9551068_9554980Objects1.length = 0;
gdjs.S13Code.GD_9551068_9551452_9551068_9554980Objects2.length = 0;
gdjs.S13Code.GDbabyghastObjects1.length = 0;
gdjs.S13Code.GDbabyghastObjects2.length = 0;

gdjs.S13Code.eventsList0(runtimeScene);
gdjs.S13Code.GDstoryObjects1.length = 0;
gdjs.S13Code.GDstoryObjects2.length = 0;
gdjs.S13Code.GD_9551068_9551452_9551068_9554980Objects1.length = 0;
gdjs.S13Code.GD_9551068_9551452_9551068_9554980Objects2.length = 0;
gdjs.S13Code.GDbabyghastObjects1.length = 0;
gdjs.S13Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S13Code'] = gdjs.S13Code;
