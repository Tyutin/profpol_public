<template>
    <section class="banner">
        <div class="container banner_container">
            <div class="banner_info">
                <h1 class="banner__title">Укладка напольных покрытий <nobr>в Ижевске</nobr></h1>
                <p class="banner__subtitle">Строим уют и комфорт с нуля: профессиональная укладка полов всех видов. От современных дизайнов до классики - мы создаем прочные и стильные основы вашего пространства.</p>
                <CallbackButton/>
            </div>
            <img loading="lazy" class="banner__image" src="img/Banner.jpg" alt="Мужчина укладывает ламинат">
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.banner {
    margin: 30px auto 60px;
    background-color: $COLOR_ORANGE;
    border-radius: 15px;
    overflow: hidden;

        @media (max-width: 1019px) {
            max-width: 760px;
            padding-bottom: 30px;
        }

    &_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 30px;
        padding: 0;

        @media (max-width: 1019px) {
            flex-direction: column-reverse;
        }
    }

    &_info {
        padding-left: 20px;

        @media (max-width: 1019px) {
            max-width: 570px;
            padding: 0 20px;
        }

        & p {
            margin-bottom: 40px;
        }
    }

    &__title{
        margin-bottom: 30px;
        color: $WHITE;

        @media (max-width: $MEDIA_DESKTOP_TO_TABLET) {
            max-width: unset;
            margin-bottom: 24px;
            text-align: center;
        }

        @media (max-width: $MEDIA_TABLET_TO_MOBILE) {
            font-size: 36px;
            margin-bottom: 24px;
        }

        @media screen and (max-width: 319px) {
            max-height: 131px;
        }
    }

    &__subtitle {
      color: $WHITE;
    }

    &__image {
        height: 382px;
        width: 55%;

        @media (max-width: 1019px) {
            margin-bottom: 30px;
            height: 320px;
            width: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: 570px) {
            width: 100%;
            height: calc((100vw - 20px)* 0.55);
        }
    }
}
</style>
