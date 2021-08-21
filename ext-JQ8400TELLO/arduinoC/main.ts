
enum mod{
    //% block="全盘循环"
    0,
    //% block="单曲循环"
    1,
    //% block="单曲停止"
    2,
    //% block="全盘随机"
    3,
    //% block="目录循环"
    4,
    //% block="目录随机"
    5,
    //% block="目录顺序播放"
    6,
    //% block="顺序播放
    7
}
enum eqmod{
    //% block="正常"
    0,
    //% block="流行"
    1,
    //% block="摇滚"
    2,
    //% block="爵士"
    3,
    //% block="经典"
    4
}

//% color="#00FFFF" iconWidth=50 iconHeight=40
namespace TTJQ8400 {
    //% block="设置音量[VOL]" blockType="command"
    //% VOL.shadow="range" VOL.params.min=0 VOL.params.max=20 VOL.defl=20
    export function setVolume(parameter: any, block: any) {
        let vol = parameter.VOL.code;
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.setVolume(${vol});`);
    }
    //% block="播放[Song]号曲目" blockType="command"
    //% Song.shadow="range" Song.params.min=1 Song.params.max=100 Song.defl=1
    export function setSong(parameter: any, block: any) {
        let song = parameter.Song.code;
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.setSong(${song});`);
    }
    //% block="设置EQ为[eqm]" blockType="command"
    //% eqm.shadow="dropdown" eqm.options="eqmod" eqm.defl="eqmod.正常"
    export function setEQ(parameter: any, block: any) {
        let eq = parameter.eqm.code;
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.setEQ(${eq});`);
    }
    //% block="设置循环模式为[m]" blockType="command"
    //% m.shadow="dropdown" m.options="mod" m.defl="mod.单曲停止"
    export function setSongModel(parameter: any, block: any) {
        let mode = parameter.m.code;
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.setModel(${mode});`);
    }
    //% block="播放" blockType="command"
    export function play(parameter: any, block: any) {
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.play();`);
    }
    //% block="停止" blockType="command"
    export function stop(parameter: any, block: any) {
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.stop();`);
    }
    //% block="暂停" blockType="command"
    export function suspend(parameter: any, block: any) {
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.suspend();`);
    }
    //% block="上一曲" blockType="command"
    export function last(parameter: any, block: any) {
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.last_song();`);
    }
    //% block="下一曲" blockType="command"
    export function next(parameter: any, block: any) {
        Generator.addInclude("TTJQ8400", "#include <TTJQ8400.h>", true);
        Generator.addObject('TTJQ8400', 'TTJQ8400', ' jq;', true);
        Generator.addCode(`jq.next_song();`);
    }
    //% block="当前是否播放" blockType="boolean"
    export function isplay(parameter: any, block: any) {
        Generator.addCode(`digitalRead(13)`);
    }
}
