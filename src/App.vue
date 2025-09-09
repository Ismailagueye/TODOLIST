<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <div class="Grand">
    <h1>Gestionnaire de tâches</h1>
  </div>
   <nav>
    <ul class="lien">
      <li><RouterLink to="TaskForm">Formulaire d'ajout</RouterLink></li>
      <li><RouterLink to="/">Liste des taches</RouterLink></li>
      <li><RouterLink to="TasKItem">Tache individuelle</RouterLink></li>
    </ul>
  </nav>

  <main class="main-c">
    <RouterView />
  </main>
</template>


<style scoped>

.grand {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 0px 0 12px 12px;

}

.navbar {
  background: #f8f9fa;
  padding: 10px 0;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.lien {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.lien li {
  font-size: 1.1rem;
}

.lien a {
  text-decoration: none;
  color: #333;
  padding: 8px 14px;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
}

.lien a:hover {
  background: #4facfe;
  color: white;
}

.router-link-active {
  background: #00c6ff;
  color: white !important;
}

.main-c {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}


</style>

