<script setup>

</script>

<template>
    <form @submit.prevent="ajouterTache">
    <input
      type="text"
      placeholder="Ajouter une tâche..."
    />
    <button type="submit">Ajouter</button>
  </form>
</template>


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
