<template>
    <div class=" items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div class="relative">
                <div class="mb-10">
                    <div class="">
                        <h1 class="my-2 text-white font-bold text-2xl">
                            {{ error?.message || error?.statusText }}
                        </h1>
                        <p class="my-2 text-white">Sorry about that! Please visit our hompage to get where you need to
                            go.</p>
                    </div>
                </div>
                <div>
                    <img src="../assets/img/404.png" />
                </div>
            </div>
        </div>
        <div>
            <img src="../assets/img/group.png" />
        </div>
    </div>
</template>
<script>
export default {
    props: ['error'],
    setup(props) {
        // setup() receives props as the first argument.
        console.log(props.error)
    }
}
</script>