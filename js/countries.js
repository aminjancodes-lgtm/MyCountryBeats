/**
 * MyCountryBeats - Clean, Fun Country Database
 * Streamlined for instant readability, fun weapons, and punchy 1-line results!
 */

const CATEGORIES = [
    { id: 'food', name: 'Food Clash', icon: '🍕', question: 'Whose food is tastier?' },
    { id: 'sports', name: 'Sports Brawl', icon: '⚽', question: 'Who dominates the field?' },
    { id: 'weather', name: 'Weather Battle', icon: '☀️', question: 'Who has the best vibe & climate?' },
    { id: 'history', name: 'History Flex', icon: '📜', question: 'Who has more legendary lore?' },
    { id: 'power', name: 'Global Muscle', icon: '💪', question: 'Who flexes harder on the world stage?' },
    { id: 'popculture', name: 'Pop Culture', icon: '🎵', question: 'Who makes the world dance & watch?' },
    { id: 'wildlife', name: 'Wild Beasts', icon: '🦘', question: 'Whose creatures are more epic?' },
    { id: 'inventions', name: 'Big Brains', icon: '💡', question: 'Who invented more awesome stuff?' }
];

const CURATED_COUNTRIES = {
    US: {
        code: 'US',
        name: 'United States',
        flag: '🇺🇸',
        mascot: { name: 'Eagle Sam', emoji: '🦅' },
        weapons: {
            food: { item: 'Double Bacon Burger', emoji: '🍔', score: 88, win: 'Super-sized burger crushes with pure cheesy power!' },
            sports: { item: 'Slam Dunk Buzzer', emoji: '🏀', score: 98, win: 'Olympic gold champions slam dunk the win!' },
            weather: { item: 'Miami Sunshine', emoji: '🌴', score: 75, win: 'Tropical Miami sunshine brings the heat!' },
            history: { item: 'Independence Scroll', emoji: '📜', score: 70, win: 'Dumped tea in the harbor and wrote history in cursive!' },
            power: { item: 'Hollywood Megaphone', emoji: '🦅', score: 99, win: 'Global superpower drops the mic on the world!' },
            popculture: { item: 'Blockbuster Laser', emoji: '🎬', score: 98, win: 'Hollywood, Marvel, and rock & roll blow minds!' },
            wildlife: { item: 'Grizzly Roar', emoji: '🐻', score: 82, win: 'Wild grizzly bears take down all challengers!' },
            inventions: { item: 'Smartphone & Internet', emoji: '📱', score: 97, win: 'Silicon Valley genius powers the entire planet!' }
        }
    },
    IT: {
        code: 'IT',
        name: 'Italy',
        flag: '🇮🇹',
        mascot: { name: 'Chef Nonna', emoji: '🍕' },
        weapons: {
            food: { item: 'Wood-Fired Pizza', emoji: '🍕', score: 99, win: 'Crispy wood-fired pizza delivers an undeniable knockout!' },
            sports: { item: 'Ferrari V12 Engine', emoji: '🏎️', score: 88, win: 'Four World Cups and screaming red Ferraris take the lead!' },
            weather: { item: 'Amalfi Coast Sun', emoji: '☀️', score: 92, win: 'Mediterranean paradise blows away the competition!' },
            history: { item: 'Colosseum Shield', emoji: '🏛️', score: 99, win: 'Roman Empire and Renaissance masters school everyone!' },
            power: { item: 'Milan Fashion Flex', emoji: '🕶️', score: 80, win: 'World capital of style and luxury swagger!' },
            popculture: { item: 'Opera & Vespa Hype', emoji: '🛵', score: 86, win: 'Cruising in style with timeless Italian cool!' },
            wildlife: { item: 'Apennine Wolf', emoji: '🐺', score: 75, win: 'Majestic wolves howling from the Alps!' },
            inventions: { item: 'Radio & Batteries', emoji: '🔋', score: 92, win: 'Volta and Marconi invented the modern spark!' }
        }
    },
    JP: {
        code: 'JP',
        name: 'Japan',
        flag: '🇯🇵',
        mascot: { name: 'Ninja Shiba', emoji: '🐕' },
        weapons: {
            food: { item: 'Master Sushi Roll', emoji: '🍣', score: 98, win: 'Steaming ramen and master sushi slice through the defense!' },
            sports: { item: 'Sumo Palm Slam', emoji: '🥋', score: 87, win: 'Baseball superstars and Sumo giants push rival out of the ring!' },
            weather: { item: 'Sakura Petal Breeze', emoji: '🌸', score: 84, win: 'Magical cherry blossoms create pure paradise!' },
            history: { item: 'Samurai Katana', emoji: '⚔️', score: 94, win: 'Ancient Samurai honor and wooden castles stand undefeated!' },
            power: { item: 'Bullet Train Shinkansen', emoji: '🚄', score: 89, win: 'High-speed precision and tech dominance prevail!' },
            popculture: { item: 'Anime & Pokémon', emoji: '⚡', score: 99, win: 'Super Saiyan energy and Pokémon capture everyone!' },
            wildlife: { item: 'Snow Monkey', emoji: '🐵', score: 78, win: 'Hot-spring bathing snow monkeys win all the hearts!' },
            inventions: { item: 'Pocket Robot', emoji: '🤖', score: 96, win: 'High-tech robotics and bullet trains outsmart the rest!' }
        }
    },
    BR: {
        code: 'BR',
        name: 'Brazil',
        flag: '🇧🇷',
        mascot: { name: 'Samba Toucan', emoji: '🦜' },
        weapons: {
            food: { item: 'Churrasco BBQ Skewer', emoji: '🥩', score: 90, win: 'Endless grilled steaks leave the opponent speechless!' },
            sports: { item: 'Golden World Cup', emoji: '⚽', score: 99, win: '5 World Cups! Pure Joga Bonito magic on the pitch!' },
            weather: { item: 'Copacabana Sun', emoji: '🏖️', score: 95, win: 'Golden beaches and endless tropical summer breeze!' },
            history: { item: 'Empire Gold Banner', emoji: '👑', score: 78, win: 'Lush royal history and legendary freedom fighters!' },
            power: { item: 'Coffee Avalanche', emoji: '☕', score: 83, win: 'Fueled the whole world with coffee and energy!' },
            popculture: { item: 'Carnival Samba Drums', emoji: '🥁', score: 95, win: 'The greatest party on Earth dances circles around the rival!' },
            wildlife: { item: 'Amazonian Jaguar', emoji: '🐆', score: 99, win: 'Amazon rainforest unleashes the fiercest wildlife on Earth!' },
            inventions: { item: 'Aviation 14-Bis Airship', emoji: '🛩️', score: 81, win: 'Santos-Dumont flies high into aviation victory!' }
        }
    },
    GB: {
        code: 'GB',
        name: 'United Kingdom',
        flag: '🇬🇧',
        mascot: { name: 'Bulldog Winston', emoji: '🐶' },
        weapons: {
            food: { item: 'Fish & Chips Batter', emoji: '🐟', score: 78, win: 'Crispy golden fish and piping chips save tea time!' },
            sports: { item: 'Premier League Goal', emoji: '⚽', score: 93, win: 'Invented modern sports and scored a 90th-minute stunner!' },
            weather: { item: 'Rainy Day Umbrella', emoji: '☔', score: 60, win: 'Keeps calm and sips hot tea through the drizzly fog!' },
            history: { item: 'Royal Castle Cannon', emoji: '🏰', score: 98, win: 'Centuries of castles, kings, and Magna Carta glory!' },
            power: { item: 'Royal Navy Fleet', emoji: '⚓', score: 90, win: 'Historic global influence flexes massive authority!' },
            popculture: { item: 'Beatles & James Bond', emoji: '🎸', score: 98, win: 'Rock legends and 007 charm take center stage!' },
            wildlife: { item: 'Highland Coo', emoji: '🐮', score: 70, win: 'Fluffy Highland cow headbutts with style!' },
            inventions: { item: 'World Wide Web', emoji: '🌐', score: 97, win: 'Invented the World Wide Web and steam engine!' }
        }
    },
    FR: {
        code: 'FR',
        name: 'France',
        flag: '🇫🇷',
        mascot: { name: 'Pierre Rooster', emoji: '🥖' },
        weapons: {
            food: { item: 'Baguette Broadsword', emoji: '🥖', score: 98, win: 'Warm croissants and gourmet cheese conquer the taste buds!' },
            sports: { item: 'Yellow Jersey Sprint', emoji: '🚴', score: 92, win: 'Two-time World Champions sprint to the finish line!' },
            weather: { item: 'French Riviera Sun', emoji: '🏖️', score: 87, win: 'Cannes sunshine and Alpine snow give the perfect mix!' },
            history: { item: 'Versailles Palace Crown', emoji: '👑', score: 97, win: 'Stormed the Bastille and built the majestic Louvre!' },
            power: { item: 'Supersonic Concorde', emoji: '✈️', score: 91, win: 'Diplomatic powerhouse and European aerospace titan!' },
            popculture: { item: 'Haute Couture Runway', emoji: '🕶️', score: 93, win: 'Paris fashion and electronic Daft Punk beats rule!' },
            wildlife: { item: 'Camargue White Horse', emoji: '🐎', score: 74, win: 'Wild white horses gallop across coastal shores!' },
            inventions: { item: 'Cinema Projector', emoji: '🎬', score: 93, win: 'Gave humanity cinema, photography, and pasteurization!' }
        }
    },
    DE: {
        code: 'DE',
        name: 'Germany',
        flag: '🇩🇪',
        mascot: { name: 'Engineer Hans', emoji: '🥨' },
        weapons: {
            food: { item: 'Giant Pretzel Boomerang', emoji: '🥨', score: 85, win: 'Bratwurst and colossal pretzels pack a mighty punch!' },
            sports: { item: 'Precision Penalty Kick', emoji: '⚽', score: 94, win: '4 World Cups! German football machine never misses!' },
            weather: { item: 'Alpine Fairytale Frost', emoji: '❄️', score: 72, win: 'Fairytale castle winters and crisp autumn breezes!' },
            history: { item: 'Gutenberg Printing Press', emoji: '📜', score: 93, win: 'Land of legendary poets, thinkers, and philosophy!' },
            power: { item: 'Autobahn Speed Machine', emoji: '🏎️', score: 95, win: 'Industrial engine of Europe drives without speed limits!' },
            popculture: { item: 'Berlin Techno Bass', emoji: '🎧', score: 86, win: 'Underground electronic beats shake the stadium!' },
            wildlife: { item: 'Black Forest Boar', emoji: '🐗', score: 73, win: 'Mighty wild boars charging through ancient forests!' },
            inventions: { item: 'Automobile Engine', emoji: '🚗', score: 98, win: 'Invented the automobile, aspirin, and printing press!' }
        }
    },
    ES: {
        code: 'ES',
        name: 'Spain',
        flag: '🇪🇸',
        mascot: { name: 'Toro Flamenco', emoji: '🐂' },
        weapons: {
            food: { item: 'Sizzling Paella Pan', emoji: '🥘', score: 96, win: 'Sizzling seafood paella and tapas steal the show!' },
            sports: { item: 'Tiki-Taka Pass', emoji: '⚽', score: 94, win: 'Tiki-Taka passes dizzy circles around the defense!' },
            weather: { item: 'Costa del Sol Sun', emoji: '☀️', score: 96, win: '300 days of sunshine! Paradise can’t be beaten!' },
            history: { item: 'Golden Galleon Ship', emoji: '⛵', score: 94, win: 'Epic naval explorers and centuries of golden lore!' },
            power: { item: 'Fiesta Horn Blast', emoji: '🎺', score: 82, win: 'Global language and cultural celebration powers up!' },
            popculture: { item: 'La Tomatina Splash', emoji: '🍅', score: 92, win: 'Flamenco passion and wild tomato battles win hearts!' },
            wildlife: { item: 'Iberian Lynx Pounce', emoji: '🐾', score: 80, win: 'Sleek Iberian Lynx strikes with pinpoint stealth!' },
            inventions: { item: 'Spacesuit Blueprint', emoji: '🚀', score: 86, win: 'Invented early astronaut spacesuits and submarines!' }
        }
    },
    MX: {
        code: 'MX',
        name: 'Mexico',
        flag: '🇲🇽',
        mascot: { name: 'Luchador Nacho', emoji: '🥑' },
        weapons: {
            food: { item: 'Fiery Habanero Taco', emoji: '🌮', score: 98, win: 'Sizzling tacos and spicy guacamole pack pure flavor fire!' },
            sports: { item: 'Flying Lucha Dive', emoji: '🤼', score: 87, win: 'Masked luchador drops from the top turnbuckle!' },
            weather: { item: 'Cancun Caribbean Breeze', emoji: '🌴', score: 93, win: 'Warm turquoise waters and sun that never stops!' },
            history: { item: 'Aztec Sun Stone', emoji: '☀️', score: 96, win: 'Mayan pyramids and ancient astronomy stun the crowd!' },
            power: { item: 'Agave Shockwave', emoji: '🌵', score: 81, win: 'Export powerhouse driving Latin American energy!' },
            popculture: { item: 'Mariachi Trumpet', emoji: '🎺', score: 93, win: 'Day of the Dead fiesta and lively Mariachi music!' },
            wildlife: { item: 'Magic Axolotl', emoji: '🦎', score: 92, win: 'The adorable regenerating axolotl outshines all!' },
            inventions: { item: 'Color Television', emoji: '📺', score: 87, win: 'Invented color TV broadcasting and chewing gum!' }
        }
    },
    AU: {
        code: 'AU',
        name: 'Australia',
        flag: '🇦🇺',
        mascot: { name: 'Kangaroo Jack', emoji: '🦘' },
        weapons: {
            food: { item: 'Piping Meat Pie', emoji: '🥧', score: 82, win: 'Hot Aussie meat pies and fresh barbecue hit the spot!' },
            sports: { item: 'Boomerang Cricket Spin', emoji: '🪃', score: 94, win: '6 Cricket World Cups and Olympic swimming legends!' },
            weather: { item: 'Gold Coast Surf', emoji: '🏄', score: 94, win: 'Over 10,000 sun-drenched beaches and golden surf!' },
            history: { item: 'Aboriginal Didgeridoo', emoji: '🪵', score: 85, win: '65,000 years of the oldest continuous culture on Earth!' },
            power: { item: 'Outback Giant Miner', emoji: '🚜', score: 86, win: 'Colossal mineral wealth powers the southern oceans!' },
            popculture: { item: 'AC/DC Rock Guitar', emoji: '🎸', score: 90, win: 'Thunderstruck rock riffs and Bluey global fame!' },
            wildlife: { item: 'Boxing Kangaroo Kick', emoji: '🦘', score: 98, win: 'Kangaroos, crocs, and cute quokkas rule the wilderness!' },
            inventions: { item: 'High-Speed Wi-Fi Pulse', emoji: '📡', score: 94, win: 'Invented high-speed Wi-Fi and black box flight recorders!' }
        }
    },
    CA: {
        code: 'CA',
        name: 'Canada',
        flag: '🇨🇦',
        mascot: { name: 'Moose Justin', emoji: '🫎' },
        weapons: {
            food: { item: 'Maple Syrup Poutine', emoji: '🍟', score: 84, win: 'Warm gravy poutine and sweet maple syrup satisfy all!' },
            sports: { item: 'Slap-Shot Hockey Puck', emoji: '🏒', score: 91, win: 'Ice hockey gods rocket a 100mph slap shot into the goal!' },
            weather: { item: 'Aurora Borealis Glare', emoji: '🌌', score: 73, win: 'Dancing northern lights light up snowy mountains!' },
            history: { item: 'Mountie Stride', emoji: '🍁', score: 81, win: 'Peaceful northern confederation and storied frontier lore!' },
            power: { item: 'Freshwater Hydro Surge', emoji: '💧', score: 88, win: 'Huge natural resources and high quality of life!' },
            popculture: { item: 'Wholesome Hollywood Star', emoji: '🎬', score: 92, win: 'Keanu Reeves, Ryan Reynolds, and chart-topping music!' },
            wildlife: { item: 'Canada Goose Honk', emoji: '🪿', score: 93, win: 'The fearless hiss of the cobra chicken scatters rivals!' },
            inventions: { item: 'Insulin Life-Saver', emoji: '💉', score: 92, win: 'Discovered life-saving insulin, basketball, and snowmobiles!' }
        }
    },
    KR: {
        code: 'KR',
        name: 'South Korea',
        flag: '🇰🇷',
        mascot: { name: 'Cyber Tiger', emoji: '🐯' },
        weapons: {
            food: { item: 'Crispy Korean Fried Chicken', emoji: '🍗', score: 93, win: 'Crispiest fried chicken and spicy kimchi blow minds!' },
            sports: { item: 'Bullseye Archery Arrow', emoji: '🏹', score: 89, win: 'Olympic archery gold sweep and esports mastery!' },
            weather: { item: 'Autumn Maple Breeze', emoji: '🍂', score: 79, win: 'Crisp golden autumn foliage around ancient palaces!' },
            history: { item: 'Armored Turtle Ship', emoji: '🐢', score: 91, win: 'Admiral Yi\'s ironclad Turtle Ships blast through enemies!' },
            power: { item: 'Microchip Quantum Core', emoji: '💾', score: 90, win: 'World-leading semiconductor chips power modern tech!' },
            popculture: { item: 'K-Pop Lightstick Blast', emoji: '🪄', score: 99, win: 'BTS, Blackpink, and Squid Game take over the world!' },
            wildlife: { item: 'Siberian Tiger Spirit', emoji: '🐾', score: 72, win: 'Sacred mountain tigers roar with ancient spirit!' },
            inventions: { item: 'Ultra 5G Laser', emoji: '📱', score: 93, win: 'Blazing fast 5G speeds leave all competition lagging!' }
        }
    },
    AR: {
        code: 'AR',
        name: 'Argentina',
        flag: '🇦🇷',
        mascot: { name: 'Gaucho Falcon', emoji: '🦅' },
        weapons: {
            food: { item: 'Juicy Asado Steak', emoji: '🥩', score: 92, win: 'Sizzling ribeye asado and sweet dulce de leche win!' },
            sports: { item: 'Messi Magic Free Kick', emoji: '⚽', score: 98, win: 'Messi curls it into the top corner! 3 World Cups!' },
            weather: { item: 'Patagonian Mountain Breeze', emoji: '🏔️', score: 85, win: 'Magnificent glaciers and sunny wine valleys impress!' },
            history: { item: 'San Martín Andes Charge', emoji: '🐎', score: 82, win: 'Heroic liberators crossed the snowy Andes mountains!' },
            power: { item: 'Golden Pampas Breadbasket', emoji: '🌾', score: 81, win: 'Vast agricultural breadbasket feeds millions!' },
            popculture: { item: 'Passionate Tango Swirl', emoji: '💃', score: 91, win: 'Sensual tango and deafening stadium chants captivate!' },
            wildlife: { item: 'Andean Condor Dive', emoji: '🦅', score: 88, win: 'Giant Andean condors soar majestically over peaks!' },
            inventions: { item: 'Biro Ballpoint Pen', emoji: '🖊️', score: 84, win: 'Invented the ballpoint pen and coronary bypass surgery!' }
        }
    },
    IN: {
        code: 'IN',
        name: 'India',
        flag: '🇮🇳',
        mascot: { name: 'Royal Tiger', emoji: '🐅' },
        weapons: {
            food: { item: 'Spicy Dum Biryani', emoji: '🍛', score: 97, win: 'Aromatic spices and buttery curry deliver huge flavor!' },
            sports: { item: 'Cricket Sixer Over Mid-Wicket', emoji: '🏏', score: 88, win: 'A billion fans roar as cricket ball flies out of stadium!' },
            weather: { item: 'Monsoon Rain Storm', emoji: '🌧️', score: 81, win: 'Life-giving monsoons and Himalayan mountain breezes!' },
            history: { item: 'Taj Mahal Wonder', emoji: '🕌', score: 99, win: '5,000 years of civilization and timeless wonders!' },
            power: { item: 'Moon Rover Rocket', emoji: '🚀', score: 92, win: 'Landed on the Moon\'s south pole and booming economy!' },
            popculture: { item: 'Bollywood Dance Explosion', emoji: '💃', score: 95, win: 'Naatu Naatu Oscar dance moves ignite the whole planet!' },
            wildlife: { item: 'Bengal Tiger Pounce', emoji: '🐅', score: 94, win: 'Home to 75% of the world\'s wild majestic tigers!' },
            inventions: { item: 'The Number Zero', emoji: '0️⃣', score: 95, win: 'Gifted the number ZERO and chess to all mankind!' }
        }
    }
};

// Popular 1-Click Rivalries
const QUICK_MATCHUPS = [
    { c1: 'US', c2: 'GB', title: '🇺🇸 USA vs 🇬🇧 UK' },
    { c1: 'IT', c2: 'JP', title: '🇮🇹 Italy vs 🇯🇵 Japan' },
    { c1: 'BR', c2: 'AR', title: '🇧🇷 Brazil vs 🇦🇷 Argentina' },
    { c1: 'FR', c2: 'DE', title: '🇫🇷 France vs 🇩🇪 Germany' },
    { c1: 'MX', c2: 'ES', title: '🇲🇽 Mexico vs 🇪🇸 Spain' },
    { c1: 'AU', c2: 'CA', title: '🇦🇺 Australia vs 🇨🇦 Canada' },
    { c1: 'KR', c2: 'JP', title: '🇰🇷 S. Korea vs 🇯🇵 Japan' },
    { c1: 'IN', c2: 'GB', title: '🇮🇳 India vs 🇬🇧 UK' }
];

// Helper to retrieve country data or generate procedural fallback
function getCountry(code) {
    if (CURATED_COUNTRIES[code]) {
        return CURATED_COUNTRIES[code];
    }
    // Fallback simple
    return {
        code: code,
        name: code,
        flag: '🏳️',
        mascot: { name: 'Champion', emoji: '🦁' },
        weapons: {
            food: { item: 'Traditional Feast', emoji: '🍲', score: 80, win: 'Delicious home cooking takes the round!' },
            sports: { item: 'Championship Trophy', emoji: '🏆', score: 80, win: 'Pure heart and hustle steals the victory!' },
            weather: { item: 'Sunny Skies', emoji: '☀️', score: 80, win: 'Fresh pleasant weather charms the judges!' },
            history: { item: 'Ancient Shield', emoji: '🛡️', score: 80, win: 'Centuries of heritage stand strong!' },
            power: { item: 'Sovereign Banner', emoji: '🚩', score: 80, win: 'National unity flexes proud spirit!' },
            popculture: { item: 'Celebration Drum', emoji: '🥁', score: 80, win: 'Vibrant local rhythms bring the crowd alive!' },
            wildlife: { item: 'Wild Beast', emoji: '🐾', score: 80, win: 'Untamed wildlife impresses the safari judges!' },
            inventions: { item: 'Clever Tool', emoji: '💡', score: 80, win: 'Smart national craftsmanship wins the round!' }
        }
    };
}
