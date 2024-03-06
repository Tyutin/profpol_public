<template>
  <div class="service">
    <div class="anchor" :id="service.id" />
    <h2 class="service__title">{{service.title}}</h2>

    <div class="service__banner"  :class="{'service__banner-reversed' : service.reversed}">
      <img loading="lazy" :src="`/img/services/${service.bannerImage}`" :alt="service.title" class="service__image">
      <div class="service__banner-info">
        <p v-for="text in service.bannerText" :key="text" class="service__banner-text">{{text}}</p>
      </div>
    </div>

    <div v-if="service.additionalText" class="container service__additional-text-list">
      <p v-for="text in service.additionalText" :key="text" class="service__additional-text">
        {{text}}
      </p>
    </div>

    <div class="service__collapse-list">
      <div v-if="service.price" class="service__collapse-item">
        <button
          @click="priceIsOpen = !priceIsOpen"
          class="service__collapse-toggle"
        >
          Цены
        </button>
        <Collapse
          :is-open="priceIsOpen"
        >
          <div v-if="service.price" class="service__price-wrapper">
            <table class="service__price" border="0">
              <tbody>
                <tr v-for="item in service.price" :key="item.name">
                  <td border="0">{{item.name}}</td>
                  <td border="0">{{item.value}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapse>
      </div>
      <div v-if="service.cases" class="service__collapse-item">
        <button
          @click="sliderIsOpen = !sliderIsOpen"
          class="service__collapse-toggle"
        >
          Примеры работ
        </button>
        <Collapse
          :is-open="sliderIsOpen"
        >
          <div class="service__cases">
            <VueSlickCarousel v-if="service.cases" v-bind="settings" class="slick-works">
              <div v-for="(image, imageIndex) in service.cases" :key="imageIndex">
                <div class="slick-works__image-wrap" @click="sliderIndex = imageIndex">
                  <img loading="lazy" :src="image.src" :alt="image.alt" class="slick-works__image">
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </Collapse>
      </div>
      <div class="service__collapse-item">
        <button class="service__collapse-toggle" @click="openServicePopup">Заказать</button>
      </div>
    </div>


    <CoolLightBox
      v-if="service.cases"
      :items="service.cases"
      :index="sliderIndex"
      @close="sliderIndex = null"
    />
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import '@/assets/styles/slick2.scss'
import VueSlickCarousel from 'vue-slick-carousel'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
  export default {
    components: {
      VueSlickCarousel,
      CoolLightBox,
    },
    props: {
      service: {
        type: Object,
        default () {
          return {}
        }
      },
      id: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      imagepath: {
        type: String,
        default: ''
      },
      bannerText: {
        type: Array,
        default () {
          return []
        }
      },
      reversed: {
        type: Boolean,
        default: false
      },
      additionalText: {
        type: Array,
        default () {
          return []
        }
      },
      price: {
        type: Array,
        default () {
          return []
        }
      },
      cases: {
        type: Array,
        default () {
          return []
        }
      },
    },
    data () {
      return {
        sliderIndex: null,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 3,
          infinite: true,
          swipe: false,
          autoplay: false,
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                swipe: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                autoplay: false,
                slidesToShow: 1,
                swipe: true
              }
            }
          ]
        },
        sliderIsOpen: false,
        priceIsOpen: false,
      }
    },
    methods: {
      openServicePopup () {
        this.$store.commit('popups/openServicePopup', {title: 'Заявка на услугу', subtitle: this.service.title})
      },
    }
  }
</script>

<style lang="scss" scoped>
.service {
  padding: 0 10px;
  @media (max-width: 1023px) {
    padding: 0 20px;
  }
  @media (max-width: 767px) {
    padding: 0 10px;
  }

  &__collapse-list {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0;
    border-radius: 6px;
    box-shadow: 6px 6px 14px 2px rgba(34, 60, 80, 0.4);
  }

  &__collapse-item {
    position: relative;

    &::after {
      position: absolute;
      bottom: 0;
      left: 3px;
      height: 1px;
      width: calc(100% - 6px);
      background-color: #05140630;
      content: "";
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }
  }

  &__collapse-toggle {
    width: 100%;
    padding: 8px;
    background: none;
    border-radius: 0px;
    border: none;
    text-align-last: left;
    font-size: 22px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      color: $COLOR_ORANGE;
    }
  }

  &__cases {
    padding: 20px 0 110px;
  }

  &__price-wrapper {
    display: flex;
    justify-content: center;
    margin: 20px 10px;

    @media (max-width: 500px) {
      overflow: scroll;
      justify-content: start;
    }
  }

  &__price {
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #ffacac;
    border-radius: 6px;
    min-width: 500px;
    & td {
      padding: 8px;
    }

    & tr:nth-child(odd) {
      background-color: #8080802e;
    }

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__banner {
    display: flex;
    margin: 40px 0 20px;
    border-radius: 10px;
    overflow: hidden;

    &-reversed {
      flex-direction: row-reverse;
    }

    @media (max-width: 1023px) {
      flex-direction: column;
      margin: 40px auto;
    }
  }

  &__image {
    display: block;
    width: 50%;
    object-fit: cover;

    @media (max-width: 1023px) {
      max-height: 500px;
      width: 100%;
    }
  }

  &__banner-info {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 50%;
    padding: 24px;
    background-color: $COLOR_GREEN;
    color: $WHITE;

    @media (max-width: 1023px) {
      width: 100%;
    }

    @media (max-width: 767px) {
      padding: 12px;
    }
  }

  &__banner-text {
    font-size: 16px;
  }

  &__additional-text-list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    @media (min-width: 1025px) {
      padding: 0;
    }
  }
}
</style>
