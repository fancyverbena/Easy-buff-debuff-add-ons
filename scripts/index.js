import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

let player;

world.afterEvents.itemUse.subscribe((useEvent) => {
  if (useEvent.source.typeId != "minecraft:player") return;
  if (useEvent.itemStack.typeId == "minecraft:brewing_stand") {
    actionFormAppear(useEvent.source);
  }
});

function actionFormAppear2(p) {
  const mainGui = new ActionFormData().title(`effectメニュー[基本レベル５です]`);
}

function actionFormAppear(p) {
  const mainGui = new ActionFormData()
    .title(`effect`)
    .button(`スピード`)
    .button(`衝撃吸収`)
    .button(`火炎耐性`)
    .button(`採掘速度上昇`)
    .button(`体力増強`)
    .button(`即時回復`)
    .button(`透明化`)
    .button(`跳躍力上昇`)
    .button(`暗視`)
    .button(`再生能力`)
    .button(`耐性`)
    .button(`満腹`)
    .button(`水中呼吸`)
    .button(`低速落下`)
    .button(`コンジットパワー`)
    .button(`村の英雄`)
    .button(`盲目`)
    .button(`空腹`)
    .button(`浮遊`)
    .button(`採掘速度低下`)
    .button(`吐き気`)
    .button(`毒`)
    .button(`移動速度低下`)
    .button(`即時ダメージ`)
    .button(`弱体化`)
    .button(`衰弱`)
    .button(`不吉な予感`)
    .button(`クリア`)
  mainGui.show(p).then((response) => {
    if (!response.canceled) modalFormAppear(p, response.selection);
  });
}

function modalFormAppear(p, n) {
  if (n == 0) {
    p.runCommandAsync(`effect @s speed 1000000 5 true`);
  } else if (n == 1) {
    p.runCommandAsync(`effect @s absorption 1000000 5 true`);
  } else if (n == 2) {
    p.runCommandAsync(`effect @s fire_resistance 1000000 5 true`);
  } else if (n == 3) {
    p.runCommandAsync(`effect @s haste 1000000 5 true`);
  } else if (n == 4) {
    p.runCommandAsync(`effect @s health_boost 1000000 5 true`);
  } else if (n == 5) {
    p.runCommandAsync(`effect @s instant_health 1000000 5 true`);
  } else if (n == 6) {
    p.runCommandAsync(`effect @s invisibility 1000000 5 true`);
  } else if (n == 7) {
    p.runCommandAsync(`effect @s jump_boost 1000000 5 true`);
  } else if (n == 8) {
    p.runCommandAsync(`effect @s night_vision 1000000 5 true`);
  } else if (n == 9) {
    p.runCommandAsync(`effect @s regeneration 1000000 5 true`);
  } else if (n == 10) {
    p.runCommandAsync(`effect @s resistance 1000000 5 true`);
  } else if (n == 11) {
    p.runCommandAsync(`effect @s saturation 1000000 5 true`);
  } else if (n == 12) {
    p.runCommandAsync(`effect @s water_breathing 1000000 5 true`);
  } else if (n == 13) {
    p.runCommandAsync(`effect @s slow_falling 1000000 5 true`);
  } else if (n == 14) {
    p.runCommandAsync(`effect @s conduit_power 1000000 5 true`);
  } else if (n == 15) {
    p.runCommandAsync(`effect @s village_hero 1000000 5 true`);
  } else if (n == 16) {
    p.runCommandAsync(`effect @s blindness 100000 5 true`);
  } else if (n == 17) {
    p.runCommandAsync(`effect @s hunger 1000000 5 true`);
  } else if (n == 18) {
    p.runCommandAsync(`effect @s levitation 1000000 5 true`);
  } else if (n == 19) {
    p.runCommandAsync(`effect @s mining_fatigue 1000000 5 true`);
  } else if (n == 20) {
    p.runCommandAsync(`effect @s nausea 1000000 5 true`);
  } else if (n == 21) {
    p.runCommandAsync(`effect @s poison 1000000 5 true`);
  } else if (n == 22) {
    p.runCommandAsync(`effect @s slowness 1000000 5 true`);
  } else if (n == 23) {
    p.runCommandAsync(`effect @s instant_damage 1000000 5 true`);
  } else if (n == 24) {
    p.runCommandAsync(`effect @s weakness 1000000 5 true`);
  } else if (n == 25) {
    p.runCommandAsync(`effect @s wither 1000000 5 true`);
  } else if (n == 26) {
    p.runCommandAsync(`effect @s bad_omen 1000000 5 true`);
  } else if (n == 27) {
    p.runCommandAsync(`effect @s clear`);
  } else if (n == 28) {
 }
}