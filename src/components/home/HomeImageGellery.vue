<template>
    <div class="gelleryMain-section">
        <div class="row">
            <div class="col-md-4">
                <div class="image-gellery">
                    <img src="@/assets/gallery1.jpeg" width="100%"/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="image-gellery">
                    <img src="@/assets/gellery2.jpg" width="100%"/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="image-gellery">
                    <img src="@/assets/gellery3.jpg" width="100%"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="gelleryHeading">
                    <h2>PAST PROJECTS</h2>
                </div>

            </div>
            <div class="col-md-4">
                <div class="gelleryHeading">
                    <h2>CURRENT PROJECTS</h2>
                </div>

            </div>
            <div class="col-md-4">
                <div class="gelleryHeading">
                    <h2>UPCOMING PROJECTS</h2>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeImageGellery"
    }
</script>

<style scoped>
.image-gellery img{
    margin-right: 12px;
}
.gelleryMain-section{
   background-color: #1E3853;
    padding: 30px  0px;
}
.gelleryHeading{
    padding: 15px 15px;
}
.gelleryHeading h2{
        color:#fff;
    text-align: center;
    }

</style>