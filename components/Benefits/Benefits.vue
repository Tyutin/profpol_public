<template>
    <section class="benefits">
        <div class="container">
            <ul class="benefits__list">
                <li class="benefits__element">
                    <p class="benefits__heading">Чистая</p>
                    <p class="benefits__text">и аккуратная работа</p>
                </li>
                <li class="benefits__element">
                    <p class="benefits__heading">Гарантия</p>
                    <p class="benefits__text"> на работу</p>
                </li>
                <li class="benefits__element">
                    <p class="benefits__heading">Разумные сроки</p>
                    <p class="benefits__text">производства работ</p>
                </li>
            </ul>
            <img loading="lazy" src="img/man.webp" alt="Рабочий показывает лайк" class="benefits__man">
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.benefits {
    height: 390px;
    padding-bottom: 17px;
    background-image: url('../../static/img/benefits_bg.png');
    background-position: center;
    display: flex;
    align-items: flex-end;

    & .container {
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media screen and (max-width:767px) {
            height: 100%;
        }
    }

    &__list {
        width: 530px;
        display: flex;
        flex-wrap: wrap;
        margin-left: 20px;
        padding: 45px 0;

        @media screen and (min-width:769px) {
            margin-left: 40px;
        }

        @media screen and (max-width:767px) {
            width: 100%;
            margin-left: 0;
            padding: 50px 20px;
            align-items: baseline;
        }

        @media screen and (max-width:525px) {
            padding: 60px 0 40px;
        }
    }

    &__element {
        width: 50%;
        color: #fff;
    }

    &__heading {
        font-size: 30px;
        font-weight: bold;
    }

    &__text {
        @media screen and (max-width: 470px) {
            font-size: 16px;
            padding-right: 15px;
        }
    }

    &__man {
        display: none;
        @media screen and (min-width:768px) {
            display: block;
            height: 279px;
        }
    }
}
</style>
