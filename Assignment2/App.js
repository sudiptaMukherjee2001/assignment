const graph = {
    Kiev: ['Prague'],
    Prague: ['Kiev', 'Zurich'],
    Zurich: ['Prague', 'Amsterdam'],
    Amsterdam: ['Zurich', 'Barcelona'],
    Barcelona: ['Amsterdam', 'Berlin'],
    Berlin: ['Barcelona', 'Kiev']
};


const route = [];
let found = false;


function findRoute(city) {
    route.push(city);

    if (route.length === 6) {
        found = true;
        return;
    }

    const neighbors = graph[city];

    for (const neighbor of neighbors) {
        if (!route.includes(neighbor)) {
            findRoute(neighbor);
        }
    }

    if (!found) {
        route.pop();
    }
}

findRoute('Kiev');

if (found) {
    console.log("Your son's route: " + route.join(' -> '));
} else {
    console.log('No valid route found.');
}
