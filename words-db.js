let wordList = [
    {
        word: "smile",
        hint: "What you do when you're happy."
    },
    {
        word: "happy",
        hint: "The feeling of joy and contentment."
    },
    {
        word: "friend",
        hint: "Someone you like and trust."
    },
    {
        word: "family",
        hint: "Your close relatives, like parents and siblings."
    },
    {
        word: "sun",
        hint: "The big, bright thing in the sky during the day."
    },
    {
        word: "moon",
        hint: "The object that lights up the night sky."
    },
    {
        word: "star",
        hint: "A tiny, twinkling light in the night sky."
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "beach",
        hint: "A sandy shore by the ocean."
    },
    {
        word: "ocean",
        hint: "A vast body of saltwater."
    },
    {
        word: "park",
        hint: "A place with trees, grass, and playgrounds."
    },
    {
        word: "flower",
        hint: "A colorful plant that smells nice."
    },
    {
        word: "tree",
        hint: "A tall plant with a trunk and leaves."
    },
    {
        word: "laugh",
        hint: "What you do when something's funny."
    },
    {
        word: "honey",
        hint: "sweet syrup"
    },
    {
        word: "song",
        hint: "A melody with lyrics."
    },
    {
        word: "dance",
        hint: "Moving rhythmically to music."
    },
    {
        word: "balloon",
        hint: "A colorful inflatable object."
    },
    {
        word: "cake",
        hint: "A sweet dessert often served on birthdays."
    },
    {
        word: "icecream",
        hint: "A frozen treat with many flavors."
    },
    {
        word: "candy",
        hint: "Sweet, sugary treats."
    },
    {
        word: "chocolate",
        hint: "A type of sweet made from cocoa."
    },
    {
        word: "puppy",
        hint: "A young dog."
    },
    {
        word: "kitten",
        hint: "A young cat."
    },
    {
        word: "rainbow",
        hint: "A colorful arc in the sky."
    },
    {
        word: "playground",
        hint: "A place with swings and slides."
    },
    {
        word: "game",
        hint: "An activity for fun and competition."
    },
    {
        word: "toy",
        hint: "Something to play with."
    },
    {
        word: "teddy",
        hint: "A soft, stuffed animal."
    },
    {
        word: "hug",
        hint: "An affectionate embrace."
    },
    {
        word: "love",
        hint: "A deep feeling of affection."
    },
    {
        word: "baby",
        hint: "A very young child."
    },
    {
        word: "sleep",
        hint: "What you do at night to rest."
    },
    {
        word: "bed",
        hint: "Where you sleep."
    },
    {
        word: "book",
        hint: "A collection of pages with stories."
    },
    {
        word: "school",
        hint: "Where you learn."
    },
    {
        word: "color",
        hint: "What makes things look different."
    },
    {
        word: "paint",
        hint: "What you use to color things."
    },
    {
        word: "music",
        hint: "Melodies and rhythms."
    },
    {
        word: "movie",
        hint: "A film you watch."
    },
    {
        word: "party",
        hint: "A gathering to celebrate something."
    },
    {
        word: "gift",
        hint: "Something you give to someone."
    },
    {
        word: "magic",
        hint: "Tricks and illusions."
    },
    {
        word: "dragon",
        hint: "A mythical, fire-breathing creature."
    },
    {
        word: "pirate",
        hint: "A seafaring thief."
    },
    {
        word: "adventure",
        hint: "Exciting, daring experiences."
    },
    {
        word: "Treasure",
        hint: "Valuable hidden objects."
    },
    {
        word: "castle",
        hint: "A grand, fortified building."
    },
    {
        word: "princess",
        hint: "A royal female."
    },
    {
        word: "hero",
        hint: "A brave, admired person."
    },
    {
        word: "superhero",
        hint: "A fictional hero with powers."
    },
    {
        word: "cowboy",
        hint: "A Western movie character."
    },
    {
        word: "robot",
        hint: "A mechanical, programmable device."
    },
    {
        word: "car",
        hint: "What you drive on roads."
    },
    {
        word: "train",
        hint: "A series of connected cars on tracks."
    },
    {
        word: "plane",
        hint: "A flying machine."
    },
    {
        word: "boat",
        hint: "A watercraft."
    },
    {
        word: "bike",
        hint: "A two-wheeled vehicle."
    },
    {
        word: "rain",
        hint: "Water falling from the sky."
    },
    {
        word: "snow",
        hint: "Frozen water crystals."
    },
    {
        word: "spring",
        hint: "A season with blossoms."
    },
    {
        word: "summer",
        hint: "The warmest season."
    },
    {
        word: "autumn",
        hint: "A season with falling leaves."
    },
    {
        word: "winter",
        hint: "The coldest season."
    },
    {
        word: "picnic",
        hint: "Eating outdoors."
    },
    {
        word: "pizza",
        hint: "A popular Italian dish."
    },
    {
        word: "cookie",
        hint: "A sweet baked treat."
    },
    {
        word: "pie",
        hint: "A dessert with a crust and filling."
    },
    {
        word: "zoo",
        hint: "A place with animals."
    },
    {
        word: "farm",
        hint: "Where animals are raised."
    },
    {
        word: "pet",
        hint: "An animal kept for companionship."
    },
    {
        word: "butterfly",
        hint: "A colorful flying insect."
    },
    {
        word: "ladybug",
        hint: "A small, spotted beetle."
    },
    {
        word: "bee",
        hint: "A flying insect that makes honey."
    },
    {
        word: "fish",
        hint: "A slow-moving reptile."
    },
    {
        word: "elephant",
        hint: "A large, gray mammal."
    },
    {
        word: "lion",
        hint: "A big, wild cat."
    },
    {
        word: "tiger",
        hint: "A large, striped cat."
    },
    {
        word: "giraffe",
        hint: "A tall African animal."
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
]