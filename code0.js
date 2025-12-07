gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.idToCallbackMap = new Map();
gdjs.startCode.GDtearsObjects1= [];
gdjs.startCode.GDtearsObjects2= [];
gdjs.startCode.GDstartObjects1= [];
gdjs.startCode.GDstartObjects2= [];
gdjs.startCode.GDOFObjects1= [];
gdjs.startCode.GDOFObjects2= [];
gdjs.startCode.GDTHEObjects1= [];
gdjs.startCode.GDTHEObjects2= [];
gdjs.startCode.GDchatObjects1= [];
gdjs.startCode.GDchatObjects2= [];
gdjs.startCode.GD_9544172_9551076_9549884_9551089_9595_9547704_9553944Objects1= [];
gdjs.startCode.GD_9544172_9551076_9549884_9551089_9595_9547704_9553944Objects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDenterObjects1= [];
gdjs.startCode.GDenterObjects2= [];
gdjs.startCode.GDGHASTObjects1= [];
gdjs.startCode.GDGHASTObjects2= [];
gdjs.startCode.GDbabyghastObjects1= [];
gdjs.startCode.GDbabyghastObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S1", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("chat"), gdjs.startCode.GDchatObjects1);
{for(var i = 0, len = gdjs.startCode.GDchatObjects1.length ;i < len;++i) {
    gdjs.startCode.GDchatObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDtearsObjects1.length = 0;
gdjs.startCode.GDtearsObjects2.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDOFObjects1.length = 0;
gdjs.startCode.GDOFObjects2.length = 0;
gdjs.startCode.GDTHEObjects1.length = 0;
gdjs.startCode.GDTHEObjects2.length = 0;
gdjs.startCode.GDchatObjects1.length = 0;
gdjs.startCode.GDchatObjects2.length = 0;
gdjs.startCode.GD_9544172_9551076_9549884_9551089_9595_9547704_9553944Objects1.length = 0;
gdjs.startCode.GD_9544172_9551076_9549884_9551089_9595_9547704_9553944Objects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDenterObjects1.length = 0;
gdjs.startCode.GDenterObjects2.length = 0;
gdjs.startCode.GDGHASTObjects1.length = 0;
gdjs.startCode.GDGHASTObjects2.length = 0;
gdjs.startCode.GDbabyghastObjects1.length = 0;
gdjs.startCode.GDbabyghastObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDtearsObjects1.length = 0;
gdjs.startCode.GDtearsObjects2.length = 0;
gdjs.startCode.GDstartObjects1.length = 0;
gdjs.startCode.GDstartObjects2.length = 0;
gdjs.startCode.GDOFObjects1.length = 0;
gdjs.startCode.GDOFObjects2.length = 0;
gdjs.startCode.GDTHEObjects1.length = 0;
gdjs.startCode.GDTHEObjects2.length = 0;
gdjs.startCode.GDchatObjects1.length = 0;
gdjs.startCode.GDchatObjects2.length = 0;
gdjs.startCode.GD_9544172_9551076_9549884_9551089_9595_9547704_9553944Objects1.length = 0;
gdjs.startCode.GD_9544172_9551076_9549884_9551089_9595_9547704_9553944Objects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDenterObjects1.length = 0;
gdjs.startCode.GDenterObjects2.length = 0;
gdjs.startCode.GDGHASTObjects1.length = 0;
gdjs.startCode.GDGHASTObjects2.length = 0;
gdjs.startCode.GDbabyghastObjects1.length = 0;
gdjs.startCode.GDbabyghastObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
