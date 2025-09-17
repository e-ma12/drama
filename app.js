//message list to input preset scripted messages
const messages = [
    'Here is your email. Date: 28/12/1999. Subject: ⚠️ Immediate Digital Preparedness Directive — Y2K Contingency Protocol. Dear Employee Group 10. It has come to my direct executive awareness that the Year 2000 (Y2K) temporal threshold is approaching at incredible speed. Upon arrival, our machines may stop working entirely. The issue is a date-formatting anomaly where computers are unable to process the year “2000” as anything but 1900 — thus breaking our technology and potentially destroying the world. All staff must stop all non-essential digital activities until further notice. The only digital activities an employee should be conducting is rewriting every line of code in our system so that years are processed as four-digit numbers instead of two-digit units. We are not merely defending data — we are safeguarding the very digital soul of our enterprise. Your rapid, compliant action will ensure our survival into the next millennium. Best regards, Mr J Plunge. Employee Group 10 Coordinator | Digital Learning Innovator | Chief Executive Officer ',

    'Here it is. Episode 1: The Glitch. The year is 1999. Mr Joe Plunge, head of a major tech company, sends an email informing the employees of his company that if they do not act soon, all their machines will crash due to the Y2K glitch. The employees gather and try to figure out what the Y2K glitch is. They become reliant on Google Search for all their information.', 
    
    'Done. Episode 2: The Email. The employees start to use Google for their work. Employee 3 sends over a file and Mr Plunge figures out that it is Google generated. The employee is called to the office and accuses Mr Plunge of using Google in his email. Plunge says that he has "never seen an email in his life."', 
    
    "A word that would suit this talk is 'consequences'.", 
    
    'Request Completed. Episode 3: The Search Engine. Mr Plunge Google Searches a solution for the Google epidemic happening in the workplace. Google crashes so he starts to break down. Meanwhile, the employees realise that Google does not work and Mr Plunge storms into the office in a rage.', 

    'Sorry, it is impossible.',

    'We cannot. process your request at this moment.',

    'We_ canNo  t proce_s y0-ur re  ues!t At th_s m0-meN    .',

    '   ',
    
    'ePiso  de 4:  Th   e Mic   owave. Mr Pl nge, n     Ow cr_zed   b.y th   e Y2$K An.d G-_gle hy.ste ria, vow. t &o riD  t. he w!rld oF ma.c hines aNd.  dEc_ides _- pu  ! rge   he_oFfce of_. mIc row_ves an_ to . sTer   s. THe em_.loyees tRy  to G_Ogle h w!    to .caLm M_r PlU_nge do.n, B    t a _ter it -rashes, tHe  y !dec-de to _Calm _im -!own By tHe_ seLves-', 
    
    'pis $oPe 5: T5e Ap0c_aIyp se. -ffst_g    ee, mr P_-un_e Is- $-_- -.2 32. 12%#.', 

    'Of course. Dear Employee Group 10, I would like to congratulate our department for fixing the Y2K crisis. Under my guidance, you all successfully rewrote all the lines of code and for that I am very proud of you all. I would like to also thank myself for my involvement in this matter, as I was a crucial part of this operation. Because of the newfound absence of the Y2K glitch, I am glad to say that all technology will be back in its rightful place, yet the usage of Google will be strictly limited in the workplace. Still, under every circumstance, Google must NOT be used in any work at all, or there will be consequences. I thank you for your participation, but I must take credit for this entire endeavour. Kind regards, Mr J. Plunge. Is this email to your satisfaction?',

    "Thank you."
    ]

//get the input
const input = document.getElementById('input')

//counting for message reveal
var count = 0

//play next message when enter key is pressed
//get input from input, clear that input, print preset message
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        var box_content = document.getElementById('input');
        var value = box_content.value;
        if (value.includes('episode')){
            getValue()
            clearValue()
            printEpisodeMessage()
            count ++  
        }
        else {
            getValue()
            clearValue()
            printMessage()
            count ++  
        }
        Window.scrollTo(0, window.innerHeight)
    }
    //enter fullscreen when esc is pressed in input box
    else if(event.key === "Escape"){
        var element = document.documentElement;
        element.requestFullscreen();
    }
})

//get input from input box
function getValue() {
    var box_content = document.getElementById('input');
    var value = box_content.value;
    text.innerHTML += "<p class='from_me'>" + value + "</p>";
    text.scrollIntoView(false);
}

//clear input from input box
function clearValue() {
    var box_content = document.getElementById('input');
    box_content.value = '';
}

//print the preset message
function printMessage() {
    //setting variable as the correlating message
    const message = messages[count];
    //splitting message for blinking animation
    const splitText = message.split("");
    for(let i=0; i < splitText.length; i++){
        text.innerHTML += "<span class='from_bot" + [count] + "'>" + splitText[i] + "</span>"
    }

    //for the timing of the blinking (set number higher for slower)
    let char = 0;
    let timer = setInterval(onTick, 15);

    //finding the spans with the right class and triggering them to fade in
    function onTick() {
        const span = document.querySelectorAll(`span.from_bot${[count-1]}`);
        span[char].classList.add('fade');
        char ++

        span.scrollIntoView(false);

        //stopping the process when it's done
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    //finishing the process
    function complete() {
        clearInterval(timer);
        timer = null;
    }
}

//print the preset episodic message
function printEpisodeMessage() {
    //setting variable as the correlating message
    const message = messages[count];
    //splitting message for blinking animation
    const splitText = message.split("");
    for(let i=0; i < splitText.length; i++){
        text.innerHTML += "<span class='from_bot" + [count] + "'>" + splitText[i] + "</span>"
    }

    //for the timing of the blinking (set number higher for slower)
    let char = 0;
    let timer = setInterval(onTick, 15);

    //finding the spans with the right class and triggering them to fade in
    function onTick() {
        const span = document.querySelectorAll(`span.from_bot${[count-1]}`);
        span[char].classList.add('fade');
        span[char].classList.add('episode');
        char ++

        //stopping the process when it's done
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    //finishing the process
    function complete() {
        clearInterval(timer);
        timer = null;
    }
}
