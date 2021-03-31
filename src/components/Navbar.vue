<template>
    <div>
        <nav class="navbar navbar-expand-lg  menu-custom-design">
            <div class="container">
                <router-link :to="{name:'Home'}" class="navbar-brand" href="#">
                    <img src="@/assets/logo.png" width="250" height="100"/>
                </router-link>
                    <ul class="navbar-nav ">
                        <li class="nav-item active">
                            <router-link :to="{name:'Home' }" class="nav-link text-color" >Home <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'About' }" class="nav-link text-color" >About</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link :to="{name:'Project' }" class="nav-link text-color "  id="navbarDropdown">
                                Project
                            </router-link>

                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'Carrer' }" class="nav-link text-color"  >Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'Contact' }" class="nav-link text-color" >Contact</router-link>
                        </li>
                    </ul>

                </div>


        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
 .menu-custom-design{
    background-color: #1E3954;
     padding:10px;
}
 .text-color{
      color: #fff!important;
     font-size: 20px!important;
     text-transform: uppercase;
     padding: 10px 10px;

    }
</style>