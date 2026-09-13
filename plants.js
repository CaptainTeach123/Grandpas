/*
 * Grandpa's Garden Book — plant data
 * ----------------------------------
 * Add one object per plant. Every field is optional: anything you leave
 * out renders as a blank line on the printed sheet, ready to fill in by hand.
 *
 * Photos go in images/plants/ and are referenced by path.
 *
 * Example entry (copy, uncomment and edit):
 *
 * PLANTS.push({
 *   name: "Rosemary",
 *   scientificName: "Salvia rosmarinus",
 *   photo: "images/plants/rosemary.jpg",   // path or URL; omit for an empty photo box
 *   origin: "Mediterranean",
 *   propagation: "Cuttings",
 *   type: "Evergreen shrub",
 *   idealTemp: "55–80 °F",
 *   soilType: "Sandy, well-drained",
 *   fertilizer: "Light feed in spring",
 *   sunlight: "Sun",                        // "Sun" | "Part Shade" | "Shade"
 *   water: "Low",                           // "Low" | "Medium" | "High"
 *   toxicity: ["Human Safe", "Pet Safe"],   // any of: "Human Safe", "Pet Safe"
 *   uses: ["Edible", "Spice", "Tea"],       // any of: Edible, Medicinal, Decorative,
 *                                           //         Spice, Dye, Tea, Repellant, Other
 *   pruning: {
 *     seasons: ["Spring", "Summer"],        // any of: Spring, Summer, Autumn, Winter
 *     methods: ["Pinch", "Cut Back"],       // any of: Pinch, Deadhead, Thin,
 *                                           //         Cut Back, Shear, Limb Up
 *     frequency: "After flowering",
 *     tools: "Bypass pruners",
 *     lastPruned: "",
 *     notes: "Never cut into bare wood — it won't regrow."
 *   },
 *   pests: "Aphids — rinse off; spider mites in dry spells.",
 *   log: [
 *     { date: "3/14", entry: "Potted up into terracotta" },
 *   ]
 * });
 */

const PLANTS = [];

/* Plants will be added here as photos and names arrive. */
