/*
 * Grandpa's Garden Book — projects
 * --------------------------------
 * One object per garden project. Each project gets its own page at
 * project.html?id=<id> with photos, a to-do checklist, a budget and a
 * shopping list. Photos go in images/projects/.
 *
 * Fields (all optional except id and title):
 *   id          short slug used in the page URL, e.g. "raised-bed"
 *   title       project name
 *   summary     one or two lines shown on the projects index card
 *   status      "Planned" | "In progress" | "Done"
 *   season      when you plan to do it, e.g. "Spring 2026"
 *   location    where in the garden
 *   cover       main photo (path or URL)
 *   photos      [{ src, caption }]  — before / during / after shots
 *   description longer write-up (line breaks are kept)
 *   todos       [{ task, note, when, done }]
 *   budget      { planned: 250, items: [{ item, qty, est, actual, note }] }
 *   shopping    [{ item, qty, store, price, bought }]
 *   notes       anything else — lessons learned, measurements, who helped
 *
 * The three projects below are examples of the layout. Replace them with
 * real ones (or delete them) when you have your own list.
 */

const PROJECTS = [];

PROJECTS.push({
  id: "raised-bed",
  title: "Raised Vegetable Bed",
  summary: "A 4×8 ft cedar bed by the south fence for tomatoes, beans and salad greens.",
  status: "Planned",
  season: "Spring",
  location: "South fence, beside the shed",
  cover: "images/projects/raised-bed.jpg",
  photos: [
    { src: "images/projects/raised-bed-before.jpg", caption: "Before — the spot by the fence" },
    { src: "images/projects/raised-bed-frame.jpg", caption: "Frame assembled" },
    { src: "images/projects/raised-bed-planted.jpg", caption: "Planted out" }
  ],
  description: "One raised bed, 4 ft × 8 ft × 18 in. high, built from untreated cedar 2×6 boards stacked three high with 4×4 corner posts.\n\nSite gets sun from about 9 am to 5 pm. Fill with a mix of topsoil and compost, then mulch the paths around it with wood chips.",
  todos: [
    { task: "Mark out the 4×8 footprint and check it's level", when: "Week 1", done: false },
    { task: "Strip the grass and lay down cardboard", note: "Overlap the cardboard by a few inches so weeds can't sneak through.", when: "Week 1", done: false },
    { task: "Cut boards and posts to length", note: "Two 8 ft and two 4 ft per course, three courses.", when: "Week 2", done: false },
    { task: "Screw the frame together and set it in place", when: "Week 2", done: false },
    { task: "Fill with soil and compost, water it in", when: "Week 3", done: false },
    { task: "Plant tomatoes, beans and greens", when: "After last frost", done: false }
  ],
  budget: {
    planned: 250,
    items: [
      { item: "Cedar 2×6 × 8 ft boards", qty: "9", est: 135, actual: "", note: "3 courses" },
      { item: "4×4 cedar post, 8 ft", qty: "1", est: 22, actual: "", note: "cut into four 18 in. corners" },
      { item: "Exterior screws, 3 in.", qty: "1 box", est: 12, actual: "" },
      { item: "Topsoil / compost mix", qty: "1.5 yd³", est: 70, actual: "", note: "delivered" },
      { item: "Cardboard", qty: "", est: 0, actual: "", note: "saved from deliveries" }
    ]
  },
  shopping: [
    { item: "Cedar 2×6 × 8 ft", qty: "9", store: "Lumber yard", price: 135, bought: false },
    { item: "Cedar 4×4 × 8 ft", qty: "1", store: "Lumber yard", price: 22, bought: false },
    { item: "3 in. exterior screws", qty: "1 box", store: "Hardware store", price: 12, bought: false },
    { item: "Topsoil / compost mix", qty: "1.5 yd³", store: "Garden centre", price: 70, bought: false },
    { item: "Tomato, bean and lettuce starts", qty: "1 tray", store: "Garden centre", price: 25, bought: false }
  ],
  notes: "Leave a 2 ft path on every side so the mower can get around it."
});

PROJECTS.push({
  id: "drip-irrigation",
  title: "Drip Irrigation for the Flower Border",
  summary: "Run a drip line along the front border so the roses and hydrangeas get watered on a timer.",
  status: "In progress",
  season: "Summer",
  location: "Front border",
  cover: "images/projects/drip-irrigation.jpg",
  photos: [
    { src: "images/projects/drip-layout.jpg", caption: "Line laid out before mulching" }
  ],
  description: "Connect a battery timer to the front tap, run ½ in. mainline along the back of the border and put a 1 gph emitter at each shrub.",
  todos: [
    { task: "Measure the border and count the shrubs", done: true },
    { task: "Buy timer, mainline, emitters and fittings", done: true },
    { task: "Fit the timer, filter and pressure reducer at the tap", done: false },
    { task: "Lay the mainline and stake it down", done: false },
    { task: "Punch in emitters at each plant and flush the line", done: false },
    { task: "Cover with mulch and set the timer for early morning", done: false }
  ],
  budget: {
    planned: 120,
    items: [
      { item: "Hose-end battery timer", qty: "1", est: 35, actual: 32.99 },
      { item: "½ in. drip mainline, 100 ft", qty: "1", est: 20, actual: 18.50 },
      { item: "1 gph emitters", qty: "25", est: 10, actual: 9.75 },
      { item: "Filter + pressure reducer", qty: "1", est: 18, actual: "" },
      { item: "Stakes, elbows, end cap", qty: "", est: 15, actual: "" }
    ]
  },
  shopping: [
    { item: "Battery hose timer", qty: "1", store: "Hardware store", price: 35, bought: true },
    { item: "½ in. mainline, 100 ft", qty: "1", store: "Hardware store", price: 20, bought: true },
    { item: "1 gph emitters", qty: "25", store: "Hardware store", price: 10, bought: true },
    { item: "Filter + pressure reducer", qty: "1", store: "Hardware store", price: 18, bought: false },
    { item: "Stakes, elbows, end cap", qty: "1 bag each", store: "Hardware store", price: 15, bought: false }
  ],
  notes: ""
});

PROJECTS.push({
  id: "compost-bin",
  title: "Three-Bay Compost Bin",
  summary: "Pallet compost bins behind the shed — one filling, one cooking, one ready to use.",
  status: "Planned",
  season: "Autumn",
  location: "Behind the shed",
  cover: "images/projects/compost-bin.jpg",
  photos: [],
  description: "Seven wooden pallets screwed together into three open-fronted bays. Removable front slats so a bay can be turned with a fork.",
  todos: [
    { task: "Collect seven clean pallets (look for the HT stamp, not MB)", done: false },
    { task: "Level the ground and lay a base of coarse sticks", done: false },
    { task: "Screw pallets together into three bays", done: false },
    { task: "Add front slats that lift out", done: false },
    { task: "Start the first bay with autumn leaves and grass", done: false }
  ],
  budget: {
    planned: 40,
    items: [
      { item: "Pallets", qty: "7", est: 0, actual: "", note: "free from the garden centre" },
      { item: "Exterior screws", qty: "1 box", est: 12, actual: "" },
      { item: "Front slats (1×6 boards)", qty: "6", est: 25, actual: "" }
    ]
  },
  shopping: [
    { item: "Exterior screws, 3 in.", qty: "1 box", store: "Hardware store", price: 12, bought: false },
    { item: "1×6 boards, 4 ft", qty: "6", store: "Lumber yard", price: 25, bought: false }
  ],
  notes: ""
});
