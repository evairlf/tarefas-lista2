const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');


function generateAnswers() {
    const respostas = [];
    const opcoesResposta = ['V','F'];
    for (let i = 0; i < 20; i++) {
        const indiceAleatorio = Math.floor(Math.random() * opcoesResposta.length);
        respostas.push(opcoesResposta[indiceAleatorio]);
    };

    return respostas;
}


const template = generateAnswers();

function createStudentOfPauloFreire(number) {
    let student = [];
    let students = [];
    for (let i = 0; i < number; i++) {
        student = [];
        student.name = `Aluno ${i+1}`;
        student.answers = generateAnswers();
        students.push(student);
    }
    return students;
}

function checkCompetency(student, template) {
    for (let i = 0; i < student.length; i++) {
        let count = 0;
        for (let j = 0; j < student[0].answers.length; j++) {
            if(template[j] == student[i].answers[j]){
                count++;
            }
        }
        if(count >= 12){
            console.log(`${student[i].name} APROVADO!`);
        }else{
            console.log(`${student[i].name} REPROVADO!`);           
        }
    }
}

let checkStudents = createStudentOfPauloFreire(50);

checkCompetency(checkStudents,template);