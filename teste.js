import { RedeNeural } from "./RedeNeural.mjs";
let train = true;
let nn = new RedeNeural(21, 10, 21);

let dataset = {
    numbers : [
        [ 0, 1, 1, 0,
            1, 0, 0, 1,
            1, 0, 0, 1,       // 0
            1, 0, 0, 1,
            0, 1, 1, 0
        ],
        [ 0, 1, 0, 0,
            1, 1, 0, 0,
            0, 1, 0, 0,       // 1
            0, 1, 0, 0,
            1, 1, 1, 0
        ],
        [ 0, 1, 1, 0,
            1, 0, 0, 1,
            0, 0, 1, 0,       // 2
            0, 1, 0, 0,
            1, 1, 1, 1
        ],
        [ 1, 1, 1, 0,
            0, 0, 0, 1,
            0, 0, 1, 0,       // 3
            0, 0, 0, 1,
            1, 1, 1, 0
        ],
        [ 1, 0, 1, 0,
            1, 0, 1, 0,
            1, 1, 1, 1,       // 4
            0, 0, 1, 0,
            0, 0, 1, 0
        ],
        [ 1, 1, 1, 1,
            1, 0, 0, 0,
            1, 1, 1, 0,       // 5
            0, 0, 0, 1,
            1, 1, 1, 0
        ],
        [ 0, 1, 1, 1,
            1, 0, 0, 0,
            1, 1, 1, 0,       // 6
            1, 0, 0, 1,
            0, 1, 1, 0
        ],
        [ 1, 1, 1, 1,
            0, 0, 0, 1,
            0, 0, 1, 0,       // 7
            0, 1, 0, 0,
            0, 1, 0, 0
        ],
        [ 0, 1, 1, 0,
            1, 0, 0, 1,
            0, 1, 1, 0,       // 8
            1, 0, 0, 1,
            0, 1, 1, 0
        ],
        [ 0, 1, 1, 0,
            1, 0, 0, 1,
            0, 1, 1, 1,       // 9
            0, 0, 0, 1,
            1, 1, 1, 1
        ],
    ],
    names   : ["Goulart", "Goncalo", "Francisco", "Jose", "Maria"],
    outputs : [
        [ 0, 1, 1, 1,
            1, 0, 0, 0,
            1, 1, 1, 0,       // 6
            1, 0, 0, 1,
            0, 1, 1, 0
        ],
        [ 0, 1, 1, 1,
            1, 0, 0, 0,
            1, 1, 1, 0,       // 6
            1, 0, 0, 1,
            0, 1, 1, 0
        ],
        [ 0, 1, 1, 0,
            1, 0, 0, 1,
            0, 1, 1, 0,       // 8
            1, 0, 0, 1,
            0, 1, 1, 0
        ],
        [ 0, 1, 1, 1,
            1, 0, 0, 0,
            1, 1, 1, 0,       // 6
            1, 0, 0, 1,
            0, 1, 1, 0,
        ],
        [ 1, 1, 1, 1,
            0, 0, 0, 1,
            0, 0, 1, 0,       // 7
            0, 1, 0, 0,
            0, 1, 0, 0
        ]]
}

function training() {
    console.log("Iniciando treinamento!")
    if (train) {
        for (let i = 0; i < 10; i++) {
            nn.train(dataset.numbers[i], dataset.outputs[i]);
        }
        if (nn.predict("Goulart")[0] < 0.04 && nn.predict("Maria")[0] > 0.98) {
            train = false;
            console.log("Treinamento Finalizado!");
        }
    }
}

function testing() {
    console.log("ESPERADO: 5; OBTIDO ->", nn.predict("Joao"));
}

training();


