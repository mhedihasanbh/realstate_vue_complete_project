<template>
    <div class="testimonial-area">
        <div class="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="image_area">
                            <img src="@/assets/t3.png"/>
                        </div>

                        <div class="carousel-caption">
                            <h5>First slide label</h5>
                            <p>We were a bit skeptical at first but the very first meeting with their team got us assured that our project will be in the right hands. Their level of professionalism and commitment to work was exceptional given how the project had to be completed in bit parts needing both ample time and flexibility. It’s truly admirable how well and matured they managed the project and we wish them all the best in their future ventures.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="image_area">
                            <img src="@/assets/t1.png"/>
                        </div>

                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="image_area">
                            <img src="@/assets/t2.png"/>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TestimonialSlider"
    }
</script>

<style scoped>
.testimonial-area{
    background-color: #18191B;
    padding: 50px 0px;
    position: relative;

}
    .carousel-control-prev,carousel-control-next{
        background: transparent;
        color:red;
    }
    .image_area{
        margin: auto;
    }
</style>