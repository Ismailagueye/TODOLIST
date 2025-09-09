

<script>
export default {
  data() {
    return {
      taches: [],
    };
  },
  mounted() {
    this.taches = JSON.parse(localStorage.getItem("taches")) || [];
  },
};
</script>


<template>
  <div>
    <h2>Liste des tâches</h2>
    <ul>
      <li v-for="(tache, index) in taches" :key="index">{{ tache }}</li>
    </ul>
  </div>
</template>


