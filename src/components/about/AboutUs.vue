<template>
    <div class="about-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="about-heading">
                        <h2 class="text-center">About us</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="aboutUsImage">
                        <img src="@/assets/aboutus.jpg" width="557" height="336"/>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="aboutusText">
                        <p>Starkwood is a name that clearly distinguishes itself as a sharp thinking team of passionate individuals with a pure intention and a wide range of skill sets to challenge the conventional ideas. A well-organized team that strives for perfection in every little detail. With internationally recognised architects, designers and engineers in the team, known for their contributions in real estate developments and constructions, we strive to create landmarks that will shine bright on the horizon and change the cityscapes across the country.</p>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
    .about-heading h2{
        padding: 30px 0px;
        text-transform: uppercase;
    }
.about-us{
    padding:40px 0px;
}
    .aboutusText{
        margin-left: 80px;
    }
</style>