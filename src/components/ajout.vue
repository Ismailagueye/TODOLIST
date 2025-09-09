<template>
  <div>
    <h2>Ajouter une tâche</h2>
    <form @submit.prevent="ajouterTache">
      <input
        v-model="nouvelleTache"
        type="text"
        placeholder="Ajouter une tâche..."
      />
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nouvelleTache: "",
    };
  },
  methods: {
    ajouterTache() {
      if (this.nouvelleTache.trim() !== "") {

        let taches = JSON.parse(localStorage.getItem("taches")) || [];
        taches.push(this.nouvelleTache);
        localStorage.setItem("taches", JSON.stringify(taches));

        this.nouvelleTache = "";
        this.$router.push("/ajout");
      }
    },
  },
};
</script>



<style scoped>

form {
  display: flex;
  gap: 10px;
  margin: 20px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 8px 12px;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #0078d7;
}


</style>
