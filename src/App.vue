<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TicketsComponent from "./components/TicketsComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="container mt-2">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="card-body">
            <SearchComponent />
            <TicketsComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>