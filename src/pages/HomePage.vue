<template>
  <div class="HomePage container-fluid">
    <div class="row">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="getApod()">
          click me!
        </button>

        <div class="card">
          <div class="card-body">
            <h5 class="mt-0">{{ state.apod.title }}</h5>
            <p>{{ state.apod.date }}</p>
            <p>{{ state.apod.explanation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from "vue";
import { nasaService } from "../services/NasaService";
import { AppState } from "../AppState";
export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      apod: computed(() => AppState.results),
    });
    return {
      state,
      getApod() {
        nasaService.getNasa();
      },
    };
  },
  components: {},
};
</script>


<style lang="scss" scoped>
</style>