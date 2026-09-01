# Image prompts — transfer fleet (Toyota Noah, up to 4 passengers)

## Read this first

Image generators are unreliable with specific vehicle models. Ask for a
"Toyota Noah" by name and you will usually get a generic MPV with a
garbled badge, wrong proportions, or invented brand marks. Two ways to
handle it:

1. **Describe the vehicle, not the brand.** "Compact Japanese
   people-mover, boxy silhouette, sliding side door, high roofline,
   silver/white" gets you far closer than the model name does.
2. **Crop badges out.** Shoot three-quarter or side-on at a distance
   where no logo is legible, and the image stops making a claim it
   cannot support.

A caution worth weighing: this is a **transfers page**, where the whole
job is convincing a stranger that a real driver will meet a real
vehicle at the airport. A generated vehicle that is not the actual
fleet undercuts exactly the trust the page is built to create. Use
these to fill the layout while you arrange a photographer, and swap in
real shots when you have them. A phone photo of the actual van in good
light beats a perfect render of a van that does not exist.

---

## 1. `fleet-exterior-01.webp` — main fleet shot
**16:9 · 1600×900 · the transfers hero and the wide fleet slot**

> Editorial travel photograph of a clean white compact Japanese
> people-mover van, boxy silhouette with a high roofline and a sliding
> side door, parked on a red dirt road at the edge of open bushveld
> near Victoria Falls, Zimbabwe. Three-quarter front view from a low
> angle. Late afternoon golden light, long soft shadows, warm dust in
> the air, acacia and mopane trees blurred behind. Natural colour, deep
> but detailed shadows, subtle film grain. Shot on a 35mm lens at f/4.
> No visible badges, logos or number plates. No people. Documentary
> travel photography, not an advertisement.

## 2. `interior-seats.webp` — cabin
**3:2 · 1600×1067**

> Interior of a clean compact people-mover van photographed through the
> open sliding side door. Two rows of grey cloth seats, generous
> legroom, headrests, seatbelts visible, air-conditioning vents in the
> roof lining. Bright natural daylight coming through the windows, warm
> and airy. Shot on a 24mm lens, straight on, no distortion. Realistic
> materials, no gloss, no showroom styling. Empty, tidy, ready for
> passengers. Documentary photography.

## 3. `luggage-space.webp` — boot with real bags
**3:2 · 1600×1067**

> Open rear hatch of a compact people-mover van with two large hard
> suitcases and a soft duffel bag loaded inside, plus a daypack. Late
> afternoon daylight, red dirt underfoot, bush visible behind. Shot
> straight on from just behind the vehicle. Honest and slightly
> imperfect, as if photographed on a real transfer day. Natural colour,
> no studio lighting.

## 4. `driver-name-board.webp` — arrivals meet
**3:2 · 1600×1067**

> A friendly Zimbabwean driver in a neat short-sleeved shirt standing
> beside a clean white people-mover van at an airport pickup area,
> holding a blank white name board at chest height. Warm natural
> daylight, relaxed posture, genuine unforced smile, looking toward the
> camera. Shallow depth of field, the vehicle softly out of focus
> behind him. Documentary portrait, natural skin tones, no studio
> lighting, no stock-photo posing. Leave the name board blank.

*This is the single highest-value image on the page. It answers "will
someone actually be there when I land" better than any sentence can.
It is also the one most worth photographing for real.*

## 5. `fleet-large-group.webp` — larger party
**16:9 · 1600×900 · for the group-quote panel**

> Two clean white compact people-mover vans parked side by side on a
> gravel airport forecourt, sliding doors open, ready to load. Early
> morning light, soft shadows, bush and open sky behind. Wide
> three-quarter view. Natural colour, documentary travel photography,
> no badges or number plates, no people.

## 6. `airport-pickup.webp` — optional context shot
**16:9 · 1600×900**

> A white compact people-mover van waiting in the pickup bay outside a
> small African regional airport terminal, warm afternoon light, palms
> and low buildings behind, a couple of travellers with luggage walking
> toward it in the middle distance. Observed rather than staged.
> Natural colour, slight haze, documentary travel photography.

---

## Settings

- Aspect ratio matters more than resolution; the layout crops to the
  ratios above.
- Ask for **no text, no logos, no number plates**. Generated lettering
  is almost always wrong and reads as fake immediately.
- Ask for **natural colour and documentary style**. Left alone these
  models produce over-saturated, over-sharpened, HDR-looking output,
  which is the opposite of the direction set in the visual brief.
- Generate 4 variations of each and pick, rather than refining one.

## After generating

Save into this folder with the exact filenames above. The transfers
page already points at them and will drop its placeholder as soon as
the file exists. Keep each under 300 KB:

```bash
python -c "from PIL import Image; im=Image.open('fleet-exterior-01.png').convert('RGB'); im.thumbnail((1600,1600)); im.save('fleet-exterior-01.webp','WEBP',quality=82)"
```
