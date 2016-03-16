$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  if(url.indexOf('/registration?bid=') > -1) { 
    var user_id = $('#lapi-user-id').val();

    var pageTitleMap = {
        "LEAGUE" : "league",
        "CAMP" : "camp",
        "CLUBTEAM" : "club",
        "EVENT" : "event",
        "TOURNAMENT" : "tournament"
    }

    if (user_id) {
        var headers = {
            'accept': 'application/json',
            'x-api-key': multiDiscountObject.apiKey
        };

        console.log("-------------------HEADERS-----------------------------");
        console.log(headers);

        var site_name = $('#lapi-site-name').val();
        var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;


        $.ajax(site_url + '/users/' + user_id + '/registrations', {
            dataType: 'json',
            cache:false,
            headers: headers
        }).done(function (data) {

            var regCount = 0;
            var filterByProgramType = multiDiscountObject.programTypes.length == 0; // if programTypes array is empty, apply to all program types
            var programTypeInArray = false;
            var filterByProgramIds = multiDiscountObject.programIds.length == 0; // if programIds array is empty, apply to all programs
            var programIdInArray = false;

            for (var i = 0, len = data.length; i < len; i++) {
                var reg = data[i];
                console.log(data);

                console.log("----------------------multiDiscountObject--------------------------");
                console.log(multiDiscountObject);

                programTypeInArray = $.inArray(reg.programType, multiDiscountObject.programTypes) > -1; // if programTypes array is NOT empty, check if reg.programType is in programTypes array
                programIdInArray = $.inArray(reg.programId, multiDiscountObject.programIds) > -1; // if programIds array is NOT empty, check if reg.programId is contained in programIds array

                if (reg.programState != 'COMPLETED' && reg.userType == multiDiscountObject.userType) {  
                    if( (filterByProgramType || programTypeInArray) && (filterByProgramIds || programIdInArray) ) {
                        regCount++;
                    }
                }
            }

            var pageTitle = $('[data-id="reg-terms"]').text();  // desktop
            if($('#is-mobile').length) {
                // mobile
                pageTitle = $('#up-front-payment-details').text();
            }      

            if ( (filterByProgramType || programTypeInArray) && (filterByProgramIds || programIdInArray) ) {
                console.log("ayyyy we in there boys");
            //if (pageTitle.toLowerCase().indexOf("league") > -1) {
                var discountObject = checkIfRegistrationHasDiscount(regCount, multiDiscountObject.discounts);
                if(discountObject != null) {
                    console.log("WHOOP WHOOP!");
                    var newText = 'Congratulations. You qualify for our <strong>multi  ';
                    if(multiDiscountObject.userType == 'CHILD') {
                        newText = newText + 'player sibling';
                    } else {
                        newText = newText + 'team';
                    }
                    newText = newText + ' discount</strong>.  You\'ll <strong>save ' + discountObject.discountText + '</strong> on this registration.';
                    $('[data-id="discount-text"]').after('<div class="participant-headsup">' + newText + '</span>');
                    $("#discountCode").attr('readonly', true);
                    $('#discountCode').val(discountObject.discountCode);
                    $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
                    $('[data-id="discount-text"]').hide(); // hide headline, input and microcopy
                }
            }
            }).fail(function (data) {
                // I guess we don't really care if it fails
                //console.log('failure querying registrations');
            });

        } // close if User_id

    } // close if registration page
});

var checkIfRegistrationHasDiscount = function(regCount, discounts) {
    discounts.sort(function(a,b) {return  b.numberOfRegistrations - a.numberOfRegistrations;});
    console.log(discounts);
    var regNumber = regCount + 1; //regCount starts counting at 0, add 1 to be equal to match what numberOfRegistrations would expect
    for( var i = 0; i < discounts.length; i++ ) {   
        var thisDiscount = discounts[i];
        console.log("Comparing " + regNumber + " with " + thisDiscount.numberOfRegistrations);
        if(regNumber == thisDiscount.numberOfRegistrations || (regNumber > thisDiscount.numberOfRegistrations && thisDiscount.includeMore)) {
            return thisDiscount;
            break;
        }
    }

    return null;
}