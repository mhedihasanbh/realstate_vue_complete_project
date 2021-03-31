<template>
    <div class="project-area">

            <div class="row">
                <div class="col-md-12">

                </div>
            </div>
            <div class="row">
                <div class="col-md-3 ">
                    <div class="projectImage">
                        <img src="@/assets/project1.jpeg"/>

                    </div>
                </div>
                <div class="col-md-3">
                    <div class="projectImage">
                        <img src="@/assets/project2.jpg"/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="projectImage">
                        <img src="@/assets/project3.jpeg"/>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="projectImage">
                        <img src="@/assets/project4.jpg"/>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    export default {
        name: "ProjectSection"
    }
</script>

<style scoped>

    .projectImage img{
       width:100%;
        height: 400px;


    }
    .projectImage{

    }
    .project-area{
        padding: 50px 0px;
    }

</style>