const express = require('express');
const router = express.Router();
const { db } = require('../config/database');
const { authenticate, authorize } = require('../middleware/auth');

const TOUR_KEY = 'virtual_tour_map';
const TOUR_FLOORS = ['زیرزمین', 'همکف', 'طبقه اول', 'طبقه دوم', 'طبقه سوم', 'طبقه چهارم', 'سایر'];
const text = value => typeof value === 'string' ? value.trim() : '';

function sanitizeScenes(value) {
  if (!Array.isArray(value) || value.length > 200) return null;
  const seen = new Set();
  const scenes = value.map((scene, index) => {
    if (!scene || typeof scene !== 'object') return null;
    const id = text(scene.id);
    const thumbnail = text(scene.thumbnail);
    if (!id || id !== thumbnail || !thumbnail.startsWith('media/') || thumbnail.includes('..') || !/^[A-Za-z0-9_./-]+$/.test(thumbnail) || seen.has(id)) return null;
    seen.add(id);
    const originalIndex = Number.isInteger(Number(scene.originalIndex)) ? Number(scene.originalIndex) : index;
    const order = Number.isInteger(Number(scene.order)) ? Number(scene.order) : index + 1;
    return {
      id: id.slice(0, 300),
      originalLabel: text(scene.originalLabel).slice(0, 200) || `تصویر ${index + 1}`,
      thumbnail: thumbnail.slice(0, 300),
      originalIndex: Math.max(0, Math.min(199, originalIndex)),
      title: text(scene.title).slice(0, 200) || text(scene.originalLabel).slice(0, 200) || `تصویر ${index + 1}`,
      location: text(scene.location).slice(0, 200),
      floor: TOUR_FLOORS.includes(text(scene.floor)) ? text(scene.floor) : 'همکف',
      order: Math.max(1, Math.min(200, order))
    };
  });
  return scenes.some(scene => !scene) ? null : scenes;
}

router.get('/', (req, res, next) => {
  try {
    const row = db.prepare('SELECT value FROM settings WHERE key = ?').get(TOUR_KEY);
    if (!row?.value) return res.json({ success: true, data: { scenes: null } });
    const saved = JSON.parse(row.value);
    res.json({ success: true, data: { scenes: sanitizeScenes(saved?.scenes) } });
  } catch (error) {
    next(error);
  }
});

router.put('/', authenticate, authorize('admin'), (req, res, next) => {
  try {
    const scenes = sanitizeScenes(req.body?.scenes);
    if (!scenes) return res.status(400).json({ success: false, message: 'تنظیمات تور نامعتبر است' });
    db.prepare(`
      INSERT INTO settings (key, value, description) VALUES (?, ?, ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value, description = excluded.description, updated_at = CURRENT_TIMESTAMP
    `).run(TOUR_KEY, JSON.stringify({ version: 1, scenes }), 'تنظیمات نمایش تور مجازی');
    res.json({ success: true, message: 'تنظیمات تور مجازی ذخیره شد', data: { scenes } });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
