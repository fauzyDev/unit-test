import { averageExams, isStudentPassExam } from "../gardeCalculations";

describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    test('it should return exam passed status', () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })

    test('it should return exam failed status', () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})