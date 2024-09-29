// Homepage lab-test-banner-carousel-1
$('.top-labTest-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// Trending Near You
$('.treandingMed-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        },
        1440:{
            items:5
        }
    }
})

$('.medicine-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// Frequently Booked Lab Tests
$('.frequently-booked-lab-test-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.lab-test-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.lab-card-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
// Frequently Booked Lab Tests
$('.article-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// Frequently Booked Lab Tests
$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.offer-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// Showing error messages

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap popover
    var popoverTrigger = new bootstrap.Popover(document.getElementById('LoginInputNumber'));

    // Handle button click
    document.getElementById('getOtpBtn').addEventListener('click', function () {
        var inputNumber = document.getElementById('LoginInputNumber').value;

        // Check if the number is less than 10 digits
        if (inputNumber.length < 10) {
            // Show the popover with error message
            popoverTrigger.show();
        } else {
            // Hide the popover in case the number is valid
            popoverTrigger.hide();

            // Proceed with the next steps like showing OTP modal, etc.
            var otpModal = new bootstrap.Modal(document.getElementById('OTPModal'));
            otpModal.show();
        }
    });

    // Hide popover on input change
    document.getElementById('LoginInputNumber').addEventListener('input', function () {
        popoverTrigger.hide();
    });
});