<template>
    <div class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="footerText">
                        <h4>WHY STARKWOOD ?</h4>
                                    <p>Our utmost dedication and attention to                            detail to create strikingly recognisable landmarks                         to bring you not only the comfort, functionality and                           ambiance but also an address to be proud of. Landmarks                        that speak boldly.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footerText">
                        <h2>Quick Link</h2>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Upcoming Project</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">About us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footerText">
                        <h2>Our Office</h2>
                        <p>19 (New) Tejgoan Industrial Area, Dhaka-1208 , Bangladesh
                            Phone: +88- 02–8878119-20</p>

                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footerText">
                        <h2>Office Hours</h2>
                        <p>Saturday : 10:30 AM – 4:00PM

                            Sunday – Thursday :  10:00AM –  6:30PM

                            Govt. Holiday: Off</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped>

    .footer-area{
    background-color: #1E3954;
    padding: 80px 0;

}
    h1,h2,h3,h4,p{
        color:#fff;
        text-transform: uppercase;
    }
    .footerText ul{
    list-style: none;
    }
    .footerText ul li a{
        color:#fff;
        font-size: 22px;
    }


</style>