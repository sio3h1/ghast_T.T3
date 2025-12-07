gdjs.S12Code = {};
gdjs.S12Code.localVariables = [];
gdjs.S12Code.idToCallbackMap = new Map();
gdjs.S12Code.GDstoryObjects1= [];
gdjs.S12Code.GDstoryObjects2= [];
gdjs.S12Code.GDchatObjects1= [];
gdjs.S12Code.GDchatObjects2= [];
gdjs.S12Code.GD_9553581_9549828_95539441Objects1= [];
gdjs.S12Code.GD_9553581_9549828_95539441Objects2= [];
gdjs.S12Code.GD_9553581_9549828_95539442Objects1= [];
gdjs.S12Code.GD_9553581_9549828_95539442Objects2= [];
gdjs.S12Code.GD_9553581_9549828_95539443Objects1= [];
gdjs.S12Code.GD_9553581_9549828_95539443Objects2= [];
gdjs.S12Code.GDbabyghastObjects1= [];
gdjs.S12Code.GDbabyghastObjects2= [];


gdjs.S12Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.S12Code.GDchatObjects1);
{for(var i = 0, len = gdjs.S12Code.GDchatObjects1.length ;i < len;++i) {
    gdjs.S12Code.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ni") > 4;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S13", false);
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

gdjs.S12Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S12Code.GDstoryObjects1.length = 0;
gdjs.S12Code.GDstoryObjects2.length = 0;
gdjs.S12Code.GDchatObjects1.length = 0;
gdjs.S12Code.GDchatObjects2.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539441Objects1.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539441Objects2.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539442Objects1.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539442Objects2.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539443Objects1.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539443Objects2.length = 0;
gdjs.S12Code.GDbabyghastObjects1.length = 0;
gdjs.S12Code.GDbabyghastObjects2.length = 0;

gdjs.S12Code.eventsList0(runtimeScene);
gdjs.S12Code.GDstoryObjects1.length = 0;
gdjs.S12Code.GDstoryObjects2.length = 0;
gdjs.S12Code.GDchatObjects1.length = 0;
gdjs.S12Code.GDchatObjects2.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539441Objects1.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539441Objects2.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539442Objects1.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539442Objects2.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539443Objects1.length = 0;
gdjs.S12Code.GD_9553581_9549828_95539443Objects2.length = 0;
gdjs.S12Code.GDbabyghastObjects1.length = 0;
gdjs.S12Code.GDbabyghastObjects2.length = 0;


return;

}

gdjs['S12Code'] = gdjs.S12Code;
