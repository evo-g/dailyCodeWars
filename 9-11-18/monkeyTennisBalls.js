//codewars challenge

// You are Chief Commissioning Editor at a broadcaster who recently approved the production of a televisual sports extravaganza, ‘Monkey Tennis’.

// Broadcasting from Wimbledon has just finished and it did not go well. Adherence to the rules of the game was minimal and, in essence, you just spent 45 minutes watching a band of chimps running amuck on a tennis court in front of a live studio audience. Now you are left with a detritus; there are tennis balls and banana peels everywhere!

// You will receive an array of tennis balls and banana peels, which will each be represented by their weight. Tennis balls weigh exactly 58 grams, and banana peels weigh 60 grams upwards.

// Your job is to gather up just the tennis balls and return them in a sack. The sack will be represented by an object that has a 'weight' property, the value of which should be equal to the combined weight of all tennis balls in the array. If the array contains no tennis balls, then the weight value of the returned sack object should be 0.

function ballCollector(detritus) {
    let sack = {
      weight: 0
    };
    let tennisBalls = detritus.filter((element) => {
      return element === 58;
    });
    let ballWeight = (tennisBalls.length)*58;
    sack.weight = ballWeight;
    return sack;
  };

  function ballCollector(detritus) {
    return {weight: detritus.filter()}
  }

  // test cases
  // const detritus = ballCollector([58, 68, 62, 69, 58], { weight: 116 }, "Should return the combined weight of just the tennis balls!");
// Test.describe("Test Cases", function() {
//     Test.assertSimilar(ballCollector([58, 68, 62, 69, 58]), { weight: 116 }, "Should return the combined weight of just the tennis balls!");
//     Test.assertSimilar(ballCollector([60,66,71,68,62]), { weight: 0 }, "Should return the combined weight of just the tennis balls!");
//     Test.assertSimilar(ballCollector([58]), { weight: 58 }, "Should return the combined weight of just the tennis balls!");
//     Test.assertSimilar(ballCollector([58, 58, 58]), { weight: 174 }, "Should return the combined weight of just the tennis balls!");
//   });
