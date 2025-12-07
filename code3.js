gdjs.S3Code = {};
gdjs.S3Code.localVariables = [];
gdjs.S3Code.idToCallbackMap = new Map();
gdjs.S3Code.GDstoryObjects1= [];
gdjs.S3Code.GDstoryObjects2= [];
gdjs.S3Code.GDchatObjects1= [];
gdjs.S3Code.GDchatObjects2= [];
gdjs.S3Code.GDwhoObjects1= [];
gdjs.S3Code.GDwhoObjects2= [];
gdjs.S3Code.GDbabyghastObjects1= [];
gdjs.S3Code.GDbabyghastObjects2= [];
gdjs.S3Code.GDbabyghastObjects1= [];
gdjs.S3Code.GDbabyghastObjects2= [];


gdjs.S3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S3Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S3Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S3Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S4", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.S3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S3Code.GDstoryObjects1.length = 0;
gdjs.S3Code.GDstoryObjects2.length = 0;
gdjs.S3Code.GDchatObjects1.length = 0;
gdjs.S3Code.GDchatObjects2.length = 0;
gdjs.S3Code.GDwhoObjects1.length = 0;
gdjs.S3Code.GDwhoObjects2.length = 0;
gdjs.S3Code.GDbabyghastObjects1.length = 0;
gdjs.S3Code.GDbabyghastObjects2.length = 0;
gdjs.S3Code.GDbabyghastObjects1.length = 0;
gdjs.S3Code.GDbabyghastObjects2.length = 0;

gdjs.S3Code.eventsList0(runtimeScene);
gdjs.S3Code.GDstoryObjects1.length = 0;
gdjs.S3Code.GDstoryObjects2.length = 0;
gdjs.S3Code.GDchatObjects1.length = 0;
gdjs.S3Code.GDchatObjects2.length = 0;
gdjs.S3Code.GDwhoObjects1.length = 0;
gdjs.S3Code.GDwhoObjects2.length = 0;
gdjs.S3Code.GDbabyghastObjects1.length = 0;
gdjs.S3Code.GDbabyghastObjects2.length = 0;
gdjs.S3Code.GDbabyghastObjects1.length = 0;
gdjs.S3Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S3Code'] = gdjs.S3Code;
