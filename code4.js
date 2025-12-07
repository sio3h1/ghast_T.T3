gdjs.S4Code = {};
gdjs.S4Code.localVariables = [];
gdjs.S4Code.idToCallbackMap = new Map();
gdjs.S4Code.GDstoryObjects1= [];
gdjs.S4Code.GDstoryObjects2= [];
gdjs.S4Code.GDchatObjects1= [];
gdjs.S4Code.GDchatObjects2= [];
gdjs.S4Code.GDwhoObjects1= [];
gdjs.S4Code.GDwhoObjects2= [];
gdjs.S4Code.GDbabyghast_9595chatObjects1= [];
gdjs.S4Code.GDbabyghast_9595chatObjects2= [];
gdjs.S4Code.GDbabyghast_9595chat2Objects1= [];
gdjs.S4Code.GDbabyghast_9595chat2Objects2= [];
gdjs.S4Code.GDbabyghastObjects1= [];
gdjs.S4Code.GDbabyghastObjects2= [];


gdjs.S4Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S4Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S4Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S4Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S5", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.S4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S4Code.GDstoryObjects1.length = 0;
gdjs.S4Code.GDstoryObjects2.length = 0;
gdjs.S4Code.GDchatObjects1.length = 0;
gdjs.S4Code.GDchatObjects2.length = 0;
gdjs.S4Code.GDwhoObjects1.length = 0;
gdjs.S4Code.GDwhoObjects2.length = 0;
gdjs.S4Code.GDbabyghast_9595chatObjects1.length = 0;
gdjs.S4Code.GDbabyghast_9595chatObjects2.length = 0;
gdjs.S4Code.GDbabyghast_9595chat2Objects1.length = 0;
gdjs.S4Code.GDbabyghast_9595chat2Objects2.length = 0;
gdjs.S4Code.GDbabyghastObjects1.length = 0;
gdjs.S4Code.GDbabyghastObjects2.length = 0;

gdjs.S4Code.eventsList0(runtimeScene);
gdjs.S4Code.GDstoryObjects1.length = 0;
gdjs.S4Code.GDstoryObjects2.length = 0;
gdjs.S4Code.GDchatObjects1.length = 0;
gdjs.S4Code.GDchatObjects2.length = 0;
gdjs.S4Code.GDwhoObjects1.length = 0;
gdjs.S4Code.GDwhoObjects2.length = 0;
gdjs.S4Code.GDbabyghast_9595chatObjects1.length = 0;
gdjs.S4Code.GDbabyghast_9595chatObjects2.length = 0;
gdjs.S4Code.GDbabyghast_9595chat2Objects1.length = 0;
gdjs.S4Code.GDbabyghast_9595chat2Objects2.length = 0;
gdjs.S4Code.GDbabyghastObjects1.length = 0;
gdjs.S4Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S4Code'] = gdjs.S4Code;
