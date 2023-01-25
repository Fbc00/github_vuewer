<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <GithubIssues :repo="repo"/>
    <GitHubContents :dados="repo"/>
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
      repo: null,
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
     },
  }
</script>
