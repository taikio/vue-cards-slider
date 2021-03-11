<template>
  <div class="glider-contain multiple">
    <h1>Cards Slider Component</h1>

    <button class="glider-prev">
      <i class="el-icon-arrow-left" />
    </button>

    <div class="glider" ref="glider">
      <figure v-for="(i, index) in 10" :key="index">
        <el-card class="box-card">
          <div slot="header">
            <span>Card name - {{ i.toString() }}</span>            
          </div>
          <div>
            This is the card body
          </div>
        </el-card>
      </figure>      
    </div>

    <button class="glider-next">
      <i class="el-icon-arrow-right" />
    </button>

    <div id="dots" class="glider-dots" />
  </div>
</template>


<script>
import Glider from 'glider-js'
import 'glider-js/glider.min.css';

export default {
  name: 'card-slider',
  data: () => ({
    $glider: null
  }),
  mounted () {
    console.log('created', Glider)
    // new window.Glider(document.querySelector('.glider'))
    this.$glider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      // dots: '#dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          breakpoint: 1750,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  },
  beforeDestroy() {
    if (this.$glider) {
      this.$glider.destroy()
    }
  }
}
</script>

<style scoped>
  .glider {
    width: 95%;
  }

  .glider-prev, .glider-next {
    top: 50%;
    background-color: #007de3;
    color: #fff;
    font-size: 24px;
    padding: 8px;
    border: none;
    border-radius: 50%;
  }

  .glider-prev, .glider-next i {    
    font-weight: 600;
  }

  .glider-prev.disabled, .glider-next.disabled {
    background-color: #dddedf;
    color: #94969a;
    opacity: 1;
  }

  .glider-prev {
    left: 6px;
  }

  .glider-next {
    right: 6px;
  }

  figure {
    background: white !important;
    display: block;
    margin: 1.5em;
    /* padding: .7em; */
  }

  figure blockquote {
    padding: .5em;
    font-size: 1.3em;
    font-style: italic;
    text-align: center;
  }

  figure figcaption {
    text-align: center;
    margin-bottom: 1em;
  }

  .box-card {
    height: 184px;
  }
</style>