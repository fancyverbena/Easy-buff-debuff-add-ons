import { world, Player } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';

world.afterEvents.itemUse.subscribe(event => {
  const player = event.source;
  
  if (event.itemStack.typeId === 'minecraft:brewing_stand') {
    menu1(player).catch(console.error);
  }
});

/** @param {Player} player */
async function menu1(player) {
  const form = new ActionFormData();
  form.button('バフ');
  form.button('デバフ');
  form.button('クリア');

  const { canceled, selection } = await form.show(player);
  if (canceled) return;
  if (selection === 0) {
    await menu2(player);
  }
  if (selection === 1) {
    await menu3(player);
  }
  if (selection === 2) {
    await menu4(player);
  }
}

/** @param {Player} player */
async function menu2(player) {
  const form = new ActionFormData();
  form.button('バフ');
  const { canceled, selection } = await form.show(player);
  if (canceled) return;
  if (selection === 0) {
    player.sendMessage('スピードを10間分与えました')
    player.runCommandAsync('effect @s speed 600 5 true')
  }
  if (canceled) return;
  if (selection === 1){
    player.sendMessage('勤勉を10分間与えました')
    player.runCommandAsync('effect @s haste 600 5 true')
  }
  if (canceled) return;
  if (selection === 2){
    player.sendMessage('力を10分間与えました')
    player.runCommandAsync('effect @s strength 600 5 true')
  }
  if (canceled) return;
  if (selection === 3){
    player.sendMessage('回復しました')
    player.runCommandAsync('effect @s instant_health 600 5 true')
  }
  if (canceled) return;
  if (selection === 4){
    player.sendMessage('跳躍を10分間与えました')
    player.runCommandAsync('effect @s jump_boost 600 5 true')
  }
  if (canceled) return;
  if (selection === 5){
    player.sendMessage('再生を10分間与えました')
    player.runCommandAsync('effect @s regeneration 600 5 true')
  }
  if (canceled) return;
  if (selection === 6){
    player.sendMessage('耐性を10分間与えました')
    player.runCommandAsync('effect @s resistance 600 5 true')
  }
  if (canceled) return;
  if (selection === 7){
    player.sendMessage('耐火を10分間与えました')
    player.runCommandAsync('effect @s fire_resistance 600 5 true')
  }
  if (canceled) return;
  if (selection === 8){
    player.sendMessage('水中呼吸を10分間与えました')
    player.runCommandAsync('effect @s water_breathing 600 5 true')
  }
  if (canceled) return;
  if (selection === 9){
    player.sendMessage('暗視を10分間与えました')
    player.runCommandAsync('effect @s night_vision 600 5 true')
  }
  if (canceled) return;
  if (selection === 10){
    player.sendMessage('HPブーストを10分間与えました')
    player.runCommandAsync('effect @s health_boost 600 5 true')
  }
  if (canceled) return;
  if (selection === 11){
    player.sendMessage('吸収を10分間与えました')
    player.runCommandAsync('effect @s absorption 600 5 true')
  }
  if (canceled) return;
  if (selection === 12){
    player.sendMessage('満腹度か回復しました')
    player.runCommandAsync('effect @s saturation 600 5 true')
  }
  if (canceled) return;
  if (selection === 13){
    player.sendMessage('コンジットパワーを10分間与えました')
    player.runCommandAsync('effect @s conduit_power 600 5 true')
  }
  if (canceled) return;
  if (selection === 14){
    player.sendMessage('低速落下を10分間与えました')
    player.runCommandAsync('effect @s slow_falling 600 5 true')
  }
  if (canceled) return;
  if (selection === 14){
    player.sendMessage('村の英雄を10分間与えました')
    player.runCommandAsync('effect village_hero 600 5 true')
  }
  if (canceled) return;
  if (selection === 15){
    player.sendMessage('透明になりました(10分間)')
    player.runCommandAsync('effect @s invisibility 600 5 true')
  }
}

/** @param {Player} player */
async function menu3(player) {
  const form = new ActionFormData();
  form.button('デバフ');
  const { canceled, selection } = await form.show(player);
  if (canceled) return;
  if (selection === 0) {
    player.sendMessage('鈍化を10間分与えました')
    player.runCommandAsync('effect @s slowness 600 5 true')
  }
  if (canceled) return;
  if (selection === 1){
    player.sendMessage('疲労を10分間与えました')
    player.runCommandAsync('effect @s mining_fatigue 600 5 true')
  }
  if (canceled) return;
  if (selection === 2){
    player.sendMessage('ダメージ与えときました')
    player.runCommandAsync('effect @s instant_damage 600 5 true')
  }
  if (canceled) return;
  if (selection === 3){
    player.sendMessage('目まいを10分間与えました')
    player.runCommandAsync('effect @s nausea 600 5 true')
  }
  if (canceled) return;
  if (selection === 4){
    player.sendMessage('目つぶしを10分間与えました')
    player.runCommandAsync('effect @s blindness 600 5 true')
  }
  if (canceled) return;
  if (selection === 5){
    player.sendMessage('空腹を10分間与えました')
    player.runCommandAsync('effect @s hunger 600 5 true')
  }
  if (canceled) return;
  if (selection === 6){
    player.sendMessage('弱体化しました(10分間)')
    player.runCommandAsync('effect @s weakness 600 5 true')
  }
  if (canceled) return;
  if (selection === 7){
    player.sendMessage('毒を10分間与えました')
    player.runCommandAsync('effect @s poison 600 5 true')
  }
  if (canceled) return;
  if (selection === 8){
    player.sendMessage('衰弱してしまいました(10分間)')
    player.runCommandAsync('effect @s wither 600 5 true')
  }
  if (canceled) return;
  if (selection === 9){
    player.sendMessage('浮遊を10分間与えました')
    player.runCommandAsync('effect @s levitation 600 5 true')
  }
  if (canceled) return;
  if (selection === 10){
    player.sendMessage('致死毒を10分間与えました')
    player.runCommandAsync('effect @s fatal_poison 600 5 true')
  }
  if (canceled) return;
  if (selection === 11){
    player.sendMessage('凶兆を10分間与えました')
    player.runCommandAsync('effect @s bad_omen 600 5 true')
  }
  if (canceled) return;
  if (Selection === 12){
    player.sendMessage('暗闇を10分間与えました')
    player.runCommandAsync('effect @s darkness 600 5 true')
  }
}

/** @param {Player} player */
async function menu2(player) {
  const form = new ActionFormData();
  form.button('バフ');
  const { canceled, selection } = await form.show(player);
  if (canceled) return;
  if (selection === 0) {
    player.sendMessage('クリアしました')
    player.runCommandAsync('effect @s clear')
  }
}