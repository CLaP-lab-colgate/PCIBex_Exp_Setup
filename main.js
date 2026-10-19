PennController.ResetPrefix(null)
DebugOff()
PennController.Sequence("consent", "introduction", "practice_intro", "preset","practice","intro_to_ps2","practice_2", "experiment_intro","init_experiment", "experiment", "demographic");

//The consent part
PennController("consent",
    newHtml("consent", "colgate_consent_prolific.html")
        .settings.log() //collect Consent
        .print("center at 50vw")
    ,
    newButton("continue", "Continue")
        .settings.css("font-size", "larger")
        .print("center at 50vw")
        .wait(
            getHtml("consent").test.complete()
                .failure(getHtml("consent").warn())
        )
);

//introduction, the timer is long
PennController("introduction",
    newText("intro",
        "Welcome to the experiment.<br><br>" +
        "In this experiment, you will read sentences <b>one word at a time</b>.<br>" +
        "Press the <b>space bar</b> to reveal the next word.<br><br>" +
        "After reading the whole story, you need to <b>answer several questions</b> which are set to check your comprehension.<br>" +
        "Please make sure to be paying full attention on the experiment. <br>"+
        "<b>Don't stop</b> during the experiment, there will be breaks between stories<br>"+
        "Searching for answers of the questions is <b>strictly prohibited</b>. <br><br>"+
        "Use Z and M to select your answer.<br><br>"+
        "please read carefully."
    )
        .css({
            "font-size": "22px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
        .print("center at 50vw", "middle at 50vh")
        .center()
    ,
    newText("countdown10","continue available in 10 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    
    ,
    
    newTimer("wait_timer", 1000)
    .start()
    .wait()
    ,
    getText("countdown10")
        .remove()
    ,
    newText("countdown9","continue available in 9 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
    getText("countdown9")
        .remove()
    ,
    newText("countdown8","continue available in 8 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown8")
        .remove()
    ,
    newText("countdown7","continue available in 7 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown7")
        .remove()
    ,
    newText("countdown6","continue available in 6 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown6")
        .remove()
    ,
    newText("countdown5","continue available in 5 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown5")
        .remove()
    ,
    newText("countdown4","continue available in 4 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown4")
        .remove()
    ,
    newText("countdown3","continue available in 3 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown3")
        .remove()
    ,
    newText("countdown2","continue available in 2 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
    getText("countdown2")
        .remove()
    ,
    newText("countdown1","continue available in 1 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .start()
    .wait()
    ,
    getText("countdown1")
        .remove()
    ,
    
    newButton("continue", "Start Practice")
        .css("font-size", "15px")
        .print("center at 50vw","middle at 80vh")
        .center()
        .wait()
);







//introduction for the practice part, also has a timer
PennController("practice_intro",
    newText("practice_intro_text",
        "You will now begin a short practice round.<br><br>" +
        "This practice round is only intended to help you become familiar with the task and controls. " +
        "Your responses during this round are not part of the main experiment.<br><br>" +
        "The main experiment will begin after the practice round."
    )
        .css({
            "font-size": "22px",
            "max-width": "800px",
            "line-height": "1.5"
        })
        .print("center at 50vw", "middle at 50vh")
        .center()
    ,
    newText("countdown10","continue available in 10 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    
    ,
    
    newTimer("wait_timer", 1000)
    .start()
    .wait()
    ,
    getText("countdown10")
        .remove()
    ,
    newText("countdown9","continue available in 9 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
    getText("countdown9")
        .remove()
    ,
    newText("countdown8","continue available in 8 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown8")
        .remove()
    ,
    newText("countdown7","continue available in 7 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown7")
        .remove()
    ,
    newText("countdown6","continue available in 6 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown6")
        .remove()
    ,
    newText("countdown5","continue available in 5 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown5")
        .remove()
    ,
    newText("countdown4","continue available in 4 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown4")
        .remove()
    ,
    newText("countdown3","continue available in 3 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
        getText("countdown3")
        .remove()
    ,
    newText("countdown2","continue available in 2 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .print()
    .start()
    .wait()
    ,
    getText("countdown2")
        .remove()
    ,
    newText("countdown1","continue available in 1 sec")
    .css({
            "font-size": "15px",
            "max-width": "1000px",
            "line-height": "1.5"
        })
    .print("center at 85vw", "middle at 15vh")
    ,
    
    newTimer("wait_timer", 1000)
    .start()
    .wait()
    ,
    getText("countdown1")
        .remove()
    ,
    newButton("continue", "Begin Practice")
        .css("font-size", "18px")
        .print("center at 50vw", "middle at 80vh")
        .center()
        .wait()
    
);

newTrial("preset",
    newVar("practice_response","left")
    .global()
)

Template("practice_story.csv", row =>
  newTrial("practice",
    // -------- SENTENCE ROW --------
    newVar("type").set(row.ItemType)
    ,
    getVar("type").test.is("sentence")
      .success(
        newTimer("timer_1", 500)
            .start()
            .wait()
        ,
        newController("DashedSentence", { s: row.Sentence })
            .css({"font-size": "25px", "max-width": "1000px"})
            .print("center at 50vw", "middle at 50vh")
            .center()
            .log()
            .wait()
            .remove()
      )
      .failure(
        // -------- QUESTION ROW --------
        getVar("type").test.is("question")
            .success(
                newText("Question", row.Question)
                    .css("font-size", "25px")
                    .print("center at 50vw", "middle at 50vh")
                    .center()
                ,
                newButton("left", row.Correct).css({"font-size": "16px", "max-width": "240px"})
                ,
                newButton("right", row.Wrong).css({"font-size": "16px", "max-width": "240px"})
                ,
                newTimer("time_out",10000)
                    .start()
                ,
                newCanvas("canvas", 500, 100)
                    .add( "center at 25%", "middle at 75%", getButton("left").print().css("font-size", "16px"))
                    .add( "center at 75%", "middle at 75%", getButton("right").print().css("font-size", "16px"))
                    .print("center at 50vw", "middle at 60vh")
                    .center()
                ,
                newSelector("buttons_1")
                    .add(getButton("left"), getButton("right"))
                    .shuffle()
                    .keys("Z","M")
                    .print("center at 50vw", "middle at 60vh")            
                    .center()
                    .callback(
                         getSelector("buttons_1")
                            .test.selected(getButton("left"))
                            .success(
                                getVar("practice_response").set("left")
                            )
                            .failure(
                                getVar("practice_response").set("right")
                            )
                        ,
                        getTimer("time_out").stop()
                        )
                    .log()
                    .once()
                    .remove()
                ,
                getTimer("time_out")
                    .wait()
                ,
                getCanvas("canvas")
                    .remove()
            )
            .failure(
                newText("Familiarity Test",row.Question)
                    .css("font-size", "25px")
                    .print("center at 50vw", "middle at 50vh")
                    .center()
                ,
                newButton("yes", row.Correct).css({"font-size": "16px", "max-width": "240px"})
                ,
                newButton("no", row.Wrong).css({"font-size": "16px", "max-width": "240px"})
                ,
                newCanvas("canvas1", 500, 100)
                    .add( "center at 25%", "middle at 75%", getButton("yes").print().css("font-size", "16px"))
                    .add( "center at 75%", "middle at 75%", getButton("no").print().css("font-size", "16px"))
                    .print("center at 50vw", "middle at 60vh")
                    .center()
                ,
                newSelector("buttons_f_question")
                    .add(getButton("yes"), getButton("no"))
                    .keys("Z","M")
                    .print("center at 50vw", "middle at 60vh")            
                    .center()
                    .log()
                    .once()
                    .wait()
                    .remove()
                ,
                getCanvas("canvas1")
                    .remove()
                )
      )
   )
   )
 
PennController("intro_to_ps2",
    getVar("practice_response").test.is("left")
        .success(
        newText("right_answer","You got the right answer!<br><br>"+
            "Here is another round of practice; please keep on going")
                .css({
                "font-size": "22px",
                "max-width": "800px",
                "line-height": "1.5"
                })
                .print("center at 50vw", "middle at 50vh")
                .center()
            ,
            newButton("continue", "Begin Practice")
                .css("font-size", "18px")
                .print("center at 50vw", "middle at 80vh")
                .center()
                .wait()
                ,
            getText("right_answer")
                .remove()
            ,
            getButton("continue")
                .remove()
                
            )
        .failure(
            newText("wrong_answer","You got the wrong answer!<br><br>"+
            "Please do your best to understand the story! Here is another round of practice.")
                .css({
                "font-size": "22px",
                "max-width": "800px",
                "line-height": "1.5"
                })
                .print("center at 50vw", "middle at 50vh")
                .center()
            ,
            newButton("continue", "Begin Practice")
                .css("font-size", "18px")
                .print("center at 50vw", "middle at 80vh")
                .center()
                .wait()
                ,
            getText("wrong_answer")
                .remove()
            ,
            getButton("continue")
                .remove()

)
)
   
Template("practice_story_2.csv",row=>
    newTrial("practice_2",
    newVar("type").set(row.ItemType)
        ,
    getVar("type").test.is("sentence")
      .success(
        newTimer("timer_1", 500)
            .start()
            .wait()
        ,
        newController("DashedSentence", { s: row.Sentence })
            .css({"font-size": "25px", "max-width": "1000px"})
            .print("center at 50vw", "middle at 50vh")
            .center()
            .log()
            .wait()
            .remove()
      )
      .failure(
        // -------- QUESTION ROW --------
        getVar("type").test.is("question")
            .success(
                newText("Question", row.Question)
                    .css("font-size", "25px")
                    .print("center at 50vw", "middle at 50vh")
                    .center()
                ,
                newButton("left", row.Correct).css({"font-size": "16px", "max-width": "240px"})
                ,
                newButton("right", row.Wrong).css({"font-size": "16px", "max-width": "240px"})
                ,
                newTimer("time_out",10000)
                    .start()
                ,
                getVar("RT_response").set(v_rt => Date.now())
                ,
                newCanvas("canvas", 500, 100)
                    .add( "center at 25%", "middle at 75%", getButton("left").print().css("font-size", "16px"))
                    .add( "center at 75%", "middle at 75%", getButton("right").print().css("font-size", "16px"))
                    .print("center at 50vw", "middle at 60vh")
                    .center()
                ,
                newSelector("buttons_1")
                    .add(getButton("left"), getButton("right"))
                    .shuffle()
                    .keys("Z","M")
                    .print("center at 50vw", "middle at 60vh")            
                    .center()
                    .callback(
                        getTimer("time_out").stop()
                        )
                    .log()
                    .once()
                    .remove()
                ,
                getTimer("time_out")
                    .wait()
                ,
                getVar("RT_response").set( v_rt => Date.now() - v_rt )
                ,
                getCanvas("canvas")
                    .remove()
            )
            .failure(
                newText("Familiarity Test",row.Question)
                    .css("font-size", "25px")
                    .print("center at 50vw", "middle at 50vh")
                    .center()
                ,
                newButton("yes", row.Correct).css({"font-size": "16px", "max-width": "240px"})
                ,
                newButton("no", row.Wrong).css({"font-size": "16px", "max-width": "240px"})
                ,
                newCanvas("canvas1", 500, 100)
                    .add( "center at 25%", "middle at 75%", getButton("yes").print().css("font-size", "16px"))
                    .add( "center at 75%", "middle at 75%", getButton("no").print().css("font-size", "16px"))
                    .print("center at 50vw", "middle at 60vh")
                    .center()
                ,
                newSelector("buttons_f_question")
                    .add(getButton("yes"), getButton("no"))
                    .keys("Z","M")
                    .print("center at 50vw", "middle at 60vh")            
                    .center()
                    .log()
                    .once()
                    .wait()
                    .remove()
                ,
                getCanvas("canvas1")
                    .remove()
                
                )
                
                    
                
    
    
    
)
)
)
   
PennController("experiment_intro",
    newText("experiment_intro_text",
        "Now you can start your experiment." 
    )
        .css({
            "font-size": "22px",
            "max-width": "800px",
            "line-height": "1.5"
        })
        .print("center at 50vw", "middle at 50vh")
        .center()
    ,
    newButton("continue", "Start Experiment")
        .css("font-size", "18px")
        .print("center at 50vw", "middle at 80vh")
        .center()
        .wait()
    )

newTrial("init_experiment",
    newVar("story#", 0)
        .global()
)

Template("latin_square_5stories_20groups_withf.csv", row =>
  newTrial("experiment",
    // -------- SENTENCE ROW --------
    newVar("RT_response").global().set(0)
    ,
    newVar("type").set(row.ItemType)
    ,
    getVar("story#")
            .test.is(row.StoryNum)
            .success(
                // same story → do nothing
            )
            .failure(
                getVar("story#")
                .test.is(0)
                .success(
                    getVar("story#")
                        .set(row.StoryNum)
                    )
                .failure(
                    getVar("story#")
                        .set(row.StoryNum)
                    ,
                    newText("break_text", "You may take a short break before continuing.")
                        .css("font-size", "22px")
                        .print("center at 50vw", "middle at 50vh")
                    ,
                    newButton("continue", "End Break")
                        .css("font-size", "18px")
                        .print("center at 50vw", "middle at 60vh")
                        .wait()
                    ,
                    getText("break_text").remove()
                    ,
                    getButton("continue").remove()
                    ,
                    newText("new_trial","Now you are entering a new trial.")
                        .css("font-size","22px")
                        .print("center at 50vw", "middle at 50vh")
                    ,
                    newButton("start_trial","Start The Trial")
                        .css("font-size", "18px")
                        .print("center at 50vw", "middle at 60vh")
                        .wait()
                    ,
                    getText("break_text").remove()
                    ,
                    getButton("start_trial").remove()
                )
            )
        ,

    getVar("type").test.is("sentence")
      .success(
        newTimer("timer_1", 500)
            .start()
            .wait()
        ,
        newController("DashedSentence", { s: row.Sentence })
            .css({
    "width": (500 + Math.floor(Math.random() * 501)) + "px",
    "font-size": "25px"
})
            .print("center at 50vw", "middle at 50vh")
            .log()
            .wait()
            .remove()
      )
      .failure(
        // -------- QUESTION ROW --------
        getVar("type").test.is("question")
            .success(
                newText("Question", row.Question)
                    .css("font-size", "25px")
                    .print("center at 50vw", "middle at 50vh")
                    .center()
                ,
                newButton("left", row.Correct).css({"font-size": "16px", "max-width": "240px"})
                ,
                newButton("right", row.Wrong).css({"font-size": "16px", "max-width": "240px"})
                ,
                newTimer("time_out",10000)
                    .start()
                ,
                getVar("RT_response").set(v_rt => Date.now())
                ,
                newCanvas("canvas2", 500, 100)
                    .add( "center at 25%", "middle at 75%", getButton("left").print().css("font-size", "16px"))
                    .add( "center at 75%", "middle at 75%", getButton("right").print().css("font-size", "16px"))
                    .print("center at 50vw", "middle at 60vh")
                    .center()
                ,
                newSelector("buttons_1")
                    .add(getButton("left"), getButton("right"))
                    .shuffle()
                    .keys("Z","M")
                    .print("center at 50vw", "middle at 60vh")            
                    .center()
                    .callback(
                        getTimer("time_out").stop()
                        )
                    .log()
                    .once()
                    .remove()
                ,
                getTimer("time_out")
                    .wait()
                ,
                getVar("RT_response").set( v_rt => Date.now() - v_rt )
                ,
                getCanvas("canvas2")
                    .remove()
            )
            .failure(
                newText("Familiarity Test",row.Question)
                    .css("font-size", "25px")
                    .print("center at 50vw", "middle at 50vh")
                    .center()
                ,
                newButton("yes", row.Correct).css({"font-size": "16px", "max-width": "240px"})
                ,
                newButton("no", row.Wrong).css({"font-size": "16px", "max-width": "240px"})
                ,
                newCanvas("canvas3", 500, 100)
                    .add( "center at 25%", "middle at 75%", getButton("yes").print().css("font-size", "16px"))
                    .add( "center at 75%", "middle at 75%", getButton("no").print().css("font-size", "16px"))
                    .print("center at 50vw", "middle at 60vh")
                    .center()
                ,
                newSelector("buttons_f_question")
                    .add(getButton("yes"), getButton("no"))
                    .shuffle()
                    .keys("Z","M")
                    .print("center at 50vw", "middle at 60vh")            
                    .center()
                    .log()
                    .once()
                    .wait()
                    .remove()
                ,
                getCanvas("canvas3")
                    .remove()
                )
      )
   )
   //Logging Important information
  .log("Group", row.group)
  .log("StoryNum", row.StoryNum)
  .log("StoryName", row.StoryName)
  .log("OrderInStory", row.OrderInStory)
  .log("ItemType", row.ItemType)
  .log("Sentence", row.Sentence)
  .log("Question", row.Question)
  .log("Correct", row.Correct)
  .log("Wrong", row.Wrong)
  .log("QNum", row.QNum)
  .log("RT_response", getVar("RT_response"))
);

//Set up questions about demographics and collect data for them
PennController("demographic",
    newHtml("demographics", "demographic.html")
        .settings.log() //Collects basic demo Data
        .print()
    ,
    newButton("continue", "Continue")
        .settings.css("font-size", "larger")
        .print()
        .wait(
            getHtml("demographics").test.complete()
                .failure( getHtml("demographics").warn() )
        )
);
    
