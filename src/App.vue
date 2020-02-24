<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar class="bg-light-green">
        <q-btn flat :label="`Finko Anton`" to="/" />
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab to="/experience" :label="`Work Experience`" />
          <q-route-tab to="/education" :label="`Education`" />
          <q-route-tab to="/skills" :label="`Skills`" />
          <q-route-tab to="/other" :label="`Other`" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data() {
    return {
      tab: null,
    };
  },

  methods: {
    onHomePageClick() {
      this.tab = null;
    },
  },
};
</script>

<style>
</style>
