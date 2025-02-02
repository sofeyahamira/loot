// Variables
document.addEventListener("DOMContentLoaded", function() {

    // Array of collectables
    const collectables = [
        "Golden Sword", "Silver Dagger", "Ancient Shield", "Mystic Helm", 
        "Phoenix Feather", "Dragon Scale", "Crystal Amulet", "Emerald Ring", 
        "Healing Potion", "Mana Potion", "Fire Orb", "Water Orb", 
        "Wind Orb", "Earth Orb", "Golden Coin", "Silver Coin", 
        "Ruby Gem", "Sapphire Gem", "Obsidian Shard", "Magic Scroll", 
        "Treasure Map", "Runestone", "Vial of Stardust", "Ancient Tome", 
        "Lucky Charm", "Pirate Flag", "Rusty Sword", "Enchanted Cloak", 
        "Sacred Relic", "Giant Pearl", "Cursed Pendant", "Mechanical Gears", 
        "Golden Crown", "Knight’s Emblem", "Bandit’s Mask", "Rare Herb", 
        "Magic Crystal", "Witch’s Broom", "Dragon Egg", "Royal Scepter", 
        "Ice Shard", "Ethereal Chain", "Golden Chalice", "Silver Bell", 
        "Unicorn Horn", "Ancient Compass", "Elf Bow", "Dwarven Hammer", 
        "Phoenix Ashes", "Spiked Shield", "Magic Lantern", "Thunder Hammer", 
        "Mermaid Scale", "Vampire Fang", "Shimmering Dust", "Warrior’s Medal", 
        "Chained Gauntlets", "Fiery Axe", "Frozen Blade", "Necromancer’s Staff", 
        "Sacred Candle", "Dark Crystal", "Mystic Rune", "Gilded Key", 
        "Scroll of Wisdom", "Hunter’s Quiver", "Pirate’s Hat", "Timekeeper’s Hourglass", 
        "Elixir of Life", "Iron Helmet", "Steel Breastplate", "Moonstone Ring", 
        "Sunstone Pendant", "Goblin Talisman", "Skeleton Key", "Lava Crystal", 
        "Shadow Cloak", "Battle Banner", "Poisoned Dagger", "Spellbook of Fire", 
        "Guardian Totem", "Celestial Bow", "Primal Fang", "Knight’s Gauntlet", 
        "Ruby Necklace", "Golden Arrow", "Black Pearl", "Crimson Cloak", 
        "Ornate Flask", "Illuminated Manuscript", "Ancient Harp"
    ];

    // Function to generate a random collectable
    function generateCollectable() {
        const randomIndex = Math.floor(Math.random() * collectables.length);
        const collectable = collectables[randomIndex];
        return collectable
    }

    // Variables
    const rewardParagraph = document.getElementById("reward");
    const miniRewardButton = document.getElementById("miniButton")
    const mysticRewardButton = document.getElementById("mysticButton")
    const titanRewardButton = document.getElementById("titanButton")


    // Button event listeners
    miniRewardButton.addEventListener("click", miniReward)
    mysticRewardButton.addEventListener("click", mysticReward)
    titanRewardButton.addEventListener("click", titanReward)

    // miniReward() Function
    function miniReward() {

        // Add variable
        let collectable = "null"

        // Probability Logic
        if (Math.floor(Math.random() * 10) + 1 == 10) {
            collectable = generateCollectable();
            console.log(collectable)
            rewardMessageGotLoot(collectable)
        } else {
            rewardMessageNoLoot()
        }
    }

    // mysticReward() Function
    function mysticReward() {

        // Add variable
        let collectable = "null"

        // Probability Logic
        if (Math.floor(Math.random() * 5) + 1 == 5) {
            collectable = generateCollectable();
            console.log(collectable)
            rewardMessageGotLoot(collectable)
        } else {
            rewardMessageNoLoot()
        }
    }

    function titanReward() {

        // Add variable
        let collectable = "null"

        // Probability Logic
        if (Math.random() < 0.3) {
            collectable = generateCollectable();
            console.log(collectable)
            rewardMessageGotLoot(collectable)
        } else {
            rewardMessageNoLoot()
        }
    }

    // Reward message if you got a collectable
    function rewardMessageGotLoot(collectable) {
        let rewardElement = document.getElementById("rewardMessage");

        // Check if it exists
        if(rewardElement) {
            rewardElement.textContent = `You got a ${collectable}!`;
        } else {
            rewardElement = document.createElement("h3");
            rewardElement.id = "rewardMessage";
            rewardElement.textContent = `You got a ${collectable}!`;
            document.body.appendChild(rewardElement);
        }
    }

    // Reward message if you got didn't get a collectable
    function rewardMessageNoLoot() {
        let rewardElement = document.getElementById("rewardMessage");

        // Check if it exists
        if(rewardElement) {
            rewardElement.textContent = `You didn't get a collectable`;
        } else {
            rewardElement = document.createElement("h3");
            rewardElement.id = "rewardMessage";
            rewardElement.textContent = `You didn't get a collectable`;
            document.body.appendChild(rewardElement);
        }
    }
})
