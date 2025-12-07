gdjs.S5Code = {};
gdjs.S5Code.localVariables = [];
gdjs.S5Code.idToCallbackMap = new Map();
gdjs.S5Code.GDstoryObjects1= [];
gdjs.S5Code.GDstoryObjects2= [];
gdjs.S5Code.GDchatObjects1= [];
gdjs.S5Code.GDchatObjects2= [];
gdjs.S5Code.GDwhoObjects1= [];
gdjs.S5Code.GDwhoObjects2= [];
gdjs.S5Code.GDbaby_9595ghast_9595chatObjects1= [];
gdjs.S5Code.GDbaby_9595ghast_9595chatObjects2= [];
gdjs.S5Code.GDbaby_9595ghast_9595chat2Objects1= [];
gdjs.S5Code.GDbaby_9595ghast_9595chat2Objects2= [];
gdjs.S5Code.GDbabt_9595ghast_9595chat3Objects1= [];
gdjs.S5Code.GDbabt_9595ghast_9595chat3Objects2= [];
gdjs.S5Code.GDbabyghastObjects1= [];
gdjs.S5Code.GDbabyghastObjects2= [];


gdjs.S5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S5Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S5Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S5Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1단계", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.S5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S5Code.GDstoryObjects1.length = 0;
gdjs.S5Code.GDstoryObjects2.length = 0;
gdjs.S5Code.GDchatObjects1.length = 0;
gdjs.S5Code.GDchatObjects2.length = 0;
gdjs.S5Code.GDwhoObjects1.length = 0;
gdjs.S5Code.GDwhoObjects2.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chatObjects1.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chatObjects2.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chat2Objects1.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chat2Objects2.length = 0;
gdjs.S5Code.GDbabt_9595ghast_9595chat3Objects1.length = 0;
gdjs.S5Code.GDbabt_9595ghast_9595chat3Objects2.length = 0;
gdjs.S5Code.GDbabyghastObjects1.length = 0;
gdjs.S5Code.GDbabyghastObjects2.length = 0;

gdjs.S5Code.eventsList0(runtimeScene);
gdjs.S5Code.GDstoryObjects1.length = 0;
gdjs.S5Code.GDstoryObjects2.length = 0;
gdjs.S5Code.GDchatObjects1.length = 0;
gdjs.S5Code.GDchatObjects2.length = 0;
gdjs.S5Code.GDwhoObjects1.length = 0;
gdjs.S5Code.GDwhoObjects2.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chatObjects1.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chatObjects2.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chat2Objects1.length = 0;
gdjs.S5Code.GDbaby_9595ghast_9595chat2Objects2.length = 0;
gdjs.S5Code.GDbabt_9595ghast_9595chat3Objects1.length = 0;
gdjs.S5Code.GDbabt_9595ghast_9595chat3Objects2.length = 0;
gdjs.S5Code.GDbabyghastObjects1.length = 0;
gdjs.S5Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S5Code'] = gdjs.S5Code;
