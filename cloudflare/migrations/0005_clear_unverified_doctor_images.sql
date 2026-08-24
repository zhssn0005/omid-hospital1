-- These records had stale filenames from the old positional import.
-- The public source currently has no verified local image for them.
UPDATE doctors
SET image_local = NULL
WHERE id IN (
  2, 1, 6, 7, 3, 149, 10, 23, 58, 16, 106,
  152, 22, 116, 50, 53, 9, 98, 79, 39, 151, 43
);
