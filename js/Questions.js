$(document).ready(function() {
    var questionTimeout = null;
    var countdownInterval = null;
    var timeRemaining = 20;

    function startTimer($el) {
        clearTimeout(questionTimeout);
        clearInterval(countdownInterval);
        timeRemaining = 20; 
        // $('#countdown').text(timeRemaining); 
        $el.find('#countdown').text(timeRemaining);
        

        countdownInterval = setInterval(function() {
            timeRemaining--;
            // $('#countdown').text(timeRemaining);
            $el.find('#countdown').text(timeRemaining);
            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                goNext($el);
            }
        }, 1000); 

        questionTimeout = setTimeout(function() {
            goNext($el);
        }, 20000); 
    }

    function goNext($el) {
        clearTimeout(questionTimeout);
        clearInterval(countdownInterval);
        var $next = $el.next('.quiz-container');
        $el.fadeOut(500, function() {
            if ($next.length > 0) {
                $next.fadeIn(500, function() {
                    startTimer($next);
                });
            } else {
                afterLastQuestion();
            }
        });
    }

    function afterLastQuestion() {
        alert("Last question complete");
       
    }

    var $superContainer = $("#superContainer").on('click', '.next', function() {
        goNext($(this).closest('.quiz-container'));
        return false;
    });

   
    startTimer($superContainer.find('.quiz-container.active'));
    
    $('#start').on('click', function() {
        $(this).hide(); 
        $('.quiz-container').first().fadeIn(500); 
        startTimer($('.quiz-container').first()); 
    });

});
