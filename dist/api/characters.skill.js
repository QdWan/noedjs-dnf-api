"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creature = exports.avatar = exports.equipment = exports.style = void 0;

var _util = _interopRequireDefault(require("../util"));

/**
 *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
var style = function style(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/style")
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.style = style;

var equipment = function equipment(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/buff/equip/equipment")
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.equipment = equipment;

var avatar = function avatar(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/buff/equip/avatar")
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.avatar = avatar;

var creature = function creature(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/buff/equip/creature")
  };
  return _util["default"].Query.Request(opt);
};

exports.creature = creature;