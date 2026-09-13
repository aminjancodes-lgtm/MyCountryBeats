/**
 * MyCountryBeats - Vector CountryBall Cartoon Mascot Generator
 * Generates expressive, animated, custom SVG cartoon characters!
 */

const CATEGORIES = [
    { id: 'food', name: 'Food Fight', icon: '🍕', question: 'Whose flavor delivers the knockout bite?' },
    { id: 'sports', name: 'Sports Brawl', icon: '⚽', question: 'Who dominates the championship pitch?' },
    { id: 'weather', name: 'Weather Duel', icon: '☀️', question: 'Who brings the ultimate climate vibe?' },
    { id: 'history', name: 'History Clash', icon: '📜', question: 'Who flexes ancient dynasty lore?' },
    { id: 'power', name: 'Global Might', icon: '💪', question: 'Who drops heavier weight on the world?' },
    { id: 'popculture', name: 'Pop Stardom', icon: '🎵', question: 'Who commands global fandoms & trends?' },
    { id: 'wildlife', name: 'Wild Beasts', icon: '🦘', question: 'Whose apex predators rule the wild?' },
    { id: 'inventions', name: 'Genius Tech', icon: '💡', question: 'Who invented the future first?' }
];

const COUNTRIES = {
    US: {
        code: 'US',
        name: 'United States',
        flag: '🇺🇸',
        themeColor: '#3B82F6',
        accessory: 'aviators_and_hat',
        mascotTitle: 'Captain Eagle',
        weapons: {
            food: { item: 'Triple Bacon Burger', emoji: '🍔', score: 88, win: 'Super-sized bacon burger crushes with cheesy power!' },
            sports: { item: 'Buzzer-Beater Dunk', emoji: '🏀', score: 98, win: 'Olympic gold champions slam dunk the win!' },
            weather: { item: 'Miami Tropical Heat', emoji: '🌴', score: 75, win: 'Miami sunshine brings scorching vacation heat!' },
            history: { item: 'Independence Scroll', emoji: '📜', score: 70, win: 'Dumped tea into the harbor and wrote freedom history!' },
            power: { item: 'Supercarrier Megaphone', emoji: '🦅', score: 99, win: 'Global superpower flexes undisputed muscle!' },
            popculture: { item: 'Hollywood Blockbuster', emoji: '🎬', score: 98, win: 'Hollywood blockbusters and rock anthems steal the show!' },
            wildlife: { item: 'Grizzly Bear Roar', emoji: '🐻', score: 82, win: 'Mighty Alaskan grizzly takes down all challengers!' },
            inventions: { item: 'Silicon Valley iPhone', emoji: '📱', score: 97, win: 'Internet and smartphone geniuses power the planet!' }
        }
    },
    IT: {
        code: 'IT',
        name: 'Italy',
        flag: '🇮🇹',
        themeColor: '#10B981',
        accessory: 'chef_and_mustache',
        mascotTitle: 'Chef Nonna',
        weapons: {
            food: { item: 'Wood-Fired Pizza', emoji: '🍕', score: 99, win: 'Crispy wood-fired pizza delivers an undeniable knockout!' },
            sports: { item: 'Ferrari V12 Engine', emoji: '🏎️', score: 88, win: 'Four World Cups and screaming red Ferraris take the lead!' },
            weather: { item: 'Amalfi Coast Sun', emoji: '☀️', score: 92, win: 'Mediterranean coast paradise blows away the competition!' },
            history: { item: 'Roman Colosseum Shield', emoji: '🏛️', score: 99, win: 'Roman Empire and Renaissance masters school everyone!' },
            power: { item: 'Milan Fashion Runway', emoji: '🕶️', score: 80, win: 'World capital of style, luxury and swagger!' },
            popculture: { item: 'Vespa & Cinema Classic', emoji: '🛵', score: 86, win: 'Timeless Italian cool cruises to victory!' },
            wildlife: { item: 'Apennine Mountain Wolf', emoji: '🐺', score: 75, win: 'Majestic wolves howling from alpine peaks!' },
            inventions: { item: 'Radio & Battery Core', emoji: '🔋', score: 92, win: 'Volta and Marconi invented the modern spark!' }
        }
    },
    JP: {
        code: 'JP',
        name: 'Japan',
        flag: '🇯🇵',
        themeColor: '#EF4444',
        accessory: 'ninja_headband',
        mascotTitle: 'Ninja Shiba',
        weapons: {
            food: { item: 'Master Sushi Slicer', emoji: '🍣', score: 98, win: 'Steaming ramen and master sushi slice through the defense!' },
            sports: { item: 'Sumo Palm Thrust', emoji: '🥋', score: 87, win: 'Baseball superstars and Sumo giants push rival out of the ring!' },
            weather: { item: 'Sakura Petal Blizzard', emoji: '🌸', score: 84, win: 'Magical cherry blossoms create pure paradise!' },
            history: { item: 'Samurai Katana Blade', emoji: '⚔️', score: 94, win: 'Ancient Samurai honor and wooden castles stand undefeated!' },
            power: { item: 'Shinkansen Bullet Train', emoji: '🚄', score: 89, win: 'High-speed bullet train precision prevails!' },
            popculture: { item: 'Super Anime Kamehameha', emoji: '⚡', score: 99, win: 'Super Saiyan energy and Pokémon capture the entire planet!' },
            wildlife: { item: 'Hot-Spring Snow Monkey', emoji: '🐵', score: 78, win: 'Hot-spring bathing snow monkeys win all the hearts!' },
            inventions: { item: 'Pocket Robot AI', emoji: '🤖', score: 96, win: 'Futuristic robotics and bullet trains outsmart the rest!' }
        }
    },
    BR: {
        code: 'BR',
        name: 'Brazil',
        flag: '🇧🇷',
        themeColor: '#10B981',
        accessory: 'carnival_feathers',
        mascotTitle: 'Samba King',
        weapons: {
            food: { item: 'Picanha Churrasco Skewer', emoji: '🥩', score: 90, win: 'Endless roasted picanha steaks leave the opponent speechless!' },
            sports: { item: 'Joga Bonito World Cup', emoji: '⚽', score: 99, win: '5 World Cups! Pure Joga Bonito magic on the pitch!' },
            weather: { item: 'Copacabana Beach Sun', emoji: '🏖️', score: 95, win: 'Golden beaches and endless tropical summer breeze!' },
            history: { item: 'Imperial Gold Scepter', emoji: '👑', score: 78, win: 'Lush royal history and legendary freedom fighters!' },
            power: { item: 'Coffee Avalanche', emoji: '☕', score: 83, win: 'Fueled the whole world with coffee and energy!' },
            popculture: { item: 'Carnival Samba Drumline', emoji: '🥁', score: 95, win: 'The greatest party on Earth dances circles around the rival!' },
            wildlife: { item: 'Amazon Rainforest Jaguar', emoji: '🐆', score: 99, win: 'The Amazon rainforest unleashes the fiercest wildlife on Earth!' },
            inventions: { item: 'Aviation 14-Bis Airship', emoji: '🛩️', score: 81, win: 'Santos-Dumont takes flight into aviation history!' }
        }
    },
    GB: {
        code: 'GB',
        name: 'United Kingdom',
        flag: '🇬🇧',
        themeColor: '#1E3A8A',
        accessory: 'top_hat_monocle',
        mascotTitle: 'Sir Bulldog',
        weapons: {
            food: { item: 'Crispy Fish & Chips', emoji: '🐟', score: 78, win: 'Golden battered cod and steaming chips save tea time!' },
            sports: { item: 'Premier League Screamer', emoji: '⚽', score: 93, win: 'Invented modern sports and scored a 90th-minute stunner!' },
            weather: { item: 'London Fog Umbrella', emoji: '☔', score: 60, win: 'Keeps calm and sips Earl Grey tea through the drizzle!' },
            history: { item: 'Tower of London Cannon', emoji: '🏰', score: 98, win: 'Centuries of castles, kings, and Magna Carta glory!' },
            power: { item: 'Royal Navy Armada', emoji: '⚓', score: 90, win: 'Historic global influence flexes massive authority!' },
            popculture: { item: 'Beatles & James Bond', emoji: '🎸', score: 98, win: 'Rock legends and 007 charm take center stage!' },
            wildlife: { item: 'Highland Coo Headbutt', emoji: '🐮', score: 70, win: 'Fluffy Highland cow headbutts with royal style!' },
            inventions: { item: 'World Wide Web Fiber', emoji: '🌐', score: 97, win: 'Invented the World Wide Web and steam engine!' }
        }
    },
    MX: {
        code: 'MX',
        name: 'Mexico',
        flag: '🇲🇽',
        themeColor: '#059669',
        accessory: 'sombrero_mustache',
        mascotTitle: 'Luchador Nacho',
        weapons: {
            food: { item: 'Fiery Habanero Taco', emoji: '🌮', score: 98, win: 'Sizzling street tacos and spicy guacamole pack pure flavor fire!' },
            sports: { item: 'Top-Rope Lucha Splash', emoji: '🤼', score: 87, win: 'Masked luchador drops from the top turnbuckle!' },
            weather: { item: 'Cancun Turquoise Surf', emoji: '🌴', score: 93, win: 'Warm Caribbean waters and sunshine that never stops!' },
            history: { item: 'Aztec Sun Pyramid', emoji: '☀️', score: 96, win: 'Mayan pyramids and ancient astronomy stun the crowd!' },
            power: { item: 'Agave Manufacturing Engine', emoji: '🌵', score: 81, win: 'Export powerhouse driving Latin American energy!' },
            popculture: { item: 'Mariachi Horn Blast', emoji: '🎺', score: 93, win: 'Day of the Dead fiesta and lively Mariachi horns ignite!' },
            wildlife: { item: 'Regenerating Axolotl', emoji: '🦎', score: 92, win: 'The adorable regenerating axolotl outshines all!' },
            inventions: { item: 'Color TV Broadcast', emoji: '📺', score: 87, win: 'Invented color TV transmission and chewing gum!' }
        }
    },
    FR: {
        code: 'FR',
        name: 'France',
        flag: '🇫🇷',
        themeColor: '#2563EB',
        accessory: 'beret_scarf',
        mascotTitle: 'Pierre Le Coq',
        weapons: {
            food: { item: 'Baguette Broadsword', emoji: '🥖', score: 98, win: 'Warm croissants and gourmet cheese conquer taste buds!' },
            sports: { item: 'Tour de France Yellow Jersey', emoji: '🚴', score: 92, win: 'Two-time World Champions sprint to the finish line!' },
            weather: { item: 'Riviera Sun Glare', emoji: '🏖️', score: 87, win: 'Cannes sunshine and Alpine snow give the perfect mix!' },
            history: { item: 'Versailles Palace Crown', emoji: '👑', score: 97, win: 'Stormed the Bastille and built the majestic Louvre!' },
            power: { item: 'Supersonic Concorde', emoji: '✈️', score: 91, win: 'Diplomatic powerhouse and European aerospace titan!' },
            popculture: { item: 'Haute Couture Runway', emoji: '🕶️', score: 93, win: 'Paris fashion and electronic Daft Punk beats rule!' },
            wildlife: { item: 'Camargue White Stallion', emoji: '🐎', score: 74, win: 'Wild white horses gallop across coastal shores!' },
            inventions: { item: 'Cinema Projector', emoji: '🎬', score: 93, win: 'Gave humanity cinema, photography, and pasteurization!' }
        }
    },
    DE: {
        code: 'DE',
        name: 'Germany',
        flag: '🇩🇪',
        themeColor: '#F59E0B',
        accessory: 'alpine_hat',
        mascotTitle: 'Hans Der Kaiser',
        weapons: {
            food: { item: 'Giant Pretzel Boomerang', emoji: '🥨', score: 85, win: 'Bratwurst and colossal pretzels pack a mighty punch!' },
            sports: { item: 'German Machine Penalty', emoji: '⚽', score: 94, win: '4 World Cups! German football machine never misses!' },
            weather: { item: 'Fairytale Castle Frost', emoji: '❄️', score: 72, win: 'Fairytale castle winters and crisp autumn breezes!' },
            history: { item: 'Gutenberg Printing Press', emoji: '📜', score: 93, win: 'Land of legendary poets, thinkers, and philosophy!' },
            power: { item: 'Autobahn Speed Machine', emoji: '🏎️', score: 95, win: 'Industrial engine of Europe drives without speed limits!' },
            popculture: { item: 'Berlin Underground Techno', emoji: '🎧', score: 86, win: 'Underground electronic beats shake the stadium!' },
            wildlife: { item: 'Black Forest Wild Boar', emoji: '🐗', score: 73, win: 'Mighty wild boars charging through ancient forests!' },
            inventions: { item: 'Internal Combustion Car', emoji: '🚗', score: 98, win: 'Invented the automobile, aspirin, and printing press!' }
        }
    },
    CA: {
        code: 'CA',
        name: 'Canada',
        flag: '🇨🇦',
        themeColor: '#DC2626',
        accessory: 'winter_beanie',
        mascotTitle: 'Justin Beaver',
        weapons: {
            food: { item: 'Molten Poutine & Maple', emoji: '🍟', score: 84, win: 'Warm gravy poutine and sweet maple syrup satisfy all!' },
            sports: { item: '105-MPH Slap Shot Puck', emoji: '🏒', score: 91, win: 'Ice hockey gods rocket a 105mph slap shot into the net!' },
            weather: { item: 'Aurora Borealis Chill', emoji: '🌌', score: 73, win: 'Dancing northern lights light up snowy mountains!' },
            history: { item: 'Mountie Stride Banner', emoji: '🍁', score: 81, win: 'Peaceful northern confederation and frontier lore!' },
            power: { item: 'Freshwater Hydro Surge', emoji: '💧', score: 88, win: 'Huge natural resources and high quality of life!' },
            popculture: { item: 'Wholesome Star Power', emoji: '🎬', score: 92, win: 'Keanu Reeves, Ryan Reynolds, and chart-topping hits!' },
            wildlife: { item: 'Cobra Chicken Goose Hiss', emoji: '🪿', score: 93, win: 'The fearless hiss of the Canada goose scatters rivals!' },
            inventions: { item: 'Life-Saving Insulin', emoji: '💉', score: 92, win: 'Discovered life-saving insulin, basketball, and snowmobiles!' }
        }
    },
    AU: {
        code: 'AU',
        name: 'Australia',
        flag: '🇦🇺',
        themeColor: '#059669',
        accessory: 'outback_hat',
        mascotTitle: 'Kangaroo Jack',
        weapons: {
            food: { item: 'Piping Hot Meat Pie', emoji: '🥧', score: 82, win: 'Hot Aussie meat pies and fresh barbecue hit the spot!' },
            sports: { item: 'Boomerang Cricket Spin', emoji: '🪃', score: 94, win: '6 Cricket World Cups and Olympic swimming legends!' },
            weather: { item: 'Gold Coast Surf Waves', emoji: '🏄', score: 94, win: 'Over 10,000 sun-drenched beaches and golden surf!' },
            history: { item: 'Aboriginal Earth Echo', emoji: '🪵', score: 85, win: '65,000 years of the oldest continuous culture on Earth!' },
            power: { item: 'Outback Giant Excavator', emoji: '🚜', score: 86, win: 'Colossal mineral wealth powers the southern oceans!' },
            popculture: { item: 'AC/DC Thunder Guitar', emoji: '🎸', score: 90, win: 'Thunderstruck rock riffs and Bluey global fame!' },
            wildlife: { item: 'Boxing Kangaroo Kick', emoji: '🦘', score: 98, win: 'Kangaroos, crocs, and cute quokkas rule the wilderness!' },
            inventions: { item: 'High-Speed Wi-Fi Pulse', emoji: '📡', score: 94, win: 'Invented high-speed Wi-Fi and black box flight recorders!' }
        }
    },
    KR: {
        code: 'KR',
        name: 'South Korea',
        flag: '🇰🇷',
        themeColor: '#3B82F6',
        accessory: 'neon_visor',
        mascotTitle: 'K-Pop Cyber Tiger',
        weapons: {
            food: { item: 'Crispy Korean Fried Chicken', emoji: '🍗', score: 93, win: 'Crispiest fried chicken and spicy kimchi blow minds!' },
            sports: { item: 'Bullseye Olympic Arrow', emoji: '🏹', score: 89, win: 'Olympic archery gold sweep and esports mastery!' },
            weather: { item: 'Autumn Palace Breeze', emoji: '🍂', score: 79, win: 'Crisp golden autumn foliage around historic palaces!' },
            history: { item: 'Iron Turtle Ship Broadside', emoji: '🐢', score: 91, win: 'Admiral Yi\'s armored Turtle Ships blast through enemies!' },
            power: { item: 'Semiconductor Microchip Core', emoji: '💾', score: 90, win: 'World-leading semiconductor chips power modern tech!' },
            popculture: { item: 'K-Pop Lightstick Wave', emoji: '🪄', score: 99, win: 'BTS, Blackpink, and Squid Game take over the world!' },
            wildlife: { item: 'Siberian Tiger Spirit', emoji: '🐾', score: 72, win: 'Sacred mountain tigers roar with ancient spirit!' },
            inventions: { item: 'Blazing 5G Laser', emoji: '📱', score: 93, win: 'Blazing fast 5G speeds leave all competition lagging!' }
        }
    },
    ES: {
        code: 'ES',
        name: 'Spain',
        flag: '🇪🇸',
        themeColor: '#EF4444',
        accessory: 'matador_hat',
        mascotTitle: 'Toro Flamenco',
        weapons: {
            food: { item: 'Sizzling Seafood Paella', emoji: '🥘', score: 96, win: 'Sizzling seafood paella and tapas steal the show!' },
            sports: { item: 'Tiki-Taka One-Touch Pass', emoji: '⚽', score: 94, win: 'Tiki-Taka passes dizzy circles around the defense!' },
            weather: { item: 'Costa del Sol Sunshine', emoji: '☀️', score: 96, win: '300 days of sunshine! Mediterranean paradise!' },
            history: { item: 'Imperial Spanish Galleon', emoji: '⛵', score: 94, win: 'Epic naval explorers and centuries of golden lore!' },
            power: { item: 'Fiesta Horn Blast', emoji: '🎺', score: 82, win: 'Global language and cultural celebration powers up!' },
            popculture: { item: 'La Tomatina Splash', emoji: '🍅', score: 92, win: 'Flamenco passion and wild tomato battles win hearts!' },
            wildlife: { item: 'Iberian Lynx Pounce', emoji: '🐾', score: 80, win: 'Sleek Iberian Lynx strikes with pinpoint stealth!' },
            inventions: { item: 'Spacesuit Prototype', emoji: '🚀', score: 86, win: 'Invented early astronaut spacesuits and submarines!' }
        }
    },
    CN: {
        code: 'CN',
        name: 'China',
        flag: '🇨🇳',
        themeColor: '#DC2626',
        accessory: 'dragon_crown',
        mascotTitle: 'Dragon Emperor',
        weapons: {
            food: { item: 'Spicy Kung Pao Wok', emoji: '🥢', score: 96, win: 'Sizzling Peking duck and dumpling mastery stun the judges!' },
            sports: { item: 'Olympic Gold Rush', emoji: '🏅', score: 95, win: 'Most Olympic medals in gymnastics and table tennis!' },
            weather: { item: 'Great Wall Snowstorm', emoji: '🏔️', score: 78, win: 'Spectacular Himalayan peaks and diverse seasons!' },
            history: { item: 'Imperial Dragon Scroll', emoji: '🐉', score: 99, win: '5,000 years of dynasties and the Great Wall tower over all!' },
            power: { item: 'Mega Factory Surge', emoji: '🏭', score: 97, win: 'World\'s second largest economy powers the globe!' },
            popculture: { item: 'Viral TikTok Wave', emoji: '📱', score: 91, win: 'TikTok, K-drama rival and gaming culture sweep the planet!' },
            wildlife: { item: 'Giant Panda Cuddle', emoji: '🐼', score: 98, win: 'Adorable Giant Pandas charm literally everyone on Earth!' },
            inventions: { item: 'Ancient Gunpowder Blast', emoji: '🧨', score: 97, win: 'Invented paper, compass, gunpowder, and printing press!' }
        }
    },
    IN: {
        code: 'IN',
        name: 'India',
        flag: '🇮🇳',
        themeColor: '#F97316',
        accessory: 'royal_turban',
        mascotTitle: 'Tiger Raja',
        weapons: {
            food: { item: 'Fiery Butter Chicken', emoji: '🍛', score: 97, win: 'Rich spiced curries and crispy samosas deliver knockout flavor!' },
            sports: { item: 'Cricket World Cup Sweep', emoji: '🏏', score: 95, win: 'Cricket nation of 1.4 billion fans smashes the opposition!' },
            weather: { item: 'Monsoon Dance Rain', emoji: '🌧️', score: 82, win: 'Dramatic monsoon rains and golden Rajasthan deserts!' },
            history: { item: 'Taj Mahal Marble Glow', emoji: '🕌', score: 97, win: 'Ancient Indus Valley civilization dazzles all history buffs!' },
            power: { item: 'Space Rocket Chandrayaan', emoji: '🚀', score: 90, win: 'Fastest-growing major economy and lunar explorer!' },
            popculture: { item: 'Bollywood Dance Bomb', emoji: '💃', score: 96, win: 'Bollywood produces more films than anywhere on Earth!' },
            wildlife: { item: 'Royal Bengal Tiger', emoji: '🐯', score: 97, win: 'Majestic Bengal Tiger and elusive Snow Leopard reign supreme!' },
            inventions: { item: 'Zero & Decimal System', emoji: '🔢', score: 99, win: 'Invented zero, decimal system, and chess — math rules!' }
        }
    },
    RU: {
        code: 'RU',
        name: 'Russia',
        flag: '🇷🇺',
        themeColor: '#1E40AF',
        accessory: 'cossack_hat',
        mascotTitle: 'Ivan The Bear',
        weapons: {
            food: { item: 'Steaming Borscht Bowl', emoji: '🫕', score: 83, win: 'Rich borscht and beef stroganoff warm the soul!' },
            sports: { item: 'Olympic Weightlifting Crown', emoji: '🏋️', score: 91, win: 'Dominated Olympic weightlifting, gymnastics, and chess!' },
            weather: { item: 'Siberian Blizzard Freeze', emoji: '❄️', score: 88, win: 'Surviving -50°C Siberian winters is the ultimate flex!' },
            history: { item: 'Cold War Space Rocket', emoji: '🚀', score: 97, win: 'First in space! Sputnik and Gagarin shock the world!' },
            power: { item: 'Nuclear Arsenal Flex', emoji: '⚡', score: 95, win: 'World\'s largest nuclear arsenal commands global respect!' },
            popculture: { item: 'Tetris Brain Bomb', emoji: '🎮', score: 92, win: 'Tetris, Tchaikovsky, and classical ballet dazzle everyone!' },
            wildlife: { item: 'Polar Bear Charge', emoji: '🐻‍❄️', score: 96, win: 'Massive polar bears and Siberian tigers freeze the competition!' },
            inventions: { item: 'Periodic Table Atom', emoji: '⚗️', score: 95, win: 'Invented the periodic table, radio, and helicopter!' }
        }
    },
    ZA: {
        code: 'ZA',
        name: 'South Africa',
        flag: '🇿🇦',
        themeColor: '#16A34A',
        accessory: 'safari_hat',
        mascotTitle: 'Ubuntu Lion',
        weapons: {
            food: { item: 'Braai BBQ Platter', emoji: '🥩', score: 89, win: 'Epic braai barbecue and biltong snacks conquer taste buds!' },
            sports: { item: 'Rugby World Cup Tackle', emoji: '🏉', score: 96, win: '3-time Rugby World Champions smash through any defense!' },
            weather: { item: 'Cape Winelands Sunshine', emoji: '🌞', score: 88, win: 'Stunning Cape winelands and year-round sunshine win hearts!' },
            history: { item: 'Mandela Freedom Fist', emoji: '✊', score: 98, win: 'Mandela\'s inspiring resilience becomes a global legend!' },
            power: { item: 'Mineral Gold Vault', emoji: '💎', score: 87, win: 'World\'s largest gold and diamond reserves shine bright!' },
            popculture: { item: 'Amapiano Beat Drop', emoji: '🎵', score: 91, win: 'Amapiano and Afrobeats shake the entire world stage!' },
            wildlife: { item: 'Big Five Safari Roar', emoji: '🦁', score: 99, win: 'Lions, elephants, rhinos, leopards, and buffaloes dominate!' },
            inventions: { item: 'Heart Transplant First', emoji: '❤️', score: 94, win: 'First successful human heart transplant changes medicine!' }
        }
    },
    AR: {
        code: 'AR',
        name: 'Argentina',
        flag: '🇦🇷',
        themeColor: '#60A5FA',
        accessory: 'gaucho_hat',
        mascotTitle: 'Messi Gaucho',
        weapons: {
            food: { item: 'Juicy Asado Steak', emoji: '🥩', score: 94, win: 'World\'s finest asado beef grills to legendary perfection!' },
            sports: { item: 'Messi Magic Dribble', emoji: '⚽', score: 99, win: '3 World Cups — Messi\'s genius outshines every challenger!' },
            weather: { item: 'Patagonia Wild Wind', emoji: '🏔️', score: 80, win: 'Patagonian glaciers and Andes peaks inspire awe!' },
            history: { item: 'Tango Dance Duel', emoji: '💃', score: 92, win: 'The birthplace of tango seduces the whole crowd!' },
            power: { item: 'Pampas Cattle Ranch', emoji: '🐄', score: 85, win: 'Vast cattle ranches fuel a proud gaucho powerhouse!' },
            popculture: { item: 'La Bombonera Roar', emoji: '🎺', score: 93, win: 'World\'s loudest stadium fanbase shakes the arena!' },
            wildlife: { item: 'Puma Mountain Sprint', emoji: '🐆', score: 87, win: 'Swift pumas leap across Andean peaks with ease!' },
            inventions: { item: 'Fingerprint ID System', emoji: '👆', score: 90, win: 'Invented the fingerprint ID system used worldwide today!' }
        }
    },
    SA: {
        code: 'SA',
        name: 'Saudi Arabia',
        flag: '🇸🇦',
        themeColor: '#16A34A',
        accessory: 'gold_keffiyeh',
        mascotTitle: 'Desert Sheikh',
        weapons: {
            food: { item: 'Fragrant Kabsa Feast', emoji: '🍖', score: 91, win: 'Aromatic kabsa rice and slow-roasted lamb win the feast!' },
            sports: { item: 'Falconry Championship', emoji: '🦅', score: 86, win: 'Supreme falconry skills and camel racing dominate!' },
            weather: { item: 'Scorching Desert Sun', emoji: '🏜️', score: 85, win: 'Extreme 50°C desert heat is a power move no one matches!' },
            history: { item: 'Holy Mecca Pilgrimage', emoji: '🕌', score: 98, win: 'Birthplace of Islam with billions of faithful worldwide!' },
            power: { item: 'Petro Dollar Geyser', emoji: '🛢️', score: 98, win: 'World\'s largest oil reserves flood the market with power!' },
            popculture: { item: 'Futuristic NEOM City', emoji: '🏙️', score: 89, win: 'Building the most futuristic mega-city on the planet!' },
            wildlife: { item: 'Arabian Oryx Charge', emoji: '🦌', score: 80, win: 'Majestic Arabian Oryx symbolizes desert royalty!' },
            inventions: { item: 'Algebra Mathematics', emoji: '📐', score: 96, win: 'Al-Khwarizmi invented algebra — math class remembers!' }
        }
    },
    TR: {
        code: 'TR',
        name: 'Turkey',
        flag: '🇹🇷',
        themeColor: '#DC2626',
        accessory: 'ottoman_fez',
        mascotTitle: 'Sultan Kebab',
        weapons: {
            food: { item: 'Döner Kebab Tornado', emoji: '🌯', score: 97, win: 'Legendary döner kebab and baklava conquer the world\'s stomachs!' },
            sports: { item: 'Ottoman Wrestling Pin', emoji: '🤼', score: 87, win: 'Oil wrestling champions dominate the ancient ring!' },
            weather: { item: 'Cappadocia Balloon Sky', emoji: '🎈', score: 91, win: 'Stunning hot air balloon sunrise over fairy chimneys!' },
            history: { item: 'Ottoman Topkapi Throne', emoji: '🏛️', score: 97, win: '600-year Ottoman Empire legacy commands massive respect!' },
            power: { item: 'Bosphorus Bridge Control', emoji: '🌉', score: 88, win: 'Strategic crossroads between Europe and Asia flexes influence!' },
            popculture: { item: 'Turkish Drama Wave', emoji: '🎭', score: 90, win: 'Turkish dramas watched by 600 million people globally!' },
            wildlife: { item: 'Kangal Guard Dog', emoji: '🐕', score: 82, win: 'World\'s strongest guard dog breed guards with pride!' },
            inventions: { item: 'Coffee House Culture', emoji: '☕', score: 91, win: 'Invented the world\'s first coffeehouse and tulip cultivation!' }
        }
    },
    NG: {
        code: 'NG',
        name: 'Nigeria',
        flag: '🇳🇬',
        themeColor: '#16A34A',
        accessory: 'agbada_crown',
        mascotTitle: 'Naija Giant',
        weapons: {
            food: { item: 'Spicy Jollof Rice', emoji: '🍚', score: 97, win: 'The legendary Jollof Rice debate ends here — Nigeria wins!' },
            sports: { item: 'Super Eagles Goal Blitz', emoji: '⚽', score: 88, win: 'Super Eagles soar to Olympic gold and World Cup glory!' },
            weather: { item: 'Lagos Tropical Heat', emoji: '🌴', score: 83, win: 'Year-round tropical energy and vibrant warm sunshine!' },
            history: { item: 'Benin Bronze Kingdom', emoji: '🏺', score: 94, win: 'Ancient Benin Kingdom bronzes are the world\'s finest art!' },
            power: { item: 'Africa\'s Giant Engine', emoji: '🏭', score: 92, win: 'Largest economy in Africa drives the whole continent!' },
            popculture: { item: 'Afrobeats Global Boom', emoji: '🎵', score: 99, win: 'Afrobeats takes over global charts — Burna Boy leads the charge!' },
            wildlife: { item: 'Nile Crocodile Snap', emoji: '🐊', score: 88, win: 'Mighty Nile crocs guard the rivers with fearsome authority!' },
            inventions: { item: 'Nollywood Film Empire', emoji: '🎬', score: 95, win: 'Nollywood is the world\'s second-largest film industry!' }
        }
    },
    EG: {
        code: 'EG',
        name: 'Egypt',
        flag: '🇪🇬',
        themeColor: '#DC2626',
        accessory: 'pharaoh_crown',
        mascotTitle: 'Pharaoh Sphinx',
        weapons: {
            food: { item: 'Koshary Street Feast', emoji: '🫕', score: 88, win: 'Humble koshary and warm ful medames win the people\'s hearts!' },
            sports: { item: 'Squash World Slam', emoji: '🏸', score: 95, win: 'Egyptian squash players are world\'s best — undefeated dynasty!' },
            weather: { item: 'Desert Pyramid Heat', emoji: '🏜️', score: 80, win: 'Mystical desert sun that built the greatest monuments!' },
            history: { item: 'Great Pyramid Power', emoji: '🔺', score: 99, win: '5,000-year civilization and the Great Pyramid never lose!' },
            power: { item: 'Suez Canal Control', emoji: '⚓', score: 96, win: 'Controls the world\'s most strategic shipping canal!' },
            popculture: { item: 'Umm Kulthum Legend', emoji: '🎶', score: 93, win: 'Umm Kulthum is the most-listened Arab vocalist in history!' },
            wildlife: { item: 'Nile River Hippo', emoji: '🦛', score: 87, win: 'Colossal Nile hippos surge through the competition!' },
            inventions: { item: 'Papyrus Writing Art', emoji: '📜', score: 98, win: 'Invented writing, calendar, and surgical instruments 5000 years ago!' }
        }
    },
    NL: {
        code: 'NL',
        name: 'Netherlands',
        flag: '🇳🇱',
        themeColor: '#F97316',
        accessory: 'windmill_hat',
        mascotTitle: 'Orange Tulip',
        weapons: {
            food: { item: 'Stroopwafel Slam', emoji: '🧇', score: 87, win: 'Warm stroopwafels and aged Gouda cheese conquer all snackers!' },
            sports: { item: 'Total Football Tactic', emoji: '⚽', score: 93, win: 'Total Football revolutionized the beautiful game forever!' },
            weather: { item: 'Tulip Field Bloom', emoji: '🌷', score: 84, win: 'Million-tulip spring fields create the world\'s most beautiful view!' },
            history: { item: 'Dutch East Indies Fleet', emoji: '⛵', score: 94, win: 'Dutch Golden Age trading empire dominated global seas!' },
            power: { item: 'Port of Rotterdam Hub', emoji: '🚢', score: 92, win: 'Europe\'s busiest port controls the continent\'s trade arteries!' },
            popculture: { item: 'Van Gogh Sunflower', emoji: '🌻', score: 93, win: 'Rembrandt and Van Gogh make art history drop the mic!' },
            wildlife: { item: 'North Sea Seal Splash', emoji: '🦭', score: 76, win: 'Adorable harbor seals basking on North Sea shores!' },
            inventions: { item: 'Telescope & Microscope', emoji: '🔭', score: 97, win: 'Invented both telescope and microscope — seeing everything!' }
        }
    },
    SE: {
        code: 'SE',
        name: 'Sweden',
        flag: '🇸🇪',
        themeColor: '#1D4ED8',
        accessory: 'viking_helmet',
        mascotTitle: 'Viking ABBA',
        weapons: {
            food: { item: 'Swedish Meatball Fury', emoji: '🥩', score: 86, win: 'IKEA meatballs and lingonberry sauce conquer the globe!' },
            sports: { item: 'Zlatan Bicycle Kick', emoji: '⚽', score: 91, win: 'Zlatan Ibrahimović\'s scissor kick silences every critic!' },
            weather: { item: 'Midnight Sun Spectacle', emoji: '🌅', score: 85, win: 'Endless summer midnight sun lights up the competition!' },
            history: { item: 'Viking Longship Raid', emoji: '⚔️', score: 94, win: 'Viking warriors conquered from North America to Byzantium!' },
            power: { item: 'Nobel Prize Factory', emoji: '🏆', score: 97, win: 'Homeland of Nobel Prize — the world\'s highest honor!' },
            popculture: { item: 'ABBA Mega Hit Wave', emoji: '🎵', score: 97, win: 'ABBA, IKEA, and Spotify changed modern life forever!' },
            wildlife: { item: 'Moose King Stomp', emoji: '🦌', score: 89, win: 'Massive Swedish moose stomp through boreal forests!' },
            inventions: { item: 'Bluetooth & Pacemaker', emoji: '📡', score: 96, win: 'Invented Bluetooth, pacemaker, and adjustable wrench!' }
        }
    },
    CH: {
        code: 'CH',
        name: 'Switzerland',
        flag: '🇨🇭',
        themeColor: '#DC2626',
        accessory: 'alpine_horn',
        mascotTitle: 'Alpine Gnome',
        weapons: {
            food: { item: 'Fondue Gold Pot', emoji: '🫕', score: 94, win: 'Melty Swiss cheese fondue and milk chocolate melt all opposition!' },
            sports: { item: 'Roger Federer Ace', emoji: '🎾', score: 96, win: 'Roger Federer serves up 20 Grand Slams without breaking a sweat!' },
            weather: { item: 'Alpine Snow Paradise', emoji: '⛷️', score: 92, win: 'Pristine Alpine ski slopes create a paradise for champions!' },
            history: { item: 'Eternal Neutrality Shield', emoji: '🛡️', score: 91, win: '700 years of peace and neutrality while everyone else fought!' },
            power: { item: 'Swiss Bank Vault', emoji: '💰', score: 95, win: 'World\'s wealthiest nation per capita owns your money!' },
            popculture: { item: 'Cuckoo Clock Precision', emoji: '⏰', score: 88, win: 'Swiss watches and precision engineering set the world\'s time!' },
            wildlife: { item: 'Ibex Mountain Climber', emoji: '🐐', score: 86, win: 'Sure-footed ibex scales vertical cliffs effortlessly!' },
            inventions: { item: 'World Wide Web CERN', emoji: '🌐', score: 97, win: 'CERN and the Large Hadron Collider crack the universe\'s code!' }
        }
    },
    PT: {
        code: 'PT',
        name: 'Portugal',
        flag: '🇵🇹',
        themeColor: '#16A34A',
        accessory: 'explorers_cap',
        mascotTitle: 'Ronaldo Fado',
        weapons: {
            food: { item: 'Pastel de Nata Bomb', emoji: '🥐', score: 95, win: 'Crispy custard tarts and bacalhau cod leave rivals speechless!' },
            sports: { item: 'Cristiano Header Blast', emoji: '⚽', score: 97, win: 'Cristiano Ronaldo\'s header crushes any goalkeeper on Earth!' },
            weather: { item: 'Algarve Golden Coast', emoji: '🏖️', score: 93, win: 'Golden cliff beaches and year-round Atlantic sunshine!' },
            history: { item: 'Age of Discovery Fleet', emoji: '⛵', score: 98, win: 'Circumnavigated the globe first and mapped the entire world!' },
            power: { item: 'Green Energy Wind', emoji: '🌬️', score: 89, win: 'World leader in renewable energy — powered 100% by clean energy!' },
            popculture: { item: 'Soulful Fado Wail', emoji: '🎶', score: 88, win: 'UNESCO Fado music stirs every soul to its deepest core!' },
            wildlife: { item: 'Iberian Wolf Howl', emoji: '🐺', score: 80, win: 'Legendary Iberian wolves protect the wild forests!' },
            inventions: { item: 'Global Navigation Chart', emoji: '🗺️', score: 95, win: 'Portuguese cartographers mapped every ocean on Earth!' }
        }
    },
    PL: {
        code: 'PL',
        name: 'Poland',
        flag: '🇵🇱',
        themeColor: '#DC2626',
        accessory: 'hussar_wings',
        mascotTitle: 'Hussar Eagle',
        weapons: {
            food: { item: 'Pierogi Dumpling Drop', emoji: '🥟', score: 91, win: 'Fluffy pierogi dumplings and hearty żurek soup steal the show!' },
            sports: { item: 'Lewandowski Hat Trick', emoji: '⚽', score: 93, win: 'Robert Lewandowski smashes in a glorious hat-trick!' },
            weather: { item: 'Tatra Mountain Snow', emoji: '🏔️', score: 79, win: 'Stunning Tatra mountain ranges glow with winter magic!' },
            history: { item: 'Winged Hussars Charge', emoji: '🐎', score: 95, win: 'Legendary Winged Hussars never lost a single major battle!' },
            power: { item: 'EU Solidarity Surge', emoji: '💪', score: 83, win: 'Fastest growing economy in Europe powers through!' },
            popculture: { item: 'Chopin Piano Concerto', emoji: '🎹', score: 94, win: 'Chopin\'s nocturnes silence the entire battlefield in beauty!' },
            wildlife: { item: 'Bison Forest King', emoji: '🦬', score: 92, win: 'Europe\'s heaviest land animal — the majestic European bison!' },
            inventions: { item: 'Marie Curie Radiation', emoji: '⚛️', score: 98, win: 'Marie Curie won TWO Nobel Prizes and revolutionized physics!' }
        }
    },
    NO: {
        code: 'NO',
        name: 'Norway',
        flag: '🇳🇴',
        themeColor: '#DC2626',
        accessory: 'viking_axe',
        mascotTitle: 'Fjord Viking',
        weapons: {
            food: { item: 'Fresh Atlantic Salmon', emoji: '🐟', score: 92, win: 'World\'s finest fresh salmon and brown cheese win taste buds!' },
            sports: { item: 'Winter Olympics Sweep', emoji: '⛷️', score: 98, win: 'Most Winter Olympic medals ever — skiing gods from birth!' },
            weather: { item: 'Northern Lights Aurora', emoji: '🌌', score: 97, win: 'Breathtaking aurora borealis lights up the sky like nothing else!' },
            history: { item: 'Viking World Explorer', emoji: '🧭', score: 96, win: 'Leif Erikson reached America 500 years before Columbus!' },
            power: { item: 'Sovereign Wealth Titan', emoji: '💰', score: 95, win: 'World\'s largest sovereign wealth fund — swimming in oil money!' },
            popculture: { item: 'Edvard Munch Scream', emoji: '🖼️', score: 88, win: 'The Scream painting haunts every art gallery in the world!' },
            wildlife: { item: 'Orca Pod Attack', emoji: '🐋', score: 95, win: 'Powerful orca pods hunt with terrifying intelligent teamwork!' },
            inventions: { item: 'Cheese Slicer & Aerosol', emoji: '🧀', score: 91, win: 'Invented cheese slicer, aerosol spray can, and speed skiing!' }
        }
    },
    GR: {
        code: 'GR',
        name: 'Greece',
        flag: '🇬🇷',
        themeColor: '#1D4ED8',
        accessory: 'laurel_wreath',
        mascotTitle: 'Zeus Olympian',
        weapons: {
            food: { item: 'Gyros Spinning Strike', emoji: '🌯', score: 93, win: 'Souvlaki skewers and creamy tzatziki dip conquer all palates!' },
            sports: { item: 'Original Olympics Torch', emoji: '🔥', score: 98, win: 'Birthplace of the Olympic Games — the mother of all sports!' },
            weather: { item: 'Aegean Island Bliss', emoji: '⛵', score: 95, win: 'Santorini sunsets and Mykonos breezes are pure paradise!' },
            history: { item: 'Athens Democracy Scroll', emoji: '📜', score: 99, win: 'Birthplace of democracy, philosophy, and Western civilization!' },
            power: { item: 'Mediterranean Gateway', emoji: '🌊', score: 82, win: 'Ancient maritime power commands legendary sea routes!' },
            popculture: { item: 'Smash-the-Plate Dance', emoji: '💃', score: 90, win: 'Plate-smashing celebrations and zorba dancing thrill crowds!' },
            wildlife: { item: 'Loggerhead Turtle Nest', emoji: '🐢', score: 83, win: 'Ancient loggerhead turtles nest on pristine Greek beaches!' },
            inventions: { item: 'Archimedes Eureka Bolt', emoji: '⚡', score: 99, win: 'Archimedes, Pythagoras, and Hippocrates built modern science!' }
        }
    },
    TH: {
        code: 'TH',
        name: 'Thailand',
        flag: '🇹🇭',
        themeColor: '#1D4ED8',
        accessory: 'muay_thai_wrap',
        mascotTitle: 'Muay Thai Tiger',
        weapons: {
            food: { item: 'Tom Yum Spice Bomb', emoji: '🍜', score: 96, win: 'Explosive tom yum soup and pad thai noodles knock out all rivals!' },
            sports: { item: 'Muay Thai Elbow Smash', emoji: '🥊', score: 97, win: 'Eight-limbed Muay Thai art delivers devastating strikes!' },
            weather: { item: 'Tropical Island Paradise', emoji: '🏝️', score: 93, win: 'Crystal Phi Phi Islands and Koh Samui beaches stun visitors!' },
            history: { item: 'Golden Palace Kingdom', emoji: '🏯', score: 92, win: 'Never colonized! Thailand stands proud through all of history!' },
            power: { item: 'Tourism Empire Engine', emoji: '✈️', score: 89, win: 'One of the world\'s top tourism destinations draws millions!' },
            popculture: { item: 'Floating Lantern Festival', emoji: '🏮', score: 95, win: 'Yi Peng lantern festival is the most magical sight on Earth!' },
            wildlife: { item: 'Elephant Royal March', emoji: '🐘', score: 96, win: 'Revered elephants are the sacred symbol of Thai royalty!' },
            inventions: { item: 'Muay Thai Fighting Art', emoji: '🥋', score: 93, win: 'Muay Thai fighting system is used by armies worldwide!' }
        }
    },
    ID: {
        code: 'ID',
        name: 'Indonesia',
        flag: '🇮🇩',
        themeColor: '#DC2626',
        accessory: 'batik_headband',
        mascotTitle: 'Komodo King',
        weapons: {
            food: { item: 'Rendang Slow-Burn', emoji: '🍛', score: 97, win: 'World\'s best dish — beef rendang packs an explosive slow burn!' },
            sports: { item: 'Badminton Smash King', emoji: '🏸', score: 97, win: 'Indonesia has dominated Olympic badminton since day one!' },
            weather: { item: 'Bali Tropical Breeze', emoji: '🌴', score: 91, win: 'Bali\'s year-round tropical paradise enchants the whole planet!' },
            history: { item: 'Borobudur Temple Rise', emoji: '🏛️', score: 94, win: 'Borobudur is the world\'s largest Buddhist temple — magnificent!' },
            power: { item: 'G20 Rising Force', emoji: '🌏', score: 88, win: '270 million people make Indonesia a giant force to reckon!' },
            popculture: { item: 'Dangdut Music Wave', emoji: '🎶', score: 85, win: 'Vibrant dangdut music and kraton culture thrill Southeast Asia!' },
            wildlife: { item: 'Komodo Dragon Bite', emoji: '🦎', score: 98, win: 'The terrifying Komodo dragon delivers a bacteria-laced doom bite!' },
            inventions: { item: 'Batik Art Tradition', emoji: '🎨', score: 89, win: 'UNESCO-listed batik art tradition mesmerizes the world!' }
        }
    },
    MY: {
        code: 'MY',
        name: 'Malaysia',
        flag: '🇲🇾',
        themeColor: '#DC2626',
        accessory: 'petronas_crown',
        mascotTitle: 'Twin Tower Tiger',
        weapons: {
            food: { item: 'Nasi Lemak Power', emoji: '🍚', score: 95, win: 'Fragrant coconut rice with sambal is a breakfast of champions!' },
            sports: { item: 'Badminton Legend Lee Smash', emoji: '🏸', score: 91, win: 'Lee Chong Wei returns impossible smashes with lightning speed!' },
            weather: { item: 'Rainforest Monsoon', emoji: '🌧️', score: 80, win: 'Ancient rainforest and warm tropical climate enchant visitors!' },
            history: { item: 'Malacca Spice Kingdom', emoji: '⛵', score: 91, win: 'Malacca sultanate was the most important trade port of Asia!' },
            power: { item: 'Petronas Towers Flex', emoji: '🏙️', score: 88, win: 'Former world\'s tallest twin towers pierce the clouds with pride!' },
            popculture: { item: 'Wau Kite Elegance', emoji: '🪁', score: 84, win: 'Majestic moon kites soar elegantly in Malaysian festivals!' },
            wildlife: { item: 'Orangutan Jungle Grip', emoji: '🦧', score: 95, win: 'Intelligent orangutans swing through ancient Borneo rainforest!' },
            inventions: { item: 'Sepak Takraw Aerial Art', emoji: '⚽', score: 88, win: 'Invented sepak takraw — the most acrobatic sport on Earth!' }
        }
    },
    PH: {
        code: 'PH',
        name: 'Philippines',
        flag: '🇵🇭',
        themeColor: '#1D4ED8',
        accessory: 'fiesta_flowers',
        mascotTitle: 'Pacquiao Eagle',
        weapons: {
            food: { item: 'Lechon Roast Pig', emoji: '🐷', score: 93, win: 'Crispy lechon whole roasted pig rules every fiesta table!' },
            sports: { item: 'Pacquiao Combo Punch', emoji: '🥊', score: 97, win: 'Manny Pacquiao wins 8 world titles across 8 weight classes!' },
            weather: { item: 'Palawan Island Paradise', emoji: '🏝️', score: 93, win: 'Palawan — world\'s most beautiful island with hidden lagoons!' },
            history: { item: 'Lapu-Lapu Battle Cry', emoji: '⚔️', score: 91, win: 'Lapu-Lapu killed Magellan — first to defeat European colonizers!' },
            power: { item: 'OFW Remittance Engine', emoji: '💪', score: 84, win: 'Filipino diaspora sends billions home, powering the nation!' },
            popculture: { item: 'Karaoke Capital Crown', emoji: '🎤', score: 97, win: 'Invented karaoke culture and produces world-class singers!' },
            wildlife: { item: 'Philippine Eagle Swoop', emoji: '🦅', score: 96, win: 'World\'s largest eagle dives with terrifying hunting precision!' },
            inventions: { item: 'Medical Innovations', emoji: '💊', score: 88, win: 'Invented the incubator, morphine isolation, and videophone!' }
        }
    },
    VN: {
        code: 'VN',
        name: 'Vietnam',
        flag: '🇻🇳',
        themeColor: '#DC2626',
        accessory: 'conical_hat',
        mascotTitle: 'Pho Dragon',
        weapons: {
            food: { item: 'Steaming Pho Bowl', emoji: '🍜', score: 97, win: 'Perfectly balanced pho broth with fresh herbs is undefeated!' },
            sports: { item: 'Long Bien Bridge Run', emoji: '🏃', score: 83, win: 'Elite marathon endurance forged through years of resilience!' },
            weather: { item: 'Ha Long Bay Mist', emoji: '⛵', score: 94, win: 'Mystical Ha Long Bay limestone karsts take the breath away!' },
            history: { item: 'Dien Bien Phu Victory', emoji: '🏆', score: 97, win: 'Defeated France, USA, and China — the unbeaten underdog king!' },
            power: { item: 'Manufacturing Dragon', emoji: '🏭', score: 87, win: 'Fastest rising Asian economy takes on the world!' },
            popculture: { item: 'Lantern Festival Glow', emoji: '🏮', score: 92, win: 'Hoi An lantern streets are the most beautiful in all of Asia!' },
            wildlife: { item: 'Saola Mystical Deer', emoji: '🦌', score: 88, win: 'The mythical Saola — Asia\'s unicorn — guards ancient forests!' },
            inventions: { item: 'Pho Culinary Art', emoji: '🍲', score: 92, win: 'Perfected a centuries-old broth recipe that conquered the world!' }
        }
    },
    PK: {
        code: 'PK',
        name: 'Pakistan',
        flag: '🇵🇰',
        themeColor: '#16A34A',
        accessory: 'cricket_cap',
        mascotTitle: 'K2 Champion',
        weapons: {
            food: { item: 'Biryani Rice Royale', emoji: '🍛', score: 96, win: 'Pakistan\'s spiced biryani is the undisputed king of rice dishes!' },
            sports: { item: 'Swing Bowling Strike', emoji: '🏏', score: 92, win: 'Reverse swing bowling mesmerizes batsmen into pure confusion!' },
            weather: { item: 'K2 Mountain Peak', emoji: '🏔️', score: 88, win: 'Home to K2 — the world\'s most dangerous mountain — no fear!' },
            history: { item: 'Indus Valley Ruins', emoji: '🏛️', score: 95, win: 'Indus Valley civilization is one of the world\'s oldest and greatest!' },
            power: { item: 'Nuclear Tiger Roar', emoji: '⚡', score: 90, win: 'Nuclear-armed nation commands strategic South Asian power!' },
            popculture: { item: 'Coke Studio Magic', emoji: '🎵', score: 92, win: 'Coke Studio Pakistan produces the most viral music in South Asia!' },
            wildlife: { item: 'Snow Leopard Leap', emoji: '🐆', score: 94, win: 'Ghost of the mountains — snow leopard haunts the Karakoram!' },
            inventions: { item: 'Sufi Qawwali Music', emoji: '🎶', score: 91, win: 'Qawwali devotional music resonates with millions worldwide!' }
        }
    },
    BD: {
        code: 'BD',
        name: 'Bangladesh',
        flag: '🇧🇩',
        themeColor: '#16A34A',
        accessory: 'rickshaw_art',
        mascotTitle: 'Bengal Tiger',
        weapons: {
            food: { item: 'Hilsa Fish Feast', emoji: '🐟', score: 92, win: 'Prized Hilsa fish cooked in mustard oil is a divine masterpiece!' },
            sports: { item: 'Cricket Tiger Roar', emoji: '🏏', score: 86, win: 'Bangladesh Tigers upset India and Pakistan — giant slayers!' },
            weather: { item: 'Sundarbans Monsoon', emoji: '🌧️', score: 79, win: 'Lush green delta landscape after monsoon rain is breathtaking!' },
            history: { item: 'Language Martyrs Flame', emoji: '✊', score: 96, win: 'Died for their language — International Mother Language Day!' },
            power: { item: 'Garment Textile Empire', emoji: '👔', score: 89, win: 'Second largest garment exporter — clothes the entire world!' },
            popculture: { item: 'Rickshaw Art Rainbow', emoji: '🎨', score: 90, win: 'World\'s most colorful hand-painted rickshaw art stuns everyone!' },
            wildlife: { item: 'Royal Bengal Tiger', emoji: '🐯', score: 95, win: 'Sundarban\'s Bengal Tigers are the most feared swimmers alive!' },
            inventions: { item: 'Grameen Microfinance', emoji: '💡', score: 95, win: 'Muhammad Yunus invented microfinance — lifted millions from poverty!' }
        }
    },
    ET: {
        code: 'ET',
        name: 'Ethiopia',
        flag: '🇪🇹',
        themeColor: '#16A34A',
        accessory: 'marathon_headband',
        mascotTitle: 'Haile Legend',
        weapons: {
            food: { item: 'Injera Tibs Platter', emoji: '🫓', score: 90, win: 'Spongy injera flatbread with spiced tibs is a flavor odyssey!' },
            sports: { item: 'Marathon God Sprint', emoji: '🏃', score: 99, win: 'Haile Gebrselassie and Kenenisa Bekele are running immortals!' },
            weather: { item: 'Great Rift Valley Wind', emoji: '🌄', score: 82, win: 'Ancient highland plateaus and dramatic rift valleys inspire awe!' },
            history: { item: 'Axum Obelisk Legacy', emoji: '🗿', score: 97, win: 'Never colonized! Ancient Axum Empire towers over all rivals!' },
            power: { item: 'Grand Renaissance Dam', emoji: '⚡', score: 88, win: 'Africa\'s biggest dam powers Ethiopia into the future!' },
            popculture: { item: 'Timkat Festival Colors', emoji: '🎊', score: 89, win: 'Orthodox Timkat festival explodes with sacred color and joy!' },
            wildlife: { item: 'Gelada Baboon Army', emoji: '🐒', score: 90, win: 'Herds of 1,000 gelada baboons take over the Simien highlands!' },
            inventions: { item: 'Coffee Discovery Origin', emoji: '☕', score: 99, win: 'Ethiopia invented coffee — the world\'s most-loved drink!' }
        }
    },
    KE: {
        code: 'KE',
        name: 'Kenya',
        flag: '🇰🇪',
        themeColor: '#DC2626',
        accessory: 'masai_beads',
        mascotTitle: 'Masai Cheetah',
        weapons: {
            food: { item: 'Nyama Choma Roast', emoji: '🍖', score: 88, win: 'Perfectly roasted nyama choma goat meat wins every feast!' },
            sports: { item: 'Eliud Marathon Record', emoji: '🏃', score: 99, win: 'Eliud Kipchoge ran sub-2 hours — the greatest feat in sport!' },
            weather: { item: 'Savanna Golden Hour', emoji: '🌅', score: 91, win: 'Maasai Mara golden sunsets behind acacia trees stun the planet!' },
            history: { item: 'Cradle of Mankind', emoji: '🦴', score: 98, win: 'East Africa is the birthplace of all humanity — everyone\'s origin!' },
            power: { item: 'Geothermal Energy Hub', emoji: '⚡', score: 84, win: 'World\'s leading geothermal energy producer powers East Africa!' },
            popculture: { item: 'Benga Rhythm Beat', emoji: '🎵', score: 86, win: 'Kenya\'s benga music and vibrant coastal Swahili culture shine!' },
            wildlife: { item: 'Cheetah Sprint Attack', emoji: '🐆', score: 97, win: 'World\'s fastest land animal accelerates past every challenger!' },
            inventions: { item: 'M-Pesa Mobile Money', emoji: '📱', score: 97, win: 'Kenya invented mobile banking before the rest of the world!' }
        }
    },
    IA: {
        code: 'IA',
        name: 'Israel',
        flag: '🇮🇱',
        themeColor: '#1D4ED8',
        accessory: 'star_of_david',
        mascotTitle: 'Startup Nation',
        weapons: {
            food: { item: 'Hummus Supremacy', emoji: '🫘', score: 93, win: 'World\'s creamiest hummus and fresh shakshuka conquer all!' },
            sports: { item: 'Olympic Judo Gold', emoji: '🥋', score: 88, win: 'Surprise Olympic gold medalists in judo and sailing!' },
            weather: { item: 'Negev Desert Bloom', emoji: '🌺', score: 80, win: 'Desert turns into a wildflower carpet every spring — magical!' },
            history: { item: 'Dead Sea Scroll Wisdom', emoji: '📜', score: 97, win: '3,500 years of history, prophecy, and ancient wisdom!' },
            power: { item: 'Iron Dome Shield', emoji: '🛡️', score: 94, win: 'Iron Dome missile defense intercepts threats with 90% accuracy!' },
            popculture: { item: 'Eurovision Win Streak', emoji: '🎵', score: 89, win: 'Four Eurovision victories and vibrant Mediterranean culture!' },
            wildlife: { item: 'Desert Ibex Climb', emoji: '🐐', score: 82, win: 'Nubian ibex navigates the Negev desert cliffs with total ease!' },
            inventions: { item: 'Drip Irrigation System', emoji: '💧', score: 98, win: 'Revolutionized global farming with drip irrigation — feeds billions!' }
        }
    },
    UA: {
        code: 'UA',
        name: 'Ukraine',
        flag: '🇺🇦',
        themeColor: '#1D4ED8',
        accessory: 'sunflower_crown',
        mascotTitle: 'Sunflower Cossack',
        weapons: {
            food: { item: 'Chicken Kyiv Explosion', emoji: '🍗', score: 91, win: 'Butter-stuffed chicken Kyiv bursts with flavor perfection!' },
            sports: { item: 'Klitschko Heavyweight KO', emoji: '🥊', score: 95, win: 'Klitschko brothers unified heavyweight world titles!' },
            weather: { item: 'Golden Wheat Fields', emoji: '🌾', score: 83, win: 'Endless golden wheat steppe is Europe\'s most productive farmland!' },
            history: { item: 'Cossack Spirit Rise', emoji: '⚔️', score: 94, win: 'Unconquerable Cossack spirit has resisted every invader!' },
            power: { item: 'Sunflower Power Field', emoji: '🌻', score: 88, win: 'World\'s largest sunflower oil and grain exporter feeds the world!' },
            popculture: { item: 'Eurovision Grand Prix', emoji: '🎵', score: 92, win: 'Won Eurovision with unforgettable performances and folk roots!' },
            wildlife: { item: 'Przewalski Wild Horse', emoji: '🐎', score: 88, win: 'Last truly wild horses on Earth roam Ukrainian steppes!' },
            inventions: { item: 'Helicopter Invention', emoji: '🚁', score: 95, win: 'Igor Sikorsky invented the helicopter — changing aviation forever!' }
        }
    },
    NZ: {
        code: 'NZ',
        name: 'New Zealand',
        flag: '🇳🇿',
        themeColor: '#1D4ED8',
        accessory: 'haka_feather',
        mascotTitle: 'All Black Kiwi',
        weapons: {
            food: { item: 'Pavlova Meringue Drop', emoji: '🍰', score: 88, win: 'Crispy pavlova topped with kiwi fruit reigns supreme!' },
            sports: { item: 'All Blacks Haka Charge', emoji: '🏉', score: 99, win: 'All Blacks perform terrifying haka then destroy every opponent!' },
            weather: { item: 'Milford Sound Majesty', emoji: '🏔️', score: 94, win: 'Majestic fjords, glaciers, and beaches make NZ a paradise!' },
            history: { item: 'Maori Treaty Stand', emoji: '✊', score: 90, win: 'Progressive Treaty of Waitangi partnership sets the standard!' },
            power: { item: 'Clean Green Brand', emoji: '🌿', score: 92, win: 'Pure New Zealand brand is the world\'s most respected clean image!' },
            popculture: { item: 'Lord of the Rings World', emoji: '💍', score: 97, win: 'Middle-earth\'s real home makes New Zealand the fantasy capital!' },
            wildlife: { item: 'Kakapo Night Parrot', emoji: '🦜', score: 91, win: 'Cheeky flightless kakapo is the world\'s weirdest and best bird!' },
            inventions: { item: 'Bungee Jump Leap', emoji: '🪂', score: 93, win: 'New Zealand invented bungee jumping and jet boats!' }
        }
    },
    CL: {
        code: 'CL',
        name: 'Chile',
        flag: '🇨🇱',
        themeColor: '#DC2626',
        accessory: 'condor_feather',
        mascotTitle: 'Andes Condor',
        weapons: {
            food: { item: 'Empanada de Pino', emoji: '🥟', score: 91, win: 'Stuffed empanadas with beef and olives win every food fight!' },
            sports: { item: 'Copa America Glory', emoji: '⚽', score: 90, win: 'Back-to-back Copa América champions dominate South America!' },
            weather: { item: 'Atacama Stargazing Sky', emoji: '⭐', score: 96, win: 'World\'s clearest night sky in driest desert on Earth — stunning!' },
            history: { item: 'Mapuche Warrior Spirit', emoji: '⚔️', score: 92, win: 'Mapuche warriors — the only people to defeat the Spanish Empire!' },
            power: { item: 'Copper Mountain Wealth', emoji: '⛏️', score: 91, win: 'World\'s largest copper reserves power global electronics!' },
            popculture: { item: 'Easter Island Mystery', emoji: '🗿', score: 95, win: 'Mysterious Easter Island moai statues baffle all human logic!' },
            wildlife: { item: 'Andean Condor Soar', emoji: '🦅', score: 93, win: 'World\'s largest flying bird soars over Andes at 15,000 feet!' },
            inventions: { item: 'Astronomical Observatory', emoji: '🔭', score: 92, win: 'Home to world\'s best stargazing observatories in Atacama!' }
        }
    },
    CO: {
        code: 'CO',
        name: 'Colombia',
        flag: '🇨🇴',
        themeColor: '#FBBF24',
        accessory: 'coffee_crown',
        mascotTitle: 'Café Shakira',
        weapons: {
            food: { item: 'Bandeja Paisa Feast', emoji: '🍽️', score: 92, win: 'Massive bandeja paisa feast with chicharrón overwhelms rivals!' },
            sports: { item: 'Egan Mountain Attack', emoji: '🚴', score: 93, win: 'Colombian climbers attack Tour de France mountain stages!' },
            weather: { item: 'Eternal Spring Valley', emoji: '🌸', score: 93, win: 'Medellín — city of eternal spring — is the world\'s best climate!' },
            history: { item: 'El Dorado Gold Legend', emoji: '💰', score: 92, win: 'Legend of El Dorado sparked the world\'s greatest treasure hunt!' },
            power: { item: 'Coffee Export Crown', emoji: '☕', score: 94, win: 'World\'s finest mild coffee beans power billions of mornings!' },
            popculture: { item: 'Shakira Hip Explosion', emoji: '💃', score: 98, win: 'Shakira\'s hips don\'t lie — and Colombia wins every time!' },
            wildlife: { item: 'Poison Dart Frog', emoji: '🐸', score: 92, win: 'World\'s most colorful and deadliest frogs guard the jungle!' },
            inventions: { item: 'Magical Realism Art', emoji: '📚', score: 96, win: 'García Márquez gave humanity magical realism and won Nobel Prize!' }
        }
    },
    PE: {
        code: 'PE',
        name: 'Peru',
        flag: '🇵🇪',
        themeColor: '#DC2626',
        accessory: 'inca_gold_crown',
        mascotTitle: 'Machu Llama',
        weapons: {
            food: { item: 'Ceviche Citrus KO', emoji: '🍋', score: 97, win: 'Fresh ceviche with tiger\'s milk marinade delivers maximum flavor!' },
            sports: { item: 'Altitude Training Surge', emoji: '🏃', score: 84, win: 'Training at 4,000m altitude builds lungs of pure steel!' },
            weather: { item: 'Amazon Cloud Forest', emoji: '🌿', score: 89, win: 'Machu Picchu mist and Amazon biodiversity create magic!' },
            history: { item: 'Inca Empire Conquest', emoji: '🏔️', score: 97, win: 'Mighty Inca Empire built Machu Picchu at 8,000 feet — legendary!' },
            power: { item: 'Silver & Gold Mine', emoji: '⛏️', score: 88, win: 'World\'s top silver producer and major gold reserves shine!' },
            popculture: { item: 'Machu Picchu Mystique', emoji: '🗿', score: 97, win: 'Wonder of the World Machu Picchu draws millions of pilgrims!' },
            wildlife: { item: 'Andean Spectacled Bear', emoji: '🐻', score: 88, win: 'The only bear in South America — cute yet ferociously determined!' },
            inventions: { item: 'Potato Cultivation', emoji: '🥔', score: 97, win: 'Peru gave the world 3,000 potato varieties — French fries thank you!' }
        }
    },
    AT: {
        code: 'AT',
        name: 'Austria',
        flag: '🇦🇹',
        themeColor: '#DC2626',
        accessory: 'mozart_wig',
        mascotTitle: 'Mozart The Great',
        weapons: {
            food: { item: 'Wiener Schnitzel Slam', emoji: '🍖', score: 93, win: 'Golden crispy Wiener Schnitzel with lemon perfection wins all!' },
            sports: { item: 'Ski Downhill Domination', emoji: '⛷️', score: 95, win: 'Austrian alpine skiers bomb down every slope with supreme speed!' },
            weather: { item: 'Alps Ski Resort Magic', emoji: '🏔️', score: 93, win: 'World\'s finest Alpine ski resorts buried in perfect powder snow!' },
            history: { item: 'Habsburg Empire Crown', emoji: '👑', score: 97, win: '600-year Habsburg dynasty shaped the entire continent of Europe!' },
            power: { item: 'Vienna Diplomatic Hub', emoji: '🏛️', score: 88, win: 'Vienna hosts more UN agencies than any other city on Earth!' },
            popculture: { item: 'Mozart Symphony Strike', emoji: '🎵', score: 99, win: 'Mozart composed 626 works — the greatest musical genius ever!' },
            wildlife: { item: 'Lipizzaner Stallion', emoji: '🐎', score: 91, win: 'World-famous Lipizzaner stallions dance with breathtaking grace!' },
            inventions: { item: 'Psychoanalysis Mind', emoji: '🧠', score: 96, win: 'Freud invented psychoanalysis — unlocked the human subconscious!' }
        }
    },
    BE: {
        code: 'BE',
        name: 'Belgium',
        flag: '🇧🇪',
        themeColor: '#F59E0B',
        accessory: 'waffle_chef_hat',
        mascotTitle: 'Chocolate Tintin',
        weapons: {
            food: { item: 'Triple-Chocolate Bomb', emoji: '🍫', score: 99, win: 'Belgium makes the finest chocolate and crispiest waffles period!' },
            sports: { item: 'Red Devils Team Press', emoji: '⚽', score: 92, win: 'Belgian Red Devils — world\'s highest-ranked underdog team!' },
            weather: { item: 'Bruges Medieval Mist', emoji: '🏰', score: 80, win: 'Medieval Bruges fog and canal romance charm every visitor!' },
            history: { item: 'NATO HQ Brussels', emoji: '🏛️', score: 91, win: 'Hosts NATO, EU, and the most powerful buildings in the world!' },
            power: { item: 'EU Capital Brussels', emoji: '🌍', score: 92, win: 'Capital of Europe makes decisions affecting 450 million people!' },
            popculture: { item: 'Tintin & Smurfs Power', emoji: '📚', score: 94, win: 'Tintin and Smurfs conquered global children\'s imaginations!' },
            wildlife: { item: 'Ardennes Wild Boar', emoji: '🐗', score: 76, win: 'Fierce Ardennes forest wild boars charge at full speed!' },
            inventions: { item: 'Saxophone Invention', emoji: '🎷', score: 97, win: 'Adolphe Sax invented the saxophone — jazz owes Belgium everything!' }
        }
    },
    DK: {
        code: 'DK',
        name: 'Denmark',
        flag: '🇩🇰',
        themeColor: '#DC2626',
        accessory: 'lego_crown',
        mascotTitle: 'Viking LEGO King',
        weapons: {
            food: { item: 'Smørrebrød Smorgasbord', emoji: '🥪', score: 87, win: 'Open-faced smørrebrød sandwiches layer perfect Nordic flavors!' },
            sports: { item: 'Handball World Champion', emoji: '🤾', score: 93, win: 'Dominant handball champions win World Cup again and again!' },
            weather: { item: 'Hygge Cozy Winter', emoji: '☕', score: 85, win: 'Danish hygge — the cosiest way to spend any winter in history!' },
            history: { item: 'Viking Ship Longboat', emoji: '⚔️', score: 94, win: 'Danish Vikings raided from England to the Mediterranean!' },
            power: { item: 'Wind Energy Pioneer', emoji: '💨', score: 96, win: 'World leader in wind energy — runs on 50%+ wind power!' },
            popculture: { item: 'LEGO Brick Universe', emoji: '🧱', score: 98, win: 'LEGO bricks are the world\'s most iconic toy — sold everywhere!' },
            wildlife: { item: 'White-Tailed Eagle', emoji: '🦅', score: 85, win: 'Majestic white-tailed eagles soar over Danish coastlines!' },
            inventions: { item: 'Bluetooth Technology', emoji: '📡', score: 95, win: 'Bluetooth is named after a Viking king — pure Danish genius!' }
        }
    },
    FI: {
        code: 'FI',
        name: 'Finland',
        flag: '🇫🇮',
        themeColor: '#1D4ED8',
        accessory: 'sauna_towel',
        mascotTitle: 'Nokia Sisu',
        weapons: {
            food: { item: 'Salmon Soup Cauldron', emoji: '🍲', score: 87, win: 'Thick creamy salmon soup with dill is the taste of Nordic heaven!' },
            sports: { item: 'Rally Championship Drive', emoji: '🏎️', score: 94, win: 'Finnish rally drivers dominate the most treacherous roads alive!' },
            weather: { item: 'Frozen Lake Paradise', emoji: '❄️', score: 88, win: 'Sauna plunge into frozen lake — the ultimate winter experience!' },
            history: { item: 'Winter War Sisu Spirit', emoji: '⚔️', score: 97, win: 'Tiny Finland held off Soviet invasion through sheer grit and sisu!' },
            power: { item: 'Education World #1', emoji: '🎓', score: 99, win: 'World\'s best education system shapes tomorrow\'s global leaders!' },
            popculture: { item: 'Angry Birds Bomb Drop', emoji: '🎮', score: 94, win: 'Angry Birds and Clash of Clans conquered every phone on Earth!' },
            wildlife: { item: 'Brown Bear Forest King', emoji: '🐻', score: 91, win: 'Finland\'s powerful brown bears rule the taiga with authority!' },
            inventions: { item: 'Nokia & Linux Code', emoji: '📱', score: 96, win: 'Invented Nokia and Linux — the backbone of modern computing!' }
        }
    },
    SG: {
        code: 'SG',
        name: 'Singapore',
        flag: '🇸🇬',
        themeColor: '#DC2626',
        accessory: 'merlion_crown',
        mascotTitle: 'Merlion Boss',
        weapons: {
            food: { item: 'Chilli Crab Claw Crush', emoji: '🦀', score: 96, win: 'Singapore chilli crab is voted world\'s greatest seafood dish!' },
            sports: { item: 'F1 Night Race Zoom', emoji: '🏎️', score: 90, win: 'Formula 1 night race on glittering Singapore streets — electric!' },
            weather: { item: 'Gardens by the Bay Glow', emoji: '🌿', score: 87, win: 'Supertree Grove lights up Marina Bay with futuristic wonder!' },
            history: { item: 'Modern Miracle Rise', emoji: '🏙️', score: 95, win: 'From third-world to first in ONE generation — unmatched in history!' },
            power: { item: 'Global Finance Hub', emoji: '💰', score: 96, win: 'World\'s most competitive economy and top financial center!' },
            popculture: { item: 'Crazy Rich Asians Flex', emoji: '💎', score: 91, win: 'Crazy Rich Asians put Singapore glamour on the world stage!' },
            wildlife: { item: 'Lion City Merlion', emoji: '🦁', score: 84, win: 'Mythical Merlion guardian watches over all of Singapore!' },
            inventions: { item: 'Smart City Systems', emoji: '🏙️', score: 97, win: 'World\'s most advanced smart city infrastructure amazes all!' }
        }
    },
    UZ: {
        code: 'UZ',
        name: 'Uzbekistan',
        flag: '🇺🇿',
        themeColor: '#1D4ED8',
        accessory: 'silk_road_turban',
        mascotTitle: 'Silk Road Sultan',
        weapons: {
            food: { item: 'Plov Golden Rice', emoji: '🍚', score: 94, win: 'The legendary plov rice pilaf is Central Asia\'s soul food!' },
            sports: { item: 'Olympic Boxing Glory', emoji: '🥊', score: 92, win: 'Uzbek boxers are the most feared on the Olympic stage!' },
            weather: { item: 'Registan Desert Glow', emoji: '🏜️', score: 83, win: 'Ancient turquoise domes glowing in Samarkand sunset!' },
            history: { item: 'Silk Road Trade Empire', emoji: '🐪', score: 97, win: 'Samarkand and Bukhara were the jewels of the ancient Silk Road!' },
            power: { item: 'Central Asian Gateway', emoji: '🌍', score: 84, win: 'Strategic crossroads connecting China, Russia, and Middle East!' },
            popculture: { item: 'Timur Legacy Dance', emoji: '💃', score: 87, win: 'Vibrant Timurid art and dance traditions enchant the world!' },
            wildlife: { item: 'Marco Polo Sheep Ram', emoji: '🐏', score: 86, win: 'Magnificent Marco Polo sheep with enormous spiraling horns!' },
            inventions: { item: 'Al-Biruni Astronomy', emoji: '🔭', score: 96, win: 'Al-Biruni calculated Earth\'s radius in 1000 AD with a stick!' }
        }
    },
    QA: {
        code: 'QA',
        name: 'Qatar',
        flag: '🇶🇦',
        themeColor: '#7C3AED',
        accessory: 'gold_thobe',
        mascotTitle: 'Desert Pearl',
        weapons: {
            food: { item: 'Machboos Spice Slam', emoji: '🍖', score: 89, win: 'Fragrant machboos rice with slow-cooked lamb wins any banquet!' },
            sports: { item: 'World Cup Host Crown', emoji: '⚽', score: 95, win: 'Hosted the most watched sporting event in human history!' },
            weather: { item: 'Air-Conditioned Stadium', emoji: '🏟️', score: 80, win: 'Built COOLED outdoor stadiums in the desert — pure madness!' },
            history: { item: 'Pearl Diving Legacy', emoji: '🌊', score: 88, win: 'Built civilization on the finest Gulf pearls before oil!' },
            power: { item: 'LNG Gas Titan', emoji: '💰', score: 98, win: 'Richest country per capita on Earth — LNG powers Europe!' },
            popculture: { item: 'Al Jazeera Media Storm', emoji: '📺', score: 92, win: 'Al Jazeera broadcasts truth to 430 million Arabic speakers!' },
            wildlife: { item: 'Arabian Oryx Symbol', emoji: '🦌', score: 82, win: 'Saved the extinct Arabian Oryx — conservation hero!' },
            inventions: { item: 'Desalination Innovation', emoji: '💧', score: 91, win: 'World leader in water desalination — turns sea to drinking water!' }
        }
    },
    AE: {
        code: 'AE',
        name: 'UAE',
        flag: '🇦🇪',
        themeColor: '#DC2626',
        accessory: 'burj_crown',
        mascotTitle: 'Burj Boss',
        weapons: {
            food: { item: 'Luqaimat Sweet Bomb', emoji: '🍯', score: 88, win: 'Golden honey luqaimat dumplings drizzle sweetness to victory!' },
            sports: { item: 'Camel Racing Sprint', emoji: '🐪', score: 87, win: 'Robot-jockey camel races are the most futuristic sport ever!' },
            weather: { item: 'Year-Round Desert Sun', emoji: '☀️', score: 84, win: '365 days of sunshine and indoor ski slopes — they have it all!' },
            history: { item: 'Pearl Trade Kingdom', emoji: '🌊', score: 87, win: 'Built a thriving civilization from desert sands in 50 years!' },
            power: { item: 'Burj Khalifa Sky Flex', emoji: '🏙️', score: 97, win: 'Tallest building in the world — Dubai flexes from the sky!' },
            popculture: { item: 'Dubai Mall Universe', emoji: '🛍️', score: 93, win: 'Dubai Mall has a ski slope, aquarium, and gold ATM — legendary!' },
            wildlife: { item: 'Trained Falcon Hunter', emoji: '🦅', score: 91, win: 'Royal falconers fly the world\'s most expensive birds with pride!' },
            inventions: { item: 'Hyperloop & AI Future', emoji: '🚀', score: 93, win: 'UAE invests in hyperloop, AI, and Mars missions — future is here!' }
        }
    },
    MA: {
        code: 'MA',
        name: 'Morocco',
        flag: '🇲🇦',
        themeColor: '#DC2626',
        accessory: 'fez_hat',
        mascotTitle: 'Atlas Lion',
        weapons: {
            food: { item: 'Tagine Spice Bomb', emoji: '🫕', score: 96, win: 'Slow-cooked tagine with preserved lemons and argan oil — divine!' },
            sports: { item: 'World Cup Semi Final', emoji: '⚽', score: 97, win: 'First African nation to reach World Cup semi-finals — historic!' },
            weather: { item: 'Sahara Dune Sunset', emoji: '🌅', score: 91, win: 'Sahara Desert dunes at sunset create the world\'s greatest view!' },
            history: { item: 'Marrakech Medieval Maze', emoji: '🏰', score: 93, win: 'Marrakech medina\'s 1,000-year-old souks mystify all visitors!' },
            power: { item: 'Solar Noor Power Plant', emoji: '☀️', score: 89, win: 'World\'s largest solar power plant powers Africa\'s green future!' },
            popculture: { item: 'Gnawa Music Trance', emoji: '🎵', score: 91, win: 'Ancient Gnawa music puts the entire audience in a hypnotic trance!' },
            wildlife: { item: 'Barbary Macaque Troop', emoji: '🐒', score: 87, win: 'Rare Barbary macaques play in the cedar forests of the Atlas!' },
            inventions: { item: 'World\'s First University', emoji: '🎓', score: 98, win: 'Al-Qarawiyyin in Fez is the world\'s oldest university — 859 AD!' }
        }
    },
    CZ: {
        code: 'CZ',
        name: 'Czech Republic',
        flag: '🇨🇿',
        themeColor: '#1D4ED8',
        accessory: 'bohemian_crown',
        mascotTitle: 'Bohemian King',
        weapons: {
            food: { item: 'Svíčková Cream Sauce', emoji: '🍖', score: 88, win: 'Slow-braised svíčková with cream sauce and cranberry is royalty!' },
            sports: { item: 'Ice Hockey Gold Rush', emoji: '🏒', score: 93, win: 'Czech ice hockey legends shock the world with technical mastery!' },
            weather: { item: 'Prague Castle Autumn', emoji: '🍂', score: 88, win: 'Prague\'s autumn spires are the most photographed in all of Europe!' },
            history: { item: 'Charles Bridge Legacy', emoji: '🌉', score: 93, win: 'The golden city of Prague has been Europe\'s jewel for 700 years!' },
            power: { item: 'Bohemian Crystal Export', emoji: '💎', score: 84, win: 'Czech Bohemian crystal is the world\'s finest glassware!' },
            popculture: { item: 'Kafka Literary Maze', emoji: '📚', score: 91, win: 'Kafka and Mucha gave the world its greatest surreal art!' },
            wildlife: { item: 'Bohemian Forest Lynx', emoji: '🐾', score: 84, win: 'Elusive Eurasian lynx prowls the deep Šumava forests!' },
            inventions: { item: 'Sugar Cube Creation', emoji: '🧁', score: 90, win: 'Czech Jakub Kryštof Rad invented the sugar cube in 1843!' }
        }
    },
    RO: {
        code: 'RO',
        name: 'Romania',
        flag: '🇷🇴',
        themeColor: '#1D4ED8',
        accessory: 'dracula_cape',
        mascotTitle: 'Count Dracula',
        weapons: {
            food: { item: 'Mămăligă Polenta Smash', emoji: '🌽', score: 86, win: 'Golden mămăligă polenta with sour cream is Romanian comfort gold!' },
            sports: { item: 'Nadia Perfect Ten', emoji: '🤸', score: 99, win: 'Nadia Comăneci scored the first perfect 10 in Olympic history!' },
            weather: { item: 'Transylvania Gothic Mist', emoji: '🏰', score: 89, win: 'Misty Carpathian mountains and Dracula\'s castle haunt the rivals!' },
            history: { item: 'Dracula Castle Legend', emoji: '🧛', score: 96, win: 'Bran Castle and Vlad the Impaler create the world\'s greatest legend!' },
            power: { item: 'Danube Delta Nature', emoji: '🌿', score: 82, win: 'Europe\'s largest river delta is a UNESCO biodiversity treasure!' },
            popculture: { item: 'Inna Dance Anthem', emoji: '🎵', score: 88, win: 'Romanian dance pop conquered European club charts!' },
            wildlife: { item: 'Carpathian Brown Bear', emoji: '🐻', score: 93, win: 'Europe\'s highest concentration of brown bears roams Transylvania!' },
            inventions: { item: 'Jet Engine Pioneer', emoji: '✈️', score: 93, win: 'Henri Coandă invented the jet engine principle in 1910!' }
        }
    },
    HU: {
        code: 'HU',
        name: 'Hungary',
        flag: '🇭🇺',
        themeColor: '#16A34A',
        accessory: 'rubiks_crown',
        mascotTitle: "Rubik's Hussar",
        weapons: {
            food: { item: 'Goulash Paprika Storm', emoji: '🫕', score: 92, win: 'Hungarian goulash with fiery paprika warms the soul and wins!' },
            sports: { item: 'Swimming Dynasty Dive', emoji: '🏊', score: 95, win: 'Most Olympic medals per capita — swimming dynasty since 1896!' },
            weather: { item: 'Lake Balaton Sunshine', emoji: '🏖️', score: 83, win: 'Central Europe\'s largest lake shines with golden summer bliss!' },
            history: { item: 'Hussar Cavalry Charge', emoji: '🐎', score: 93, win: 'Hungarian Hussars were Europe\'s most feared cavalry for centuries!' },
            power: { item: 'Budapest EU Bargainer', emoji: '🏛️', score: 82, win: 'Hungary punches far above its weight in EU negotiations!' },
            popculture: { item: 'Rubik Cube Twist', emoji: '🧩', score: 98, win: 'Ernő Rubik\'s Cube is the world\'s best-selling puzzle of all time!' },
            wildlife: { item: 'Puszta Wild Horse', emoji: '🐎', score: 86, win: 'Csikós horsemen ride bareback on Hungary\'s Great Plains!' },
            inventions: { item: 'Ballpoint Pen Click', emoji: '🖊️', score: 97, win: 'László Bíró invented the ballpoint pen — the world writes with Hungary!' }
        }
    }
};


/**
 * Generates custom, crisp vector SVG CountryBall characters!
 * @param {string} code - Country ISO code
 * @param {'normal' | 'happy' | 'loser'} expression - Emotional state
 * @param {number} size - Output width/height
 */
function getCountryBallSVG(code, expression = 'normal', size = 130) {
    const country = COUNTRIES[code] || {
        code: code,
        name: code,
        flag: '🏳️',
        themeColor: '#6366F1',
        accessory: 'gold_headband'
    };

    // Flag stripes / body patterns
    let bodyFill = ``;
    if (code === 'US') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#EF4444"/>
                <rect x="0" y="15" width="100" height="14" fill="#FFFFFF"/>
                <rect x="0" y="43" width="100" height="14" fill="#FFFFFF"/>
                <rect x="0" y="71" width="100" height="14" fill="#FFFFFF"/>
                <rect x="0" y="0" width="46" height="46" fill="#1E3A8A"/>
                <circle cx="15" cy="15" r="3" fill="#FFFFFF"/>
                <circle cx="31" cy="15" r="3" fill="#FFFFFF"/>
                <circle cx="23" cy="27" r="3" fill="#FFFFFF"/>
                <circle cx="15" cy="38" r="3" fill="#FFFFFF"/>
                <circle cx="31" cy="38" r="3" fill="#FFFFFF"/>
            </g>
        `;
    } else if (code === 'IT') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#009246"/>
                <rect x="33" y="0" width="34" height="100" fill="#FFFFFF"/>
                <rect x="67" y="0" width="33" height="100" fill="#CE2B37"/>
            </g>
        `;
    } else if (code === 'JP') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#FFFFFF"/>
                <circle cx="50" cy="50" r="22" fill="#BC002D"/>
            </g>
        `;
    } else if (code === 'BR') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#009C3B"/>
                <polygon points="50,14 86,50 50,86 14,50" fill="#FEDF00"/>
                <circle cx="50" cy="50" r="18" fill="#002776"/>
                <path d="M 33 50 Q 50 44 67 52" fill="none" stroke="#FFFFFF" stroke-width="3"/>
            </g>
        `;
    } else if (code === 'GB') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#012169"/>
                <polygon points="0,0 100,100 100,90 10,0" fill="#FFFFFF"/>
                <polygon points="100,0 0,100 0,90 90,0" fill="#FFFFFF"/>
                <line x1="0" y1="0" x2="100" y2="100" stroke="#C8102E" stroke-width="6"/>
                <line x1="100" y1="0" x2="0" y2="100" stroke="#C8102E" stroke-width="6"/>
                <rect x="40" y="0" width="20" height="100" fill="#FFFFFF"/>
                <rect x="0" y="40" width="100" height="20" fill="#FFFFFF"/>
                <rect x="44" y="0" width="12" height="100" fill="#C8102E"/>
                <rect x="0" y="44" width="100" height="12" fill="#C8102E"/>
            </g>
        `;
    } else if (code === 'MX') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#006847"/>
                <rect x="33" y="0" width="34" height="100" fill="#FFFFFF"/>
                <rect x="67" y="0" width="33" height="100" fill="#CE1126"/>
                <circle cx="50" cy="50" r="8" fill="#C59B27"/>
            </g>
        `;
    } else if (code === 'FR') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#0055A4"/>
                <rect x="33" y="0" width="34" height="100" fill="#FFFFFF"/>
                <rect x="67" y="0" width="33" height="100" fill="#EF4135"/>
            </g>
        `;
    } else if (code === 'DE') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#000000"/>
                <rect x="0" y="33" width="100" height="34" fill="#DD0000"/>
                <rect x="0" y="67" width="100" height="33" fill="#FFCE00"/>
            </g>
        `;
    } else if (code === 'CA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="25" height="100" fill="#FF0000"/>
                <rect x="25" y="0" width="50" height="100" fill="#FFFFFF"/>
                <rect x="75" y="0" width="25" height="100" fill="#FF0000"/>
                <path d="M 50 35 L 53 43 L 61 41 L 57 48 L 62 53 L 53 53 L 51 60 L 49 60 L 47 53 L 38 53 L 43 48 L 39 41 L 47 43 Z" fill="#FF0000"/>
            </g>
        `;
    } else if (code === 'ES') {
        bodyFill = `
            <clipPath id="ball-clip-${code}">
                <circle cx="50" cy="50" r="42"/>
            </clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="25" fill="#AA151B"/>
                <rect x="0" y="25" width="100" height="50" fill="#F1BF00"/>
                <rect x="0" y="75" width="100" height="25" fill="#AA151B"/>
                <circle cx="36" cy="50" r="7" fill="#AA151B"/>
            </g>
        `;
    } else if (code === 'CN') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#DE2910"/>
                <text x="18" y="30" font-size="20">★</text>
                <text x="42" y="20" font-size="10">★</text>
                <text x="52" y="28" font-size="10">★</text>
                <text x="52" y="40" font-size="10">★</text>
                <text x="44" y="50" font-size="10">★</text>
            </g>
        `;
    } else if (code === 'IN') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#FF9933"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#138808"/>
                <circle cx="50" cy="50" r="9" fill="none" stroke="#000080" stroke-width="2"/>
                <circle cx="50" cy="50" r="2" fill="#000080"/>
            </g>
        `;
    } else if (code === 'RU') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#FFFFFF"/>
                <rect x="0" y="33" width="100" height="34" fill="#1C3578"/>
                <rect x="0" y="67" width="100" height="33" fill="#E4181C"/>
            </g>
        `;
    } else if (code === 'ZA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#007A4D"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFB612"/>
                <rect x="0" y="67" width="100" height="33" fill="#DE3831"/>
                <polygon points="0,0 0,100 40,50" fill="#000000"/>
                <polygon points="0,10 0,90 32,50" fill="#007A4D"/>
            </g>
        `;
    } else if (code === 'AR') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#74ACDF"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#74ACDF"/>
                <circle cx="50" cy="50" r="10" fill="#F6B40E"/>
            </g>
        `;
    } else if (code === 'SA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#006C35"/>
                <rect x="0" y="0" width="20" height="100" fill="#FFFFFF"/>
            </g>
        `;
    } else if (code === 'TR') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#E30A17"/>
                <circle cx="42" cy="50" r="16" fill="#FFFFFF"/>
                <circle cx="48" cy="50" r="13" fill="#E30A17"/>
                <text x="64" y="48" font-size="14" fill="#FFFFFF">★</text>
            </g>
        `;
    } else if (code === 'NG') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#008751"/>
                <rect x="33" y="0" width="34" height="100" fill="#FFFFFF"/>
                <rect x="67" y="0" width="33" height="100" fill="#008751"/>
            </g>
        `;
    } else if (code === 'EG') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#CE1126"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#000000"/>
                <circle cx="50" cy="50" r="8" fill="#C09300"/>
            </g>
        `;
    } else if (code === 'NL') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#AE1C28"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#21468B"/>
            </g>
        `;
    } else if (code === 'SE') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#006AA7"/>
                <rect x="30" y="0" width="14" height="100" fill="#FECC02"/>
                <rect x="0" y="43" width="100" height="14" fill="#FECC02"/>
            </g>
        `;
    } else if (code === 'CH') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#FF0000"/>
                <rect x="42" y="20" width="16" height="60" fill="#FFFFFF"/>
                <rect x="20" y="42" width="60" height="16" fill="#FFFFFF"/>
            </g>
        `;
    } else if (code === 'PT') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="40" height="100" fill="#006600"/>
                <rect x="40" y="0" width="60" height="100" fill="#FF0000"/>
                <circle cx="40" cy="50" r="12" fill="#FFD700" stroke="#000080" stroke-width="2"/>
            </g>
        `;
    } else if (code === 'PL') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#FFFFFF"/>
                <rect x="0" y="50" width="100" height="50" fill="#DC143C"/>
            </g>
        `;
    } else if (code === 'NO') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#EF2B2D"/>
                <rect x="25" y="0" width="14" height="100" fill="#FFFFFF"/>
                <rect x="0" y="43" width="100" height="14" fill="#FFFFFF"/>
                <rect x="29" y="0" width="6" height="100" fill="#002868"/>
                <rect x="0" y="47" width="100" height="6" fill="#002868"/>
            </g>
        `;
    } else if (code === 'GR') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#0D5EAF"/>
                <rect x="0" y="0" width="100" height="11" fill="#FFFFFF"/>
                <rect x="0" y="22" width="100" height="11" fill="#FFFFFF"/>
                <rect x="0" y="44" width="100" height="11" fill="#FFFFFF"/>
                <rect x="0" y="66" width="100" height="11" fill="#FFFFFF"/>
                <rect x="0" y="88" width="100" height="11" fill="#FFFFFF"/>
                <rect x="0" y="0" width="40" height="44" fill="#0D5EAF"/>
                <rect x="17" y="0" width="6" height="44" fill="#FFFFFF"/>
                <rect x="0" y="19" width="40" height="6" fill="#FFFFFF"/>
            </g>
        `;
    } else if (code === 'TH') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#A51931"/>
                <rect x="0" y="17" width="100" height="66" fill="#F4F5F8"/>
                <rect x="0" y="33" width="100" height="34" fill="#2D2A4A"/>
            </g>
        `;
    } else if (code === 'ID') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#CE1126"/>
                <rect x="0" y="50" width="100" height="50" fill="#FFFFFF"/>
            </g>
        `;
    } else if (code === 'MY') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#FFFFFF"/>
                <rect x="0" y="14" width="100" height="14" fill="#CC0001"/>
                <rect x="0" y="42" width="100" height="14" fill="#CC0001"/>
                <rect x="0" y="70" width="100" height="14" fill="#CC0001"/>
                <rect x="0" y="0" width="50" height="50" fill="#010066"/>
                <circle cx="18" cy="24" r="10" fill="#FFCC00"/>
                <circle cx="22" cy="24" r="8" fill="#010066"/>
                <text x="28" y="30" font-size="10" fill="#FFCC00">★</text>
            </g>
        `;
    } else if (code === 'PH') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#0038A8"/>
                <rect x="0" y="50" width="100" height="50" fill="#CE1126"/>
                <polygon points="0,0 0,100 50,50" fill="#FFFFFF"/>
                <circle cx="18" cy="50" r="8" fill="#FCD116"/>
            </g>
        `;
    } else if (code === 'VN') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#DA251D"/>
                <text x="50" y="58" font-size="28" text-anchor="middle" fill="#FFFF00">★</text>
            </g>
        `;
    } else if (code === 'PK') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="25" height="100" fill="#FFFFFF"/>
                <rect x="25" y="0" width="75" height="100" fill="#01411C"/>
                <circle cx="55" cy="50" r="14" fill="#FFFFFF"/>
                <circle cx="60" cy="50" r="11" fill="#01411C"/>
                <text x="65" y="46" font-size="10" fill="#FFFFFF">★</text>
            </g>
        `;
    } else if (code === 'BD') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#006A4E"/>
                <circle cx="45" cy="50" r="22" fill="#F42A41"/>
            </g>
        `;
    } else if (code === 'ET') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#078930"/>
                <rect x="0" y="33" width="100" height="34" fill="#FCDD09"/>
                <rect x="0" y="67" width="100" height="33" fill="#DA121A"/>
                <circle cx="50" cy="50" r="14" fill="#0F47AF"/>
                <text x="50" y="56" font-size="14" text-anchor="middle" fill="#FCDD09">★</text>
            </g>
        `;
    } else if (code === 'KE') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#006600"/>
                <rect x="0" y="33" width="100" height="34" fill="#BB0000"/>
                <rect x="0" y="67" width="100" height="33" fill="#000000"/>
                <rect x="0" y="44" width="100" height="12" fill="#FFFFFF"/>
                <ellipse cx="50" cy="50" rx="8" ry="16" fill="#BB0000" stroke="#FFFFFF" stroke-width="2"/>
            </g>
        `;
    } else if (code === 'IA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#FFFFFF"/>
                <rect x="0" y="50" width="100" height="50" fill="#0038B8"/>
                <text x="50" y="56" font-size="20" text-anchor="middle">✡</text>
            </g>
        `;
    } else if (code === 'UA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#005BBB"/>
                <rect x="0" y="50" width="100" height="50" fill="#FFD500"/>
            </g>
        `;
    } else if (code === 'NZ') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#00247D"/>
                <rect x="0" y="0" width="40" height="20" fill="#012169"/>
                <text x="68" y="35" font-size="12" fill="#CC142B">★</text>
                <text x="82" y="52" font-size="10" fill="#CC142B">★</text>
                <text x="68" y="65" font-size="12" fill="#CC142B">★</text>
                <text x="52" y="52" font-size="10" fill="#CC142B">★</text>
            </g>
        `;
    } else if (code === 'CL') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#FFFFFF"/>
                <rect x="0" y="50" width="100" height="50" fill="#D52B1E"/>
                <rect x="0" y="0" width="33" height="50" fill="#0039A6"/>
                <text x="16" y="30" font-size="16" text-anchor="middle" fill="#FFFFFF">★</text>
            </g>
        `;
    } else if (code === 'CO') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#FCD116"/>
                <rect x="0" y="50" width="100" height="25" fill="#003087"/>
                <rect x="0" y="75" width="100" height="25" fill="#CE1126"/>
            </g>
        `;
    } else if (code === 'PE') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#D91023"/>
                <rect x="33" y="0" width="34" height="100" fill="#FFFFFF"/>
                <rect x="67" y="0" width="33" height="100" fill="#D91023"/>
            </g>
        `;
    } else if (code === 'AT') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#ED2939"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#ED2939"/>
            </g>
        `;
    } else if (code === 'BE') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#000000"/>
                <rect x="33" y="0" width="34" height="100" fill="#FAE042"/>
                <rect x="67" y="0" width="33" height="100" fill="#EF3340"/>
            </g>
        `;
    } else if (code === 'DK') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#C60C30"/>
                <rect x="25" y="0" width="14" height="100" fill="#FFFFFF"/>
                <rect x="0" y="43" width="100" height="14" fill="#FFFFFF"/>
            </g>
        `;
    } else if (code === 'FI') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#FFFFFF"/>
                <rect x="20" y="0" width="14" height="100" fill="#003580"/>
                <rect x="0" y="43" width="100" height="14" fill="#003580"/>
            </g>
        `;
    } else if (code === 'SG') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#EF3340"/>
                <rect x="0" y="50" width="100" height="50" fill="#FFFFFF"/>
                <circle cx="28" cy="25" r="10" fill="#FFFFFF"/>
                <circle cx="33" cy="25" r="8" fill="#EF3340"/>
                <text x="48" y="20" font-size="8" fill="#FFFFFF">★★</text>
                <text x="42" y="30" font-size="8" fill="#FFFFFF">★★★</text>
            </g>
        `;
    } else if (code === 'UZ') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#1EB53A"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#CE1126"/>
                <rect x="0" y="30" width="100" height="5" fill="#CE1126"/>
                <rect x="0" y="65" width="100" height="5" fill="#CE1126"/>
            </g>
        `;
    } else if (code === 'QA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="30" height="100" fill="#FFFFFF"/>
                <rect x="30" y="0" width="70" height="100" fill="#8D1B3D"/>
                <path d="M30,0 L50,10 L30,20 L50,30 L30,40 L50,50 L30,60 L50,70 L30,80 L50,90 L30,100" fill="#8D1B3D"/>
            </g>
        `;
    } else if (code === 'AE') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#00732F"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#000000"/>
                <rect x="0" y="0" width="25" height="100" fill="#FF0000"/>
            </g>
        `;
    } else if (code === 'MA') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#C1272D"/>
                <text x="50" y="58" font-size="28" text-anchor="middle" fill="#006233">✦</text>
            </g>
        `;
    } else if (code === 'CZ') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="50" fill="#FFFFFF"/>
                <rect x="0" y="50" width="100" height="50" fill="#D7141A"/>
                <polygon points="0,0 0,100 50,50" fill="#11457E"/>
            </g>
        `;
    } else if (code === 'RO') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="33" height="100" fill="#002B7F"/>
                <rect x="33" y="0" width="34" height="100" fill="#FCD116"/>
                <rect x="67" y="0" width="33" height="100" fill="#CE1126"/>
            </g>
        `;
    } else if (code === 'HU') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="33" fill="#CE2939"/>
                <rect x="0" y="33" width="100" height="34" fill="#FFFFFF"/>
                <rect x="0" y="67" width="100" height="33" fill="#477050"/>
            </g>
        `;
    } else if (code === 'KR') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#FFFFFF"/>
                <circle cx="50" cy="50" r="18" fill="#CD2E3A"/>
                <path d="M50,32 A18,18 0 0,1 50,68" fill="#0047A0"/>
                <circle cx="50" cy="41" r="9" fill="#CD2E3A"/>
                <circle cx="50" cy="59" r="9" fill="#0047A0"/>
            </g>
        `;
    } else if (code === 'AU') {
        bodyFill = `
            <clipPath id="ball-clip-${code}"><circle cx="50" cy="50" r="42"/></clipPath>
            <g clip-path="url(#ball-clip-${code})">
                <rect x="0" y="0" width="100" height="100" fill="#00008B"/>
                <rect x="0" y="0" width="50" height="25" fill="#012169"/>
                <rect x="20" y="0" width="10" height="25" fill="#FFFFFF"/>
                <rect x="0" y="10" width="50" height="10" fill="#FFFFFF"/>
                <text x="65" y="30" font-size="14" fill="#FFFFFF">★</text>
                <text x="65" y="60" font-size="10" fill="#FFFFFF">★</text>
                <text x="80" y="45" font-size="10" fill="#FFFFFF">★</text>
                <text x="52" y="45" font-size="10" fill="#FFFFFF">★</text>
                <text x="72" y="78" font-size="20" fill="#FFFFFF">★</text>
            </g>
        `;
    } else {
        // Generic country ball with colorful theme gradient
        bodyFill = `
            <circle cx="50" cy="50" r="42" fill="${country.themeColor || '#4F46E5'}"/>
            <text x="50" y="58" font-size="28" text-anchor="middle">${country.flag || '🏳️'}</text>
        `;
    }

    // Eyes rendering
    let eyesSvg = '';
    if (expression === 'happy') {
        eyesSvg = `
            <path d="M 33 46 Q 40 38 47 46" fill="none" stroke="#1F2937" stroke-width="4" stroke-linecap="round"/>
            <path d="M 53 46 Q 60 38 67 46" fill="none" stroke="#1F2937" stroke-width="4" stroke-linecap="round"/>
            <ellipse cx="32" cy="54" rx="5" ry="3" fill="#FF4757" opacity="0.6"/>
            <ellipse cx="68" cy="54" rx="5" ry="3" fill="#FF4757" opacity="0.6"/>
            <path d="M 45 56 Q 50 63 55 56" fill="none" stroke="#1F2937" stroke-width="3.5" stroke-linecap="round"/>
        `;
    } else if (expression === 'loser') {
        eyesSvg = `
            <!-- Dizzy spirals or X eyes -->
            <path d="M 34 40 L 44 50 M 44 40 L 34 50" stroke="#1F2937" stroke-width="4" stroke-linecap="round"/>
            <path d="M 56 40 L 66 50 M 66 40 L 56 50" stroke="#1F2937" stroke-width="4" stroke-linecap="round"/>
            <!-- Comical band-aid -->
            <rect x="42" y="52" width="20" height="8" rx="2" fill="#FBBF24" stroke="#1F2937" stroke-width="1.5" transform="rotate(-15 50 56)"/>
            <circle cx="52" cy="56" r="1.5" fill="#EF4444"/>
            <!-- Sad mouth -->
            <path d="M 43 64 Q 50 58 57 64" fill="none" stroke="#1F2937" stroke-width="3.5" stroke-linecap="round"/>
        `;
    } else {
        // Normal expressive eyes
        if (code === 'US') {
            // Cool black aviator sunglasses!
            eyesSvg = `
                <g>
                    <path d="M 28 38 Q 38 35 46 39 L 46 48 Q 38 58 28 48 Z" fill="#111827" stroke="#F59E0B" stroke-width="2"/>
                    <path d="M 54 39 Q 62 35 72 38 L 72 48 Q 62 58 54 48 Z" fill="#111827" stroke="#F59E0B" stroke-width="2"/>
                    <line x1="46" y1="41" x2="54" y2="41" stroke="#F59E0B" stroke-width="2.5"/>
                    <path d="M 32 40 L 36 48" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
                    <path d="M 58 40 L 62 48" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
                    <path d="M 46 56 Q 50 61 54 56" fill="none" stroke="#1F2937" stroke-width="3" stroke-linecap="round"/>
                </g>
            `;
        } else {
            eyesSvg = `
                <!-- Left Eye -->
                <ellipse cx="40" cy="46" rx="6" ry="9" fill="#1F2937"/>
                <circle cx="42" cy="43" r="3" fill="#FFFFFF"/>
                <circle cx="39" cy="49" r="1.5" fill="#FFFFFF"/>
                <!-- Right Eye -->
                <ellipse cx="60" cy="46" rx="6" ry="9" fill="#1F2937"/>
                <circle cx="62" cy="43" r="3" fill="#FFFFFF"/>
                <circle cx="59" cy="49" r="1.5" fill="#FFFFFF"/>
                <!-- Cheerful smile -->
                <path d="M 45 56 Q 50 62 55 56" fill="none" stroke="#1F2937" stroke-width="3.5" stroke-linecap="round"/>
            `;
        }
    }

    // Accessory rendering
    let accessorySvg = '';
    if (country.accessory === 'aviators_and_hat' || code === 'US') {
        accessorySvg = `
            <!-- Uncle Sam Top Hat -->
            <g id="hat-us">
                <rect x="34" y="2" width="32" height="26" fill="#FFFFFF" stroke="#1F2937" stroke-width="2.5"/>
                <rect x="40" y="2" width="7" height="26" fill="#EF4444"/>
                <rect x="53" y="2" width="7" height="26" fill="#EF4444"/>
                <rect x="34" y="22" width="32" height="6" fill="#1E3A8A"/>
                <ellipse cx="50" cy="28" rx="26" ry="5" fill="#1E3A8A" stroke="#1F2937" stroke-width="2.5"/>
            </g>
        `;
    } else if (country.accessory === 'chef_and_mustache' || code === 'IT') {
        accessorySvg = `
            <!-- Chef Hat -->
            <g id="hat-it">
                <path d="M 32 24 C 26 12 36 2 45 6 C 50 0 58 0 62 6 C 70 2 78 12 72 24 Z" fill="#FFFFFF" stroke="#1F2937" stroke-width="2.5"/>
                <rect x="34" y="22" width="36" height="8" fill="#FFFFFF" stroke="#1F2937" stroke-width="2"/>
            </g>
            <!-- Italian Curled Mustache -->
            <path d="M 40 56 Q 46 52 50 55 Q 54 52 60 56 Q 56 60 50 56 Q 44 60 40 56" fill="#1F2937"/>
        `;
    } else if (country.accessory === 'ninja_headband' || code === 'JP') {
        accessorySvg = `
            <!-- Ninja Headband -->
            <rect x="8" y="28" width="84" height="10" fill="#FFFFFF" stroke="#1F2937" stroke-width="2"/>
            <circle cx="50" cy="33" r="4" fill="#BC002D"/>
            <!-- Headband knot tail -->
            <path d="M 88 33 Q 98 38 95 48" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
        `;
    } else if (country.accessory === 'top_hat_monocle' || code === 'GB') {
        accessorySvg = `
            <!-- Gentleman Silk Top Hat -->
            <rect x="36" y="4" width="28" height="24" fill="#1F2937" stroke="#000000" stroke-width="2"/>
            <rect x="36" y="22" width="28" height="6" fill="#C8102E"/>
            <ellipse cx="50" cy="28" rx="24" ry="5" fill="#1F2937" stroke="#000000" stroke-width="2"/>
            <!-- Golden Monocle -->
            <circle cx="60" cy="46" r="8" fill="rgba(255, 234, 167, 0.4)" stroke="#F59E0B" stroke-width="2.5"/>
            <path d="M 68 46 Q 74 58 72 68" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
        `;
    } else if (country.accessory === 'sombrero_mustache' || code === 'MX') {
        accessorySvg = `
            <!-- Giant Sombrero -->
            <path d="M 42 20 Q 50 6 58 20 Z" fill="#F59E0B" stroke="#1F2937" stroke-width="2.5"/>
            <ellipse cx="50" cy="24" rx="36" ry="9" fill="#FBBF24" stroke="#1F2937" stroke-width="2.5"/>
            <path d="M 20 25 Q 50 30 80 25" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="3,3"/>
            <!-- Thick Mustache -->
            <path d="M 38 56 Q 46 50 50 55 Q 54 50 62 56 Q 56 61 50 56 Q 44 61 38 56" fill="#1F2937"/>
        `;
    } else if (country.accessory === 'carnival_feathers' || code === 'BR') {
        accessorySvg = `
            <!-- Carnival Feathers -->
            <path d="M 40 25 Q 36 2 42 0 Q 48 10 44 25" fill="#FEDF00" stroke="#1F2937" stroke-width="1.5"/>
            <path d="M 50 24 Q 50 -2 55 -4 Q 60 10 54 24" fill="#009C3B" stroke="#1F2937" stroke-width="1.5"/>
            <path d="M 60 25 Q 64 2 58 0 Q 52 10 56 25" fill="#002776" stroke="#1F2937" stroke-width="1.5"/>
            <ellipse cx="50" cy="26" rx="20" ry="4" fill="#FEDF00" stroke="#1F2937" stroke-width="2"/>
        `;
    } else if (country.accessory === 'beret_scarf' || code === 'FR') {
        accessorySvg = `
            <!-- Artist French Beret -->
            <ellipse cx="48" cy="20" rx="26" ry="10" fill="#1F2937" stroke="#000000" stroke-width="2"/>
            <circle cx="48" cy="10" r="2" fill="#1F2937"/>
        `;
    } else if (country.accessory === 'alpine_hat' || code === 'DE') {
        accessorySvg = `
            <!-- Bavarian Alpine Hat -->
            <path d="M 32 24 Q 40 8 68 18 L 66 26 Z" fill="#065F46" stroke="#1F2937" stroke-width="2"/>
            <ellipse cx="50" cy="25" rx="24" ry="5" fill="#047857" stroke="#1F2937" stroke-width="2"/>
            <path d="M 64 18 Q 72 6 68 0" fill="none" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
        `;
    } else {
        // Universal Gold Champion Headband
        accessorySvg = `
            <ellipse cx="50" cy="24" rx="30" ry="6" fill="#F59E0B" stroke="#1F2937" stroke-width="2"/>
            <circle cx="50" cy="24" r="5" fill="#EF4444" stroke="#1F2937" stroke-width="1.5"/>
        `;
    }

    // Boxing Gloves on Sides
    const leftGlove = `
        <!-- Left Glove -->
        <g id="glove-left">
            <ellipse cx="10" cy="54" rx="11" ry="13" fill="#EF4444" stroke="#1F2937" stroke-width="3" transform="rotate(-15 10 54)"/>
            <rect x="14" y="58" width="6" height="8" rx="2" fill="#FFFFFF" stroke="#1F2937" stroke-width="1.5"/>
        </g>
    `;
    const rightGlove = `
        <!-- Right Glove -->
        <g id="glove-right">
            <ellipse cx="90" cy="54" rx="11" ry="13" fill="#EF4444" stroke="#1F2937" stroke-width="3" transform="rotate(15 90 54)"/>
            <rect x="80" y="58" width="6" height="8" rx="2" fill="#FFFFFF" stroke="#1F2937" stroke-width="1.5"/>
        </g>
    `;

    return `
        <svg class="country-ball-svg" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="sphere-light-${code}" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35"/>
                    <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
                    <stop offset="100%" stop-color="#000000" stop-opacity="0.3"/>
                </radialGradient>
            </defs>
            <!-- Boxing Gloves Back Layer -->
            ${leftGlove}
            ${rightGlove}
            <!-- Main Ball Body -->
            <circle cx="50" cy="50" r="42" fill="#FFFFFF" stroke="#1F2937" stroke-width="3.5"/>
            ${bodyFill}
            <!-- 3D Lighting & Sphere Shading -->
            <circle cx="50" cy="50" r="42" fill="url(#sphere-light-${code})"/>
            <!-- Eyes & Facial Expression -->
            ${eyesSvg}
            <!-- Hat & Accessories -->
            ${accessorySvg}
        </svg>
    `;
}

// Helper to get country object
function getCountry(code) {
    if (COUNTRIES[code]) {
        return COUNTRIES[code];
    }
    return {
        code: code,
        name: code,
        flag: '🏳️',
        themeColor: '#6366F1',
        accessory: 'gold_headband',
        mascotTitle: 'Champion',
        weapons: {
            food: { item: 'Traditional Dish', emoji: '🍲', score: 80, win: 'Delicious culinary heritage steals the victory!' },
            sports: { item: 'Championship Trophy', emoji: '🏆', score: 80, win: 'Pure heart and hustle takes down the rival!' },
            weather: { item: 'Sunny Skies', emoji: '☀️', score: 80, win: 'Pleasant climate charms the judges!' },
            history: { item: 'Ancient Shield', emoji: '🛡️', score: 80, win: 'Centuries of heritage stand undefeated!' },
            power: { item: 'Sovereign Banner', emoji: '🚩', score: 80, win: 'National pride flexes proud authority!' },
            popculture: { item: 'Celebration Drum', emoji: '🥁', score: 80, win: 'Vibrant local music brings the stadium alive!' },
            wildlife: { item: 'Wild Beast', emoji: '🐾', score: 80, win: 'Fierce native wildlife impresses the judges!' },
            inventions: { item: 'Smart Innovation', emoji: '💡', score: 80, win: 'Clever national invention wins the round!' }
        }
    };
}
