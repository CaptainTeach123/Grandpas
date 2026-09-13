/*
 * 2101 Fleming Street — projects
 * ------------------------------
 * One object per garden or house project. Each project gets its own page at
 * project.html?id=<id> with photos, a to-do checklist, a budget and a
 * shopping list. Photos go in images/projects/ (a .jpg path also finds a
 * .png of the same name, and the other way round).
 *
 * Fields (all optional except id and title):
 *   id          short slug used in the page URL, e.g. "mantel-tv"
 *   title       project name
 *   summary     one or two lines shown on the projects index card
 *   status      "Planned" | "In progress" | "Done"
 *   season      when you plan to do it, e.g. "Autumn"
 *   location    where in the house or garden
 *   cover       main photo (path or URL)
 *   photos      [{ src, caption }]  — before / during / after shots
 *   description longer write-up (line breaks are kept)
 *   todos       [{ task, note, when, done }]
 *   budget      { planned: 250, items: [{ item, qty, est, actual, note }] }
 *   shopping    [{ item, qty, store, price, bought }]
 *   notes       anything else — lessons learned, measurements, who helped
 */

const PROJECTS = [];

PROJECTS.push({
  id: "mantel-tv",
  title: "Remove the Mantel for a TV",
  summary: "Take the oak mantel beam off the stone fireplace wall so a television can hang above the firebox.",
  status: "Planned",
  season: "Autumn",
  location: "Living room fireplace",
  cover: "images/projects/mantel-before.jpg",
  photos: [
    { src: "images/projects/mantel-before.jpg", caption: "Before — the oak beam across the stone wall" },
    { src: "images/projects/mantel-removed.jpg", caption: "Beam off, holes patched" },
    { src: "images/projects/mantel-tv-after.jpg", caption: "After — TV mounted" }
  ],
  description: "The fireplace wall is full-height moss rock with a solid oak beam mantel about 7 ft long, set into the stone a little above the firebox. The beam has to come off cleanly so the television can sit on the stone where it was, at a comfortable viewing height from the sofa.\n\nBeams like this are usually hung one of two ways: slid over steel rods or rebar pins mortared into the wall, or lag-bolted through the face with the holes plugged. How it comes off depends on which one this is, so the first job is finding out.",
  todos: [
    { task: "Work out how the beam is fixed", note: "Look along the top, underside and both ends for plugs, screw heads or a gap where it meets the stone. Tap for hollow spots. Try lifting one end — if it rocks it is probably on pins.", when: "Weekend 1", done: false },
    { task: "Clear the hearth and cover the floor and firebox", note: "Drop cloths over the hearth and carpet, cardboard over the glass doors. Move the tool set and anything on the hearth out of the room.", when: "Weekend 1", done: false },
    { task: "Get the beam down with a helper", note: "Plugged lags: drill out the plugs and back the bolts out. Pins: cut straight through the beam in line with each pin with a reciprocating saw, then slide the pieces off. Solid oak this size is heavy — two people.", when: "Weekend 1", done: false },
    { task: "Cut the pins or anchors flush with the stone", note: "Angle grinder with a metal cut-off wheel. Grind slightly below the face so the patch covers them.", when: "Weekend 1", done: false },
    { task: "Patch the holes and clean the stone", note: "Colour-matched mortar patch pushed into each hole and textured with a stiff brush before it sets. Scrub any dark band left behind the beam with a masonry cleaner.", when: "Weekend 2", done: false },
    { task: "Check the heat above the firebox before choosing a mount", note: "Run the fire for an hour and hold a thermometer where the TV screen will be. Most sets are rated to about 95–100 °F ambient. If it runs hotter, plan a heat deflector shelf or keep the TV higher.", when: "Weekend 2", done: false },
    { task: "Decide TV height and mark the mount holes", note: "Aim for the centre of the screen at roughly eye level from the sofa, plus a little for a tilting mount. Mark anchor holes in solid stone, not in the mortar joints.", when: "Weekend 2", done: false },
    { task: "Sort out power and cables", note: "The nearest outlet is on the side wall. Either have an electrician add an outlet behind the TV, or use a recessed power-and-cable kit and run the cord down a mortar joint in a raceway painted to match.", when: "Weekend 3", done: false },
    { task: "Drill the stone and fit the mount", note: "Hammer drill with a masonry bit, sleeve anchors sized for the mount's slots. Blow the dust out of each hole before setting the anchor.", when: "Weekend 3", done: false },
    { task: "Hang the TV, tidy the cables, test the picture from the sofa", when: "Weekend 3", done: false }
  ],
  budget: {
    planned: 350,
    items: [
      { item: "TV wall mount, tilting, rated for masonry", qty: "1", est: 60, actual: "" },
      { item: "Sleeve anchors, 3/8 in. × 3 in.", qty: "1 pack", est: 15, actual: "", note: "for the mount" },
      { item: "Masonry hammer-drill bit, 3/8 in.", qty: "1", est: 12, actual: "" },
      { item: "Reciprocating saw blades, wood with nails", qty: "1 pack", est: 15, actual: "" },
      { item: "Metal cut-off wheels for the grinder", qty: "1 pack", est: 12, actual: "" },
      { item: "Colour-matched mortar patch", qty: "1 tub", est: 20, actual: "" },
      { item: "Masonry cleaner and stiff brush", qty: "1", est: 15, actual: "" },
      { item: "Recessed power and cable kit, or electrician for an outlet", qty: "1", est: 150, actual: "", note: "outlet is the tidier option" },
      { item: "Paintable cable raceway", qty: "1", est: 15, actual: "" },
      { item: "Drop cloths, safety glasses, dust masks", qty: "", est: 20, actual: "" }
    ]
  },
  shopping: [
    { item: "Tilting TV wall mount (masonry-rated)", qty: "1", store: "Hardware store", price: 60, bought: false },
    { item: "Sleeve anchors 3/8 in. × 3 in.", qty: "1 pack", store: "Hardware store", price: 15, bought: false },
    { item: "Masonry hammer-drill bit 3/8 in.", qty: "1", store: "Hardware store", price: 12, bought: false },
    { item: "Reciprocating saw blades (wood with nails)", qty: "1 pack", store: "Hardware store", price: 15, bought: false },
    { item: "Metal cut-off wheels", qty: "1 pack", store: "Hardware store", price: 12, bought: false },
    { item: "Colour-matched mortar patch", qty: "1 tub", store: "Hardware store", price: 20, bought: false },
    { item: "Masonry cleaner + stiff brush", qty: "1", store: "Hardware store", price: 15, bought: false },
    { item: "Recessed power and cable kit", qty: "1", store: "Online", price: 60, bought: false },
    { item: "Paintable cable raceway", qty: "1", store: "Hardware store", price: 15, bought: false },
    { item: "Drop cloths, safety glasses, dust masks", qty: "1 each", store: "Hardware store", price: 20, bought: false }
  ],
  notes: "Keep the beam in one piece if it comes off on lags — it is good oak and could become a shelf or bench elsewhere."
});
