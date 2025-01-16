// Variables
document.addEventListener("DOMContentLoaded", function() {

    // Array of collectibles
    const collectibles = [
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

    // Function to generate a random collectible
    function generateCollectible() {
        const randomIndex = Math.floor(Math.random() * collectibles.length);
        const collectible = collectibles[randomIndex];
        return collectible
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
        let diamond = 0;
        let coins = Math.floor(Math.random() * 6) + 5;
        if (Math.floor(Math.random() * 20) + 1 == 20) {
            diamond = 1;
        } 

        let rewardElement = document.getElementById("rewardMessage");

        // Check if it exists
        if(rewardElement) {
            rewardElement.textContent = `You got ${coins} coin(s) and ${diamond} diamond(s)`;
        } else {
            rewardElement = document.createElement("h3");
            rewardElement.id = "rewardMessage";
            rewardElement.textContent = `You got ${coins} coin(s) and ${diamond} diamond(s)`;
            document.body.appendChild(rewardElement);
        }
    }

    // mysticReward() Function
    function mysticReward() {
        let diamond = 0
        let collectible = "no"
        let coins = Math.floor(Math.random() * 11) + 10;
        let health = Math.floor(Math.random() * 10) + 1;
        if (Math.floor(Math.random() * 10) + 1 == 10) {
            diamond = 1;
        } 
        if (Math.floor(Math.random() * 10) + 1 == 10) {
            collectible = generateCollectible();
            console.log(collectible)
        } 

        let rewardElement = document.getElementById("rewardMessage");

        // Check if it exists
        if(rewardElement) {
            rewardElement.textContent = `You got ${coins} coin(s), ${diamond} diamond(s), ${collectible} collectible(s) and restored ${health}HP`;
        } else {
            rewardElement = document.createElement("h3");
            rewardElement.id = "rewardMessage";
            rewardElement.textContent = `You got ${coins} coin(s), ${diamond} diamond(s) and ${collectible} collectible(s) and restored ${health}HP`;
            document.body.appendChild(rewardElement);
        }

    }

    function titanReward() {
        let diamond = 0
        let collectible = "no"
        let coins = Math.floor(Math.random() * 31) + 20;
        if (Math.floor(Math.random() * 5) + 1 == 5) {
            diamond = 1;
        } 
        if (Math.floor(Math.random() * 5) + 1 == 5) {
            collectible = generateCollectible();
            console.log(collectible)
        } 

        let rewardElement = document.getElementById("rewardMessage");

        // Check if it exists
        if(rewardElement) {
            rewardElement.textContent = `You got ${coins} coin(s), ${diamond} diamond(s), ${collectible} collectible(s) and restored all HP`;
        } else {
            rewardElement = document.createElement("h3");
            rewardElement.id = "rewardMessage";
            rewardElement.textContent = `You got ${coins} coin(s), ${diamond} diamond(s), ${collectible} collectible(s) and restored all HP`;
            document.body.appendChild(rewardElement);
        }

    }

})