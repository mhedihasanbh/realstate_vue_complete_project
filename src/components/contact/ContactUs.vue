<template>
    <div class="contact-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contactusHeader">
                        <h2 class="text-center">Contact Us</h2>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="contact-usText">
                        <h3>Stay in Touch</h3>
                        <p><span>Address:</span></p>
                        <p>123, New Lenox, Chicago, IL 60606</p>
                        <p><span>Phone:</span></p>
                        <p>0(800) 123-45-67-89
                            0(800) 123-4567-80</p>
                        <p><span>E-mail:</span></p>
                        <p>example@website.com
                            example@website.com</p>


                    </div>

                </div>
                <div class="col-md-6">
                    <div class="contactFrom">
                        <h3>Contact Us Right Now</h3>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs"
    }
</script>

<style scoped>
.contact-area{
    padding: 50px 0px;
    background-color: #F3F3F3;
}
    .contactusHeader h2{
        padding-bottom: 23px;
        text-transform: uppercase;
    }
</style>