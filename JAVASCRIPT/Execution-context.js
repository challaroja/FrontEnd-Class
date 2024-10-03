
var tripPlace = 'INDIA';
let beautifulPlaces = ['Kerala', 'Munnar', 'Kodaikanal', 'Delhi'];

function displayTripDetails() {
    console.log("Trip Place:", tripPlace);
    console.log("Beautiful Places:", beautifulPlaces.join(', '));
}

function updateTripPlace(newPlace) {
    tripPlace = newPlace;
    console.log("Updated Trip Place:", tripPlace);
}
displayTripDetails();  // Outputs: Trip Place: INDIA, Beautiful Places: Kerala, Munnar, Kodaikanal, Delhi

updateTripPlace("CHAINA");  // Updates tripPlace
displayTripDetails();  // Outputs: Trip Place: JAPAN, Beautiful Places: Kerala, Munnar, Kodaikanal, Delhi

// Creation Phase 

 GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: "object",
            tripPlace: undefined,  // tripPlace is hoisted and initialized as undefined
            beautifulPlaces: undefined // beautifulPlaces is hoisted and initialized as undefined
        },
        outer: "null",
        thisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: "object",
            tripMap: undefined  // tripMap is hoisted and initialized as undefined  
        },
        outer: "null",
        thisBinding: "global object or window object"
    }
};

// Execution Phase (Variable assignments and function execution)

GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: "object",
            tripPlace: "INDIA",  // tripPlace is assigned the value 'INDIA'
            beautifulPlaces: ['Kerala', 'Munnar', 'Kodaikanal', 'Delhi'] // beautifulPlaces is a reference to the array
        },
        outer: "null",
        thisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: "object"
            // tripMap is not yet assigned, so it's not included here
        },
        outer: "null",
        thisBinding: "global object or window object"
    }
};

// Updated Global Execution Context

GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: "object",
            tripPlace: "JAPAN",  // tripPlace updated to 'JAPAN'
            beautifulPlaces: ['Kerala', 'Munnar', 'Kodaikanal', 'Delhi']  // beautifulPlaces remains unchanged
        },
        outer: "null",
        thisBinding: "global object or window object"
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: "object"
        },
        outer: "null",
        thisBinding: "global object or window object"
    }
}



