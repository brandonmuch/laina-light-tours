# Laina Light Tours – Activities Page Image Pack

This folder is prepared for GitHub Copilot to connect the supplied activity images to the **Activities** page.

## Source used for the activity names

The activity names below are based on the supplied **Laina Light Tours 2026 Activities & Package List** included in the client asset ZIP. The CMS itself was not included in the uploaded ZIP, so this mapping should be treated as the source-of-truth naming for implementation unless the CMS uses different titles.

## Implementation instructions

1. Use the images in `activities/` for activity cards on the Activities page.
2. Match each image by the **Activity title** in the table below.
3. Use the exact filename shown in the `Image filename` column.
4. Keep the image paths relative to the page/component where possible.
5. Do not invent an image for an activity when no supplied image clearly represents it.
6. Some activities have multiple supplied photos. A single **primary** image is designated below. Alternate copies are retained only as reference.
7. Do not use anything in `reference/` as an Activities-page card image unless the CMS specifically has a matching package, accommodation, or generic content section.

## Primary activity image mapping

| Activity title | Image filename | Notes |
|---|---|---|
| 13-Min Helicopter Flight | `13-min-helicopter-flight-01.jpeg` | Primary aerial Falls image |
| 15-Min Microlight Flight – Zambia | `15-min-microlight-flight-zambia.jpeg` | Microlight aircraft image |
| 25-Min Helicopter Flight | `25-min-helicopter-flight.jpg` | Helicopter/Falls image |
| Explore the Zambezi Flight | `explore-the-zambezi-flight.jpeg` | Aerial Zambezi/Falls image |
| Flight of Angels (Helicopter) | `flight-of-angels-helicopter-01.png` | Primary Flight of Angels image |
| Big Air Experience (Bungee+Swing+Slide Combo) | `bungee-jump.jpeg` | No dedicated combo image supplied; use only if the card allows a representative bridge-adrenaline image |
| Bridge Slide (Zipline) | `bridge-slide-zipline.jpeg` | Zipline image |
| Bridge Swing – Tandem | `bridge-swing-tandem.webp` | Tandem bridge swing image |
| Bridge Tour | `bridge-tour.jpeg` | Victoria Falls Bridge tour image |
| Bungee Jump | `bungee-jump.jpeg` | Bungee image |
| Riversong Early Morning Sunrise Cruise | `riversong-sunset-cruise.jpeg` | Supplied Riversong image; visually usable, but the supplied photo is sunset rather than sunrise |
| Riversong Sunset Cruise | `riversong-sunset-cruise.jpeg` | Riversong sunset image |
| Zambezi Sunset Cruise | `zambezi-sunset-cruise.jpeg` | Standard sunset boat image |
| Dinner Cruise | `zambezi-sunset-cruise-02.jpeg` | Boat cruise image; not a dedicated dinner image |
| Lunch Cruise | `lunch-cruise.jpeg` | Lunch cruise boat image |
| Simunye: The Spirit of Africa (Theatre Show) | `simunye-the-spirit-of-africa.jpeg` | Theatre/cultural performance image |
| Victoria Falls Guided Rainforest Tour | `victoria-falls-guided-rainforest-tour.jpeg` | Victoria Falls waterfall image |
| Livingstone Island Breakfast – Zambia | `explore-the-zambezi-flight.jpeg` | No dedicated Livingstone Island breakfast image supplied; DO NOT use if a CMS image is required to be exact |
| Livingstone Island Hi Tea – Zambia | `explore-the-zambezi-flight.jpeg` | No dedicated Hi Tea image supplied; DO NOT use if an exact image is required |
| Livingstone Island Lunch – Zambia | `explore-the-zambezi-flight.jpeg` | No dedicated Livingstone Island lunch image supplied; DO NOT use if an exact image is required |
| Rhino Safari – Zambia | `game-drive-4x4.jpeg` | Representative safari image only |
| Cheetah Walk | `game-drive-4x4.jpeg` | No dedicated cheetah image supplied; representative safari image only |
| Elephant Interaction | `elephant-interaction.jpeg` | Elephant interaction image |
| Elephant Ride | `elephant-interaction.jpeg` | No dedicated elephant-ride image supplied; representative elephant image only |
| Full Day Chobe | `game-drive.jpeg` | Safari/game-drive image |
| Full Day Hwange | `game-drive-4x4.jpeg` | Safari/game-drive image |
| Game Drive | `game-drive-4x4.jpeg` | Primary 4x4 safari image |
| Game Park Private Reserve | `game-drive.jpeg` | Representative safari image |
| Lion Walk | `game-drive-4x4.jpeg` | No dedicated lion-walk image supplied; representative safari image only |
| Night Game Drive + Dinner | `night-game-drive-dinner.jpeg` | Night safari/lodge image |
| Through the Eyes of an Elephant | `elephant-interaction.jpeg` | Representative elephant encounter image |
| Boma Dinner & Drum Show | `simunye-the-spirit-of-africa.jpeg` | No dedicated Boma image supplied; use only if a representative cultural image is acceptable |
| Crocodile Farm | `game-drive.jpeg` | No crocodile image supplied; **do not use as an exact match** |
| Meet the People Village Tour | `meet-the-people-village-tour.jpeg` | Village/cultural-tour image |
| Quad Bike | `game-drive.jpeg` | No quad-bike image supplied; **do not use as an exact match** |
| Airport Transfer (one-way) | `airport-transfer.jpeg` | Transfer vehicle image |
| Canopy Tour | `bridge-slide-zipline.jpeg` | No dedicated canopy image supplied; representative zipline image only |
| Flying Fox | `bridge-slide-zipline.jpeg` | No dedicated flying-fox image supplied; representative zipline image only |
| Gorge Swing | `bridge-swing-tandem.webp` | Representative gorge-swing image |
| Jet Boat Adventure | `jet-boat-adventure.jpeg` | Jet boat image |
| Tandem Gorge Swing | `bridge-swing-tandem.webp` | Tandem swing image |
| Tandem Zip-line | `bridge-slide-zipline.jpeg` | Representative zipline image |
| White Water Rafting – 1-Day & Overnight | `white-water-rafting-day-trip.jpeg` | Rafting image |
| White Water Rafting – 2.5-Day Expedition | `white-water-rafting-day-trip.jpeg` | Rafting image |
| White Water Rafting – Day Trip | `white-water-rafting-day-trip.jpeg` | Primary rafting image |
| Zipline | `bridge-slide-zipline.jpeg` | Representative zipline image |
| Cultural Village & Craft Market Visit | `cultural-village-nature-tour.jpeg` | Representative village/cultural image |
| Devil's Pool Excursion (Seasonal) | `victoria-falls-guided-rainforest-tour.jpeg` | No dedicated Devil's Pool image supplied; **do not use as an exact match** |
| Great Zimbabwe Ruins Day Trip | — | No supplied image clearly matches this activity |
| Livingstone Island Excursion | `explore-the-zambezi-flight.jpeg` | No dedicated island image supplied; representative regional image only |
| Matobo Hills Rock Art Excursion | — | No supplied image clearly matches this activity |

## Important: activities with no exact supplied image

Do not pretend a generic image is an exact match. The following activities need a new/approved image if the Activities page requires a dedicated hero/card image:

- Great Zimbabwe Ruins Day Trip
- Matobo Hills Rock Art Excursion
- Crocodile Farm
- Quad Bike
- Devil's Pool Excursion
- Livingstone Island Breakfast – Zambia
- Livingstone Island Hi Tea – Zambia
- Livingstone Island Lunch – Zambia
- Cheetah Walk
- Lion Walk
- Canopy Tour
- Flying Fox

For these, the README deliberately avoids assigning a misleading image as the primary card image.

## Reference folder

The `reference/` folder contains supplied images that are useful for the wider website but should not automatically be used as Activities-page cards:

- `victoria-falls-explorer.jpg` – package image
- `victoria-falls-signature-mini.png` – package image
- `chiefs-tented-camp.jpeg` – accommodation/camp image
- `rainforest-cafe.jpg` – food/cafe image
- `victoria-falls-scenic-view.jpg` – generic scenic image
- `victoria-falls-cultural-experience.jpeg` – generic/unconfirmed image

## Alternate supplied images

There are duplicate/alternate helicopter, microlight, Zambezi flight and cruise images in `activities/`. They have numbered or `-02` filenames so they do not overwrite each other. Prefer the primary image listed in the mapping above.

## Suggested Copilot behaviour

When implementing the Activities page:

```text
For each activity record, find the matching activity title in README.md.
Use the exact filename mapped to that title.
Resolve the image from the activities image directory.
Do not assign a generic or unrelated image when the README says there is no exact supplied image.
Preserve the existing Activities page layout, card structure, pricing and content.
Only change the image references required to connect each activity to its supplied asset.
```
