# Source-Engine Portrait Transfer

Transform a photo of a person into early Source-engine (GoldSrc) game aesthetics while keeping the person's identity intact. Built for image-generation models such as Stable Diffusion and ComfyUI.

## Inputs

- `{{reference_image}}` — the photo to transform. Identity must be preserved: same face, features, hairstyle, skin tone, build, and overall presence.
- `{{scene}}` — the situational prompt describing setting and action, e.g. `eating with a friend in a university cafeteria, a pretty woman nearby`.

## Positive prompt

```text
{{reference_image}} — keep the subject's facial features, face shape, hairstyle, skin tone,
body type and overall presence identical; do not swap faces, do not change the character.

Convert the image to the visual style of the original Source engine (GoldSrc): low-poly 3D
modeling, low-resolution blurry textures, coarse blocky pixel texture, early-engine harsh and
uneven lighting, hard-edged block shadows, abrupt light/dark contrast, angular model edges,
plain slightly plasticky materials, mild noise and video-compression grain. The result should
look like a screenshot from the original Half-Life or early Garry's Mod — not a real photo,
not a modern 3D render, not a hand-drawn illustration.

Scene: {{scene}}.
Third-person view, slice-of-life scene, natural composition, clean image. No UI, no HUD, no
subtitles, no watermark, no text. Vertical (portrait) framing.
```

## Negative prompt

```text
deformed face, scrambled features, face swap, changed character, changed hairstyle, changed
face shape, twisted fingers, malformed limbs, extra fingers, missing fingers, abnormal
hands/feet, wrong body proportions, real photography, photo texture, high-definition
photorealism, over-detailed, modern game graphics, oil painting, hand-drawn, illustration,
cartoon, anime, 2D, game UI, HUD, health bar, minimap icon, subtitles, watermark, text, logo,
extra people, multiple people, over-smoothed skin, excessive plastic sheen, empty background
```

## Settings

- **Aspect / framing:** vertical, portrait — set resolution accordingly (e.g. 2:3 or 9:16).
- **Sampler / steps:** any standard sampler; keep steps moderate so the low-poly look survives (high steps push toward realism).
- **Denoise (img2img):** high enough to fully restyle while holding identity — tune per model.

## Rules

- Identity preservation is the hard constraint: never trade likeness for style.
- The negative prompt is not decoration — it is what suppresses modern-photo and anime leakage.
- Adjust only `{{scene}}` between runs; keep the style and negative blocks fixed.
