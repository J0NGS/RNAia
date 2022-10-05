var train = true;
var dataset = {
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
    outputs : [0,1,2,3,4,5,6,7,8,9],
  }
function setup() {
    createCanvas(500, 500);
    background(0);

    nn = new RedeNeural(2, 3, 1);

    // XOR Problem
    
      
}

function draw() {
    if (train) {
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(10));
            nn.train(dataset.numbers[index], dataset.outputs[index]);
        }
        if (nn.predict([dataset.numbers[0], 9])[0] < 0.015 && nn.predict([[dataset.numbers[0], 0]])[0] > 0.98) {
            train = false;
            console.log("terminou");
        }
    }
}
