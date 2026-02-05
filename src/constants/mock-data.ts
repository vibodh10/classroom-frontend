// Define simplified types for the mock data
export type Teacher = {
    id: number;
    name: string;
};

export type SimpleSubject = {
    id: number;
    name: string;
    code: string;
};

// Mock data for teachers
export const MOCK_TEACHERS: Teacher[] = [
    {
        id: 1,
        name: "Dr. John Smith"
    },
    {
        id: 2,
        name: "Prof. Sarah Johnson"
    },
    {
        id: 3,
        name: "Dr. Michael Chen"
    },
    {
        id: 4,
        name: "Prof. Emily Rodriguez"
    }
];

// Mock data for subjects
export const MOCK_SUBJECTS: SimpleSubject[] = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "INTCS"
    },
    {
        id: 2,
        name: "Calculus II",
        code: "CALC2"
    },
    {
        id: 3,
        name: "Academic Writing",
        code: "ACWRT"
    },
    {
        id: 4,
        name: "Physics Fundamentals",
        code: "PHYFD"
    },
    {
        id: 5,
        name: "Data Structures and Algorithms",
        code: "DSA"
    }
];
