<template>
    <section class="callback-section">
        <Callback />
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.callback-section {
    position: relative;
    padding: 40px 0;
    background-color: $COLOR_GREEN;

        @media screen and (max-width:$MEDIA_DESKTOP_TO_TABLET) {
            padding: 30px 0;
        }

    &::after, &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 21.5px;
        z-index: 1;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &::after {
        bottom: -10px;
        background-image: url('../../static/img/icons/waveAfter.svg');
    }
    &::before {
        top: -10px;
        background-image: url('../../static/img/icons/waveBefore.svg');
    }
}
</style>
