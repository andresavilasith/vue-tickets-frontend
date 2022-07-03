<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Precio</th>
        <th scope="col">Aerolinea</th>
        <th scope="col">Numero Escalas</th>
        <th scope="col">Duracion de vuelo</th>
      </tr>
    </thead>
    <tbody class="table-group-divider" v-for="ticket in ticketsList.data" :key="ticket.id">
      <tr>
        <td>{{ticket?.price}}</td>
        <td>{{ticket?.airline?.name}}</td>
        <td>{{ticket?.route?.scales}}</td>
        <td>{{ticket?.route?.hours}} horas</td>
      </tr>
    </tbody>
  </table>
  <Pagination :data="ticketsList" @pagination-change-page="fetchTickets" />
</template>

<script>
import LaravelVuePagination from 'laravel-vue-pagination';
import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    components: {
        'Pagination': LaravelVuePagination
    },
    name: 'Tickets',
    methods: {
      ...mapActions(["fetchTickets"])
    },
    computed: mapGetters(["ticketsList"]),
    created() {
      this.fetchTickets(1)
    }
  }
</script>

<style>
</style>