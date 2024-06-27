export const averageExams = (valuesExam) => {
    const numberValidation  = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error('Please Input number');

    const sumValues = valuesExam.reduce((accumulator ,currentVales) => accumulator + currentVales, 0);
    return sumValues / valuesExam.length;
};

export const isStudentPassExam = (valuesExam, name) => {
        const minValues = 75;
        const average = averageExams(valuesExam);

    if (average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
}