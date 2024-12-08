function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = weight / (height * height);
    const imcValue = imc.toFixed(2);
    let category = "";
    let habits = [];

    if (imc < 18.5) {
        category = "Abaixo do peso";
        habits = [
            "Inclua mais calorias na sua dieta, com alimentos saudáveis e nutritivos.",
            "Coma porções menores mais vezes ao dia para aumentar a ingestão de calorias.",
            "Consuma proteínas de boa qualidade para fortalecer os músculos, como carnes magras, ovos e leguminosas."
        ];
    } else if (imc >= 18.5 && imc < 24.9) {
        category = "Peso normal";
        habits = [
            "Continue praticando atividades físicas regularmente.",
            "Mantenha uma alimentação equilibrada, com porções adequadas e variedade de nutrientes.",
            "Beba bastante água ao longo do dia para se manter hidratado."
        ];
    } else if (imc >= 25 && imc < 29.9) {
        category = "Sobrepeso";
        habits = [
            "Adote uma rotina regular de exercícios aeróbicos, como caminhada, corrida ou natação.",
            "Reduza o consumo de alimentos ricos em gordura saturada e açúcares refinados.",
            "Aumente a ingestão de fibras, com frutas, vegetais e grãos integrais."
        ];
    } else if (imc >= 30 && imc < 34.9) {
        category = "Obesidade grau 1";
        habits = [
            "Procure orientação de um profissional de saúde para elaborar um plano alimentar e de atividades físicas.",
            "Aumente a intensidade e a regularidade dos exercícios físicos, com foco em perda de peso saudável.",
            "Evite alimentos processados e com alto teor de gordura."
        ];
    } else if (imc >= 35 && imc < 39.9) {
        category = "Obesidade grau 2";
        habits = [
            "Considere buscar apoio profissional para controlar o peso de maneira eficaz e saudável.",
            "Inclua atividades físicas que ajudem na queima de calorias, como caminhadas rápidas e exercícios de força.",
            "Evite comer por impulso, procure comer conscientemente e em horários regulares."
        ];
    } else {
        category = "Obesidade grau 3";
        habits = [
            "É essencial buscar ajuda médica para tratar a obesidade e adotar mudanças no estilo de vida.",
            "Adote uma dieta controlada, rica em nutrientes e com baixo índice glicêmico.",
            "Realize atividades físicas com orientação, começando com exercícios leves e progredindo gradualmente."
        ];
    }

    document.getElementById("imcValue").textContent = imcValue;
    document.getElementById("category").textContent = category;

    // Atualiza as dicas de hábitos saudáveis
    const habitList = document.getElementById("habitList");
    habitList.innerHTML = "";
    habits.forEach(habit => {
        const li = document.createElement("li");
        li.textContent = habit;
        habitList.appendChild(li);
    });
}
