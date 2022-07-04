<template>
  <div class="row">
    <div class="col-md-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Ciudad origen</option>
        <option v-for="city in citiesList.data" :key="city.id">
          {{ city?.name }}
        </option>
      </select>
    </div>
    <div class="col-md-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Ciudad destino</option>
        <option v-for="city in citiesList.data" :key="city.id">
          {{ city?.name }}
        </option>
      </select>
    </div>
    <div class="col-md-3">
      <input
        type="date"
        id="start"
        name="trip-start"
        class="form-control"
      />
    </div>
    <div class="col-md-3">
      <input
        type="date"
        id="start"
        name="trip-start"
        class="form-control"
      />
    </div>
  </div>
  <div class="row mt-2">
    <div class="col col-md-4 d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-success">Buscar</button>
    </div>
  </div>
</template>

<script>
import LaravelVuePagination from "laravel-vue-pagination";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Pagination: LaravelVuePagination,
  },
  name: "Search",
  methods: {
    ...mapActions(["fetchCities"]),
  },
  computed: mapGetters(["citiesList"]),
  created() {
    this.fetchCities(1);
  },
};
</script>

<style>
</style>