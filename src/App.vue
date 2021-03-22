<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">     -->
    <h3 align="center" v-show="loading">Carregando...</h3>
    <div class="slider-container" v-show="!loading">
      <card-slider
        v-for="(unit) in unitsToShow"
        :key="unit.id"
        :title="unit.name"
        :unique-id="unit.uniqueId"
        :items-list="itemsList"
      />
    </div>
  </div>
</template>

<script>
import CardSlider from './components/card-slider'

export default {
  components: {
    CardSlider
  },
  data () {
    return {
      itemsList: [
        { id: 1, title: 'Primeiro item', description: 'Primeiro item' },
        { id: 2, title: 'Segundo item', description: 'Segundo item' },
        { id: 3, title: 'Terceiro item', description: 'Terceiro item' },
        { id: 4, title: 'Quarto item', description: 'Quarto item' },
        { id: 5, title: 'Quinto item', description: 'Quinto item' }
      ],
      windowHeight: 0,
      listUnits: [
        { id: 1, name: 'Matriz - Hub Conexa', uniqueId: 'matriz-hubconexa' },
        { id: 2, name: 'Filial - My Farm', uniqueId: 'filial-myfarm' },
        { id: 3, name: 'Filial - Assinei', uniqueId: 'filial-assieni' },
        { id: 4, name: 'Filial - e-Gov', uniqueId: 'filial-egov' },
        { id: 5, name: 'Support - Stack.UI', uniqueId: 'support-stackui' },
        { id: 6, name: 'Support - Aliare', uniqueId: 'support-aliare' },
        { id: 7, name: 'Projeto Teste', uniqueId: 'projeto-teste' },
        { id: 8, name: 'Novo ERP', uniqueId: 'novo-erp' },
        { id: 9, name: 'Componentes Figma', uniqueId: 'componentes-figma' }
      ],
      unitsToShow: [],
      rootEl: '',
      loading: false
    }    
  },
  created () {
   this.unitsToShow = this.listUnits.slice(0, 3);
  },
  mounted () {
    this.rootEl = document.querySelector('.slider-container')
    this.rootEl.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    this.rootEl.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      console.log('root el - scrollTop', this.rootEl.scrollTop)
      console.log('root el - clientHeight', this.rootEl.clientHeight)
      console.log('root el - scrollHeight', this.rootEl.scrollHeight)
      
      if(this.rootEl.scrollTop + this.rootEl.clientHeight >= this.rootEl.scrollHeight) {
        // console.log('root el', this.rootEl)
        console.log('------- loaded -------')
        console.log('units to show', this.unitsToShow.length)
        console.log('units list total', this.listUnits.length)
        console.log('---------------------')

        if (this.unitsToShow.length < this.listUnits.length) {
          this.loading = true
          /* substituir o setTimeout pela chamada na API */
          setTimeout(() => {
            this.unitsToShow = this.listUnits.slice(0, this.unitsToShow.length + 3)
            this.loading = false
          }, 400)
        }
      }  
    },
    getMoreItens () {
      const newItems = [
        { id: 6, title: 'Sexto item', description: 'Sexto item' },
        { id: 7, title: 'Sétimo item', description: 'Sétimo item' },
        { id: 8, title: 'Oitavo item', description: 'Oitavo item' },
        { id: 9, title: 'Nono item', description: 'Nono item' },
        { id: 10, title: 'Décimo item', description: 'Décimo item' }
      ]
      this.itemsList = [...this.itemsList, ...newItems]
    },    
  }
}
</script>

<style>
body {
  background: #f5f5f5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

/* é importante setar um height fixo e overflow como auto para funcionar o scroll infinito */
.slider-container {
  width: 100%;
  height: 90vh;
  overflow: auto;
  padding: 6px;
  display: flex;
  flex-direction: column;
}
</style>
