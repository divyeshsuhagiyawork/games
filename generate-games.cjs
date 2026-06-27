const fs = require("fs");
const path = require("path");

const games = [
    {
        "id": "mr-racer",
        "title": "Mr Racer",
        "category": ["Racing"],
        "orientation": "landscape"
    },
    {
        "id": "construction-ramp-jumping",
        "title": "Construction Ramp Jumping",
        "category": ["Advanture"],
        "orientation": "landscape"
    },
    {
        "id": "moto-x3m",
        "title": "Moto X3M",
        "category": ["Advanture","Racing"],
        "orientation": "landscape"
    },
    {
        "id": "safari-story-mahjong",
        "title": "Safari Story Mahjong",
        "category": ["Puzzle"],
        "orientation": "portrait"
    },
    {
        "id": "fun-race-3d",
        "title": "Fun Race 3D",
        "category": ["Arcade", "3D"],
        "orientation": "portrait"
    },
    {
        "id": "cut-the-rope-time-travel",
        "title": "Cut The Rope Time Travel",
        "category": ["Puzzle"],
        "orientation": "portrait"
    },
    {
        "id": "toilet-pin",
        "title": "Toilet Pin",
        "category": ["Puzzle"],
        "orientation": "portrait"
    },
    {
        "id": "3d-free-kick-world-cup-18",
        "title": "3D Free Kick World Cup 18",
        "category": ["Sports"],
        "orientation": "landscape"
    },
    {
        "id": "slingshot-fortress",
        "title": "Slignshot Fortress",
        "category": ["Action", "Shooting"],
        "orientation": "landscape"
    },
    {
        "id": "fragen",
        "title": "Fragen",
        "category": ["Action", "Shooting"],
        "orientation": "landscape"
    },
    {
        "id": "get-to-the-chopper",
        "title": "Get To The Chopper",
        "category": ["Action", "Shooting"],
        "orientation": "landscape"
    },
    {
        "id": "hazmob-fps",
        "title": "Hasmob FPS",
        "category": ["Action", "Shooting"],
        "orientation": "landscape"
    },
    {
        "id": "slice-it-all",
        "title": "Slice It All",
        "category": ["Arcade"],
        "orientation": "portrait"
    },
    {
        "id": "rescue-girl",
        "title": "Rescue Girl",
        "category": ["Puzzle"],
        "orientation": "portrait"
    },
    {
        "id": "home-pin-1",
        "title": "Home Pin 1",
        "category": ["Puzzle"],
        "orientation": "portrait"
    },
]
// Output file
const outputFile = path.join(__dirname, "games.json");

// Read source data


const output = games.map((game) => ({
    id: game.id,
    title: game.title,
    src: `/${game.id}/index.html`,
    thumbnail: `/${game.id}/thumbnail.png`,
    poster: `/${game.id}/poster.png`,
    category: game.category || ['Arcade'],
    orientation: game.orientation || 'landscape'
}));

fs.writeFileSync(
    outputFile,
    JSON.stringify(output, null, 4),
    "utf8"
);

console.log(`✅ Generated ${output.length} games in ${outputFile}`);