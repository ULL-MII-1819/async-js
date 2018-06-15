function slowTask(){

    console.log("slow task finished");
}

function asyncSlowTask(val){ 
    setTimeout(slowTask,2000); //finishes in two seconds, but is processed on a separate thread
}

function fastTask(){
    console.log("fast task finished!")
}

fastTask();
asyncSlowTask();
fastTask();
asyncSlowTask();
fastTask();
fastTask();

/*  Console Output:
    > "fast task finished" <--faster tasks were processed first
    > "fast task finished"
    > "fast task finished"
    > "fast task finished"
    > "slow task finished" <--slow tasks were processed separately and didn't block the call stack
    > "slow task finished"
*/
