$(function() {
    'use strict';
    //===== Preloader
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    
    //===== CountDown
    $('#countdown').each(function() {
        var $this = $(this),
            // Set the target date to January 9, 2025, 8:00 PM
            finalDate = new Date('2025/01/09 20:00:00').getTime();
        
        $this.countdown(finalDate, function(event) {
            $this.html(
                event.strftime(
                    '<div class="count-box days"><span class="time-count">%-D</span><span class="labels">Days<span></div>' +
                    '<div class="count-box hour"><span class="time-count">%-H</span> :<span class="labels">Hours</span></div>' +
                    '<div class="count-box minutes"><span class="time-count">%-M</span> :<span class="labels">Mins</span></div>' +
                    '<div class="count-box cdown second"><span class="time-count">%-S</span><span class="labels">Secs</span></div>'
                )
            );
        });
    });
    
    $('#countdownTwo').each(function() {
        var $this = $(this),
            // Set the target date to January 9, 2025, 8:00 PM
            finalDate = new Date('2025/01/09 20:00:00').getTime();
        
        $this.countdown(finalDate, function(event) {
            $this.html(
                event.strftime(
                    '<ul>' +
                    '<li><span class="time-counter">%-D</span><span class="label">Days</span></li>' +
                    '<li class="semicolon">:</li>' +
                    '<li><span class="time-counter">%-H</span><span class="label">Hours</span></li>' +
                    '<li class="semicolon hide-phone">:</li>' +
                    '<li><span class="time-counter">%-M</span><span class="label">Minutes</span></li>' +
                    '<li class="semicolon">:</li>' +
                    '<li><span class="time-counter">%-S</span><span class="label">Second</span></li>' +
                    '</ul>'
                )
            );
        });
    });
    
    $('#countdownThree').each(function() {
        var $this = $(this),
            // Set the target date to January 9, 2025, 8:00 PM
            finalDate = new Date('2025/01/09 20:00:00').getTime();
        
        $this.countdown(finalDate, function(event) {
            $this.html(
                event.strftime(
                    '<span>%-D</span> Days, <span>%-H</span>h, <span>%-M</span>m, <span>%-S</span>s'
                )
            );
        });
    });
    
    $('#dayscountdown').each(function() {
        var $this = $(this),
            // Set the target date to January 9, 2025, 8:00 PM
            finalDate = new Date('2025/01/09 20:00:00').getTime();
        
        $this.countdown(finalDate, function(event) {
            $this.html(
                event.strftime('<h2>%-D</h2><span>Days to Launch</span>')
            );
        });
    });
    
    //===== Active slick slider
    var imageslider = $('.image-slider');
    imageslider.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
    
    //===== smooth scroll
    $('#nextSection').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            
            // Store hash
            var hash = this.hash;
            
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
    
    //===== Contact Maps
    function contactMap() {
        var mapOptions = {
            zoom: 11,
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            center: new google.maps.LatLng(40.67, -73.94), // New York
            styles: [
                // Custom styles
            ]
        };
        var mapElement = document.getElementById('contact-map');
        var map = new google.maps.Map(mapElement, mapOptions);
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.67, -73.94),
            map: map,
            title: 'Cryptox'
        });
    }
    
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', contactMap);
    }
});