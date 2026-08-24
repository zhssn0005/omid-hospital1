-- Correct the whitespace mismatch in migration 0007 and enable this verified in-person profile.
UPDATE doctors
SET is_available = 1
WHERE bio = 'آقای دکتر عدنان تیزمغز — فوق تخصص جراحی و زیبایی پستان';
