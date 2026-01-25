import { Subject } from "../types";

// Mock data for three university courses
export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "A foundational course covering basic concepts in computer science, including algorithms, data structures, and programming principles.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Maths",
        description: "Advanced calculus topics including integration techniques, series, and multivariable calculus applications.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG105",
        name: "Academic Writing",
        department: "English",
        description: "Develops critical thinking and writing skills for academic contexts, focusing on research methods and essay composition.",
        createdAt: new Date().toISOString(),
    }
];