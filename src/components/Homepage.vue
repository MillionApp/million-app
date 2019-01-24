<template>
  <div>
    <section>
    <v-parallax
      dark v-bind:src="require('../assets/dark-planning.jpg')"
      >
      <v-layout text-xs-center column>
        <v-flex xs12>
          <div>
            <v-layout align-center>
              <v-img
                :src="require('../assets/lighten-logo.svg')"
                class="my-3"
                contain
                height="128"
                ></v-img>
            </v-layout>
          </div>
        </v-flex>

        <v-flex xs12 md4>
          <v-layout column align-center>
            <div class="resultContainer">
              <h1 class="display-2 font-weight-bold mb-3">
                Este é o Million
              </h1>
              <p class="subheading font-weight-regular">
              {{text}}
              <br><v-btn rounded color="primary" to="/users/12/dashboard">Visitar painel</v-btn>
              </p>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 md4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Experimente gratuitamente o melhor aplicativo de educação financeira que você já viu</h2>
            <span class="subheading">A forma mais fácil e eficaz de você tomar o controle da realização dos seus sonhos</span>
          </div>
        </v-flex>

        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>

              <v-flex xs12 md4>
                <v-card flat class="elevation-0 transparent">

                  <v-card-text class="text-xs-center">
                    <v-icon x-large color="secondary">center_focus_weak</v-icon>
                  </v-card-text>

                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Onde queremos chegar?</div>
                  </v-card-title>

                  <v-card-text class="text-xs-center">
                    O propósito do Million é ajudar você a se educar na gestão de suas finanças e a se planejar,
                    te auxiliando para que alcance cada uma de suas metas.
                    E como faremos isso? De maneira prática, antes de tudo dando visibilidade de suas receitas e despesas.
                    De maneira organizada você verá para onde vai seu dinheiro a cada novo lançamento, e aí começa a educação financeira.
                    Depois disso, estabeleça seus objetivos e deixe que o Million te ajude a alcançá-los.
                  </v-card-text>

                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card flat class="elevation-0 transparent">

                  <v-card-text class="text-xs-center">
                    <v-icon x-large color="secondary">my_location</v-icon>
                  </v-card-text>

                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">A que pé estamos?</div>
                  </v-card-title>

                  <v-card-text class="text-xs-center">
                    O Million irá guardar suas receitas e despesas e exibir sua saúde financeira de diferentes maneiras,
                    auxiliando você a usar bem o seu dinheiro. Estamos trabalhando constantemente em nosso painel,
                    afim de tornar esta a melhor experiência financeira de sua vida.
                    Com o tempo o Million aprenderá seus hábitos financeiros e te ajudará a tomar decisões mais conscientes a
                    respeito de seus gastos, sugerindo conteúdos relacionados ao seu momento financeiro.
                  </v-card-text>

                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card flat class="elevation-0 transparent">

                  <v-card-text class="text-xs-center">
                    <v-icon x-large color="secondary">sentiment_very_satisfied</v-icon>
                  </v-card-text>

                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Bora ficar ricos?</div>
                  </v-card-title>

                  <v-card-text class="text-xs-center">
                    Nós da equipe Million acreditamos que a educação financeira é a ferramenta que nos protege de inúmeros
                    imprevistos do dia a dia, e nos torna capazes de realizar muitos de nossos sonhos.
                    Não nos cansamos de inovar no propósito de tornar o Brasil um país socialmente igualitário,
                    e para isso contamos com você. Venha aprender mais sobre finanças e tomar o controle da realização de seus
                    sonhos. Faça parte desta geração nova!
                  </v-card-text>

                </v-card>
              </v-flex>

            </v-layout>
          </v-container>
        </v-flex>

      </v-layout>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Um aplicativo de educação financeira simples e eficiente! Com ele, você tem uma visão clara e completa de suas receitas e despesas, podendo planejar-se melhor para o futuro e realizar seus sonhos.' }
  }
}
</script>

<style scoped>
.resultContainer{
  max-width: 550px;
  text-align: 'center';
}
</style>
