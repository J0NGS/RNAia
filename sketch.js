var train = true;

function setup() {
    createCanvas(500, 500);
    background(0);

    nn = new RedeNeural(2, 3, 1);

    // XOR Problem
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
        outputs : [ 6, 6, 8, 6, 7],
      }
      
}

function draw() {
    if (train) {
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(4));
            nn.train(dataset.numbers[index], dataset.outputs[index]);
        }
        if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
            train = false;
            console.log("terminou");
        }
    }
}
