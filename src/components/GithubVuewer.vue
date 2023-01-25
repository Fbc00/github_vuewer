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
          <GitHubContents :dados="repo" v-if="tab === 0" />
          <GithubIssues :repo="repo" v-else/>
        </keep-alive>
      </v-tab-item>
    </v-tabs-items>

  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubIssues from './GithubIssues';
  import GitHubContents from './GitHubContents.vue';
  export default {
    components: {
    GithubRepo,
    GithubIssues,
    GitHubContents
},
    data: () => ({
      tab: null,
      repo: null,
      features: ['Arquivos', 'Issues']
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
     },
  }
</script>
