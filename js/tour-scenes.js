/* Shared scene metadata helpers for the self-contained virtual tour. */
(function (root) {
  'use strict';

  var BASE = '/assets/virtual-tour/embedded/2/';
  var STORAGE_KEY = 'omid-hospital-tour-map-v1';

  function decodeEscaped(value) {
    return String(value).replace(/\\u([0-9a-f]{4})/gi, function (_, code) {
      return String.fromCharCode(parseInt(code, 16));
    });
  }

  function parseScenes(source) {
    var pattern = /"class"\s*:\s*"Panorama"[\s\S]*?"label"\s*:\s*"([^"]+)"[\s\S]*?"thumbnailUrl"\s*:\s*"([^"]+)"/g;
    var scenes = [];
    var match;
    while ((match = pattern.exec(source))) {
      var label = decodeEscaped(match[1]);
      var thumbnail = decodeEscaped(match[2]);
      scenes.push({
        id: thumbnail,
        originalLabel: label,
        thumbnail: thumbnail,
        originalIndex: scenes.length,
        title: label,
        location: '',
        floor: 'همکف',
        order: scenes.length + 1
      });
    }
    return scenes;
  }

  function readSaved() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch (_) {
      return null;
    }
  }

  function mergeSaved(scenes) {
    var saved = readSaved();
    var savedScenes = saved && Array.isArray(saved.scenes) ? saved.scenes : [];
    var savedById = {};
    savedScenes.forEach(function (scene) { savedById[scene.id] = scene; });
    return scenes.map(function (scene) {
      var custom = savedById[scene.id] || {};
      return Object.assign({}, scene, {
        title: custom.title || scene.title,
        location: custom.location || '',
        floor: custom.floor || 'همکف',
        order: Number(custom.order) || scene.order
      });
    });
  }

  function floorRank(floor) {
    var ranks = { 'زیرزمین': 0, 'همکف': 1, 'طبقه اول': 2, 'طبقه دوم': 3, 'طبقه سوم': 4, 'طبقه چهارم': 5, 'سایر': 9 };
    return Object.prototype.hasOwnProperty.call(ranks, floor) ? ranks[floor] : 9;
  }

  function ordered(scenes) {
    return scenes.slice().sort(function (a, b) {
      return floorRank(a.floor) - floorRank(b.floor) || Number(a.order) - Number(b.order) || a.originalIndex - b.originalIndex;
    });
  }

  function save(scenes) {
    var payload = { version: 1, updatedAt: new Date().toISOString(), scenes: scenes };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    return payload;
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function assetUrl(relativePath) {
    return BASE + relativePath;
  }

  function sceneUrl(scene) {
    return BASE + 'index.htm?media-index=' + encodeURIComponent(Number(scene.originalIndex) + 1);
  }

  root.OmidTour = {
    BASE: BASE,
    STORAGE_KEY: STORAGE_KEY,
    parseScenes: parseScenes,
    mergeSaved: mergeSaved,
    ordered: ordered,
    save: save,
    clear: clear,
    readSaved: readSaved,
    assetUrl: assetUrl,
    sceneUrl: sceneUrl
  };
})(window);
