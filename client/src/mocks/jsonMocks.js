import { faker } from 'faker';

export const signup = {
    message: 'User created!',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkYWg4MUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwNjk2NTE3NSwiZXhwIjoxNjA2OTY4Nzc1fQ.asq2e83AXimsI0tYkMbWJK54ZpDiie2EmWEGFyf2FPU',
    userInfo: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        email: faker.internet.email(),
        role: 'user',
    },
    expiresAt: 1606968775,
};

export const login = {
    message: 'Authentication successful!',
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkphcnJlZC5CZWllckBob3RtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjA2OTY1NzAzLCJleHAiOjE2MDY5NjkzMDN9.poLE0DpBI5ujSmpwOQuOZRI4xgs7CnKnrqb9upoA1VA',
    userInfo: {
        email: faker.internet.email(),
        first: faker.name.firstName(),
        last: faker.name.lastName(),
        role: 'user',
        id: '3',
    },
    expiresAt: 1606969303,
};
