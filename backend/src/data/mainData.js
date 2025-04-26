// src/data/mainData.js

//—————————————————————————————
// Registry
//—————————————————————————————

const courseRegistry = new Map();

function findNode(programCode) {
    if (courseRegistry.has(programCode)) {
        return courseRegistry.get(programCode);
    }
    console.warn(`findNode: "${programCode}" not found, creating placeholder.`);
    return new Course(programCode, "placeholder", [[]], true);
}

// —————————————————————————————
// CLASSES
// —————————————————————————————

class Course {
    /**
     * @param {string} programCode    Course code, e.g. "EECS2030"
     * @param {string} description    Description of the course
     * @param {string[][]} preReq     Nested arrays: inner arrays are OR sets, outer arrays AND sets
     * @param {boolean} [isPlaceholder=false]  Internal placeholder flag
     * @param {number} [term=null]    Term index (1 = Sep–Dec, 2 = Jan–Apr, 3 = May–Aug)
     * @param {number} [hour=null]    Start hour (0–23)
     * @param {number} [minute=null]  Start minute (0–59)
     */
    constructor(
        programCode,
        description,
        preReq = [],
        isPlaceholder = false,
        term = null,
        hour = null,
        minute = null
    ) {
        const existing = courseRegistry.get(programCode);
        if (existing) {
            // upgrade placeholder with real data
            if (existing.__isPlaceholder && !isPlaceholder) {
                existing.description = description;
                existing.preReq = preReq.map(group =>
                    group.map(item => (typeof item === 'string' ? findNode(item) : item))
                );
                existing.term = term;
                existing.hour = hour;
                existing.minute = minute;
                existing.__isPlaceholder = false;
            }
            return existing;
        }

        // New course instance
        this.programCode = programCode;
        this.description = description;
        this.preReq = preReq.map(group =>
            group.map(item => (typeof item === 'string' ? findNode(item) : item))
        );
        this.term = term;
        this.hour = hour;
        this.minute = minute;
        this.__isPlaceholder = isPlaceholder;

        courseRegistry.set(programCode, this);
    }
}

class Department {
    /**
     * @param {string} name       Department name, e.g. "EECS"
     * @param {Course[]} courses  Array of Course instances
     */
    constructor(name, courses = []) {
        this.name = name;
        this.courses = courses;
    }
}

// —————————————————————————————
// SEEDED DATA
// —————————————————————————————

// EECS department
const EECS = new Department(
    'EECS',
    [
        new Course(
            'EECS2030',
            'Advanced separation of concerns for implementers.',
            [
                ['EECS1021', 'EECS1020', 'EECS1022', 'EECS1720'],
                ['EECS1045'],
            ],
            false, // not placeholder
            1,     // term 1
            10,    // 10:00 AM
            30     // 10:30 AM
        ),
    ]
);

const departments = [EECS];

module.exports = {
    findNode,
    Course,
    Department,
    departments,
};
