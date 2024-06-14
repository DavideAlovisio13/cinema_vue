<template>
    <footer>
        <div class="first">
            <img src="https://cdn.dribbble.com/users/1413861/screenshots/4562913/animated-c.gif" alt="placeholder">
            <h2 class="text-center m-auto">Immergiti nell'universo cinematografico di Boolean.</h2>

        </div>
        <div class="second ">
            <div class="left">
                <div class="p-3 me-5">
                    <h5>Contact</h5>
                    <ul class="list-unstyled">
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                    </ul>
                </div>
                <div class="p-3 mx-5">
                    <h5>About</h5>
                    <ul class="list-unstyled">
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                    </ul>
                </div>
                <div class="p-3 mx-5">
                    <h5>Shop</h5>
                    <ul class="list-unstyled">
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                        <li><a class="text-decoration-none" href="">Link</a></li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <h5>Title</h5>
                <p>indirizzi e dati di contatto</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style lang="scss" scoped>

    footer {
        height: 600px;
   

        .first {
           color: gold;
            height: 300px;
            display: flex;
            background-color: rgba(33, 32, 32, 0.998);
            padding: 15px;
        }


        .second {
            
            height: 300px;
            display: flex;
            background-color: rgb(1, 1, 43);
            color: white;

            .left {
                width: 50%;
                display: flex;
                h5{
                    text-align: center;
                }

                ul {


                    li {
                        padding: 5px 20px;

                        &:hover {
                            background-color: rgba(188, 188, 188, 0.059);
                            cursor: pointer;
                        }
                        &:hover a {
                            color: rgb(255, 0, 0);
                        }

                        a {
                            color: rgb(255, 255, 255);



                        }
                    }
                }

            }

            .right {
                width: 50%;
                padding: 15px;
            }


        }
    }
</style>