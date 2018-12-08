$(document).ready(() => {



        



        //success alert
        let success = (msg) => {
            $('.alert-success').html(msg).fadeIn();
            $('.alert-danger').hide();

            setTimeout(() => {
                $('.alert-success').fadeOut();
            }, 5000);
        }



        //danger alert
        let failed = (msg) => {
            $('.alert-danger').html(msg).fadeIn();
            $('.alert-success').hide();

            setTimeout(() => {
                $('.alert-danger').fadeOut();
            }, 5000);
        }



        //verify email
        let isValidEmailAddress = (emailAddress) => {
            var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
            return pattern.test(emailAddress);
        };




        //submit login form
        $('.loginForm').submit((e) => {

            //prevent submmission
            e.preventDefault();

            //get form infos
            let email = $('.loginEmail').val();
            let password = $('.loginPassword').val();

            //check all fields are filled
            if(email != "" && password != "") {

                if(isValidEmailAddress(email)) {

                    //submit

                }else {
                    failed("Please provide a valid email address");
                }

            }else {
                failed("Please fill all fields");
            }


        });






        //submit register form
        $('.registerForm').submit((e) => {

            //prevent submmission
            e.preventDefault();

            //get form infos
            let email = $('.registerEmail').val();
            let password = $('.registerPassword').val();
            let rpassword = $('.repeatPassword').val();

            //check all fields are filled
            if(email != "" && password != "" && rpassword != "") {

                if(isValidEmailAddress(email)) {

                    if(password == rpassword) {

                        //submit form

                    }else {
                        failed("Passwords don't match");
                    }

                }else {
                    failed("Please provide a valid email address");
                }

            }else {
                failed("Please fill all fields");
            }


        });





        //submit username
        $('.username').change(() => {
            let username = $('.username').val();

            if(username != "" && username != "NewUser") {

                //update username

            }else {

            }
        });




        
        //submit message
        $('.sendMsg').keydown(() => {
            

            if (event.keyCode == 13) {
                let message = $(".sendMsg").val();

                if(message != "") {

                    //submit message

                }else {

                }

            }else {

            }

        });





});