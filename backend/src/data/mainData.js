//src/data/mainData.js


//—————————————————————————————
//Registery 
//—————————————————————————————

const courseRegistry  = new Map();

function findNode(programCode) {
    if (courseRegistry.has(programCode)) {
        return courseRegistry.get(programCode);
    }

    console.warn(`find node: "${programCode}" not found creating placeholder.`);
    
    return new Course(programCode,"placeholder",[[]],true);
}

// —————————————————————————————
// CLASSES
// —————————————————————————————

class Course {
    /**
     * @param {string} programCode Course code e.g EECS2030
     * @param {string} description description of program 
     * @param {string[][]} preReq 
     * @param {boolean} [isPlaceholder=false] internal flag 
     *  
     * pre-req is nested arrays where every array in pre-req contains course codes which IS "OR"
     * and other arrays or "AND" 
     * 
     * e.g [[EECS2030,EECS2021],[EECS1090]]
     * 
     * pre-req is EECS2030 or EECS 2021 and EECS 1090
     */

    constructor(programCode,description,preReq = [], isPlaceholder = false) {
        const existing = courseRegistry.get(programCode);

        if (existing) {
            if (existing.__isPlaceholder && !isPlaceholder) {
                existing.description = description;
                existing.preReq = preReq.map(group =>
                    group.map(item =>
                      typeof item == "string" ? findNode(item) : item
                    )
                );
                existing.__isPlaceholder = false;
            }

            return existing;
        }

        this.programCode = programCode;
        this.description = description;
        this.preReq = preReq.map(group =>
            group.map(item =>
              typeof item == "string" ? findNode(item) : item
            )
        );
        
        this.__isPlaceholder = isPlaceholder;

        courseRegistry.set(programCode,this);
    }
}

class Department {
    /**
     * @param {string} name Deparment name, e.g "EECS2030"
     * @param {Course[]} courses List of courses Instances 
     * Every deparmtent object stores course objects
     */

    constructor(name,courses = []) {
        this.name = name;
        this.courses = courses;
    }
}

// —————————————————————————————
// SEEDED DATA
// —————————————————————————————

const EECS = new Department(
    "EECS",
    [
    new Course(
        "EECS2030",
        "This course continues the separation of concern theme introduced in LE/EECS 1020 3.00 and LE/EECS1021 3.00. While 1020 and 1021 focuses on the client concern, this course focuses on the concern of the implementer. ",
        [[findNode("EECS1021"),findNode("EECS1020"),findNode("EECS1022"),findNode("EECS1021"),findNode("EECS1720")]],
        false
    ),
    ]
)

const departments  = [
    EECS,
    //Etc....
]

module.exports = {
    findNode,
    Course,
    Department,
    departments,
}