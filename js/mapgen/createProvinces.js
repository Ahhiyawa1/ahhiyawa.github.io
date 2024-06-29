const funnyMessages = [
    "Taming wild borders... with a whip.",
    "Convincing mountains to stay put.",
    "Teaching rivers to flow gracefully.",
    "Herding provinces like stubborn sheep.",
    "Drawing maps without falling off the edge.",
    "Planting forests pixel by pixel.",
    "Persuading lakes to sit still.",
    "Whispering to mountains to stop growing.",
    "Negotiating peace with the coastline.",
    "Telling deserts to stay dry.",
    "Counting all the invisible dragons.",
    "Smoothing out wrinkles in the map.",
    "Tickling the map for accuracy.",
    "Convincing hills not to roll away.",
    "Patching up cartographer coffee stains.",
    "Making sure the map is dragon-free.",
    "Bargaining with mountains for better views.",
    "Double-checking no provinces are missing.",
    "Aligning stars for perfect navigation.",
    "Drawing borders with a very steady hand.",
    "Keeping forests from wandering off.",
    "Checking for hidden treasure spots.",
    "Ensuring rivers don't get lost.",
    "Convincing volcanoes to behave.",
    "Telling swamps to stay in their lanes."
  ];

/*function createProvinces() {
    world.coveredLand = 0;
    world.coveredWater = 0;
    world.seedCells = []
    createSmallMap()
    console.log("Small Map Created")
    let addProvinceCounter = 0;
    addProvinces();
    let addingProvinces = true
    while (addingProvinces === true) {
        addProvinceCounter += 1;
        addProvinces();

        if ((world.coveredLand >= world.landCells.length) || addProvinceCounter === 10 || world.provinces.length > 8000) {
            addingProvinces = false;
        }
    }
    setTimeout(function() {
        GID("province-creation-screen").innerHTML = pickFrom(funnyMessages)
    }, 1); // A delay of 0ms still allows the browser to update the DOM first
    addWaterProvinces();
    addWaterProvinces();
    addWaterProvinces();
    console.log("Deleting too small provinces")
    deleteSmallProvinces();
    for (let i = 0; i < 20; i++) {
        fillIn();
        console.log("Filling in")
    }
    console.log("Adding Provinces")
    addProvinces();
    bruteFillIn();
    console.log("Assigning province ids")
    assignProvinceIds();
    assignNonDefIds();
    console.log("Setting west-east adjacency")
    setWestEastAdjacency();
    console.log("Setting north-south adjacency");
    setNorthSouthAdjacency();
    console.log("Assigning adjacency to provinces")
    assignAdjacenciesToProvinces();
    console.log("Flattening adjacency arrays")
    flattenAdjacencyArrays();
    resetLand(world)
    console.log("creating province terrain")
    createProvinceTerrainNew()

    console.log("identifying waterbodies")
    floodFillWaterProvinces()

    
    clearFloodFillProvinces();
    console.log("identifying continents")
    floodFillContinents()
    console.log("mapping provinces to continents")
    mapProvincesToContinents()
    console.log("mapping the province's place in the world")
    assignDaylight()
    createWinterSeverity()
    setProvinceDirections()


    //here is where you would intercept with different code after province generation
    world.counties = createCounties(world)
    world.duchies = createDuchies(world.counties, world) // duchies are later changed in createMyKingdoms function. Not ideal, but was a quick patch
    world.kingdoms = createMyKingdoms(world)
    world.empires = createEmpires(world)
    createRealCounties()
    assignTitleInfo()
    assignCultures();
    religionGenerator()
    console.log("Drawing province map")
    drawProvinceMap()
}

*/

/*
async function createProvinces() {
    world.coveredLand = 0;
    world.coveredWater = 0;
    world.seedCells = [];
    createSmallMap();
    console.log("Small Map Created");

    await updateDOM("Adding Provinces");

    let addProvinceCounter = 0;
    addProvinces();
    let addingProvinces = true;
    while (addingProvinces === true) {
        addProvinceCounter += 1;
        addProvinces();

        if ((world.coveredLand >= world.landCells.length) || addProvinceCounter === 10 || world.provinces.length > 8000) {
            addingProvinces = false;
        }
    }

    await updateDOM("Adding Water Provinces");

    addWaterProvinces();
    addWaterProvinces();
    addWaterProvinces();
    console.log("Deleting too small provinces");
    deleteSmallProvinces();

    await updateDOM("Deleting Too Small Provinces");

    for (let i = 0; i < 20; i++) {
        fillIn();
        await updateDOM(`Filling In (${i + 1}/20)`);
    }

    console.log("Adding Provinces");
    addProvinces();
    await updateDOM("Adding Provinces Again");

    bruteFillIn();
    console.log("Assigning province ids");
    assignProvinceIds();
    await updateDOM("Assigning Province IDs");

    assignNonDefIds();
    console.log("Setting west-east adjacency");
    setWestEastAdjacency();
    await updateDOM("Setting West-East Adjacency");

    console.log("Setting north-south adjacency");
    setNorthSouthAdjacency();
    await updateDOM("Setting North-South Adjacency");

    console.log("Assigning adjacency to provinces");
    assignAdjacenciesToProvinces();
    await updateDOM("Assigning Adjacency to Provinces");

    console.log("Flattening adjacency arrays");
    flattenAdjacencyArrays();
    await updateDOM("Flattening Adjacency Arrays");

    resetLand(world);
    console.log("Creating province terrain");
    createProvinceTerrainNew();
    await updateDOM("Creating Province Terrain");

    console.log("Identifying waterbodies");
    floodFillWaterProvinces();
    await updateDOM("Identifying Waterbodies");

    clearFloodFillProvinces();
    console.log("Identifying continents");
    floodFillContinents();
    await updateDOM("Identifying Continents");

    console.log("Mapping provinces to continents");
    mapProvincesToContinents();
    await updateDOM("Mapping Provinces to Continents");

    console.log("Mapping the province's place in the world");
    assignDaylight();
    await updateDOM("Assigning Daylight");

    createWinterSeverity();
    await updateDOM("Creating Winter Severity");

    setProvinceDirections();
    await updateDOM("Setting Province Directions");

    world.counties = createCounties(world);
    await updateDOM("Creating Counties");

    world.duchies = createDuchies(world.counties, world);
    await updateDOM("Creating Duchies");

    world.kingdoms = createMyKingdoms(world);
    await updateDOM("Creating Kingdoms");

    world.empires = createEmpires(world);
    await updateDOM("Creating Empires");

    createRealCounties();
    await updateDOM("Creating Real Counties");

    assignTitleInfo();
    await updateDOM("Assigning Title Info");

    assignCultures();
    await updateDOM("Assigning Cultures");

    religionGenerator();
    await updateDOM("Generating Religions");

    console.log("Drawing province map");
    drawProvinceMap();
    await updateDOM("Drawing Province Map");

    // Ensuring the funny message is displayed after all operations are done
    GID("sidebars").style.display = "block";
    GID("main-generator-div").style.display = "block";
}

// Mock function to update the DOM and wait for the next paint
function updateDOM(message) {
    return new Promise(resolve => {
        GID("province-creation-screen").innerHTML = message;
        setTimeout(resolve, 0); // Allows the browser to update the DOM
    });
}

*/

async function createProvinces() {
    // Initialize all messages
    initializeMessages();

    world.coveredLand = 0;
    world.coveredWater = 0;
    world.seedCells = [];
    createCellTerrains()
    createSmallMap();

    await updateDOM("Adding Provinces", 0);

    let addProvinceCounter = 0;
    addProvinces();
    let addingProvinces = true;
    while (addingProvinces === true) {
        addProvinceCounter += 1;
        addProvinces();

        if ((world.coveredLand >= world.landCells.length) || addProvinceCounter === 10 || world.provinces.length > 8000) {
            addingProvinces = false;
        }
    }

    await updateDOM("Adding Water Provinces", 1);

    addWaterProvinces();
    addWaterProvinces();
    addWaterProvinces();
    deleteSmallProvinces();

    await updateDOM("Deleting Too Small Provinces", 2);

    for (let i = 0; i < 20; i++) {
        fillIn();
        await updateDOM(`Filling In (${i + 1}/20)`, 3);
    }

    addProvinces();
    await updateDOM("Adding Provinces Again", 4);

    bruteFillIn();
    assignProvinceIds();
    await updateDOM("Assigning Province IDs", 5);

    assignNonDefIds();
    setWestEastAdjacency();
    await updateDOM("Setting West-East Adjacency", 6);

    setNorthSouthAdjacency();
    await updateDOM("Setting North-South Adjacency", 7);

    assignAdjacenciesToProvinces();
    await updateDOM("Assigning Adjacency to Provinces", 8);

    flattenAdjacencyArrays();
    await updateDOM("Flattening Adjacency Arrays", 9);

    resetLand(world);
    createProvinceTerrainNew();
    await updateDOM("Creating Province Terrain", 10);

    floodFillWaterProvinces();
    await updateDOM("Identifying Waterbodies", 11);

    clearFloodFillProvinces();
    floodFillContinents();
    await updateDOM("Identifying Continents", 12);

    mapProvincesToContinents();
    await updateDOM("Mapping Provinces to Continents", 13);

    assignDaylight();
    await updateDOM("Assigning Daylight", 14);

    createWinterSeverity();
    await updateDOM("Creating Winter Severity", 15);

    setProvinceDirections();
    await updateDOM("Setting Province Directions", 16);

    overloadProvinceProperties();
    await updateDOM("Creating Regional Information", 17)

    world.counties = createCounties(world);
    await updateDOM("Creating Counties", 18);

    world.duchies = createDuchies(world.counties, world);
    await updateDOM("Creating Duchies", 19);

    world.kingdoms = createMyKingdoms(world);
    await updateDOM("Creating Kingdoms", 20);

    world.empires = createEmpires(world);
    await updateDOM("Creating Empires", 21);

    createRealCounties();
    await updateDOM("Creating Real Counties", 22);

    assignTitleInfo();
    await updateDOM("Assigning Title Info", 23);

    assignCultures();
    await updateDOM("Assigning Cultures", 24);

    religionGenerator();
    await updateDOM("Generating Religions", 25);

    drawProvinceMap();
    await updateDOM("Drawing Province Map", 26);
    GID("province-creation-screen").style.display = "none"
    downloadImage(canvas, "provinces.png")
    GID("province-drawn-proceed").style.display = "block"
    GID("main-generator-div").style.display = "block";
}

// Function to initialize all messages in red
function initializeMessages() {
    const messages = [
        "Adding Provinces",
        "Adding Water Provinces",
        "Deleting Too Small Provinces",
        "Filling In (0/20)",
        "Adding Provinces Again",
        "Assigning Province IDs",
        "Setting West-East Adjacency",
        "Setting North-South Adjacency",
        "Assigning Adjacency to Provinces",
        "Flattening Adjacency Arrays",
        "Creating Province Terrain",
        "Identifying Waterbodies",
        "Identifying Continents",
        "Mapping Provinces to Continents",
        "Assigning Daylight",
        "Creating Winter Severity",
        "Setting Province Directions",
        "Creating Regional Information",
        "Creating Counties",
        "Creating Duchies",
        "Creating Kingdoms",
        "Creating Empires",
        "Creating Real Counties",
        "Assigning Title Info",
        "Assigning Cultures",
        "Generating Religions",
        "Drawing Province Map"
    ];

    const container = GID("province-creation-screen");
    container.innerHTML = "";
    const timingElement = document.createElement("div")
    timingElement.textContent = `The province generation process generally takes approximately two minutes and thirty seconds:`
    container.appendChild(timingElement)
    messages.forEach((msg, index) => {
        const messageElement = document.createElement("div");
        messageElement.id = `step-${index}`;
        messageElement.style.color = "rgb(148, 78, 78)";
        messageElement.textContent = msg;
        container.appendChild(messageElement);
    });
}

// Function to update the DOM with a message and turn it green when done
function updateDOM(message, step) {
    return new Promise(resolve => {
        let messageContainer = GID(`step-${step}`);
        if (!messageContainer) {
            messageContainer = document.createElement("div");
            messageContainer.id = `step-${step}`;
            GID("province-creation-screen").appendChild(messageContainer);
        }
        messageContainer.innerHTML = message;
        messageContainer.style.color = "#67b96b";
        setTimeout(() => {
            resolve();
        }, 0); // Allows the browser to update the DOM
    });
}


//end new

//monkey patch fix but should work - addresses issue where land was initially set on seed cell but wasn't always right (instead of figuring out the issue...)
function resetLand(world) {
    for (let i = 0; i < world.provinces.length; i++) {
        let p = world.provinces[i]
        if (p.elevation > limits.seaLevel.upper ) {
            p.land = true
        } else {
            p.land = false
        }
    }
}

function createSmallMap() { 
    let count = 0;
    world.smallMap = []
    world.landCells = [];
    for (let i = 0; i < settings.height; i++) {
        world.smallMap[i] = [];
        for (let j = 0; j < settings.width; j++) {
            let bigX = Math.floor(j / settings.pixelSize)
            let bigY = Math.floor(i / settings.pixelSize)
            let bigCell = xy(bigX, bigY);
            if (bigCell.elevation > limits.seaLevel.upper) {
                count += 1;
                let cell = {};
                cell.x = j;
                cell.y = i;
                cell.bigCell = bigCell
                world.smallMap[i][j] = cell
                world.landCells.push(cell)
            } else {
                let cell = {};
                cell.x = j;
                cell.y = i;
                cell.bigCell = bigCell
                world.smallMap[i][j] = cell
                world.waterCells += 1;
            }
        }
    }
}

function createRealCounties() {
    let countyArr = []
    for (let i = 0; i < world.duchies.length; i++) {
        let duchy = world.duchies[i]
        for (let j = 0; j < duchy.counties.length; j++) {
            let county = duchy.counties[j]
            let c = {};
            c.provinces = []
            for (let n = 0; n < county.length; n++) {
                c.provinces.push(world.provinces[county[n]])
            }
            duchy.counties[j] = c
            countyArr.push(c)
        }
    }
    world.counties = countyArr
}

function isOnContinent(x, y, continent) {
    let pixelCell = world.smallMap[y][x];
    for (let i = 0; i < continent.cells.length; i++) {
        if (pixelCell.bigCell.continentId === continent.id) {
            return true;
        } else {
            return false;
        }
    }
}

function mapProvincesToContinents() {
    for (let i = 0; i < world.provinces.length; i++) {
        let province = world.provinces[i]
        for (let j = 0; j < world.continents.length; j++) {
            let continent = world.continents[j]
            if (isOnContinent(province.x, province.y, continent)) {
                continent.provinces.push(province)
                province.continent = continent.id
            }
        }
    }
}

function fillIn() {
    for (let i = 0; i < world.seedCells.length; i++) {
        let cell = world.seedCells[i]
        if (cell.children && cell.children.length > 0) {
            for (let j = 0; j < cell.children.length; j++) {
                if (cell.bigCell.elevation > limits.seaLevel.upper) {
                    growCell(cell.children[j])
                } else {
                    growWaterCell(cell.children[j])
                }
            }
        }
    }
}

function bruteFillIn() {
    console.log("Starting brute fill")
    for (let i = 0; i < settings.height; i++) {
        let last = {};
        for (let j = 0; j < settings.width; j++) {
            let cell = world.smallMap[i][j]
            if (cell.colorR) {

            } else {
                if (last.colorR) {
                    cell.colorR = last.colorR
                }
            }
            last = cell;
        }
    }
    console.log("ending brute fill")
}

function addProvinces() {
    let provinceCount = 0;
    while (provinceCount < 10000) {
        if ((world.coveredLand >= world.landCells.length) || world.provinces.length > 8000) {
            break;
        }
        provinceCount += 1;
        seedAndGrowCell()
    }
    let num = (world.coveredLand / world.landCells.length)
}

function assignProvinceIds() {
    let count = 0;
    for (let i = 0; i < world.provinces.length; i++) {
        let province = world.provinces[i]
        if (province.cells > 0) {
            count += 1;
            province.id = count
        }
    }
}

function assignNonDefIds() {
    for (let i = 0; i < world.provinces.length; i++) {
        let prov = world.provinces[i]
        prov.nonDefID = i;
    }
}

function addWaterProvinces() {
    let provinceCount = 0;
    while (provinceCount < 10000) {
        if (world.coveredWater > world.waterCells) {
            break;
        }
        provinceCount += 1;
        seedAndGrowWaterCell()
    }
    let num = (world.coveredWater / world.waterCells);
}

function seedAndGrowWaterCell() {
    let cH = settings.height - 1
    let cW = settings.width - 1
    let randomY = getRandomInt(0, cH);
    let randomX = getRandomInt(0, cW);
    let cell = world.smallMap[randomY][randomX]
    if (cell.colorR || cell.bigCell.elevation > limits.seaLevel.upper) {
        //do nothing if province already applied or land
    } else {
        let generating = true;
        let count = 0;
        cell.children = [];
        cell.children.push(cell);
        cell.parent = cell;
        seedCell(cell.x, cell.y, "w")
        world.seedCells.push(cell)
        while (generating === true) {
            for (let i = 0; i < cell.children.length; i++) {
                growWaterCell(cell.children[i])
                count += 1;
                if (count === 100000 || cell.children.length > 50000) {
                    generating = false;
                }
            }
        }
    }
}

function growWaterCell(cell) {
    let randX = 0;
    let randY = 0;
    let rand = getRandomInt(0, 3);
    if (rand === 0) {
        randX = -1
    } else if (rand === 1) {
        randX = 1;
    } else if (rand === 2) {
        randY = -1
    } else if (rand === 3) {
        randY = 1;
    }
    let neighborX = randX + cell.x;
    let neighborY = randY + cell.y
    if (randX === 0 && randY === 0) {
        //do nothing if same cell
    } else {
        let randomNeighbor
        if (world.smallMap[neighborY]) {
            randomNeighbor = world.smallMap[neighborY][neighborX]
        }

        if (randomNeighbor) {
            randomNeighbor.elevation = cell.bigCell.elevation;
        }
        if (randomNeighbor && randomNeighbor.colorR) {
            //do nothing if assigned - look later to see if wwe need to check elevation - shouldn't have to because it should be assigned.
        } else {
            if (randomNeighbor && cell.bigCell.elevation <= limits.seaLevel.upper && randomNeighbor.bigCell.elevation <= limits.seaLevel.upper) {
                cell.province.cells += 1;
                randomNeighbor.colorR = cell.colorR
                randomNeighbor.colorG = cell.colorG
                randomNeighbor.colorB = cell.colorB
                randomNeighbor.parent = cell.parent;
                randomNeighbor.province = cell.province
                if (cell.children) {
                    cell.children.push(randomNeighbor)
                } else {
                    cell.parent.children.push(randomNeighbor)
                }
                world.coveredWater += 1;
            }
        }
    }
}

function seedAndGrowCell() {
    let cell = world.landCells[getRandomInt(0, world.landCells.length - 1)]
    if (cell.colorR) {
        //do nothing if province already applied
    } else {
        let generating = true;
        let count = 0;
        cell.children = [];
        cell.children.push(cell);
        cell.parent = cell;
        seedCell(cell.x, cell.y, "l")
        world.seedCells.push(cell)
        while (generating === true) {
            for (let i = 0; i < cell.children.length; i++) {
                growCell(cell.children[i])
                count += 1;
                if (count === 20000 || cell.children.length > 5000) {
                    generating = false;
                }
            }
        }
    }
}

function seedCell(x, y, landWater) {
    let cell = world.smallMap[y][x]
    if (cell.colorR) {

    } else {
        let randColor = uniqueColorSet[uniqueColorCount]
        uniqueColorCount += 1;
        cell.color = randColor;
        let colorObject = getColorObjectFromString(randColor);
        cell.colorR = colorObject.r;
        cell.colorG = colorObject.g;
        cell.colorB = colorObject.b;
        cell.elevation = cell.bigCell.elevation + getRandomInt(-3, 3)
        let province = {};
        province.farthestNorth = cell;
        province.farthestSouth = cell;
        province.farthestWest = cell;
        province.farthestEast = cell;
        province.terrainCount = {}
        province.terrainCount["desert"] = 0
        province.terrainCount["drylands"] = 0
        province.terrainCount["floodplains"] = 0
        province.terrainCount["hills"] = 0
        province.terrainCount["mountains"] = 0
        province.terrainCount["plains"] = 0
        province.terrainCount["taiga"] = 0
        province.terrainCount["desert_mountains"] = 0
        province.terrainCount["farmlands"] = 0
        province.terrainCount["forest"] = 0
        province.terrainCount["jungle"] = 0
        province.terrainCount["oasis"] = 0
        province.terrainCount["steppe"] = 0
        province.terrainCount["wetlands"] = 0
        province.terrainCount["sea"] = 0
        province.terrainCount[`${cell.bigCell.terrain}`] += 1
        if (cell.bigCell.adjacentToWater.length > 0) {
            province.coastalCellCount = 1;
        } else {
            province.coastalCellCount = 0
        }
        province.adjacentToWater = []
        province.rivers = []
        province.mountains = []
        province.population = 0
        province.elevation = cell.elevation
        if (landWater === "l") {
            province.land = true;
            province.titleName = `${rando()}`
        } else {
            province.land = false
        }
        provinceCount += 1;
        province.geographicalRegions = []
        province.color = randColor
        province.colorR = colorObject.r;
        province.colorG = colorObject.g;
        province.colorB = colorObject.b;
        province.adjacencies = []
        province.x = x; 
        province.y = y;
        province.hemisphere = setHemisphere(province)
        province.distanceFromEquator = calculateDistanceFromEquator(province)
        province.bigCell = cell.bigCell
        cell.province = province
        cell.seedCell = true;
        province.cells = 1
        world.provinces.push(province)
        world.populatedCells.push(cell)
    }
}

function assignClimateCategory(cell) {
    let y = cell.y
    if (isTropical(y)) {
        cell.climateCategory = "tropical"
    } else if (isSubTropical(y)) {
        cell.climateCategory = "subtropical";
    } else if (isTemperate(y)) {
        cell.climateCategory = "temperate"
    } else if (isCold(y)) {
        cell.climateCategory = "cold"
    }  
}

function setWestEastAdjacency() {
    for (let i = 0; i < settings.width; i++) {
        for (let j = 0; j < settings.height; j++) {
            let cell1 = world.smallMap[j][i];
            if (cell1 && cell1.province) {
                let east = i + 1;
                let cell2 = world.smallMap[j][east]
                if (cell2 && cell2.province) {
                    let p1 = cell1.province.nonDefID
                    let p2 = cell2.province.nonDefID
                    if (p1 && p2 && p1 !== p2) {
                        adjacencySet.add(`${p1}-${p2}`)
                    }
                }
            } 
        }
    }
}

function setHemisphere(province) {
    let h;
    if (province.y < 2048) {
        h = 'Northern';
    } else {
        h = 'Southern';
    }
    return h;
}

function setNorthSouthAdjacency() {
    for (let i = 0; i < settings.width; i++) {
        for (let j = 0; j < settings.height; j++) {
            let cell1 = world.smallMap[j][i];
            if (cell1 && cell1.province) {
                let north = j + 1; 
                if (world.smallMap[north]) {
                    let cell2 = world.smallMap[north][i]
                    if (cell2 && cell2.province) {
                        let p1 = cell1.province.nonDefID
                        let p2 = cell2.province.nonDefID
                        if (p1 && p2 && p1 !== p2) {
                            adjacencySet.add(`${p1}-${p2}`)
                        }
                    }
                }
            } 
        }
    }
}

function assignAdjacenciesToProvinces() {
    adjacencySet.forEach((value) => {
        let p1 = value.match(/(\d+)\-/)[1];
        let p2 = value.match(/\-(\d+)/)[1]
        world.provinces[p1].adjacencies.push(p2);
        world.provinces[p2].adjacencies.push(p1)
    })
}

function flattenAdjacencyArrays() {
    for (let i = 0; i < world.provinces.length; i++) {
        let province = world.provinces[i]
        let unique = province.adjacencies.filter(onlyUnique)
        province.adjacencies = unique;
    }
}

function growCell(cell) {    
    //I have to stuff a bunch of unrelated province explainer logic into growcell to avoid another pass since province definition is one of the only times we iterate over small cells for performance reasons.
    let randX = 0;
    let randY = 0;
    let rand = getRandomInt(0, 3);
    if (rand === 0) {
        randX = -1
    } else if (rand === 1) {
        randX = 1;
    } else if (rand === 2) {
        randY = -1
    } else if (rand === 3) {
        randY = 1;
    }
    let neighborX = randX + cell.x;
    let neighborY = randY + cell.y
    if (randX === 0 && randY === 0) {
        //do nothing if same cell
    } else {
        let randomNeighbor
        if (world.smallMap[neighborY]) {
            randomNeighbor = world.smallMap[neighborY][neighborX]
        }
        
        if (randomNeighbor && randomNeighbor.colorR) {
            //do nothing if assigned
        } else {
            if (randomNeighbor && cell.bigCell.elevation > limits.seaLevel.upper && randomNeighbor.bigCell.elevation > limits.seaLevel.upper) {
                cell.province.cells += 1;
                //rivers for explainer

                if (randomNeighbor.bigCell.riverObject) {
                    if (cell.province.rivers) {
                        if (cell.province.rivers.indexOf(randomNeighbor.bigCell.riverObject.id) === -1) {
                            cell.province.rivers.push(randomNeighbor.bigCell.riverObject.id)
                        }
                    } else {
                        cell.province.rivers = [];
                        cell.province.rivers.push(randomNeighbor.bigCell.riverObject.id)
                    }
                }
                //mountains for explainer
                if (randomNeighbor.bigCell.mountainId) {
                    if (cell.province.mountains) {
                        if (cell.province.mountains.indexOf(randomNeighbor.bigCell.mountainId) === -1) {
                            cell.province.mountains.push(randomNeighbor.bigCell.mountainId)
                        }
                    } else {
                        cell.province.mountains = []
                        cell.province.mountains.push(randomNeighbor.bigCell.mountainId)
                    }
                }

                //adding randomNeighbor to province
                randomNeighbor.colorR = cell.colorR
                randomNeighbor.colorG = cell.colorG
                randomNeighbor.colorB = cell.colorB
                randomNeighbor.parent = cell.parent;
                randomNeighbor.province = cell.province
                randomNeighbor.elevation = randomNeighbor.bigCell.elevation + getRandomInt(-3, 3)
                if (cell.children) {
                    cell.children.push(randomNeighbor)
                } else {
                    cell.parent.children.push(randomNeighbor)
                }
                if (cell.bigCell.adjacentToWater.length > 0) {
                    cell.province.coastalCellCount += 1;
                }
                cell.province.terrainCount[`${cell.bigCell.terrain}`] += 1
                if (cell.y >= cell.province.farthestSouth.y) {
                    cell.province.farthestSouth = cell;
                } 
                if (cell.y <= cell.province.farthestNorth.y) {
                    cell.province.farthestNorth = cell;
                }
                if (cell.x >= cell.province.farthestEast.x) {
                    cell.province.farthestEast = cell
                }
                if (cell.x <= cell.province.farthestWest.x) {
                    cell.province.farthestWest = cell;
                }
                world.coveredLand += 1;
            } else if (randomNeighbor) {
                if (settings.fixBlockiness) {
                    if (randomNeighbor.bigCell) {
                        randomNeighbor.bigCell.maskMarked = true; //mark for masking
                    }
    
                    //rivers for explainer
                    if (randomNeighbor.bigCell.riverObject) {
                        if (cell.province.rivers) {
                            if (cell.province.rivers.indexOf(randomNeighbor.bigCell.riverObject.id) === -1) {
                                cell.province.rivers.push(randomNeighbor.bigCell.riverObject.id)
                            }
                        } else {
                            cell.province.rivers = [];
                            cell.province.rivers.push(randomNeighbor.bigCell.riverObject.id)
                        }
                    }
    
                    //mountains for explainer
                    if (randomNeighbor.bigCell.mountainId) {
                        if (cell.province.mountains) {
                            if (cell.province.mountains.indexOf(randomNeighbor.bigCell.mountainId) === -1) {
                                cell.province.mountains.push(randomNeighbor.bigCell.mountainId)
                            }
                        } else {
                            cell.province.mountains = []
                            cell.province.mountains.push(randomNeighbor.bigCell.mountainId)
                        }
                    }
    
                    //adding randomNeighbor to province
                    cell.province.cells += 1;
                    randomNeighbor.colorR = cell.colorR
                    randomNeighbor.colorG = cell.colorG
                    randomNeighbor.colorB = cell.colorB
                    randomNeighbor.parent = cell.parent;
                    randomNeighbor.elevation = limits.seaLevel.upper + getRandomInt(1, 3)
                    //randomNeighbor.elevation = cell.elevation;
                    world.landCells.push(randomNeighbor)
                    randomNeighbor.province = cell.province
                    if (cell.children) {
                        cell.children.push(randomNeighbor)
                    } else {
                        cell.parent.children.push(randomNeighbor)
                    }
                    world.coveredLand += 1;
                    cell.province.terrainCount[`${cell.bigCell.terrain}`] += 1
                    if (cell.bigCell.adjacentToWater.length > 0) {
                        cell.province.coastalCellCount += 1;
                    }
                    if (cell.y >= cell.province.farthestSouth.y) {
                        cell.province.farthestSouth = cell;
                    } 
                    if (cell.y <= cell.province.farthestNorth.y) {
                        cell.province.farthestNorth = cell;
                    }
                    if (cell.x >= cell.province.farthestEast.x) {
                        cell.province.farthestEast = cell
                    }
                    if (cell.x <= cell.province.farthestWest.x) {
                        cell.province.farthestWest = cell;
                    }
                }

            }
        }
    }
}

function deleteSmallProvinces() {
    for (let i = 0; i < world.seedCells.length; i++) {
        let cell = world.seedCells[i]
        if (cell.children && cell.children.length < settings.tooSmallProvince) { //should be 900
            cell.colorR = undefined;
            cell.colorG = undefined;
            cell.colorB = undefined;
            cell.color = undefined;
            for (let j = 0; j < cell.children.length; j++) {
                cell.children[j].colorR = undefined;
                cell.children[j].colorG = undefined;
                cell.children[j].colorB = undefined;
                cell.children[j].color = undefined;
                world.coveredLand -= 1
            }
            cell.children = []
            let index = world.provinces.indexOf(cell.province);
            if (index !== -1) {
                world.provinces.splice(index, 1)
            }
            cell.province.cells = 0
        }
    }
}