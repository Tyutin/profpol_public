<template>
    <header class="header">
        <div class="container">
            <div class="header__top">
                <nuxt-link to="/" class="header__logo">
                    <img loading="lazy" src="img/logo.svg" alt="Логотип ПрофПол">
                </nuxt-link>
                <div class="header__contacts">
                    <span class="header__location">Ижевск</span>
                    <ul class="header__phone-list">
                        <!-- <li class="header__phone"><a href="tel:+73412000000">8 (3412) 00-00-00</a></li> -->
                        <li class="header__phone"><a href="tel:+79226803890">8 (922) 680-38-90</a></li>
                    </ul>
                </div>
                <button class="header__toggle" :class="{'header__toggle-active' : isMenuOpen}" @click="toggleMenuOpen"/>
            </div>
            <nav class="header__nav" :class="{'header__nav-active' : isMenuOpen}" @click="closeMenu">
                <ul>
                    <li>
                        <nuxt-link to="#kvarcvinil">Кварцвинил</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#laminat">Ламинат</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#kovrolin">Ковролин</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#linoleum">Линолеум</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#parket">Паркет</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#plintus">Плинтус</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#podgotovka-pola">Подготовка пола</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#prodaja-napolnyh-pokrytiy">Продажа покрытий</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#kak_my_rabotaem">как мы работаем</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#contacts">контакты</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isMenuOpen: false
            }
        },
        methods: {
            toggleMenuOpen() {
                this.isMenuOpen = !this.isMenuOpen
            },
            closeMenu() {
                this.isMenuOpen = false
            }
        },
    }
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #fff;

  @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
    // overflow: hidden;
  }

  & .container {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
  }

  &__toggle {
    position: relative;
    display: none;
    border: unset;
    width: 40px;
    height: 34px;
    background-color: #fff;
    border-top: 4px solid $COLOR_ORANGE;
    border-bottom: 4px solid $COLOR_ORANGE;
    transition: 0.3s;

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
      width: 36px;
      height: 28px;
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: calc(50% - 2px);
      left: 0;
      width: 100%;
      height: 4px;
      background-color: $COLOR_ORANGE;
      transition: all 0.3s;
    }

    &-active {
      border-color: transparent;

      &::after {
        transform: rotate(45deg);
      }

      &::before {
        transform: rotate(-45deg);
      }
    }

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
      display: block;
    }
  }

  &__nav {
    font-size: 20px;
    font-family: "Bebas", sans-serif;
    text-transform: uppercase;

    @media screen and (max-width: $MEDIA_DESKTOP_TO_TABLET) {
      font-size: 16px;
    }

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
      position: absolute;
      right: 0;
      top: -400%;
      width: 100%;
      padding: 10px;
      background-color: #fff;
      font-size: 24px;
      transition: top 0.3s ease;
      max-height: calc(100vh - 90px);
      overflow: scroll;

      &-active {
        top: 100%;
      }
    }

    & ul {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
        flex-direction: column;
        align-items: center;
      }
    }

    & a {
      display: block;
      padding-bottom: 14px;
      transition: color 0.2s ease;

      &:hover {
        color: $COLOR_ORANGE;

        @media screen and (min-width: $MEDIA_BIG_MOBILE_TO_TABLET) {
          padding-bottom: 12px;
          border-bottom: 2px solid $COLOR_ORANGE;
        }
      }
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
      align-items: center;
      background-color: #fff;
      z-index: 1;
    }
  }

  &__logo {
    height: 70px;

    & > img {
      height: 70px;
    }

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
      height: 50px;

      & > img {
        height: 50px;
      }
    }
  }

  &__contacts {
    display: flex;
    align-items: center;
    font-family: "Bebas", sans-serif;
    font-weight: bold;
    color: $COLOR_ORANGE;

    @media screen and (max-width: $MEDIA_TABLET_TO_BIG_MOBILE) {
      display: none;
    }
  }

  &__location {
    position: relative;
    display: block;
    font-size: 22px;
    margin-right: 60px;

    &::before {
      position: absolute;
      content: "";
      width: 13px;
      height: 18px;
      background-image: url("../../static/img/icons/icon_location_orange.svg");
      background-size: cover;
      left: -20px;
      background-repeat: no-repeat;
    }
  }

  &__phone-list {
    position: relative;
    font-size: 30px;

    &::before {
      position: absolute;
      content: "";
      width: 13px;
      height: 18px;
      background-image: url("../../static/img/icons/icon_phone_orange.svg");
      background-size: contain;
      top: 4px;
      left: -20px;
      background-repeat: no-repeat;
    }
  }
}
</style>
