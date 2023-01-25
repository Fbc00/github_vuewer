<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <v-tabs v-model="tab">
      <v-tab v-for="(feature, i) in features" :key="i">
        {{ feature }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(feature, i) in features" :key="i">
        <keep-alive>
          <GitHubContents :dados="repo" v-if="tab === 0" @showpopup="showpopup"/>
          <GithubIssues :repo="repo" v-else/>
        </keep-alive>
      </v-tab-item>
    </v-tabs-items>
    <v-dialog v-model="dialog" class="popup"
        max-width="700"  > 
      <PopupText
      :popupvalue="popupvalue" />
    </v-dialog>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubIssues from './GithubIssues';
  import GitHubContents from './GitHubContents.vue';
  import PopupText from './PopupText.vue';
  export default {
    components: {
    GithubRepo,
    GithubIssues,
    GitHubContents,
    PopupText

},
    data: () => ({
      tab: null,
      repo: null,
      features: ['Arquivos', 'Issues'],
      dialog: false,
      popupvalue: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      },
      async showpopup(value){
        this.popupvalue = await fetch(value).then(r => r.text())
        this.dialog = true
      }
     },
     
  }
</script>
