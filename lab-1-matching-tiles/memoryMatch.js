const randomAnswers = () => [1,1,2,2,3,3,4,4,5].sort((a,b) => 0.5-Math.random());

let clickedArray = [];

let started = false;
let interval;
let time = 0;

let ready = true;
let numCompleted = 0; // Number of cells that have been completed

const startTimer = () => {
  if (!started) {
    interval = setInterval(() => {
      time++;
      document.getElementById("timer").innerHTML= "Elapsed time: "+time;
    }
      ,1000);
    started = true;
  }
};

const reveal = (cell) => {
  cell.clicked = true;
  cell.innerHTML = cell.value;
  cell.style.backgroundColor = "red";
};

const hide = (cell) => {
  cell.style.background = "blue";
  cell.innerHTML = "";
  cell.clicked = false;
};

const completed = (cell) => {
  numCompleted++;
  cell.completed = true;
  cell.style.background = "purple";
};

const setUp = () => {
  const answers = randomAnswers();
  const grid = document.getElementsByTagName("td");
  let i = 0;
  for(let cell of grid) {
    cell.completed = cell.clicked = false;
    cell.value = answers[i++];
    // event handlers
    cell.addEventListener("mouseenter",
      function() {
        if (!this.completed && !this.clicked)
          this.style.background = "orange";
      }
    );
    cell.addEventListener("mouseleave",
      function() {
        if (!this.completed && !this.clicked)
          this.style.background = "blue";
      }
    );
    cell.addEventListener("click",
      function() {
        if (!ready) return;
        startTimer();
        clickedArray.push(this);
        reveal(this);
        if (clickedArray.length === 2) {
          if (clickedArray[0].value === clickedArray[1].value) {
            // If a matching pair is found
            clickedArray.map(completed);
            clickedArray = [];
            if (numCompleted === grid.length-1) {
              alert("You won in time "+time+" seconds");
              clearInterval(interval);
            }
          }
          else { // not matching
            ready = false;
            document.getElementById("gridTable").style.border = "5px solid red";
            setTimeout(() => {
              clickedArray.map(hide);
              clickedArray = [];
              ready = true;
              document.getElementById("gridTable").style.border = "5px solid black";
            },500);
          }
        }
      }
    );
  };
};
