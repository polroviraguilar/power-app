/* Power App - nou bloc 24/08/2026 -> 20/12/2026 */

const PROGRAM = {
  "Upper 1": {
    exercises: ["Paused Bench - Top Set", "Paused Bench Press", "Long Pause Bench", "Weighted Pull-ups", "Chest Supported Row", "Triceps Pushdown", "Face Pull"],
    weeks: [
      ["Readaptació", "1x1 @ 110 kg (RPE 5-6)", "3x5 @ 90 kg (RPE 5-6)", "2x5 @ 80 kg (RPE 5)", "3x6 @ BW+20 kg (RPE 6)", "3x8 @ 30 kg/costat (RPE 6)", "2x12-15 @ 32 kg (RPE 6)", "2x15-20 @ 25 kg (RPE 6)"],
      ["Acumulació I", "1x1 @ 112,5 kg (RPE 6)", "4x5 @ 92,5 kg (RPE 6)", "3x5 @ 82,5 kg (RPE 6)", "4x6 @ BW+25 kg (RPE 7)", "4x8 @ 32,5 kg/costat (RPE 7)", "3x12 @ 35 kg (RPE 7)", "3x15 @ 27 kg (RPE 6-7)"],
      ["Acumulació I", "1x1 @ 115 kg (RPE 6,5)", "4x5 @ 95 kg (RPE 6-7)", "3x5 @ 85 kg (RPE 6-7)", "4x6 @ BW+27,5 kg (RPE 7)", "4x8 @ 35 kg/costat (RPE 7)", "3x12-15 @ 36 kg (RPE 7)", "3x15 @ 29 kg (RPE 7)"],
      ["Acumulació I", "1x1 @ 117,5 kg (RPE 7)", "4x5 @ 97,5 kg (RPE 7)", "3x5 @ 87,5 kg (RPE 7)", "4x6 @ BW+30 kg (RPE 7-8)", "4x8 @ 37,5 kg/costat (RPE 7-8)", "3x10-12 @ 37 kg (RPE 8)", "3x15 @ 30 kg (RPE 7)"],
      ["DELOAD", "1x1 @ 105 kg (RPE 5)", "2x5 @ 80 kg (RPE 5)", "2x5 @ 70 kg (RPE 5)", "3x5 @ BW+10 kg (RPE 5-6)", "2x8 @ 25 kg/costat (RPE 5-6)", "2x12 @ 30 kg (RPE 6)", "2x15 @ 24 kg (RPE 6)"],
      ["Força base", "1x1 @ 117,5 kg (RPE 7)", "4x4 @ 100 kg (RPE 6,5-7)", "3x4 @ 90 kg (RPE 6-7)", "4x6 @ BW+30 kg (RPE 7)", "4x8 @ 40 kg/costat (RPE 7)", "3x10-12 @ 37 kg (RPE 7)", "3x15 @ 32 kg (RPE 7)"],
      ["Força base", "1x1 @ 120 kg (RPE 7,5)", "4x4 @ 102,5 kg (RPE 7)", "3x4 @ 92,5 kg (RPE 7)", "4x6 @ BW+32,5 kg (RPE 7-8)", "4x8 @ 42,5 kg/costat (RPE 7-8)", "3x10-12 @ 38 kg (RPE 7-8)", "3x15 @ 34 kg (RPE 7)"],
      ["Força base", "1x1 @ 122,5 kg (RPE 8)", "4x4 @ 105 kg (RPE 7-7,5)", "3x4 @ 95 kg (RPE 7-8)", "4x6 @ BW+35 kg (RPE 8)", "4x8 @ 45 kg/costat (RPE 8)", "3x10 @ 39 kg (RPE 8)", "3x15 @ 36 kg (RPE 7-8)"],
      ["DELOAD", "1x1 @ 110 kg (RPE 5-6)", "3x4 @ 85 kg (RPE 5)", "2x4 @ 75 kg (RPE 5)", "3x5 @ BW+15 kg (RPE 5-6)", "2x8 @ 30 kg/costat (RPE 6)", "2x12 @ 30 kg (RPE 6)", "2x15 @ 25 kg (RPE 6)"],
      ["Força", "1x1 @ 122,5 kg (RPE 8)", "3x3 @ 107,5 kg (RPE 7)", "3x3 @ 97,5 kg (RPE 7)", "4x5 @ BW+35 kg (RPE 7-8)", "4x8 @ 45 kg/costat (RPE 7-8)", "3x10 @ 39 kg (RPE 7-8)", "3x15 @ 36 kg (RPE 7)"],
      ["Força", "1x1 @ 125 kg (RPE 8)", "3x3 @ 110 kg (RPE 7-7,5)", "3x3 @ 100 kg (RPE 7-8)", "4x5 @ BW+37,5 kg (RPE 8)", "4x8 @ 47,5 kg/costat (RPE 8)", "3x8-10 @ 40 kg (RPE 8)", "3x15 @ 38 kg (RPE 7-8)"],
      ["Força", "1x1 @ 127,5 kg (RPE 8,5)", "3x3 @ 112,5 kg (RPE 7,5)", "3x3 @ 102,5 kg (RPE 8)", "4x5 @ BW+40 kg (RPE 8)", "4x8 @ 50 kg/costat (RPE 8)", "3x8-10 @ 41 kg (RPE 8)", "3x15 @ 40 kg (RPE 8)"],
      ["DELOAD", "1x1 @ 112,5 kg (RPE 5-6)", "2x3 @ 90 kg (RPE 5)", "2x3 @ 80 kg (RPE 5)", "3x5 @ BW+20 kg (RPE 6)", "2x8 @ 35 kg/costat (RPE 6)", "2x10 @ 32 kg (RPE 6)", "2x15 @ 27 kg (RPE 6)"],
      ["Intensificació", "1x1 @ 127,5 kg (RPE 8)", "3x2 @ 115 kg (RPE 7-7,5)", "2x3 @ 100 kg (RPE 7)", "4x4 @ BW+40 kg (RPE 8)", "3x8 @ 50 kg/costat (RPE 7)", "3x8 @ 40 kg (RPE 7)", "2x15 @ 38 kg (RPE 7)"],
      ["Intensificació", "1x1 @ 130 kg (RPE 8,5)", "2x2 @ 117,5 kg (RPE 7,5-8)", "2x2 @ 105 kg (RPE 7)", "4x4 @ BW+42,5 kg (RPE 8)", "3x8 @ 52,5 kg/costat (RPE 7-8)", "3x8 @ 41 kg (RPE 7-8)", "2x15 @ 40 kg (RPE 7)"],
      ["Intensificació / taper", "1x1 @ 132,5 kg (RPE 8,5-9)", "2x1 @ 120 kg (RPE 7)", "2x2 @ 100 kg (RPE 6)", "3x4 @ BW+40 kg (RPE 7)", "3x6-8 @ 45 kg/costat (RPE 7)", "2x8 @ 37 kg (RPE 6-7)", "2x15 @ 32 kg (RPE 6)"],
      ["TEST", "125x1 -> 132,5x1 -> 137,5-142,5x1 3r intent només si el 2n <= RPE 8,5", "-", "-", "-", "-", "-", "-"],
    ]
  },

  "Lower 1": {
    exercises: ["Back Squat - Top Set", "Back Squat", "Paused Squat", "Paused Bench tècnic", "RDL", "Bulgarian Split Squat", "Leg Curl", "Weighted Plank"],
    weeks: [
      ["Readaptació", "1x1 @ 145 kg (RPE 5-6)", "3x5 @ 120 kg (RPE 5-6)", "2x5 @ 100 kg (RPE 5)", "2x5 @ 80 kg (RPE 5)", "2x8 @ 100 kg (RPE 6)", "2x8/cama @ 50 kg total (RPE 6)", "2x12 @ RPE 6", "2x30-45s @ moderat"],
      ["Acumulació I", "1x1 @ 150 kg (RPE 6)", "4x5 @ 125 kg (RPE 6)", "3x5 @ 105 kg (RPE 6)", "3x5 @ 82,5 kg (RPE 5-6)", "3x8 @ 105 kg (RPE 6-7)", "3x8/cama @ 55 kg total (RPE 7)", "3x12 @ RPE 7", "3x45s @ moderat"],
      ["Acumulació I", "1x1 @ 155 kg (RPE 6,5)", "4x5 @ 127,5 kg (RPE 6-7)", "3x5 @ 110 kg (RPE 6-7)", "3x5 @ 85 kg (RPE 6)", "3x8 @ 110 kg (RPE 7)", "3x8/cama @ 57,5 kg total (RPE 7)", "3x12 @ RPE 7", "3x45-60s @ moderat"],
      ["Acumulació I", "1x1 @ 160 kg (RPE 7)", "4x5 @ 130 kg (RPE 7)", "3x5 @ 112,5 kg (RPE 7)", "3x5 @ 87,5 kg (RPE 6)", "3x8 @ 115 kg (RPE 7-8)", "3x8/cama @ 60 kg total (RPE 8)", "3x10-12 @ RPE 8", "3x60s @ moderat"],
      ["DELOAD", "1x1 @ 140 kg (RPE 5)", "2x5 @ 110 kg (RPE 5)", "2x5 @ 90 kg (RPE 5)", "2x5 @ 70 kg (RPE 5)", "2x8 @ 90 kg (RPE 5-6)", "2x8/cama @ 45 kg total (RPE 6)", "2x12 @ RPE 6", "2x30s @ lleuger"],
      ["Força base", "1x1 @ 160 kg (RPE 7)", "4x4 @ 132,5 kg (RPE 6,5-7)", "3x4 @ 115 kg (RPE 7)", "3x5 @ 87,5 kg (RPE 6)", "3x6 @ 120 kg (RPE 7)", "3x8/cama @ 60 kg total (RPE 7)", "3x10-12 @ RPE 7", "3x45s @ moderat"],
      ["Força base", "1x1 @ 165 kg (RPE 7,5)", "4x4 @ 135 kg (RPE 7)", "3x4 @ 117,5 kg (RPE 7)", "3x5 @ 90 kg (RPE 6)", "3x6 @ 125 kg (RPE 7-8)", "3x8/cama @ 62,5 kg total (RPE 7-8)", "3x10 @ RPE 7-8", "3x45-60s @ moderat"],
      ["Força base", "1x1 @ 170 kg (RPE 8)", "4x4 @ 137,5 kg (RPE 7-7,5)", "3x4 @ 120 kg (RPE 7-8)", "3x5 @ 92,5 kg (RPE 6-7)", "3x6 @ 130 kg (RPE 8)", "3x8/cama @ 65 kg total (RPE 8)", "3x10 @ RPE 8", "3x60s @ moderat"],
      ["DELOAD", "1x1 @ 150 kg (RPE 5-6)", "3x4 @ 115 kg (RPE 5)", "2x4 @ 95 kg (RPE 5)", "2x5 @ 75 kg (RPE 5)", "2x6 @ 100 kg (RPE 6)", "2x8/cama @ 50 kg total (RPE 6)", "2x10 @ RPE 6", "2x30-45s @ lleuger"],
      ["Força", "1x1 @ 170 kg (RPE 8)", "3x3 @ 145 kg (RPE 7)", "3x3 @ 122,5 kg (RPE 7)", "3x4 @ 95 kg (RPE 6)", "3x6 @ 132,5 kg (RPE 7-8)", "3x6-8/cama @ 65 kg total (RPE 7)", "3x10 @ RPE 7", "3x45-60s @ moderat"],
      ["Força", "1x1 @ 172,5 kg (RPE 8)", "3x3 @ 147,5 kg (RPE 7-7,5)", "3x3 @ 125 kg (RPE 7-8)", "3x4 @ 97,5 kg (RPE 6-7)", "3x6 @ 135 kg (RPE 8)", "3x6-8/cama @ 67,5 kg total (RPE 8)", "3x10 @ RPE 8", "3x60s @ moderat"],
      ["Força", "1x1 @ 175 kg (RPE 8,5)", "3x3 @ 150 kg (RPE 7,5-8)", "3x3 @ 127,5 kg (RPE 8)", "3x4 @ 100 kg (RPE 6-7)", "3x6 @ 137,5 kg (RPE 8)", "3x6/cama @ 70 kg total (RPE 8)", "3x8-10 @ RPE 8", "3x60s @ moderat"],
      ["DELOAD", "1x1 @ 155 kg (RPE 5-6)", "2x3 @ 120 kg (RPE 5)", "2x3 @ 100 kg (RPE 5)", "2x4 @ 80 kg (RPE 5)", "2x6 @ 105 kg (RPE 6)", "2x6/cama @ 50 kg total (RPE 6)", "2x10 @ RPE 6", "2x30s @ lleuger"],
      ["Intensificació", "1x1 @ 175 kg (RPE 8)", "3x2 @ 155 kg (RPE 7-7,5)", "2x3 @ 130 kg (RPE 7)", "3x3 @ 100 kg (RPE 6)", "3x5 @ 140 kg (RPE 7)", "3x6/cama @ 70 kg total (RPE 7)", "3x8-10 @ RPE 7", "3x45s @ moderat"],
      ["Intensificació", "1x1 @ 177,5 kg (RPE 8,5)", "2x2 @ 160 kg (RPE 7,5-8)", "2x2 @ 132,5 kg (RPE 7)", "3x3 @ 102,5 kg (RPE 6)", "3x5 @ 145 kg (RPE 7-8)", "3x6/cama @ 72,5 kg total (RPE 7)", "3x8 @ RPE 7", "3x45s @ moderat"],
      ["Intensificació / taper", "1x1 @ 180 kg (RPE 8,5-9)", "2x1 @ 165 kg (RPE 7)", "2x2 @ 115 kg (RPE 6)", "2x3 @ 90 kg (RPE 5)", "2x5 @ 120 kg (RPE 6)", "2x6/cama @ 55 kg total (RPE 6)", "2x8 @ RPE 6", "2x30s @ lleuger"],
      ["TEST", "170x1 -> 182,5x1 -> 187,5-190x1 3r intent només si el 2n <= RPE 8,5", "-", "-", "-", "-", "-", "-", "-"],
    ]
  },

  "Cardio": {
    exercises: ["Zona 2", "90/90 Hip Switches", "Adductor Rockback", "Copenhagen Plank", "Calf Raise", "Tibialis Raise", "External Rotation"],
    weeks: [
      ["Readaptació", "25 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x20-30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Acumulació I", "30 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x20-30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Acumulació I", "32 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x20-30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Acumulació I", "35 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x20-30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["DELOAD", "25 min @ Zona 2 suau", "2x6/costat @ controlat", "2x6/costat @ controlat", "2x15-20s/costat", "2x15 @ RPE 5-6", "2x15 @ RPE 5-6", "2x15 @ lleuger"],
      ["Força base", "35 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30-40s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Força base", "37 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30-40s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Força base", "40 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30-40s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["DELOAD", "30 min @ Zona 2 suau", "2x6/costat @ controlat", "2x6/costat @ controlat", "2x15-20s/costat", "2x15 @ RPE 5-6", "2x15 @ RPE 5-6", "2x15 @ lleuger"],
      ["Força", "40 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30-40s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Força", "40 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30-40s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Força", "45 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30-40s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["DELOAD", "30 min @ Zona 2 suau", "2x6/costat @ controlat", "2x6/costat @ controlat", "2x15-20s/costat", "2x15 @ RPE 5-6", "2x15 @ RPE 5-6", "2x15 @ lleuger"],
      ["Intensificació", "40 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Intensificació", "40 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["Intensificació / taper", "35 min @ Zona 2", "2x8/costat @ controlat", "2x8/costat @ controlat", "2x30s/costat", "3x12-15 @ RPE 6-7", "3x15-20 @ RPE 6-7", "2-3x15-20 @ lleuger"],
      ["TEST", "25 min @ Zona 2 molt suau", "2x6/costat @ controlat", "2x6/costat @ controlat", "2x15s/costat", "2x12 @ fàcil", "2x12 @ fàcil", "2x15 @ molt lleuger"],
    ]
  },

  "Upper 2": {
    exercises: ["Paused Bench Press", "Close-Grip Bench", "Overhead Press", "Chest Supported Row", "Lateral Raises", "Rear Delt / Face Pull", "Triceps"],
    weeks: [
      ["Readaptació", "3x6 @ 87,5 kg (RPE 5-6)", "2x8 @ 75 kg (RPE 6)", "2x8 @ 45 kg (RPE 6)", "3x10 @ 30 kg/costat (RPE 6)", "2x15 @ 10 kg", "2x15 @ RPE 6", "2x12 @ RPE 6"],
      ["Acumulació I", "4x6 @ 90 kg (RPE 6)", "3x8 @ 77,5 kg (RPE 7)", "3x8 @ 47,5 kg (RPE 7)", "4x10 @ 32,5 kg/costat (RPE 7)", "3x12 @ 10 kg", "3x15 @ RPE 7", "3x12 @ RPE 7"],
      ["Acumulació I", "4x6 @ 92,5 kg (RPE 6-7)", "3x8 @ 80 kg (RPE 7)", "3x8 @ 50 kg (RPE 7)", "4x10 @ 35 kg/costat (RPE 7)", "3x12 @ 12,5 kg", "3x15 @ RPE 7", "3x12-15 @ RPE 7"],
      ["Acumulació I", "4x6 @ 95 kg (RPE 7)", "3x8 @ 82,5 kg (RPE 8)", "3x8 @ 52,5 kg (RPE 8)", "4x10 @ 37,5 kg/costat (RPE 7-8)", "3x12 @ 12,5 kg", "3x15 @ RPE 7-8", "3x10-12 @ RPE 8"],
      ["DELOAD", "2x6 @ 80 kg (RPE 5)", "2x8 @ 70 kg (RPE 6)", "2x8 @ 40 kg (RPE 6)", "2x10 @ 25 kg/costat (RPE 6)", "2x12 @ 7,5 kg", "2x15 @ RPE 6", "2x12 @ RPE 6"],
      ["Força base", "4x5 @ 97,5 kg (RPE 6-7)", "3x6 @ 85 kg (RPE 7)", "3x6 @ 55 kg (RPE 7)", "4x8 @ 40 kg/costat (RPE 7)", "3x12 @ 12,5 kg", "3x15 @ RPE 7", "3x10-12 @ RPE 7"],
      ["Força base", "4x5 @ 100 kg (RPE 7)", "3x6 @ 87,5 kg (RPE 7-8)", "3x6 @ 57,5 kg (RPE 7-8)", "4x8 @ 42,5 kg/costat (RPE 7-8)", "3x12 @ 15 kg", "3x15 @ RPE 7", "3x10-12 @ RPE 7-8"],
      ["Força base", "4x5 @ 102,5 kg (RPE 7-8)", "3x6 @ 90 kg (RPE 8)", "3x6 @ 60 kg (RPE 8)", "4x8 @ 45 kg/costat (RPE 8)", "3x12 @ 15 kg", "3x15 @ RPE 7-8", "3x10 @ RPE 8"],
      ["DELOAD", "2x5 @ 82,5 kg (RPE 5)", "2x6 @ 75 kg (RPE 6)", "2x6 @ 45 kg (RPE 6)", "2x8 @ 30 kg/costat (RPE 6)", "2x12 @ 10 kg", "2x15 @ RPE 6", "2x12 @ RPE 6"],
      ["Força", "4x4 @ 105 kg (RPE 7)", "3x6 @ 92,5 kg (RPE 7-8)", "3x6 @ 60 kg (RPE 7-8)", "4x8 @ 45 kg/costat (RPE 7-8)", "3x10-12 @ 15 kg", "3x15 @ RPE 7", "3x10 @ RPE 7-8"],
      ["Força", "4x4 @ 107,5 kg (RPE 7-8)", "3x6 @ 95 kg (RPE 8)", "3x6 @ 62,5 kg (RPE 8)", "4x8 @ 47,5 kg/costat (RPE 8)", "3x10-12 @ 17,5 kg", "3x15 @ RPE 7-8", "3x8-10 @ RPE 8"],
      ["Força", "4x4 @ 110 kg (RPE 8)", "3x5 @ 97,5 kg (RPE 8)", "3x5 @ 65 kg (RPE 8)", "4x8 @ 50 kg/costat (RPE 8)", "3x10 @ 17,5 kg", "3x12-15 @ RPE 8", "3x8-10 @ RPE 8"],
      ["DELOAD", "2x4 @ 87,5 kg (RPE 5)", "2x6 @ 80 kg (RPE 6)", "2x6 @ 47,5 kg (RPE 6)", "2x8 @ 35 kg/costat (RPE 6)", "2x12 @ 10 kg", "2x15 @ RPE 6", "2x10 @ RPE 6"],
      ["Intensificació", "4x3 @ 112,5 kg (RPE 7-8)", "3x5 @ 100 kg (RPE 7)", "3x5 @ 62,5 kg (RPE 7)", "3x8 @ 50 kg/costat (RPE 7)", "3x10 @ 17,5 kg", "2x15 @ RPE 7", "3x8 @ RPE 7"],
      ["Intensificació", "3x3 @ 115 kg (RPE 8)", "2x5 @ 102,5 kg (RPE 7)", "2x5 @ 65 kg (RPE 7)", "3x8 @ 52,5 kg/costat (RPE 7-8)", "3x10 @ 17,5 kg", "2x15 @ RPE 7", "2x8 @ RPE 7"],
      ["Intensificació / taper", "2x2 @ 115 kg (RPE 6-7)", "2x5 @ 90 kg (RPE 6)", "2x5 @ 55 kg (RPE 6)", "3x6-8 @ 45 kg/costat (RPE 6-7)", "2x12 @ 12,5 kg", "2x15 @ RPE 6", "2x10 @ RPE 6"],
      ["TEST", "2x5 @ 75 kg (RPE 4-5)", "-", "-", "2x8 @ 30 kg/costat (RPE 5)", "2x15 @ 7,5 kg", "2x15 @ molt lleuger", "-"],
    ]
  },

  "Lower 2": {
    exercises: ["Deadlift - Top Set", "Conventional Deadlift", "Paused Deadlift", "Belt Squat / Hack Squat", "Hamstring Curl", "Ab Wheel", "Calf Raise"],
    weeks: [
      ["Readaptació", "1x1 @ 160 kg (RPE 5-6)", "3x4 @ 135 kg (RPE 5-6)", "2x4 @ 115 kg (RPE 5)", "2x10 @ RPE 6", "2x12 @ RPE 6", "2x8-10 @ controlat", "2x12-15 @ RPE 6"],
      ["Acumulació I", "1x1 @ 165 kg (RPE 6)", "4x4 @ 140 kg (RPE 6)", "3x4 @ 120 kg (RPE 6)", "3x10 @ RPE 7", "3x12 @ RPE 7", "3x10 @ controlat", "3x12-15 @ RPE 7"],
      ["Acumulació I", "1x1 @ 170 kg (RPE 6,5)", "4x4 @ 145 kg (RPE 6-7)", "3x4 @ 125 kg (RPE 6-7)", "3x10 @ RPE 7", "3x12 @ RPE 7", "3x10 @ controlat", "3x12-15 @ RPE 7"],
      ["Acumulació I", "1x1 @ 175 kg (RPE 7)", "4x4 @ 147,5 kg (RPE 7)", "3x4 @ 130 kg (RPE 7)", "3x10 @ RPE 8", "3x10-12 @ RPE 8", "3x10-12 @ controlat", "3x12 @ RPE 8"],
      ["DELOAD", "1x1 @ 150 kg (RPE 5)", "2x4 @ 120 kg (RPE 5)", "2x4 @ 100 kg (RPE 5)", "2x10 @ RPE 6", "2x12 @ RPE 6", "2x8 @ fàcil", "2x12 @ RPE 6"],
      ["Força base", "1x1 @ 175 kg (RPE 7)", "4x3 @ 150 kg (RPE 6,5-7)", "3x3 @ 135 kg (RPE 7)", "3x8-10 @ RPE 7", "3x10-12 @ RPE 7", "3x10 @ controlat", "3x12-15 @ RPE 7"],
      ["Força base", "1x1 @ 180 kg (RPE 7,5)", "4x3 @ 155 kg (RPE 7)", "3x3 @ 140 kg (RPE 7-8)", "3x8-10 @ RPE 7-8", "3x10 @ RPE 7-8", "3x10 @ controlat", "3x12-15 @ RPE 7-8"],
      ["Força base", "1x1 @ 185 kg (RPE 8)", "4x3 @ 157,5 kg (RPE 7-7,5)", "3x3 @ 145 kg (RPE 8)", "3x8 @ RPE 8", "3x10 @ RPE 8", "3x10-12 @ controlat", "3x12 @ RPE 8"],
      ["DELOAD", "1x1 @ 160 kg (RPE 5-6)", "3x3 @ 125 kg (RPE 5)", "2x3 @ 110 kg (RPE 5)", "2x10 @ RPE 6", "2x10 @ RPE 6", "2x8 @ fàcil", "2x12 @ RPE 6"],
      ["Força", "1x1 @ 185 kg (RPE 8)", "3x3 @ 160 kg (RPE 7)", "3x3 @ 147,5 kg (RPE 7-8)", "3x8 @ RPE 7", "3x10 @ RPE 7", "3x10 @ controlat", "3x12 @ RPE 7"],
      ["Força", "1x1 @ 190 kg (RPE 8)", "3x3 @ 162,5 kg (RPE 7-8)", "3x3 @ 150 kg (RPE 8)", "3x8 @ RPE 8", "3x10 @ RPE 8", "3x10-12 @ controlat", "3x12 @ RPE 8"],
      ["Força", "1x1 @ 192,5 kg (RPE 8,5)", "3x3 @ 165 kg (RPE 8)", "3x3 @ 152,5 kg (RPE 8)", "3x8 @ RPE 8", "3x8-10 @ RPE 8", "3x10-12 @ controlat", "3x12 @ RPE 8"],
      ["DELOAD", "1x1 @ 170 kg (RPE 5-6)", "2x3 @ 130 kg (RPE 5)", "2x3 @ 115 kg (RPE 5)", "2x8 @ RPE 6", "2x10 @ RPE 6", "2x8 @ fàcil", "2x12 @ RPE 6"],
      ["Intensificació", "1x1 @ 192,5 kg (RPE 8)", "3x2 @ 170 kg (RPE 7-7,5)", "2x3 @ 155 kg (RPE 7)", "3x8 @ RPE 7", "3x8-10 @ RPE 7", "3x10 @ controlat", "3x12 @ RPE 7"],
      ["Intensificació", "1x1 @ 195 kg (RPE 8,5)", "2x2 @ 175 kg (RPE 7,5-8)", "2x2 @ 160 kg (RPE 7)", "3x8 @ RPE 7", "3x8 @ RPE 7", "3x10 @ controlat", "3x12 @ RPE 7"],
      ["Intensificació / taper", "1x1 @ 197,5 kg (RPE 8,5-9)", "2x1 @ 180 kg (RPE 7)", "2x2 @ 145 kg (RPE 6)", "2x8 @ RPE 6", "2x8 @ RPE 6", "2x8 @ fàcil", "2x10 @ RPE 6"],
      ["TEST", "185x1 -> 202,5x1 -> 207,5-212,5x1 3r intent només si el 2n <= RPE 8,5", "-", "-", "-", "-", "-", "-"],
    ]
  },
};

const TOP_SET_DAYS = new Set(["Upper 1", "Lower 1", "Lower 2"]);

const progression = Object.fromEntries(
  Object.entries(PROGRAM).map(([dayKey, day]) => [
    dayKey,
    Object.fromEntries(
      day.weeks.map((week, weekIndex) => {
        const [phase, ...values] = week;

        const exercises = Object.fromEntries(
          day.exercises.map((name, exerciseIndex) => [
            name,
            {
              [TOP_SET_DAYS.has(dayKey) && exerciseIndex === 0
                ? "top"
                : "work"]: values[exerciseIndex]
            }
          ])
        );

        return [
          String(weekIndex),
          {
            phase,
            exercises
          }
        ];
      })
    )
  ])
);

const APP_DAYS = [
  {
    key: "Upper 1",
    weekDay: "MONDAY",
    short: "MON",
    label: "Dia 1",
    focus: "Bench intensitat"
  },
  {
    key: "Lower 1",
    weekDay: "TUESDAY",
    short: "TUE",
    label: "Dia 2",
    focus: "Squat"
  },
  {
    key: "Cardio",
    weekDay: "WEDNESDAY",
    short: "WED",
    label: "Dia 3",
    focus: "Cardio + mobilitat / salut articular"
  },
  {
    key: "Upper 2",
    weekDay: "THURSDAY",
    short: "THU",
    label: "Dia 4",
    focus: "Bench volum"
  },
  {
    key: "Lower 2",
    weekDay: "FRIDAY",
    short: "FRI",
    label: "Dia 5",
    focus: "Deadlift"
  }
];

const APP_SETTINGS = {
  programName: "Powerlifting Block",
  startDate: "2026-08-24",
  baseWeek: 0,
  minWeek: 0,
  maxWeek: 16
};

const CARDIO_SESSION = progression["Cardio"]["0"];

const WARMUPS = {
  "Upper 1": [
    {
      title: "Activació general",
      detail: "Caminar 10 min"
    },
    {
      title: "Mobilitat de torso",
      detail: "Rutina estiraments torso"
    },
    {
      title: "Approachings",
      detail: "Approachings del primer exercici"
    }
  ],

  "Lower 1": [
    {
      title: "Activació general",
      detail: "Caminar 10 min"
    },
    {
      title: "Mobilitat de cames",
      detail: "Rutina estiraments cames"
    },
    {
      title: "Approachings",
      detail: "Approachings del primer exercici"
    }
  ],

  "Cardio": [],

  "Upper 2": [
    {
      title: "Activació general",
      detail: "Caminar 10 min"
    },
    {
      title: "Mobilitat de torso",
      detail: "Rutina estiraments torso"
    },
    {
      title: "Approachings",
      detail: "Approachings del primer exercici"
    }
  ],

  "Lower 2": [
    {
      title: "Activació general",
      detail: "Caminar 10 min"
    },
    {
      title: "Mobilitat de cames",
      detail: "Rutina estiraments cames"
    },
    {
      title: "Approachings",
      detail: "Approachings del primer exercici"
    }
  ]
};

const MOBILITY = {
  "Upper 1": [
    {
      title: "Scapular CARs",
      detail: "2 x 8 rotacions · Mou només l’escàpula, no el colze"
    },
    {
      title: "Shoulder CARs",
      detail: "2 x 6 rotacions · Moviment lent controlant tot el rang"
    },
    {
      title: "Wall Angels",
      detail: "2 x 10 repeticions · Mantingues esquena i canells contra la paret"
    },
    {
      title: "Banded External Rotations",
      detail: "2 x 12 repeticions · Colze enganxat al cos"
    },
    {
      title: "Open Book Stretch",
      detail: "2 x 20-30\" per costat · Respira profundament mentre rotes"
    },
    {
      title: "Dead Hang",
      detail: "2 x 20-30\" · Relaxa l’espatlla i deixa que la gravetat obri l’articulació"
    }
  ],

  "Lower 1": [
    {
      title: "Hip CARs",
      detail: "2 x 6 rotacions · Moviment lent sense moure la pelvis"
    },
    {
      title: "Figure-4 Stretch",
      detail: "2 x 30\" per costat · Relaxa el gluti profund"
    },
    {
      title: "Cossack Squats",
      detail: "2 x 6-8 per costat · Pit alt i genoll alineat"
    },
    {
      title: "Jefferson Curls",
      detail: "2 x 8 repeticions · Baixa vèrtebra a vèrtebra"
    },
    {
      title: "Couch Stretch",
      detail: "2 x 30\" per costat · Mantingues glutis activats"
    },
    {
      title: "Deep Squat Hold + Respiració",
      detail: "2 x 30-45\" · Respira profund mantenint els talons a terra"
    }
  ],

  "Cardio": [],

  "Upper 2": [
    {
      title: "Scapular CARs",
      detail: "2 x 8 rotacions · Mou només l’escàpula, no el colze"
    },
    {
      title: "Shoulder CARs",
      detail: "2 x 6 rotacions · Moviment lent controlant tot el rang"
    },
    {
      title: "Wall Angels",
      detail: "2 x 10 repeticions · Mantingues esquena i canells contra la paret"
    },
    {
      title: "Banded External Rotations",
      detail: "2 x 12 repeticions · Colze enganxat al cos"
    },
    {
      title: "Open Book Stretch",
      detail: "2 x 20-30\" per costat · Respira profundament mentre rotes"
    },
    {
      title: "Dead Hang",
      detail: "2 x 20-30\" · Relaxa l’espatlla i deixa que la gravetat obri l’articulació"
    }
  ],

  "Lower 2": [
    {
      title: "Hip CARs",
      detail: "2 x 6 rotacions · Moviment lent sense moure la pelvis"
    },
    {
      title: "Figure-4 Stretch",
      detail: "2 x 30\" per costat · Relaxa el gluti profund"
    },
    {
      title: "Cossack Squats",
      detail: "2 x 6-8 per costat · Pit alt i genoll alineat"
    },
    {
      title: "Jefferson Curls",
      detail: "2 x 8 repeticions · Baixa vèrtebra a vèrtebra"
    },
    {
      title: "Couch Stretch",
      detail: "2 x 30\" per costat · Mantingues glutis activats"
    },
    {
      title: "Deep Squat Hold + Respiració",
      detail: "2 x 30-45\" · Respira profund mantenint els talons a terra"
    }
  ]
};

const PROGRAM_BLUEPRINT = Object.fromEntries(
  Object.entries(PROGRAM).map(([dayKey, day]) => [
    dayKey,
    day.exercises.map(title => ({
      title,
      detail:
        dayKey === "Cardio"
          ? "Veure detall concret a Daily / Plan"
          : "Veure càrrega concreta a Daily / Plan"
    }))
  ])
);
