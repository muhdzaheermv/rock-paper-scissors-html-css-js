let score = JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
      ties: 0,
    };

    scoreUpdateElement();

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = "";

      if (playerMove === "rock") {
        if (computerMove === "rock") {
          result = "tie";
        } else if (computerMove === "paper") {
          result = "you lose";
        } else if (computerMove === "scissors") {
          result = "You win";
        }
      } else if (playerMove === "paper") {
        if (computerMove === "rock") {
          result = "You win";
        } else if (computerMove === "paper") {
          result = "tie";
        } else if (computerMove === "scissors") {
          result = "you lose";
        }
      } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
          result = "you lose";
        } else if (computerMove === "paper") {
          result = "You win";
        } else if (computerMove === "scissors") {
          result = "tie";
        }
      }

      if (result === "You win") {
        score.wins += 1;
      } else if (result === "you lose") {
        score.losses += 1;
      } else if (result === "tie") {
        score.ties += 1;
      }

      localStorage.setItem("score", JSON.stringify(score));

      scoreUpdateElement()

      document.querySelector('.js-result')
        .innerHTML = result;

      document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">Computer`

    }



    function scoreUpdateElement() {
      document.querySelector(
        ".score-js"
      ).innerHTML = ` Wins: ${score.wins},Losses: ${score.losses},Tie: ${score.ties}`;
    }

    let computerMove = "";

    function pickComputerMove() {
      const randomnumber = Math.random();

      let computerMove = "";

      if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computerMove = "rock";
      } else if (randomnumber > 1 / 3 && randomnumber < 2 / 3) {
        computerMove = "paper";
      } else if (randomnumber > 2 / 3 && randomnumber < 3 / 3) {
        computerMove = "scissors";
      }

      return computerMove;
    }